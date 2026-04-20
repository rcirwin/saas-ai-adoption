/**
 * FRS Sheet bootstrap — creates 6 tabs with correct headers.
 * Run once via Extensions → Apps Script. Safe to re-run (idempotent).
 *
 * Source of truth: agents/data/prospects-sheet-schema.md in the FRS repo.
 */

function setupFRSSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const tabs = {
    prospects: [
      'id', 'company', 'website', 'category', 'arr_estimate', 'employee_count',
      'source', 'contact_name', 'contact_role', 'contact_linkedin', 'contact_email',
      'ai_posture', 'fit_score', 'fit_notes', 'status', 'research_summary',
      'last_outreach_date', 'last_outreach_channel', 'follow_up_due', 'notes',
      'created_at', 'updated_at'
    ],
    outreach_log: [
      'log_id', 'prospect_id', 'date', 'channel', 'template_used', 'angle',
      'message_ref', 'personalization_notes', 'status', 'response_status',
      'response_date', 'response_sentiment', 'led_to_call'
    ],
    research_cache: [
      'prospect_id', 'researched_at', 'sources_checked', 'product_summary',
      'workflow_complexity', 'ai_features_observed', 'agent_readiness',
      'competitive_landscape', 'pain_signals', 'personalization_hooks',
      'fit_assessment', 'recommended_angle'
    ],
    config: ['key', 'value'],
    posts: [
      'id', 'date', 'pillar', 'angle', 'hook', 'length_tier', 'url',
      'impressions', 'reactions', 'comments', 'reposts', 'profile_clicks',
      'dms_received', 'calls_booked', 'notes'
    ],
    post_ideas: [
      'idea_id', 'created_at', 'pillar', 'angle', 'trigger', 'priority',
      'status', 'linear_issue', 'scheduled_date', 'notes'
    ]
  };

  Object.entries(tabs).forEach(([tabName, headers]) => {
    let sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      sheet = ss.insertSheet(tabName);
      Logger.log(`Created tab: ${tabName}`);
    } else {
      Logger.log(`Tab exists: ${tabName} — updating headers`);
    }

    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#f1f3f4')
      .setHorizontalAlignment('left');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  });

  const config = ss.getSheetByName('config');
  if (config.getLastRow() < 2) {
    config.getRange(2, 1, 5, 2).setValues([
      ['icp_arr_min', 500000],
      ['icp_arr_max', 5000000],
      ['outreach_daily_cap', 15],
      ['follow_up_cadence_days', 7],
      ['research_staleness_days', 90]
    ]);
    Logger.log('Seeded config tab with defaults');
  }

  const defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && defaultSheet.getLastRow() === 0) {
    ss.deleteSheet(defaultSheet);
  }

  Logger.log('FRS Sheet bootstrap complete.');
}
