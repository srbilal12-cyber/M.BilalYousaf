"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const toast = (message) => {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2800);
};

function updateClock() {
  const now = new Date();
  $("#clock").textContent = now.toISOString().slice(11, 19) + " UTC";
}
updateClock();
setInterval(updateClock, 1000);

const views = {
  overview: ["overviewView", "COMMAND CENTER"],
  url: ["urlView", "URL INSPECTOR"],
  logs: ["logsView", "LOG ANALYZER"],
  missions: ["missionsView", "CYBER MISSIONS"]
};

function showView(name) {
  if (!views[name]) return;
  $$(".view").forEach(view => view.classList.remove("active-view"));
  $("#" + views[name][0]).classList.add("active-view");
  $$(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.view === name));
  $("#crumbTitle").textContent = views[name][1];
  $("#sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
$$(".nav-item").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.view)));
$$("[data-jump]").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.jump)));
$("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
document.addEventListener("click", event => {
  if (window.innerWidth <= 760 && $("#sidebar").classList.contains("open") &&
      !$("#sidebar").contains(event.target) && !$("#menuToggle").contains(event.target)) {
    $("#sidebar").classList.remove("open");
  }
});

const suspiciousTerms = ["login", "verify", "secure", "account", "update", "password", "wallet", "support", "confirm", "billing"];
const knownDemoHosts = ["example.com", "example.org", "example.net"];

function inspectUrl(rawValue) {
  const raw = rawValue.trim();
  if (!raw) throw new Error("Enter a URL to analyze.");
  if (/\s/.test(raw)) throw new Error("URL mein spaces hain. Valid URL enter karo.");
  let parsed;
  try {
    parsed = new URL(raw.includes("://") ? raw : "https://" + raw);
  } catch {
    throw new Error("URL parse nahi ho saka. Example: https://example.com");
  }
  if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("Sirf HTTP aur HTTPS URLs support hote hain.");
  const host = parsed.hostname.toLowerCase();
  const flags = [];
  let score = 0;
  const add = (title, detail, points) => { flags.push({ title, detail, points }); score += points; };

  if (parsed.protocol !== "https:") add("No HTTPS transport", "This URL uses HTTP. Data can be exposed in transit; this alone does not prove a phishing attempt.", 18);
  if (raw.length > 120) add("Unusually long URL", "Long URLs can hide confusing paths or parameters. Legitimate links can also be long.", 12);
  if (raw.length > 200) add("Very long URL", "The URL is unusually long and deserves a closer manual review.", 10);
  if (parsed.username || parsed.password) add("Embedded user information", "The URL includes text before the @ symbol that can disguise the destination host.", 28);
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) add("Raw IPv4 address host", "The host is an IP address rather than a recognizable domain. This can be legitimate, but deserves review.", 18);
  if (host.includes("xn--")) add("Punycode domain", "Internationalized domain encoding may be legitimate, but can also make lookalike names harder to spot.", 18);
  if ((host.match(/\./g) || []).length >= 4) add("Many domain labels", "The hostname contains several subdomain levels. Check the registered domain carefully.", 12);
  if (host.includes("-") && suspiciousTerms.some(term => host.includes(term))) add("Urgency or account-related hostname", "The hostname combines hyphens with account/security wording, a pattern sometimes used in deceptive links.", 15);
  if (suspiciousTerms.some(term => (parsed.pathname + parsed.search).toLowerCase().includes(term))) add("Sensitive-action wording", "The path or query includes account, login, verification or similar wording. Context matters.", 8);
  if (parsed.search.length > 90) add("Long query string", "Many query parameters can obscure where a link leads or how it behaves.", 8);
  if (host.split(".").some(label => label.length > 35)) add("Unusually long hostname label", "One hostname section is unusually long and should be reviewed.", 12);
  if (host === "localhost" || host.endsWith(".invalid")) add("Reserved/test domain", "This is a local or reserved testing name, not a normal public destination.", 0);

  score = Math.min(100, score);
  const risk = score >= 45 ? "HIGH" : score >= 20 ? "MEDIUM" : "LOW";
  const isKnownDemo = knownDemoHosts.includes(host);
  const summary = isKnownDemo
    ? "This is a reserved example domain. The result is a demonstration only, not a reputation lookup."
    : flags.length
      ? "Heuristic indicators were found. Verify the domain through a trusted channel before interacting."
      : "No configured heuristic triggered. This does not mean the site is safe or has been checked against threat intelligence.";
  return { raw, host, protocol: parsed.protocol, score, risk, flags, summary, isKnownDemo };
}

function renderUrlResult(result) {
  const container = $("#urlResult");
  const findings = result.flags.length
    ? result.flags.map(flag => `<div class="finding"><span class="finding-mark">⚑</span><div><b>${escapeHtml(flag.title)}</b><small>${escapeHtml(flag.detail)}</small></div></div>`).join("")
    : '<div class="finding"><span class="finding-mark">✓</span><div><b>No configured heuristic triggered</b><small>This is not proof of safety. Check the domain and context independently.</small></div></div>';
  container.className = "result-card";
  container.innerHTML = `<div class="result-head"><div><span class="section-kicker">LOCAL HEURISTIC REPORT</span><h3>${escapeHtml(result.host)}</h3><p>${escapeHtml(result.protocol)} · Score: ${result.score}/100</p></div><span class="risk-pill ${result.risk.toLowerCase()}">${result.risk} INDICATORS</span></div><div class="result-body"><p class="result-summary">${escapeHtml(result.summary)}</p>${findings}<div class="finding"><span class="finding-mark">i</span><div><b>Limitations</b><small>No web request, malware scan, certificate validation or third-party reputation check was performed. Score is a simple heuristic, not a probability.</small></div></div></div>`;
  $("#flaggedMetric").textContent = String(37 + Math.min(9, result.flags.length));
  toast("Local URL analysis complete.");
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}
$("#urlForm").addEventListener("submit", event => {
  event.preventDefault();
  try { renderUrlResult(inspectUrl($("#urlInput").value)); }
  catch (error) { toast(error.message); }
});
$$("[data-sample]").forEach(btn => btn.addEventListener("click", () => {
  $("#urlInput").value = btn.dataset.sample;
  $("#urlForm").requestSubmit();
}));

const sampleLogs = [
  "2026-10-16T10:10:00Z user=alex ip=192.0.2.10 status=failed",
  "2026-10-16T10:10:04Z user=alex ip=192.0.2.10 status=failed",
  "2026-10-16T10:10:09Z user=alex ip=192.0.2.10 status=failed",
  "2026-10-16T10:10:15Z user=alex ip=192.0.2.10 status=failed",
  "2026-10-16T10:11:02Z user=sam ip=198.51.100.22 status=success",
  "2026-10-16T10:13:41Z user=admin ip=203.0.113.9 status=failed",
  "2026-10-16T10:13:45Z user=admin ip=203.0.113.9 status=failed",
  "2026-10-16T10:14:00Z user=admin ip=203.0.113.9 status=failed",
  "2026-10-16T10:15:22Z user=maya ip=198.51.100.30 status=success"
];
$("#loadSample").addEventListener("click", () => { $("#logInput").value = sampleLogs.join("\n"); toast("Sample logs loaded."); });
$("#clearLogs").addEventListener("click", () => { $("#logInput").value = ""; $("#logResults").classList.add("hidden"); toast("Log input cleared."); });

function parseLog(line, index) {
  const statusMatch = line.match(/\bstatus\s*[=:]\s*([\w-]+)/i) || line.match(/\b(failed|failure|success|accepted|denied|invalid)\b/i);
  const ipMatch = line.match(/\b(?:ip|src|source_ip)\s*[=: ]\s*([\da-f:.]+)/i) || line.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
  const userMatch = line.match(/\b(?:user|username|account)\s*[=: ]\s*([\w.@-]+)/i);
  const status = statusMatch ? (statusMatch[1] || statusMatch[0]).toLowerCase() : "unknown";
  const ip = ipMatch ? (ipMatch[1] || ipMatch[0]) : "unknown";
  const user = userMatch ? (userMatch[1] || userMatch[0]) : "unknown";
  const failed = /fail|denied|invalid|reject|error/.test(status) || /\bfailed\b/i.test(line);
  const success = /success|accepted|logged.in/.test(status) || /\baccepted\b/i.test(line);
  return { line, index: index + 1, status, ip, user, failed, success };
}
$("#analyzeLogs").addEventListener("click", () => {
  const lines = $("#logInput").value.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  if (!lines.length) { toast("Pehle sample ya authorized log data add karo."); return; }
  const events = lines.map(parseLog);
  const failedByIp = new Map();
  const failedByUser = new Map();
  events.filter(e => e.failed).forEach(e => {
    failedByIp.set(e.ip, (failedByIp.get(e.ip) || 0) + 1);
    failedByUser.set(e.user, (failedByUser.get(e.user) || 0) + 1);
  });
  const flaggedIps = new Set([...failedByIp].filter(([, count]) => count >= 3).map(([ip]) => ip));
  const flaggedUsers = new Set([...failedByUser].filter(([, count]) => count >= 3).map(([user]) => user));
  const suspicious = events.filter(e => flaggedIps.has(e.ip) || flaggedUsers.has(e.user));
  const failedCount = events.filter(e => e.failed).length;
  const successCount = events.filter(e => e.success).length;
  const flaggedRows = suspicious.length ? suspicious.map(e => `<tr class="flag-row"><td>${e.index}</td><td>${escapeHtml(e.user)}</td><td>${escapeHtml(e.ip)}</td><td>${e.failed ? "FAILED" : escapeHtml(e.status.toUpperCase())}</td><td>Repeated failure pattern</td></tr>`).join("") : "";
  const normalRows = events.filter(e => !suspicious.includes(e)).slice(0, 12).map(e => `<tr><td>${e.index}</td><td>${escapeHtml(e.user)}</td><td>${escapeHtml(e.ip)}</td><td>${escapeHtml(e.status.toUpperCase())}</td><td>Review manually</td></tr>`).join("");
  const results = $("#logResults");
  results.classList.remove("hidden");
  results.innerHTML = `<div class="panel-heading"><div><span class="section-kicker">ANALYSIS COMPLETE</span><h2>Event summary</h2></div><span class="panel-state"><i></i> LOCAL REPORT</span></div><div class="log-summary-grid"><div class="log-summary"><small>TOTAL EVENTS</small><b>${events.length}</b></div><div class="log-summary"><small>FAILED EVENTS</small><b style="color:var(--red)">${failedCount}</b></div><div class="log-summary"><small>SUCCESS EVENTS</small><b style="color:var(--green)">${successCount}</b></div></div><p class="result-summary">${flaggedIps.size || flaggedUsers.size ? `Potential brute-force pattern: ${flaggedIps.size} IP(s) and ${flaggedUsers.size} account(s) had at least 3 failed events.` : "No repeated-failure threshold (3 or more) was triggered. This does not prove the logs are clean."} Threshold is a simple training rule.</p><div style="overflow-x:auto"><table class="log-table"><thead><tr><th>#</th><th>USER</th><th>IP</th><th>STATUS</th><th>ASSESSMENT</th></tr></thead><tbody>${flaggedRows}${normalRows}</tbody></table></div><p class="muted small">Showing flagged rows and up to 12 other events. Input remains in this browser tab only.</p>`;
  $("#loginsMetric").textContent = String(events.length);
  toast("Log analysis complete.");
});

$("#missionOptions").addEventListener("click", event => {
  const button = event.target.closest("button[data-answer]");
  if (!button) return;
  $$("#missionOptions button").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === "correct") btn.classList.add("correct-answer");
  });
  const feedback = $("#missionFeedback");
  if (button.dataset.answer === "correct") {
    feedback.textContent = "Correct. Avoid the link, visit the official address independently, and report the message through a trusted channel.";
    feedback.className = "mission-feedback good";
    toast("Mission complete · +100 XP");
  } else {
    button.classList.add("wrong-answer");
    feedback.textContent = "Not safe. Urgency is a common pressure tactic. Do not click or share credentials; use a known official channel instead.";
    feedback.className = "mission-feedback bad";
  }
});
$("#resetMission").addEventListener("click", () => {
  $$("#missionOptions button").forEach(btn => { btn.disabled = false; btn.classList.remove("correct-answer", "wrong-answer"); });
  $("#missionFeedback").textContent = "";
  $("#missionFeedback").className = "mission-feedback";
  toast("Mission reset.");
});
$("#refreshBtn").addEventListener("click", () => {
  $("#eventsMetric").textContent = (1200 + Math.floor(Math.random() * 150)).toLocaleString();
  toast("Demo dashboard refreshed. Metrics remain simulated.");
});