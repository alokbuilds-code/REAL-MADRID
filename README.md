# Real Madrid CF — Premier Football Website

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-C8A44D.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Web Audio API](https://img.shields.io/badge/Audio-Web_Audio_API-071A36?style=for-the-badge&logo=webrtc&logoColor=C8A44D)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![UCL Titles](https://img.shields.io/badge/European_Cups-15x_Record-C8A44D?style=for-the-badge&logo=uefa&logoColor=white)](#-trophies-and-honours-sala-de-trofeos)

<p align="center">
  <strong>A prestigious, world-class football editorial experience inspired by Real Madrid Club de Fútbol's royal identity, European heritage, and the revolutionary Santiago Bernabéu stadium.</strong>
</p>

<p align="center">
  <a href="#-project-overview">Overview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-architecture-and-preview">Preview</a> •
  <a href="#-technology-stack">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-prerequisites-and-installation">Installation</a> •
  <a href="#-local-development-and-usage">Usage</a> •
  <a href="#-testing-and-troubleshooting">Testing</a> •
  <a href="#-license--disclaimer">License</a>
</p>

</div>

---

## ⚽ Project Overview

This repository houses a complete, high-fidelity football web platform dedicated to **Real Madrid Club de Fútbol** (founded 6 March 1902). Designed from the ground up as a premier European sports-editorial platform rather than a generic sports dashboard, the application translates the grandeur of the 15-time Champions League winners and the architectural spectacle of *El Nuevo Estadio Santiago Bernabéu* into a modern digital experience.

### Visual & Art Direction Principles

- **Royal Color Harmony:** Anchored in royal white (`#FFFFFF`), deep navy (`#071A36`, `#020813`), metallic gold accents (`#C8A44D`, `#FCE08B`), and charcoal (`#111318`).
- **Sports-Editorial Typography:** High-impact athletic display typography (**Barlow Condensed**, **Oswald**) paired with refined editorial serifs (**Playfair Display**, **Cinzel**) for narrative kicks and clean system sans-serif (**Inter**) for data tables and UI controls.
- **Cinematic Atmosphere:** Dramatic lighting gradients, subtle film grain texture, bespoke vector artwork, and an interactive Web Audio API matchday crowd and brass ambiance engine.
- **Uncompromising Performance:** Built exclusively with semantic HTML5, modern CSS3, and Vanilla JavaScript—free of heavy client frameworks (No React, Vue, Angular, TypeScript, Tailwind, Bootstrap, or jQuery).

> [!NOTE]  
> This project is an independent, open-source fan tribute and portfolio project created for educational and presentation purposes. All Real Madrid C.F. names, emblems, and crests remain registered trademarks of Real Madrid Club de Fútbol.

---

## ✨ Key Features

### 1. 🏟️ Cinematic Santiago Bernabéu Hero & Live Matchday Ticker
- Fullscreen stadium visual backdrop with layered spotlight gradients and royal white typography.
- Real-time countdown timer tracking the hours, minutes, and seconds to the next high-profile fixture (*El Clásico vs FC Barcelona*).
- Trophy summary ribbon highlighting **15 European Cups**, **36 La Liga titles**, **104+ official trophies**, and the **84,700 Bernabéu capacity**.
- Dynamic marquee ticker celebrating club anthems and historic milestones.

### 2. 👥 First Team Squad & Interactive Player Dossiers
- Interactive squad explorer with position filtering: **All**, **Forwards**, **Midfielders**, **Defenders**, **Goalkeepers**, and **Coaching Staff**.
- Complete verified 2024/2025/2026 first-team dataset (*Kylian Mbappé*, *Vinicius Jr.*, *Jude Bellingham*, *Luka Modrić*, *Federico Valverde*, *Rodrygo*, *Eduardo Camavinga*, *Dani Carvajal*, *Thibaut Courtois*, *Antonio Rüdiger*, *Carlo Ancelotti*, and more).
- Deep-dive **Player Dossier Modal** showcasing squad number watermark, country flag, physical specs, preferred foot, trophy tally with Madrid, inspirational quotes, and tactical metric gauges (*Pace, Shooting, Passing, Dribbling, Physical*).

### 3. ⚔️ Match Center (Centro de Partidos)
- Dual-view interface toggling between **Upcoming Fixtures** and **Recent Results & Reports**.
- Complete match data with verified competition stages (UEFA Champions League, La Liga, UEFA Super Cup), kick-off times, venues, and ticket status pills.
- Interactive **Match Details Modal** displaying official starting XI lineup, minute-by-minute timeline with goalscorers, and key match analytics (Possession %, Shots on target, Corner kicks, and Fouls).

### 4. 🏆 Trophies & Honours (Sala de Trofeos)
- Dedicated trophy cards featuring custom vector SVG illustrations:
  - **15x UEFA Champions League / European Cup** (*La Decimoquinta* record holder)
  - **36x La Liga Championships** (All-time Spanish record)
  - **20x Copa del Rey**
  - **8x World Championships** (5 FIFA Club World Cups + 3 Intercontinental Cups)
  - **6x UEFA Super Cups** (All-time European record)
  - **13x Supercopa de España**
- Interactive **Trophy Victory Explorer Modal** revealing the complete list of championship years and detailed historical milestone breakdowns (from the 1956 inaugural cup in Paris to the 2024 final at Wembley).

### 5. 📜 Club History (1902 – Present: El Legado Blanco)
- Interactive horizontal era timeline navigator spanning seven historic epochs:
  - `1902 - 1920`: The Royal Foundation & King Alfonso XIII's crown.
  - `1953 - 1960`: The Golden Dynasty of Alfredo Di Stéfano (5 consecutive European Cups).
  - `1966 - 1980`: *El Madrid Ye-yé* & Paco Gento's 6th European Cup record.
  - `1981 - 1990`: *La Quinta del Buitre* and 5 consecutive domestic league titles.
  - `1998 - 2002`: The European Renaissance (*La Séptima* in Amsterdam, Zidane's volley for *La Novena*).
  - `2014 - 2018`: *La Décima* (Ramos 92:48) and the historic Champions League Three-Peat.
  - `2022 - Present`: Miracle *Remontadas*, *La Decimoquinta*, and the New Bernabéu.

### 6. 👑 Legends Hall of Fame (Leyendas Inmortales)
- Curated biographical profiles of all-time club legends: *Alfredo Di Stéfano*, *Paco Gento*, *Ferenc Puskás*, *Zinedine Zidane*, *Raúl González*, *Iker Casillas*, *Cristiano Ronaldo*, *Sergio Ramos*, *Karim Benzema*, and *Roberto Carlos*.
- Interactive modal with career statistics, match appearances, trophy lists, and memorable quotes.

### 7. 🏗️ El Nuevo Santiago Bernabéu Interactive Architectural Explorer
- Custom-engineered **vector cross-section architectural schematic** (`stadium-schematic.svg`) mapping coordinates, altitude, and engineering systems.
- Interactive technical tabs:
  - **Subterranean Hypogeum Greenhouse (-30m):** 6 motorized trays with automated UV-LED lighting and irrigation.
  - **Motorized Retractable Roof:** Dual 15-minute closing covers.
  - **360° Continuous Halo Video Board:** Suspended high-definition LED ring.
  - **Parametric Louvered Steel Skin:** Stainless steel curved bands reflecting the Madrid skyline.
  - **Bernabéu Skywalk & VIP Ring:** Panoramic 360° city vista over the Paseo de la Castellana.
  - **365-Day Multipurpose Arena:** Automated conversion for concerts, NFL, EuroLeague basketball, and tennis.

### 8. 📰 News & Editorial Platform
- High-prestige sports journalism layout with category filters: **All**, **Match Reports**, **Club News**, **Tactical Analysis**, and **La Fábrica**.
- Full-article reader modal featuring comprehensive journalistic analyses, reading time, author bylines, and share capabilities.

### 9. 📸 Curated Photographic Archive & Lightbox
- High-resolution photography gallery filtered by **Matchday**, **Stadium**, **Celebrations**, and **Historic** moments.
- Fullscreen modal lightbox with previous/next controls, keyboard navigation (left/right arrows, Escape to close), captions, and category tags.

### 10. 🔊 Web Audio API Matchday Soundscape
- Fully synthetic, zero-dependency audio engine generating ambient Bernabéu crowd swells, bandpass-filtered noise, and majestic brass chords (F major fanfare).
- On/off toggle button in the header with real-time animated sound equalizer bars.

---

## 🖼️ Architecture and Preview

```
┌────────────────────────────────────────────────────────────────────────┐
│                        REAL MADRID CF PLATFORM                         │
├────────────────────────────────────────────────────────────────────────┤
│ [Crest] REAL MADRID   First Team | Matches | Trophies | History | Bernabéu │ [Audio] [ES/EN] [Tickets]
├────────────────────────────────────────────────────────────────────────┤
│ HERO SECTION:                                                          │
│ "REINADO ETERNO • THE CROWN OF EUROPE"                                 │
│ [Explore Squad] [Sala de Trofeos] [El Nuevo Bernabéu]                  │
│ NEXT FIXTURE TICKER: EL CLÁSICO [03d : 09h : 41m : 20s]               │
│ [15 UCL Record] | [36 La Liga] | [104+ Major Trophies] | [84.7K Seats] │
├────────────────────────────────────────────────────────────────────────┤
│ SQUAD EXPLORER: [All] [Forwards] [Midfielders] [Defenders] [GK] [Staff]│
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────────┐ │
│ │ #9 Mbappé    │ │ #7 Vini Jr.  │ │ #5 Bellingham│ │ #10 Modrić (C) │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ └────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ MATCH CENTER: [Upcoming Fixtures] vs [Recent Results]                 │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Real Madrid  2 - 0  Borussia Dortmund  [FT • La Decimoquinta]      │ │
│ │ Wembley Stadium • Goals: Dani Carvajal 74', Vinícius Júnior 83'    │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ STADIUM SCHEMATIC VIEWPORT (Cross-Section) & HYPOGEUM PITCH ELEVATOR    │
│ ┌─────────────────────────────────┐ ┌────────────────────────────────┐ │
│ │   [=== Retractable Roof ===]    │ │ 01 Subterranean Hypogeum (-30m)│ │
│ │   ( O 360° Halo LED Board O )   │ │ 02 Retractable Roof (15 min)   │ │
│ │   [==== Matchday Pitch ====]    │ │ 03 360° Continuous Halo Display│ │
│ │   [== Pitch Trays 1 to 6 ==]    │ │ 04 Louvered Stainless Facade   │ │
│ └─────────────────────────────────┘ └────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technologies & Specifications |
| :--- | :--- |
| **Markup & Semantics** | Semantic **HTML5**, ARIA 1.2 accessibility standards, Open Graph and SEO meta tags. |
| **Styling & Layout** | Pure **CSS3**, CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, Media Queries. |
| **Core Architecture** | Modern **Vanilla JavaScript (ES6+)**, IIFE module encapsulation, Event Delegation. |
| **Animation Engine** | **GSAP 3.12.5** and **ScrollTrigger** (loaded via CDN with native `IntersectionObserver` fallback). |
| **Audio Engine** | **Web Audio API** (Procedural crowd noise synthesis, biquad bandpass filter, LFO oscillator, brass chord harmonic generation). |
| **Vector Assets** | Hand-crafted scalable **SVG** vectors (Official-style club crest, UCL "Orejona", La Liga trophy, Copa del Rey, Club World Cup, Super Cup, and Bernabéu architectural cross-section). |
| **Typography** | Google Fonts: `Barlow Condensed`, `Oswald`, `Playfair Display`, `Cinzel`, `Inter`. |

---

## 🏗️ Project Structure

```
.
├── index.html                     # Primary HTML5 application document
├── css/
│   ├── style.css                  # Core design tokens, typography, header, hero, footer
│   ├── components.css             # Modular cards, modals, filter bars, match center, lightbox
│   ├── stadium.css                # Architectural schematic layout and interactive controls
│   └── responsive.css             # Breakpoint adaptations (320px to 1920px displays)
├── js/
│   ├── data.js                    # Verified Real Madrid datasets (squad, matches, trophies, history, legends, news)
│   ├── audio.js                   # Procedural Web Audio API matchday atmosphere engine
│   ├── components.js              # Card renderers, modal controllers, filters, and lightbox
│   └── app.js                     # Global coordinator, sticky navigation, GSAP animations, form handling
├── assets/
│   ├── images/
│   │   ├── real-madrid-crest.svg  # High-precision vector Real Madrid CF crest
│   │   ├── stadium-schematic.svg  # Detailed Bernabéu cross-section architectural blueprint
│   │   ├── player-placeholder.svg # Vector jersey fallback for offline resilience
│   │   └── stadium-placeholder.svg# Vector stadium fallback for offline resilience
│   └── icons/
│       ├── trophy-ucl.svg         # 15x UEFA Champions League "Orejona" trophy
│       ├── trophy-laliga.svg      # 36x La Liga Spanish championship trophy
│       ├── trophy-copa.svg        # 20x Copa del Rey trophy
│       ├── trophy-cwc.svg         # 8x FIFA Club World Cup trophy
│       └── trophy-supercup.svg    # 6x UEFA Super Cup trophy
└── README.md                      # Comprehensive repository documentation
```

---

## ⚙️ Prerequisites and Installation

### Prerequisites

Because this project is built entirely on native web standards with zero package managers or build steps required, no Node.js, npm, yarn, or Python installations are strictly mandatory. All you need is any modern web browser.

- **Recommended Browsers:** Google Chrome (88+), Mozilla Firefox (85+), Apple Safari (14+), or Microsoft Edge (88+).

### Installation

Clone the repository locally:

```bash
git clone https://github.com/your-username/real-madrid-cf-platform.git
cd real-madrid-cf-platform
```

---

## 💻 Local Development and Usage

You can run and inspect the website locally using any of the following methods:

### Method 1: Python HTTP Server (Zero Setup)

If you have Python installed on your system:

```bash
# Python 3
python -m http.server 8080
```

Then navigate to:
```
http://localhost:8080
```

### Method 2: Node.js Static Server

Using `npx` with any standard static server tool:

```bash
# Using 'serve'
npx serve . -p 8080

# Or using 'http-server'
npx http-server -p 8080
```

### Method 3: Direct Browser Launch

You can open `index.html` directly in your default browser:

- **Windows:** Double-click `index.html` or run `Start-Process index.html` in PowerShell.
- **macOS:** Run `open index.html` in Terminal.
- **Linux:** Run `xdg-open index.html` in Terminal.

---

## 🌐 Deployment Instructions

The static architecture makes deployment instantaneous across all major static hosting platforms.

### 1. GitHub Pages
1. Push your repository to GitHub.
2. In your repository settings, navigate to **Pages** (under Code and automation).
3. Set **Source** to `Deploy from a branch`.
4. Select `main` (or `master`) branch and `/ (root)` folder.
5. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### 2. Vercel
Run the Vercel CLI from the project root:
```bash
npx vercel deploy --prod
```

### 3. Netlify
Run the Netlify CLI:
```bash
npx netlify deploy --prod --dir=.
```

---

## 🧪 Testing and Troubleshooting

### Responsive Quality Checklist

The platform has been audited across standard device viewports:

| Viewport | Device Class | Expected Layout Behaviour |
| :--- | :--- | :--- |
| **320px – 375px** | Compact Smartphones (iPhone SE, small Androids) | Single-column cards, condensed ticker, touch hamburger menu. |
| **390px – 430px** | Standard Smartphones (iPhone 14/15/16, Galaxy S) | Spacious touch cards, full-width modal dossiers. |
| **768px – 834px** | Tablets Portrait (iPad, tablets) | Two-column squad grid, stacked stadium blueprint. |
| **1024px** | Tablets Landscape & Small Laptops | Two-column stadium layout, horizontal history navigation. |
| **1440px** | Standard Laptops & Desktops | Full horizontal navigation, 3-column squad grid, multi-column footer. |
| **1920px+** | High-DPI Displays & Ultra-Wide Monitors | 4-column squad grid, 1680px constrained container with centered symmetry. |

### Common Troubleshooting

#### 1. Audio does not play immediately on page load
- **Reason:** Modern browsers enforce an Autoplay Policy that requires explicit user gesture before activating an `AudioContext`.
- **Solution:** Click the **"Matchday Sound"** button in the header. The Web Audio API context resumes cleanly on user interaction.

#### 2. Images fail to load when offline
- **Reason:** High-resolution player action shots and match photos link to verified CDN endpoints.
- **Solution:** The codebase implements automatic `onerror` hooks pointing to native vector files (`player-placeholder.svg` and `stadium-placeholder.svg`), ensuring zero broken images even in completely offline environments.

#### 3. Modal does not open
- **Solution:** Verify that JavaScript is enabled in your browser. All modals are managed via native accessible backdrop listeners in `js/components.js`. Pressing <kbd>Esc</kbd> or clicking outside the container dismisses active dialogs.

---

## 🗺️ Planned Improvements

- [ ] **Interactive Bernabéu Matchday Formation Visualizer:** Tactical drag-and-drop pitch builder allowing users to formulate custom starting line-ups.
- [ ] **Dual-Language i18n Localization Dictionary:** Expanding the language switcher (`ES` / `EN`) to dynamically translate all editorial article bodies via JSON translation maps.
- [ ] **Progressive Web App (PWA) Offline Manifest:** Service worker caching of high-resolution trophy vectors and club datasets.
- [ ] **Historical UCL Finals Interactive Video Reel:** Embedding curated archival footage timestamps from 1956 to 2024.

---

## 🤝 Contributing

Contributions to improve data accuracy, add historical milestones, or optimize animations are welcomed!

1. **Fork the Repository:** Click the *Fork* button at the top right of the GitHub page.
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/la-decimosexta-update
   ```
3. **Commit Your Changes:**
   ```bash
   git commit -m "feat: enhance Bernabéu retractable roof schematic details"
   ```
4. **Push to Your Branch:**
   ```bash
   git push origin feature/la-decimosexta-update
   ```
5. **Open a Pull Request:** Describe your changes clearly with test verification notes.

---

## 📄 License & Disclaimer

### License
This project is open-source software licensed under the [MIT License](LICENSE).

### Legal Disclaimer & Fair Use Notice
This website is an **unofficial portfolio and design tribute** created by passionate supporters of world football. It is not affiliated with, endorsed by, or in any way officially connected with Real Madrid Club de Fútbol, UEFA, La Liga, or any of their subsidiaries or affiliates.

- The official website of Real Madrid C.F. can be accessed at: [https://www.realmadrid.com](https://www.realmadrid.com)
- All registered trademarks, club names, logos, and emblems belong to their respective owners.

---

<div align="center">
  <sub>¡Hala Madrid! ...y nada más 👑 1902 — Forever</sub>
</div>
