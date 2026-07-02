<div align="center">

# Abhijeet Gadegone — Portfolio

### Full Stack Developer · Java · Spring Boot · React

A bold, colorful developer portfolio built from the ground up with React, Vite, and React Router — no templates, no page builders.

[![React](https://img.shields.io/badge/React-18.3-4ADEDE?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-FF7A45?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-B98CFF?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![License](https://img.shields.io/badge/license-MIT-blueviolet?style=flat-square)](#license)

[Live Demo](#) · [Report an Issue](../../issues) · [Connect on LinkedIn](https://linkedin.com/in/abhijeet-gadegone-108a82214)

</div>

---

## About

This is my personal developer portfolio — built to showcase the same stack I work in professionally: **Java + Spring Boot** on the backend, **React** on the frontend, backed by **MySQL**. Rather than reach for a portfolio template, I designed and built this from scratch as a small full-stack-flavored project in its own right.

## ✨ Highlights

- **7 fully routed pages** — Home, About, Experience, Projects, Skills, Education, Contact
- **Single source of truth for content** — all resume data lives in one file (`src/data/resumeData.js`), so updating a job or project takes one edit, not seven
- **Custom design system** — a hand-tuned color palette (indigo base, amber + cyan + violet accents) and a three-font type scale, defined entirely with CSS custom properties
- **Signature "stack visual"** — the homepage renders my tech stack as layered blocks (Frontend → Backend → Database → Tooling), echoed as chips throughout the rest of the site
- **Fully responsive** — collapses cleanly to a mobile nav, single-column layouts, and touch-friendly spacing
- **Accessible by default** — visible keyboard focus states, semantic headings, and `prefers-reduced-motion` support baked in

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18 |
| Routing | React Router 6 |
| Build tool | Vite |
| Styling | Plain CSS with custom properties (no framework — every rule is intentional) |
| Fonts | Space Grotesk (display) · Inter (body) · JetBrains Mono (data/labels) |

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive nav with active-route highlighting
│   │   ├── Footer.jsx        # Social links
│   │   └── StackVisual.jsx   # Signature layered tech-stack graphic
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── resumeData.js     # ← edit this to update site content
│   ├── App.jsx                # Route definitions
│   ├── main.jsx                # Entry point
│   └── index.css               # Design tokens + all styling
├── index.html
└── vite.config.js
```

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 18+ and npm

```bash
# Clone the repo
git clone https://github.com/abhijeetgadegone/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the URL printed in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

This outputs a static, deploy-ready bundle to `dist/`.

### Deploy

Any static host works — the build is a plain static site:

- **Vercel:** import the repo at [vercel.com/new](https://vercel.com/new), no config needed
- **Netlify:** drag the `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo (build command `npm run build`, publish directory `dist`)
- **GitHub Pages:** run `npm run build`, then deploy the `dist/` folder via [gh-pages](https://www.npmjs.com/package/gh-pages) or Pages settings

## ✏️ Editing Content

Everything you see on the site — name, bio, work history, projects, skills, education — comes from a single file:

```
src/data/resumeData.js
```

Update a value there and it automatically flows through to every page that uses it. No hunting through components.

## 📬 Contact

- **Email:** [abhijeetgadegone@gmail.com](mailto:abhijeetgadegone@gmail.com)
- **Phone:** +91 73784 31660
- **GitHub:** [@abhijeetgadegone](https://github.com/abhijeetgadegone)
- **LinkedIn:** [Abhijeet Gadegone](https://linkedin.com/in/abhijeet-gadegone-108a82214)

## License

This project is open source under the [MIT License](LICENSE) — feel free to fork it and adapt it for your own portfolio.

---

<div align="center">
<sub>Built with React + Vite by Abhijeet Gadegone</sub>
</div>
