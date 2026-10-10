# Muhammad Bilal Yousaf — Personal Portfolio

A clean, premium, recruiter-friendly personal portfolio for **Muhammad Bilal Yousaf**, undergraduate Cybersecurity student at **Capital University of Science and Technology (CUST)**.

Built with **React 18**, **Tailwind CSS**, and **Vite**, adhering strictly to **WCAG AA** accessibility standards and modern front-end engineering design principles.

---

## 📌 Architecture & Design Principles

1. **Recruiter-Friendly & Plain English**:
   - Zero sci-fi jargon (no terms like "dossier", "operative", "uplink", "quantum", "telemetry").
   - Confident, honest framing as an undergraduate student actively preparing for cybersecurity internships and junior SOC analyst roles.

2. **Strict Content Integrity & Focus**:
   - Zero fabricated metrics, fake certifications, or percentage skill bars.
   - All content is verified, polished, and finalized with zero placeholder tags.
   - Clean profile links to [GitHub (`srbilal12-cyber`)](https://github.com/srbilal12-cyber) and [LinkedIn](https://www.linkedin.com/in/muhammad-bilal-yousaf-a2a93140b).

3. **Featured Project: HemoScan (Exclusively Showcased)**:
   - Live prototype: [https://hemo-scan--srbilal12.replit.app/](https://hemo-scan--srbilal12.replit.app/)
   - Prominent mandatory medical disclaimer: *"Research prototype, not a medical device."*
   - Structured 5-point engineering case study: **The Problem**, **Engineering Approach**, **Current Prototype Results**, **Known Limitations & Edge Cases**, and **Key Learnings**.
   - Vector architecture blueprint preview (`assets/hemoscan_preview.svg`).

4. **Professional Contact & Privacy Protection**:
   - Direct channels: Email (`srbilal12@gmail.com`), LinkedIn, GitHub.
   - Working AJAX contact form with client-side validation, friendly confirmation banner, and direct mailto fallback.
   - Strict privacy safeguards: **No phone number** and **no street-level address** published.

5. **Accessibility & Design System**:
   - Dark-first palette (`#090d16` navy) with an accessible light mode.
   - Emerald primary accent (`#10b981` / `#059669`).
   - Clean modern typography: **Sora** (Headings), **Inter** (Body), and **JetBrains Mono** (Labels/Code).
   - Skip to main content landmark link (`#main-content`) and full keyboard navigation.
   - `prefers-reduced-motion` support.

---

## 📂 Project Structure

```text
cyber-portfolio/
├── index.html                      # SEO metadata, JSON-LD Person schema & zero-build runner
├── package.json                    # Pinned dependencies (React, Vite, Tailwind CSS)
├── tailwind.config.js              # Sora, Inter, JetBrains Mono font & color tokens
├── postcss.config.js               # PostCSS config
├── vite.config.js                  # Vite configuration
├── README.md                       # Documentation & setup guide
├── assets/
│   ├── bilal_headshot.jpg          # Profile photo (450x450)
│   ├── hemoscan_preview.svg        # HemoScan optical signal pipeline blueprint
│   └── Muhammad_Bilal_Yousaf_Resume.html  # Standalone resume document
└── src/
    ├── main.jsx                    # React Vite entrypoint
    ├── App.jsx                     # Root application component with theme state
    ├── index.css                   # Tailwind styles, font imports & accessibility rules
    ├── data/
    │   └── portfolioData.js        # Single source of truth for all portfolio content
    └── components/
        ├── Navbar.jsx              # Sticky header with theme toggle & mobile drawer
        ├── Hero.jsx                # Headshot, availability badge, headline & CTAs
        ├── About.jsx               # Student bio, CUST education card & coursework
        ├── HemoScanCaseStudy.jsx   # Full HemoScan case study & medical disclaimer
        ├── Skills.jsx              # Grouped tags (Proficient, Familiar, Currently Learning)
        ├── Certifications.jsx      # TryHackMe practice, university labs & roadmap
        ├── Contact.jsx             # Contact form, direct email & social links
        └── Footer.jsx              # Semantic footer, copyright & back-to-top
```

---

## 🚀 How to View the Website

### Method 1: Instant Direct Browser Execution (Zero Install)
You do not need Node.js or any local dependencies installed.
1. Open File Explorer to:
   ```text
   C:\Users\Kashmir Computer\.gemini\antigravity\scratch\cyber-portfolio
   ```
2. Double-click `index.html` (or run `Start-Process index.html` in PowerShell).
3. The portfolio opens instantly in your default web browser.

### Method 2: Standard Vite Development Server (with Node.js)
If you have Node.js installed:
```bash
npm install
npm run dev
```
