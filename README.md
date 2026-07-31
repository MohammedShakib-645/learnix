# 🚀 LEARNIX AI – All-in-One AI-Powered Student & Admin Platform

![LEARNIX AI Banner](https://img.shields.io/badge/Platform-LEARNIX%20AI-blue?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live%20%26%20Production%20Ready-brightgreen?style=for-the-badge)

**LEARNIX AI** is an advanced, 100% free web application designed to help students discover internships, free certificate courses, learning resources, hackathons, job opportunities, scholarships, career roadmaps, project blueprints, and AI tools in one unified platform.

---

## 🌟 Key Features

### 🎓 Student Portal (`index.html`)
- **💼 Internship Opportunities Hub:** Filter 500+ internships by domain, location, stipend, and year with direct 1-click application links.
- **🎓 100% Free Certificate Courses:** Curated catalog of free certifications from Google, Harvard CS50, Stanford, IBM, AWS, Microsoft, Cisco, and freeCodeCamp.
- **🗺️ Interactive Multi-Roadmap Engine:** View simultaneous career roadmaps for Frontend, Backend, AI/ML, Full Stack, Cloud/DevOps, Cybersecurity, Data Analytics, Android, UI/UX, and Blockchain.
- **💡 Unlimited Project Hub:** Project blueprints with embedded YouTube video tutorial player modals (`#videoModal`) and direct GitHub repository links.
- **⚡ Live Hackathons & Scholarships:** Active hackathon tracker with deadlines, prize pools, and government/corporate scholarship listings.
- **📄 Resume Builder & ATS Scanner:** Form-based resume creator with 1-click sample data filling and live print/PDF export.
- **💻 Daily Coding Practice & Interview Hub:** Interactive coding editor with challenge runners and top technical interview Q&A cards.
- **📱 PWA 1-Click Installation:** Progressive Web App with `manifest.json` and Service Worker (`sw.js`) for instant app installation.

### ⚙️ Dedicated Executive Admin Portal (`admin.html`)
- **🔒 Isolated Portal Architecture:** Completely separate HTML file (`admin.html`) ensuring students have zero access to admin controls.
- **📊 100% Dynamic Real Data Analytics:** Live counters for Registered Students, Active Internships, Free Courses Listed, and Total Platform Interactions computed directly from database arrays.
- **👤 Student User Management:** Interactive controls to register new students, toggle active/offline status (`🔄`), and delete accounts (`✕`).
- **➕ Content CRUD Management:** Modal forms to post new internships and publish free courses directly to `localStorage`.
- **📥 CSV Data Exporter:** 1-click download of all platform listings into `learnix_platform_data.csv`.

---

## 📁 Repository Structure

```text
LEARNIX-AI/
├── index.html        # Main Student Web Application
├── admin.html        # Executive Admin Control Portal
├── css/
│   └── main.css      # Dark Glassmorphism Design System & Theme Engine
├── js/
│   ├── app.js        # Core App Logic, State Management, Router & Modals
│   └── data.js       # Rich Data Store (Internships, Courses, Roadmaps, Projects)
├── manifest.json     # Progressive Web App (PWA) Manifest
├── sw.js             # Service Worker for Offline & Install Capabilities
├── package.json      # Node Project Configuration
├── .gitignore        # Git Ignore Rules
└── README.md         # Repository Documentation
```

---

## 🛠️ Local Installation & Development

### 1. Clone the Repository
```bash
git clone https://github.com/5645mohammedshakib/LEARNIX-AI.git
cd LEARNIX-AI
```

### 2. Launch Local Server
You can use `npx serve` or any static HTTP web server:

```bash
npx serve . -p 3000
```

### 3. Open in Browser
- **Student App:** [http://localhost:3000/index.html](http://localhost:3000/index.html)
- **Admin Control Portal:** [http://localhost:3000/admin.html](http://localhost:3000/admin.html)

---

## 🐙 Git Workflow & Pushing Changes

To push future updates to GitHub:

```bash
git add .
git commit -m "Update feature or fix"
git push origin main
```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

Made with ❤️ for Students by **LEARNIX AI Team**.
