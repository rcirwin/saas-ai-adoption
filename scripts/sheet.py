#!/usr/bin/env python3
"""
sheet.py — Local flat-file CRM for FRS prospect pipeline.

Simulates Google Sheets read/write for use in offline / CI environments.
Data is stored in agents/data/*.json relative to the repo root.

Usage:
  python3 scripts/sheet.py read config --json
  python3 scripts/sheet.py read prospects --json
  python3 scripts/sheet.py append prospects id=<slug> company=... [field=value ...]
"""

import sys
import json
import os
import pathlib
import datetime

REPO_ROOT = pathlib.Path(__file__).parent.parent
DATA_DIR = REPO_ROOT / "agents" / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

CONFIG_FILE = DATA_DIR / "config.json"
PROSPECTS_FILE = DATA_DIR / "prospects.json"


def _load(path: pathlib.Path, default):
    if path.exists():
        with open(path) as f:
            return json.load(f)
    return default


def _save(path: pathlib.Path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2)


def cmd_read(tab: str, flags: list):
    as_json = "--json" in flags
    if tab == "config":
        data = _load(CONFIG_FILE, {
            "icp_arr_min": 250000,
            "icp_arr_max": 10000000,
            "icp_employees_max": 100,
            "updated_at": "2026-04-20"
        })
        if as_json:
            print(json.dumps(data, indent=2))
        else:
            for k, v in data.items():
                print(f"{k}: {v}")
    elif tab == "prospects":
        data = _load(PROSPECTS_FILE, [])
        if as_json:
            print(json.dumps(data, indent=2))
        else:
            for row in data:
                print(row)
    else:
        print(f"ERROR: unknown tab '{tab}'", file=sys.stderr)
        sys.exit(1)


def cmd_append(tab: str, kv_args: list):
    if tab != "prospects":
        print(f"ERROR: append only supported for 'prospects' tab", file=sys.stderr)
        sys.exit(1)

    row = {}
    for kv in kv_args:
        if "=" in kv:
            k, v = kv.split("=", 1)
            row[k] = v

    if "id" not in row:
        print("ERROR: id= field is required", file=sys.stderr)
        sys.exit(1)

    prospects = _load(PROSPECTS_FILE, [])

    # Dedup check
    existing_ids = {p.get("id") for p in prospects}
    if row["id"] in existing_ids:
        print(f"SKIP: {row['id']} already exists in prospects", file=sys.stderr)
        sys.exit(0)

    # Set timestamps if not provided
    today = datetime.date.today().isoformat()
    row.setdefault("created_at", today)
    row.setdefault("updated_at", today)
    row.setdefault("status", "identified")

    prospects.append(row)
    _save(PROSPECTS_FILE, prospects)
    print(f"OK: appended {row['id']} to prospects ({len(prospects)} total)")


def main():
    args = sys.argv[1:]
    if len(args) < 2:
        print(__doc__)
        sys.exit(1)

    command = args[0]
    tab = args[1]
    rest = args[2:]

    if command == "read":
        cmd_read(tab, rest)
    elif command == "append":
        cmd_append(tab, rest)
    else:
        print(f"ERROR: unknown command '{command}'", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
