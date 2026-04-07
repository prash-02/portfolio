# ⚡ ECE Portfolio — Prashant Kushwaha

A modern, futuristic 3D portfolio website for an Electronics & Communication Engineering student (Class of 2027). Built with **React + Vite**, styled with **Tailwind CSS**, and powered by **Three.js** for immersive 3D effects.

---

## 🌟 Features

- **3D Hero Scene** — Animated orb with neon rings, floating particles, and mouse-parallax lighting using Three.js
- **Custom cursor** — Glowing dot + lagging ring effect
- **Glassmorphism cards** — Frosted-glass UI with glowing borders
- **Animated skill bars** — Triggered on scroll into view
- **Scroll reveal animations** — Sections fade in as you scroll
- **Timeline experience section** — Glowing vertical timeline
- **Responsive navbar** — Desktop nav + mobile hamburger menu
- **Contact form** — Pre-fills your mail client (no backend needed)
- **Dark futuristic theme** — Circuit grid overlay, ambient glow blobs, scanlines
- **Fonts** — Orbitron (display) + Syne (body) + JetBrains Mono (code)

---

## 🗂️ Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Scene3D.jsx        ← Three.js 3D scene
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ and npm

### Steps

```bash
# 1. Clone or unzip this project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deploy to GitHub Pages (Free)

### Step 1 — Create a GitHub Repository

Go to [github.com/new](https://github.com/new) and create a **public** repo.  
Name it something like `my-portfolio` or `[your-github-username].github.io`.

---

### Step 2 — Update `vite.config.js`

Open `vite.config.js` and change the `base` value to match your repo name:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // ← Replace with your actual repo name
  // ...
})
```

> ⚠️ If your repo is named `username.github.io`, set `base: '/'` instead.

---

### Step 3 — Add `homepage` to `package.json`

```json
{
  "name": "ece-portfolio",
  "homepage": "https://prash-02.github.io/portfolio",
  ...
}
```

---

### Step 4 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/prash-02/portfolio.git
git push -u origin main
```

---

### Step 5 — Deploy

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch automatically.

---

### Step 6 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select branch: `gh-pages`, folder: `/ (root)`
4. Click **Save**

Your site will be live at:
```
https://prash-02.github.io/portfolio/
```

(May take 1–2 minutes to propagate the first time.)

---

## ✏️ Personalizing the Portfolio

Search for all placeholder strings and replace them:

| Placeholder | Replace with |
|---|---|
| `[Your Name]` | Prashant Kushwaha |
| `[Your Email]` | kushwaha7757@gmail.com |
| `[Your GitHub]` | prash-02 |
| `[Your LinkedIn]` | prashantkushwaha-ec |
| `[Your College]` | Your college/university name |
| `[Your City, Country]` | Gujarat, India |
| `[Your Resume Link]` | Google Drive / Dropbox PDF link |
| `[Project 1 Name]` | Smart Anti Theft System |
| `[Internship Role / Title]` | Your internship job title |
| `[Company Name]` | Company you interned at |
| `[Hackathon / Competition Name]` | Hackathon you won/participated in |
| `[Certification Name]` | Oracle certified Datascience Associate / CS50x |
| `[X.XX]` | Your CGPA |

---

## 🔧 Customization Tips

### Change accent colors
Edit `src/index.css` CSS variables:
```css
:root {
  --cyber-cyan: #00f5ff;   /* Primary accent */
  --cyber-amber: #ffb800;  /* Secondary accent */
  --cyber-pink: #ff2d78;   /* Tertiary accent */
}
```

### Add more projects
In `src/components/Projects.jsx`, add an object to the `projects` array:
```js
{
  id: 4,
  title: 'My New Project',
  subtitle: 'Category',
  description: 'Description...',
  tags: ['Tag1', 'Tag2'],
  github: 'https://github.com/...',
  demo: 'https://...',
  color: 'cyan',  // 'cyan' | 'amber' | 'pink'
  number: '04',
}
```

### Add a real form backend
Replace the `handleSubmit` in `Contact.jsx` with [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) for server-free form handling.

### Customize the 3D scene
Edit `src/components/Scene3D.jsx` to:
- Change ring count / radius / color
- Adjust particle count (`particleCount`)
- Modify rotation speeds (`elapsed * factor`)
- Change lighting colors

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Three.js | 3D scene & WebGL |
| Lucide React | Icon library |
| gh-pages | GitHub Pages deployment |

---

## 📄 License

MIT — Free to use and modify for personal portfolios.

---

*Built with ⚡ for the Class of 2027*
