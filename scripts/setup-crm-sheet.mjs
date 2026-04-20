// Sets up the Google Sheet CRM used by the agentic system.
//
// Env required:
//   FRS_PROSPECTS_SHEET_ID      — target spreadsheet id
//   FRS_GOOGLE_CREDENTIALS_B64  — base64-encoded service account JSON
//
// The service account must have Editor access on the target spreadsheet.
//
// Run:   node scripts/setup-crm-sheet.mjs

import crypto from "node:crypto";

const SHEET_ID = process.env.FRS_PROSPECTS_SHEET_ID;
const CREDS_B64 = process.env.FRS_GOOGLE_CREDENTIALS_B64;

if (!SHEET_ID) throw new Error("FRS_PROSPECTS_SHEET_ID is not set");
if (!CREDS_B64) throw new Error("FRS_GOOGLE_CREDENTIALS_B64 is not set");

function loadCreds() {
  const decoded = Buffer.from(CREDS_B64, "base64").toString("utf8");
  let creds;
  try {
    creds = JSON.parse(decoded);
  } catch (e) {
    throw new Error(
      `FRS_GOOGLE_CREDENTIALS_B64 did not decode to valid JSON (${e.message}). ` +
        `The env var may be truncated. Re-provide the full base64 of the service account key.`,
    );
  }
  if (!creds.client_email || !creds.private_key) {
    throw new Error("Decoded credentials missing client_email or private_key");
  }
  return creds;
}

function base64url(input) {
  return Buffer.from(input).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function getAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };
  const toSign = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(toSign);
  const sig = signer.sign(creds.private_key);
  const jwt = `${toSign}.${base64url(sig)}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`OAuth token exchange failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function sheetsApi(token, path, init = {}) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    throw new Error(`Sheets API ${path} → ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

// ----- CRM schema -----

const BRAND_RGB = { red: 0.04, green: 0.09, blue: 0.18 };
const ACCENT_RGB = { red: 0.35, green: 0.42, blue: 1.0 };
const MUTED_RGB = { red: 0.94, green: 0.96, blue: 1.0 };

const TABS = [
  {
    name: "Prospects",
    purpose: "Primary ICP lead list. One row per company.",
    headers: [
      "Created",
      "Company",
      "Website",
      "ARR Band",
      "Industry / Vertical",
      "HQ / Region",
      "Headcount",
      "Fit Score (1-5)",
      "Primary Contact",
      "Title",
      "Email",
      "LinkedIn",
      "Source",
      "Stage",
      "Owner",
      "Last Touch",
      "Next Action",
      "Next Action Date",
      "Notes",
    ],
    frozenCols: 2,
    widths: { 1: 110, 2: 190, 3: 220, 4: 130, 5: 170, 6: 130, 7: 100, 8: 120, 9: 170, 10: 160, 11: 220, 12: 220, 13: 140, 14: 140, 15: 120, 16: 110, 17: 220, 18: 130, 19: 320 },
  },
  {
    name: "Pipeline",
    purpose: "Active deals moving toward signature.",
    headers: [
      "Company",
      "Primary Contact",
      "Engagement Type",
      "Stage",
      "Probability %",
      "Est. Value (USD)",
      "Weighted Value",
      "Target Close",
      "Source",
      "Owner",
      "Last Touch",
      "Next Step",
      "Notes",
    ],
    frozenCols: 1,
    widths: { 1: 190, 2: 170, 3: 180, 4: 160, 5: 120, 6: 140, 7: 140, 8: 130, 9: 140, 10: 120, 11: 110, 12: 240, 13: 320 },
  },
  {
    name: "Engagements",
    purpose: "Signed clients — delivery and revenue tracking.",
    headers: [
      "Client",
      "Engagement Type",
      "Start Date",
      "Target End Date",
      "Actual End Date",
      "Status",
      "Deliverable 01 — Workflow & Revenue Audit",
      "Deliverable 02 — Insight Synthesis",
      "Deliverable 03 — Data Readiness & Moat",
      "Deliverable 04 — AI Growth & Agentic Blueprint",
      "Contract Value (USD)",
      "Invoiced",
      "Collected",
      "Lead Owner",
      "Delivery Owner",
      "Notes",
    ],
    frozenCols: 1,
    widths: { 1: 190, 2: 180, 3: 120, 4: 130, 5: 130, 6: 130, 7: 260, 8: 220, 9: 240, 10: 280, 11: 150, 12: 120, 13: 120, 14: 130, 15: 140, 16: 320 },
  },
  {
    name: "Activity Log",
    purpose: "Every touchpoint (outbound, inbound, meeting).",
    headers: [
      "Date",
      "Company",
      "Contact",
      "Channel",
      "Direction",
      "Owner",
      "Summary",
      "Outcome",
      "Next Step",
      "Next Step Date",
      "Linked Stage",
    ],
    frozenCols: 2,
    widths: { 1: 110, 2: 190, 3: 170, 4: 120, 5: 110, 6: 120, 7: 360, 8: 180, 9: 260, 10: 130, 11: 140 },
  },
  {
    name: "Config",
    purpose: "Dropdown vocabularies and reference lists.",
    headers: ["Stage (Prospects)", "Stage (Pipeline)", "Status (Engagements)", "Channel", "Direction", "Source", "ARR Band", "Engagement Type"],
    frozenCols: 0,
    widths: { 1: 180, 2: 180, 3: 180, 4: 140, 5: 140, 6: 180, 7: 160, 8: 220 },
  },
];

const CONFIG_ROWS = [
  // Each row: [prospectStage, pipelineStage, engagementStatus, channel, direction, source, arrBand, engagementType]
  ["New",          "Qualified",       "Not Started",       "LinkedIn", "Outbound", "LinkedIn outreach",    "<$500K",      "AI Growth & Agentic Blueprint (8-12w)"],
  ["Contacted",    "Discovery",       "Intake",            "Email",    "Inbound",  "Referral",             "$500K–$1M",   "Workflow & Revenue Audit (single)"],
  ["Responded",    "Proposal Sent",   "Discovery",         "Call",     "",         "Website",              "$1M–$3M",     "Data Readiness Sprint"],
  ["Qualified",    "Verbal Yes",      "Research",          "Meeting",  "",         "Conference",           "$3M–$5M",     "Agent-Readiness Workshop"],
  ["Disqualified", "Contract Out",    "Analysis",          "DM",       "",         "Warm intro",           "$5M–$10M",    "Retainer / Follow-on"],
  ["Nurture",      "Won",             "Review",            "SMS",      "",         "Content / SEO",        ">$10M",       ""],
  ["",             "Lost",            "Delivered",         "Other",    "",         "Cold email",           "",            ""],
  ["",             "On Hold",         "On Hold",           "",         "",         "Podcast",              "",            ""],
  ["",             "",                "Lost",              "",         "",         "Other",                "",            ""],
];

function colLetter(n) {
  let s = "";
  while (n > 0) {
    const r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

function headerCellFormat() {
  return {
    backgroundColor: BRAND_RGB,
    horizontalAlignment: "LEFT",
    verticalAlignment: "MIDDLE",
    wrapStrategy: "CLIP",
    padding: { top: 6, bottom: 6, left: 8, right: 8 },
    textFormat: { foregroundColor: { red: 1, green: 1, blue: 1 }, fontFamily: "Inter", fontSize: 11, bold: true },
  };
}

function bandedRangeSpec(sheetId, numCols) {
  return {
    addBanding: {
      bandedRange: {
        range: { sheetId, startRowIndex: 0, startColumnIndex: 0, endColumnIndex: numCols },
        rowProperties: {
          headerColor: BRAND_RGB,
          firstBandColor: { red: 1, green: 1, blue: 1 },
          secondBandColor: MUTED_RGB,
        },
      },
    },
  };
}

const WORKBOOK_TITLE = "FRS Agentic CRM";

async function main() {
  const creds = loadCreds();
  console.log(`Using service account: ${creds.client_email}`);
  const token = await getAccessToken(creds);

  // 1. Read existing workbook to see which sheets exist
  const meta = await sheetsApi(token, "?fields=sheets.properties,spreadsheetId,properties.title");
  console.log(`Spreadsheet: "${meta.properties?.title ?? meta.spreadsheetId}"`);
  const existingByName = new Map();
  for (const s of meta.sheets ?? []) existingByName.set(s.properties.title, s.properties);

  // Rename the workbook if it's still the default.
  if (meta.properties?.title !== WORKBOOK_TITLE) {
    await sheetsApi(token, ":batchUpdate", {
      method: "POST",
      body: JSON.stringify({
        requests: [
          {
            updateSpreadsheetProperties: {
              properties: { title: WORKBOOK_TITLE },
              fields: "title",
            },
          },
        ],
      }),
    });
    console.log(`Renamed workbook to "${WORKBOOK_TITLE}".`);
  }

  // 2. Add any missing tabs
  const addRequests = [];
  for (const tab of TABS) {
    if (!existingByName.has(tab.name)) {
      addRequests.push({
        addSheet: {
          properties: {
            title: tab.name,
            gridProperties: { rowCount: 1000, columnCount: tab.headers.length, frozenRowCount: 1, frozenColumnCount: tab.frozenCols },
            tabColor: ACCENT_RGB,
          },
        },
      });
    }
  }
  if (addRequests.length) {
    const res = await sheetsApi(token, ":batchUpdate", { method: "POST", body: JSON.stringify({ requests: addRequests }) });
    for (const reply of res.replies ?? []) {
      if (reply.addSheet) existingByName.set(reply.addSheet.properties.title, reply.addSheet.properties);
    }
    console.log(`Created ${addRequests.length} tab(s): ${addRequests.map((r) => r.addSheet.properties.title).join(", ")}`);
  } else {
    console.log("All tabs already present.");
  }

  // 3. Write headers + widen columns + freeze + format
  const formatRequests = [];
  const valueUpdates = [];
  for (const tab of TABS) {
    const props = existingByName.get(tab.name);
    const sheetId = props.sheetId;
    const numCols = tab.headers.length;

    valueUpdates.push({
      range: `${tab.name}!A1:${colLetter(numCols)}1`,
      majorDimension: "ROWS",
      values: [tab.headers],
    });

    formatRequests.push({
      updateSheetProperties: {
        properties: {
          sheetId,
          gridProperties: { frozenRowCount: 1, frozenColumnCount: tab.frozenCols, rowCount: Math.max(1000, props.gridProperties?.rowCount ?? 1000), columnCount: Math.max(numCols, props.gridProperties?.columnCount ?? numCols) },
        },
        fields: "gridProperties.frozenRowCount,gridProperties.frozenColumnCount,gridProperties.rowCount,gridProperties.columnCount",
      },
    });

    formatRequests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: numCols },
        cell: { userEnteredFormat: headerCellFormat() },
        fields: "userEnteredFormat(backgroundColor,horizontalAlignment,verticalAlignment,wrapStrategy,padding,textFormat)",
      },
    });

    formatRequests.push({
      updateDimensionProperties: {
        range: { sheetId, dimension: "ROWS", startIndex: 0, endIndex: 1 },
        properties: { pixelSize: 36 },
        fields: "pixelSize",
      },
    });

    for (const [idx, width] of Object.entries(tab.widths)) {
      const i = Number(idx) - 1;
      formatRequests.push({
        updateDimensionProperties: {
          range: { sheetId, dimension: "COLUMNS", startIndex: i, endIndex: i + 1 },
          properties: { pixelSize: width },
          fields: "pixelSize",
        },
      });
    }

    formatRequests.push(bandedRangeSpec(sheetId, numCols));
  }

  // Write header values
  await sheetsApi(token, `/values:batchUpdate`, {
    method: "POST",
    body: JSON.stringify({ valueInputOption: "RAW", data: valueUpdates }),
  });
  console.log(`Wrote headers to ${valueUpdates.length} tab(s).`);

  // Apply format requests, tolerating already-banded ranges
  try {
    await sheetsApi(token, ":batchUpdate", { method: "POST", body: JSON.stringify({ requests: formatRequests }) });
    console.log(`Applied ${formatRequests.length} formatting request(s).`);
  } catch (e) {
    if (/already (has|exists|in use|contains)/i.test(String(e.message)) || String(e.message).includes("alternating background colors")) {
      const filtered = formatRequests.filter((r) => !r.addBanding);
      await sheetsApi(token, ":batchUpdate", { method: "POST", body: JSON.stringify({ requests: filtered }) });
      console.log(`Applied ${filtered.length} formatting request(s) (skipped existing bandings).`);
    } else {
      throw e;
    }
  }

  // 4. Seed Config tab if empty
  const configProps = existingByName.get("Config");
  const configRange = `Config!A2:${colLetter(CONFIG_ROWS[0].length)}${CONFIG_ROWS.length + 1}`;
  const existing = await sheetsApi(token, `/values/${encodeURIComponent(configRange)}`);
  const hasData = (existing.values ?? []).some((row) => row.some((c) => c));
  if (!hasData) {
    await sheetsApi(token, `/values/${encodeURIComponent(configRange)}?valueInputOption=RAW`, {
      method: "PUT",
      body: JSON.stringify({ range: configRange, majorDimension: "ROWS", values: CONFIG_ROWS }),
    });
    console.log("Seeded Config tab with default vocabularies.");
  } else {
    console.log("Config tab already has data — not overwriting.");
  }

  // 5. Data validation (dropdowns) for Prospects.Stage, Pipeline.Stage, Engagements.Status, Activity Log.Channel/Direction
  const prospectsId = existingByName.get("Prospects").sheetId;
  const pipelineId = existingByName.get("Pipeline").sheetId;
  const engagementsId = existingByName.get("Engagements").sheetId;
  const activityId = existingByName.get("Activity Log").sheetId;

  const dv = (sheetId, colIndex, configRange) => ({
    setDataValidation: {
      range: { sheetId, startRowIndex: 1, startColumnIndex: colIndex, endColumnIndex: colIndex + 1 },
      rule: {
        condition: { type: "ONE_OF_RANGE", values: [{ userEnteredValue: `=${configRange}` }] },
        strict: false,
        showCustomUi: true,
      },
    },
  });

  const validationRequests = [
    dv(prospectsId,  TABS[0].headers.indexOf("Stage"),        "Config!A2:A10"),
    dv(prospectsId,  TABS[0].headers.indexOf("Source"),       "Config!F2:F10"),
    dv(prospectsId,  TABS[0].headers.indexOf("ARR Band"),     "Config!G2:G10"),
    dv(pipelineId,   TABS[1].headers.indexOf("Stage"),        "Config!B2:B10"),
    dv(pipelineId,   TABS[1].headers.indexOf("Engagement Type"), "Config!H2:H10"),
    dv(pipelineId,   TABS[1].headers.indexOf("Source"),       "Config!F2:F10"),
    dv(engagementsId,TABS[2].headers.indexOf("Status"),       "Config!C2:C10"),
    dv(engagementsId,TABS[2].headers.indexOf("Engagement Type"), "Config!H2:H10"),
    dv(activityId,   TABS[3].headers.indexOf("Channel"),      "Config!D2:D10"),
    dv(activityId,   TABS[3].headers.indexOf("Direction"),    "Config!E2:E10"),
  ];
  await sheetsApi(token, ":batchUpdate", { method: "POST", body: JSON.stringify({ requests: validationRequests }) });
  console.log(`Applied ${validationRequests.length} data-validation rules.`);

  // 6. Pipeline weighted-value formula column (col G)
  const weightedCol = TABS[1].headers.indexOf("Weighted Value") + 1; // 1-indexed
  const probCol = colLetter(TABS[1].headers.indexOf("Probability %") + 1);
  const valCol = colLetter(TABS[1].headers.indexOf("Est. Value (USD)") + 1);
  const weightedFormula = Array.from({ length: 999 }, (_, i) => [
    `=IF(AND(ISNUMBER(${probCol}${i + 2}),ISNUMBER(${valCol}${i + 2})),${probCol}${i + 2}*${valCol}${i + 2}/100,"")`,
  ]);
  await sheetsApi(token, `/values/${encodeURIComponent(`Pipeline!${colLetter(weightedCol)}2:${colLetter(weightedCol)}1000`)}?valueInputOption=USER_ENTERED`, {
    method: "PUT",
    body: JSON.stringify({ majorDimension: "ROWS", values: weightedFormula }),
  });
  console.log("Installed Weighted Value formula in Pipeline.");

  // 7. Remove the default "Sheet1" if present and empty.
  const defaultSheet = [...existingByName.values()].find(
    (p) => p.title === "Sheet1" && !TABS.some((t) => t.name === "Sheet1"),
  );
  if (defaultSheet) {
    const check = await sheetsApi(token, `/values/${encodeURIComponent("Sheet1!A1:Z50")}`);
    const isEmpty = !(check.values ?? []).some((r) => r.some((c) => c));
    if (isEmpty) {
      await sheetsApi(token, ":batchUpdate", {
        method: "POST",
        body: JSON.stringify({ requests: [{ deleteSheet: { sheetId: defaultSheet.sheetId } }] }),
      });
      console.log(`Removed default empty "Sheet1".`);
    }
  }

  console.log(`\nDone. Sheet: https://docs.google.com/spreadsheets/d/${SHEET_ID}`);
}

main().catch((e) => {
  console.error("\n[setup-crm-sheet] FAILED:", e.message);
  process.exitCode = 1;
});
