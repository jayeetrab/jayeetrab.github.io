# AI/ML Portfolio — Jayeetra Bhattacharjee

Personal portfolio website built with **React + Vite**, showcasing my AI/ML projects, skills, and experience as an AI/ML Engineer. It highlights real-world work with LLMs, analytics, automation, and cloud deployment.

## 🧑‍💻 About

Hi, I’m **Jayeetra Bhattacharjee**, an AI/ML Engineer with 3+ years’ experience delivering AI, LLM, NLP, and automation solutions for global retail, fashion, and electronics clients.  
I focus on building scalable, production-ready systems that improve decision-making, compliance accuracy, and operational efficiency while staying aligned with business value.

This portfolio is a central hub for:

- My **AI/ML and LLM projects**
- **Professional experience** and background
- **Tools & technologies** I work with
- A quick way to **contact or chat** with me

## 🚀 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer/Motion-style animations, AOS, animate.css [file:2][file:8]
- **3D & Visuals:** Three.js ecosystem (react-three/fiber, drei, rapier), custom visual components [file:2]
- **State & Logic:** React hooks, modular components [file:8]
- **Backend / Services (optional):** Firebase (Auth & Firestore) for chat/real-time features [file:9]
- **Tooling:** ESLint, Vite build system [file:2][file:4]

## 📂 Project Structure

```text
.
├── public/             # Static assets (favicon, images, etc.)
├── src/
│   ├── components/     # Reusable UI & layout components
│   ├── assets/         # Images, icons, project thumbnails
│   ├── data.js         # Tools & projects configuration
│   ├── App.jsx         # Main page layout & sections
│   ├── main.jsx        # React entry point
│   └── firebase.js     # (Optional) Firebase config for chat
├── index.html          # HTML entry file
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── README.md           # Project documentation
```

## ✨ Features

- Modern, animated **hero section** with photo, role, and quick CTAs [file:8]
- Detailed **About Me** section aligned with my CV and experience [file:8][file:12]
- **Projects** grid powered by `data.js`, including AI/ML and LLM projects with longer descriptions and links to source or demos [file:7]
- **Tools & Technologies** section listing the stack I use day-to-day [file:7]
- **Contact & Chat** section with a form and optional real-time chat using Firebase [file:8][file:9]
- Responsive layout suitable for desktop and mobile

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-github-username>/<your-portfolio-repo>.git
cd <your-portfolio-repo>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### 4. Create production build

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

## 🌐 Deployment

This project can be deployed easily to:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- Any static hosting that supports Vite builds

If you use GitHub Pages, set the `homepage` field in `package.json` to your username and repo: [file:2]

```json
"homepage": "https://<your-github-username>.github.io/<your-portfolio-repo>/"
```

Then you can use a deploy script such as:

```bash
npm run build
# then publish the dist/ folder using your preferred method
```

(If you add a `gh-pages` script, document it here.)

## 🔧 Configuration

Key parts you can customise:

- **Identity & content:** `App.jsx` (name, title, About Me, stats, motto) [file:8]
- **Projects & links:** `data.js` → `listProyek` [file:7]
- **Tools / skills:** `data.js` → `listTools` [file:7]
- **Contact form:** `App.jsx` → `form action="https://formsubmit.co/..."` (set to your email) [file:8][file:12]
- **Firebase chat (optional):** `firebase.js` (fill in your Firebase config if you enable chat) [file:9]

## 🧠 Content Mapping to CV

This portfolio is aligned with my CV (`JayeetraCV1.1.pdf`), including:

- AI-powered audit and compliance engines
- LLM insight-mining and ensemble pipelines
- Text-to-SQL “talk-to-data” systems
- POS automation and revenue-protection projects [file:12][file:7]

Each highlighted project links to a GitHub repository or demo where possible.

## 📩 Contact

- **Name:** Jayeetra Bhattacharjee
- **Email:** jayeetra.uk@gmail.com
- **Location:** Bristol, United Kingdom
- **"https://github.com/jayeetrab":** https://www."https://github.com/jayeetrab".com/in/jayeetrabhattacharjee/
- **GitHub:** https://github.com/jayeetrab>

