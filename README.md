# React Portfolio Template

<div align="center">

![Build Status](https://img.shields.io/github/actions/workflow/status/pakistanesss/React-Json-Config-Portfolio/build.yml?branch=main&label=build&style=flat-square)
![Deploy Demo](https://img.shields.io/github/actions/workflow/status/pakistanesss/React-Json-Config-Portfolio/deploy-demo.yml?branch=main&label=demo&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat-square)

**A modern, customizable portfolio website template built with React + Vite**

[Live Demo](https://pakistanesss.github.io/React-Json-Config-Portfolio/) • [Documentation](#-documentation) • [Getting Started](#-quick-start) • [Themes](#-themes)

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Quick Start](#-quick-start)
- [Configuration](#-configuration)
- [Themes](#-themes)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [CI/CD](#-cicd)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎨 Design & UX
- **10 Pre-designed Themes** - Choose from beautiful color schemes
- **Fully Responsive** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Professional transitions and effects
- **Modern UI** - Clean, contemporary design

### ⚙️ Easy Customization
- **Zero Code Required** - Configure everything via JSON
- **Single Config File** - All content in `src/config.json`
- **Live Reload** - See changes instantly
- **Conditional Display** - Auto-hide empty fields

### 📦 What's Included
- ✅ Hero/Landing section with CTA buttons
- ✅ About section with skills progress bars
- ✅ Projects showcase with tags and links
- ✅ Contact form with social media links
- ✅ Responsive navigation with mobile menu
- ✅ Professional footer

### 🚀 Developer Experience
- **Built with Vite** - Lightning-fast HMR
- **React 19** - Latest React features
- **GitHub Actions** - Automated CI/CD
- **ESLint** - Code quality checks
- **Production Ready** - Optimized builds

---

## 🌐 Live Demo

### **[👉 View Live Demo](https://pakistanesss.github.io/React-Json-Config-Portfolio/)** 

Experience the template in action! The live demo showcases all features, themes, and sections.

---

## 🚀 Quick Start

### Step 1: Use This Template

Click the **"Use this template"** button at the top of this repository to create your own copy.

### Step 2: Clone & Install

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### Step 3: Customize

Edit `src/config.json` with your information:

```json
{
  "theme": "purple",
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "description": "Your tagline"
  }
}
```

**That's it!** Your changes will appear instantly.

📚 **[See Full Configuration Guide →](CONFIG_GUIDE.md)**

---

## ⚙️ Configuration

All website content is controlled by a single file: **`src/config.json`**

### What You Can Configure

| Section | What It Controls |
|---------|-----------------|
| **Theme** | Color scheme (10 options) |
| **Personal** | Name, title, bio, description |
| **Stats** | Experience, projects, clients |
| **Skills** | Technologies with proficiency % |
| **Projects** | Portfolio items with tags & links |
| **Contact** | Email, phone, location |
| **Social** | GitHub, LinkedIn, Twitter links |

### Quick Example

```json
{
  "theme": "sunset",
  "personal": {
    "name": "Jane Developer",
    "title": "Full Stack Engineer",
    "description": "Building amazing web experiences"
  },
  "skills": [
    { "name": "React", "level": 90 },
    { "name": "Node.js", "level": 85 }
  ]
}
```

### Advanced Configuration

- **Conditional Display** - Leave fields empty to hide them
- **Custom Themes** - Edit `src/themes.js` to create your own
- **Component Customization** - Modify React components in `src/components/`

📚 **[Complete Configuration Guide →](CONFIG_GUIDE.md)**

---

## 🎨 Themes

Choose from **10 beautiful pre-designed themes**:

| Theme | Description | Best For |
|-------|-------------|----------|
| 🟣 **Purple Dream** | Elegant purple gradient | Professional, Modern |
| 🔵 **Ocean Blue** | Fresh blue gradient | Clean, Calming |
| 🌅 **Sunset Orange** | Warm pink to yellow | Vibrant, Energetic |
| 🌲 **Forest Green** | Teal to mint green | Natural, Refreshing |
| 🔴 **Crimson Red** | Bold red gradient | Powerful, Passionate |
| 🌙 **Midnight Blue** | Dark blue gradient | Sophisticated, Professional |
| 🌸 **Sakura Pink** | Soft pink gradient | Gentle, Elegant |
| 🌈 **Aurora** | Mint to pink gradient | Dreamy, Unique |
| 🔥 **Fire** | Red to orange gradient | Bold, Dynamic |
| 💜 **Lavender Dream** | Deep purple gradient | Rich, Luxurious |

### How to Change Theme

Simply update the `theme` field in `src/config.json`:

```json
{
  "theme": "forest"
}
```

Save the file and see your portfolio transform instantly! ✨

---

## 🚀 Deployment

Deploy your portfolio to various platforms with ease.

### GitHub Pages (Recommended)

**Automatic deployment included!**

1. Go to **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. Push your code:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push
   ```
4. Your site goes live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

📖 **[Detailed GitHub Pages Guide →](DEMO_SETUP.md)**

### Other Platforms

<details>
<summary><b>Vercel</b></summary>

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy. Vercel offers:
- Automatic deployments from Git
- Custom domains
- SSL certificates
- Global CDN

</details>

<details>
<summary><b>Netlify</b></summary>

```bash
npm run build
```

Then drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

Or connect your Git repository for automatic deployments.

</details>

<details>
<summary><b>Custom Server</b></summary>

```bash
npm run build
```

Upload the contents of the `dist` directory to your web server.

Configure your server to serve `index.html` for all routes.

</details>

---

## 📁 Project Structure

```
React-Json-Config-Portfolio/
├── .github/
│   └── workflows/           # GitHub Actions workflows
│       ├── build.yml        # Build and test
│       ├── deploy-demo.yml  # GitHub Pages deployment
│       ├── deploy-preview.yml # PR preview builds
│       └── size-check.yml   # Bundle size monitoring
├── public/
│   └── vite.svg            # Public assets
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing/hero section
│   │   ├── About.jsx       # About + skills section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Contact.jsx     # Contact form + info
│   │   └── Footer.jsx      # Footer section
│   ├── App.jsx             # Main app component
│   ├── config.json         # 🎯 YOUR CONTENT HERE
│   ├── themes.js           # Theme definitions
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── CONFIG_GUIDE.md         # Configuration documentation
├── DEMO_SETUP.md           # Deployment guide
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| **[CONFIG_GUIDE.md](CONFIG_GUIDE.md)** | Complete guide to `config.json` with examples |
| **[DEMO_SETUP.md](DEMO_SETUP.md)** | Step-by-step GitHub Pages deployment |
| **[CONTRIBUTING.md](CONTRIBUTING.md)** | Guidelines for contributors |

---

## 🔄 CI/CD

Automated workflows ensure quality and reliability:

### ✅ Build Workflow
- Runs on every push and PR
- Tests on Node.js 18.x and 20.x
- Runs linter checks
- Creates build artifacts

### 🌐 Deploy Demo
- Automatically deploys to GitHub Pages
- Updates live demo on every push
- Handles base path configuration

### 📊 Bundle Size Check
- Compares bundle sizes on PRs
- Posts detailed size reports
- Helps prevent bloat

### 🎯 Deploy Preview
- Builds preview for every PR
- Comments build status and size
- Creates downloadable artifacts

All workflows run automatically - no configuration needed!

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test your changes** (`npm run build` and `npm run lint`)
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to your fork** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Guidelines

- Follow the existing code style
- Test on multiple themes
- Update documentation if needed
- Keep bundle size in check

📖 **[Read Full Contributing Guidelines →](CONTRIBUTING.md)**

---

## 📋 Requirements

- **Node.js** 18.0.0 or higher
- **npm** 7.0.0 or higher (or yarn/pnpm)

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 💡 Tips & Tricks

- **Quick Theme Preview**: Change the theme in `config.json` and save to instantly see different color schemes
- **Hide Empty Fields**: Leave contact info or social links empty to automatically hide them
- **Test Responsive**: Use browser dev tools to test mobile/tablet views
- **Custom Colors**: Edit `src/themes.js` to create your own color scheme
- **Optimize Images**: Use WebP format for faster loading

---

## 🐛 Troubleshooting

<details>
<summary><b>Port 5173 already in use</b></summary>

Kill the process using the port or specify a different one:
```bash
npm run dev -- --port 3000
```

</details>

<details>
<summary><b>Changes not appearing</b></summary>

1. Check that you saved `config.json`
2. Verify the file has valid JSON syntax
3. Refresh your browser (Ctrl+F5 / Cmd+Shift+R)
4. Check the browser console for errors

</details>

<details>
<summary><b>Build fails</b></summary>

1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```
2. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```
3. Make sure Node.js version is 18+

</details>

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

Feel free to use this template for your personal or commercial portfolio!

---

## 🌟 Show Your Support

If you find this template helpful, please consider:

- ⭐ **Star this repository**
- 🐛 **Report issues**
- 💡 **Suggest features**
- 🤝 **Contribute improvements**
- 📢 **Share with others**

---

## 📧 Support

Need help? Have questions?

- 📖 Check the [documentation](CONFIG_GUIDE.md)
- 🐛 [Open an issue](https://github.com/pakistanesss/React-Json-Config-Portfolio/issues)
- 💬 Start a [discussion](https://github.com/pakistanesss/React-Json-Config-Portfolio/discussions)

---

<div align="center">

**Built with ❤️ using React + Vite**

[Live Demo](https://pakistanesss.github.io/React-Json-Config-Portfolio/) • [Report Bug](https://github.com/pakistanesss/React-Json-Config-Portfolio/issues) • [Request Feature](https://github.com/pakistanesss/React-Json-Config-Portfolio/issues)

</div>
