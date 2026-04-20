#!/usr/bin/env python3
"""
FRS Google Sheets CLI — thin wrapper around the Sheets API for agents.

Usage:
  sheet.py read <tab> [col=val ...] [--limit N] [--json]
  sheet.py append <tab> <col=val> [<col=val> ...]
  sheet.py update <tab> --where <col>=<val> --set <col>=<val> [<col>=<val> ...]
  sheet.py upsert <tab> --key <col> <col=val> [<col=val> ...]
  sheet.py count <tab> [col=val ...]
  sheet.py tabs

Env:
  FRS_GOOGLE_CREDENTIALS   Path to service account JSON (required)
  FRS_PROSPECTS_SHEET_ID   Google Sheet ID (required)

Examples:
  sheet.py read prospects status=identified --limit 10
  sheet.py read posts pillar=ai-agent-thesis --limit 5 --json
  sheet.py append prospects company=Acme website=acme.com status=identified
  sheet.py update prospects --where company=Acme --set status=researched fit_score=4
  sheet.py upsert prospects --key company company=Acme website=acme.com status=identified
"""

import json
import os
import sys
from typing import Dict, List, Optional

try:
    from google.oauth2.service_account import Credentials
    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError
except ImportError:
    sys.stderr.write(
        "ERROR: google-api-python-client not installed. "
        "Run: pip install -r scripts/requirements.txt\n"
    )
    sys.exit(2)


SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]


def get_service():
    creds_path = os.environ.get("FRS_GOOGLE_CREDENTIALS")
    if not creds_path or not os.path.exists(creds_path):
        sys.stderr.write(
            f"ERROR: FRS_GOOGLE_CREDENTIALS not set or file missing: {creds_path}\n"
        )
        sys.exit(2)
    creds = Credentials.from_service_account_file(creds_path, scopes=SCOPES)
    return build("sheets", "v4", credentials=creds, cache_discovery=False)


def get_sheet_id():
    sid = os.environ.get("FRS_PROSPECTS_SHEET_ID")
    if not sid:
        sys.stderr.write("ERROR: FRS_PROSPECTS_SHEET_ID not set\n")
        sys.exit(2)
    return sid


def col_letter(n: int) -> str:
    s = ""
    while n > 0:
        n, r = divmod(n - 1, 26)
        s = chr(65 + r) + s
    return s


def fetch_tab(svc, sid: str, tab: str) -> List[List[str]]:
    try:
        resp = svc.spreadsheets().values().get(
            spreadsheetId=sid, range=tab
        ).execute()
    except HttpError as e:
        sys.stderr.write(f"ERROR: failed to read tab '{tab}': {e}\n")
        sys.exit(1)
    return resp.get("values", [])


def rows_to_dicts(values: List[List[str]]) -> (List[str], List[Dict[str, str]]):
    if not values:
        return [], []
    header = values[0]
    rows = []
    for row in values[1:]:
        padded = row + [""] * (len(header) - len(row))
        rows.append({header[i]: padded[i] for i in range(len(header))})
    return header, rows


def parse_kv_pairs(args: List[str]) -> Dict[str, str]:
    d = {}
    for a in args:
        if "=" not in a:
            sys.stderr.write(f"ERROR: expected col=val, got '{a}'\n")
            sys.exit(2)
        k, v = a.split("=", 1)
        d[k.strip()] = v
    return d


def match_filters(row: Dict[str, str], filters: Dict[str, str]) -> bool:
    for k, v in filters.items():
        if row.get(k, "") != v:
            return False
    return True


def cmd_read(argv: List[str]):
    if not argv:
        sys.stderr.write("ERROR: read requires <tab>\n")
        sys.exit(2)
    tab = argv[0]
    rest = argv[1:]
    limit = None
    as_json = False
    filters = []
    i = 0
    while i < len(rest):
        a = rest[i]
        if a == "--limit":
            limit = int(rest[i + 1])
            i += 2
        elif a == "--json":
            as_json = True
            i += 1
        else:
            filters.append(a)
            i += 1
    flt = parse_kv_pairs(filters)

    svc = get_service()
    values = fetch_tab(svc, get_sheet_id(), tab)
    header, dicts = rows_to_dicts(values)
    matched = [r for r in dicts if match_filters(r, flt)]
    if limit:
        matched = matched[:limit]

    if as_json:
        print(json.dumps(matched, ensure_ascii=False))
    else:
        if not header:
            return
        print("\t".join(header))
        for r in matched:
            print("\t".join(r.get(h, "") for h in header))


def cmd_count(argv: List[str]):
    if not argv:
        sys.stderr.write("ERROR: count requires <tab>\n")
        sys.exit(2)
    tab = argv[0]
    flt = parse_kv_pairs(argv[1:])
    svc = get_service()
    values = fetch_tab(svc, get_sheet_id(), tab)
    _, dicts = rows_to_dicts(values)
    print(sum(1 for r in dicts if match_filters(r, flt)))


def cmd_append(argv: List[str]):
    if not argv:
        sys.stderr.write("ERROR: append requires <tab>\n")
        sys.exit(2)
    tab = argv[0]
    data = parse_kv_pairs(argv[1:])
    svc = get_service()
    sid = get_sheet_id()
    values = fetch_tab(svc, sid, tab)
    if not values:
        sys.stderr.write(f"ERROR: tab '{tab}' has no header row\n")
        sys.exit(1)
    header = values[0]
    row = [data.get(h, "") for h in header]
    unknown = set(data.keys()) - set(header)
    if unknown:
        sys.stderr.write(
            f"ERROR: unknown columns for tab '{tab}': {sorted(unknown)}. "
            f"Valid: {header}\n"
        )
        sys.exit(2)
    try:
        svc.spreadsheets().values().append(
            spreadsheetId=sid,
            range=tab,
            valueInputOption="USER_ENTERED",
            insertDataOption="INSERT_ROWS",
            body={"values": [row]},
        ).execute()
    except HttpError as e:
        sys.stderr.write(f"ERROR: append failed: {e}\n")
        sys.exit(1)
    print(f"appended 1 row to {tab}")


def cmd_update(argv: List[str]):
    if not argv:
        sys.stderr.write("ERROR: update requires <tab>\n")
        sys.exit(2)
    tab = argv[0]
    where = {}
    updates = {}
    mode = None
    for a in argv[1:]:
        if a == "--where":
            mode = "where"
        elif a == "--set":
            mode = "set"
        elif mode == "where":
            k, v = a.split("=", 1)
            where[k] = v
        elif mode == "set":
            k, v = a.split("=", 1)
            updates[k] = v
        else:
            sys.stderr.write(f"ERROR: unexpected arg '{a}'\n")
            sys.exit(2)
    if not where or not updates:
        sys.stderr.write("ERROR: update needs both --where and --set\n")
        sys.exit(2)

    svc = get_service()
    sid = get_sheet_id()
    values = fetch_tab(svc, sid, tab)
    if not values:
        sys.stderr.write(f"ERROR: tab '{tab}' is empty\n")
        sys.exit(1)
    header = values[0]
    unknown = (set(where.keys()) | set(updates.keys())) - set(header)
    if unknown:
        sys.stderr.write(
            f"ERROR: unknown columns for tab '{tab}': {sorted(unknown)}\n"
        )
        sys.exit(2)

    batch = []
    count = 0
    for i, row in enumerate(values[1:], start=2):
        padded = row + [""] * (len(header) - len(row))
        rd = {header[j]: padded[j] for j in range(len(header))}
        if not match_filters(rd, where):
            continue
        count += 1
        for col, val in updates.items():
            ci = header.index(col)
            cell = f"{tab}!{col_letter(ci + 1)}{i}"
            batch.append({"range": cell, "values": [[val]]})

    if not batch:
        print("0 rows matched; no updates")
        return

    try:
        svc.spreadsheets().values().batchUpdate(
            spreadsheetId=sid,
            body={"valueInputOption": "USER_ENTERED", "data": batch},
        ).execute()
    except HttpError as e:
        sys.stderr.write(f"ERROR: batch update failed: {e}\n")
        sys.exit(1)
    print(f"updated {count} row(s) in {tab}")


def cmd_upsert(argv: List[str]):
    if not argv:
        sys.stderr.write("ERROR: upsert requires <tab>\n")
        sys.exit(2)
    tab = argv[0]
    key = None
    kv_args = []
    i = 1
    while i < len(argv):
        if argv[i] == "--key":
            key = argv[i + 1]
            i += 2
        else:
            kv_args.append(argv[i])
            i += 1
    if not key:
        sys.stderr.write("ERROR: upsert needs --key <col>\n")
        sys.exit(2)
    data = parse_kv_pairs(kv_args)
    if key not in data:
        sys.stderr.write(f"ERROR: key '{key}' must appear in col=val pairs\n")
        sys.exit(2)

    svc = get_service()
    sid = get_sheet_id()
    values = fetch_tab(svc, sid, tab)
    if not values:
        sys.stderr.write(f"ERROR: tab '{tab}' has no header row\n")
        sys.exit(1)
    header = values[0]
    key_val = data[key]

    for i, row in enumerate(values[1:], start=2):
        padded = row + [""] * (len(header) - len(row))
        rd = {header[j]: padded[j] for j in range(len(header))}
        if rd.get(key) == key_val:
            # Update the existing row.
            batch = []
            for col, val in data.items():
                ci = header.index(col)
                cell = f"{tab}!{col_letter(ci + 1)}{i}"
                batch.append({"range": cell, "values": [[val]]})
            svc.spreadsheets().values().batchUpdate(
                spreadsheetId=sid,
                body={"valueInputOption": "USER_ENTERED", "data": batch},
            ).execute()
            print(f"updated existing row in {tab} where {key}={key_val}")
            return

    # Not found; append.
    row = [data.get(h, "") for h in header]
    svc.spreadsheets().values().append(
        spreadsheetId=sid,
        range=tab,
        valueInputOption="USER_ENTERED",
        insertDataOption="INSERT_ROWS",
        body={"values": [row]},
    ).execute()
    print(f"appended new row to {tab} with {key}={key_val}")


def cmd_tabs(argv: List[str]):
    svc = get_service()
    sid = get_sheet_id()
    try:
        meta = svc.spreadsheets().get(spreadsheetId=sid).execute()
    except HttpError as e:
        sys.stderr.write(f"ERROR: failed to read sheet metadata: {e}\n")
        sys.exit(1)
    for s in meta.get("sheets", []):
        print(s["properties"]["title"])


COMMANDS = {
    "read": cmd_read,
    "append": cmd_append,
    "update": cmd_update,
    "upsert": cmd_upsert,
    "count": cmd_count,
    "tabs": cmd_tabs,
}


def main():
    if len(sys.argv) < 2 or sys.argv[1] in ("-h", "--help"):
        print(__doc__)
        sys.exit(0)
    cmd = sys.argv[1]
    if cmd not in COMMANDS:
        sys.stderr.write(
            f"ERROR: unknown command '{cmd}'. Valid: {list(COMMANDS)}\n"
        )
        sys.exit(2)
    COMMANDS[cmd](sys.argv[2:])


if __name__ == "__main__":
    main()
