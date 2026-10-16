# CYBERPULSE X — Defensive Security Dashboard

A futuristic, neon-themed cybersecurity learning dashboard built with plain HTML, CSS and JavaScript. Designed for a portfolio project and safe defensive practice.

**Built by BK Production** · Author: Muhammad Bilal Yousaf

## Features

- Responsive command-center dashboard with animated radar and illustrative telemetry chart.
- URL Threat Inspector with explainable local heuristics for common suspicious patterns.
- Security Log Analyzer that flags repeated failed-login patterns in sample or authorized logs.
- Cyber Mission mini-challenge for phishing awareness.
- No build step, package manager or API key required.
- Mobile-friendly layout and reduced-motion support.

## Run locally

1. Download or clone this repository.
2. Open `cyberpulse-x/index.html` in a modern browser.
3. For a local web server, run `python -m http.server 8000` from the repository root, then open `http://localhost:8000/cyberpulse-x/`.

## Deploy

This folder is a static website and can be served by GitHub Pages or any static host. If publishing the whole repository with GitHub Pages, select the appropriate branch/folder in repository Settings → Pages. A folder nested inside another site's repository may not be the root Pages site; it can still be accessed under the host's path when that host serves the repository files.

## Safety and limitations

- Radar events, counters and chart are **simulated sample data**, not live global attack telemetry.
- URL inspection uses simple client-side heuristics. It is not a malware scanner, domain reputation service, certificate validator, or a guarantee that a URL is safe.
- The URL is parsed locally and is **not opened or sent to a server** by this version.
- The log analyzer processes pasted text in the browser. Use fictional data or logs you are authorized to analyze; avoid pasting secrets or personal data.
- The app does not currently connect to a live threat-intelligence API. Add any future integration through a secure backend or a documented public endpoint, and never commit private API keys to browser code or Git.
- No offensive scanning, exploitation or unauthorized access features are included.

## Project structure

```text
cyberpulse-x/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Suggested next improvements

1. Add unit tests for URL parsing and log rules.
2. Add an optional threat-intelligence backend using an approved API.
3. Add exportable JSON reports with privacy-safe defaults.
4. Add screenshots and a short demo GIF to the repository README.

## License

MIT — see LICENSE.