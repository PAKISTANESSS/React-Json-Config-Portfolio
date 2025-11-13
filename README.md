# Personal Portfolio Website

![Build Status](https://img.shields.io/github/actions/workflow/status/YOUR_USERNAME/YOUR_REPO/build.yml?branch=main&label=build&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat-square)

A modern, responsive personal portfolio website built with React and Vite. Features smooth animations, a clean design, and sections for showcasing your work and skills.

> **Note:** Replace `YOUR_USERNAME` and `YOUR_REPO` in the badge URLs above with your GitHub username and repository name.

## Features

- ✨ Modern and clean design
- 🎨 **10 customizable color themes** - Choose your style!
- 📱 Fully responsive layout
- 🚀 Smooth animations and transitions
- 📧 Contact form with conditional display
- 🎯 Project showcase section
- 💼 About and skills section
- 🔗 Social media links (auto-hide if empty)
- ⚙️ **Zero code required** - Configure everything via JSON
- 🔄 **CI/CD Ready** - Automated build checks with GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### 🎯 Easy Customization with config.json

All website content can be customized by editing a single file: **`src/config.json`**

This file contains all your:
- **Theme selection** (10 beautiful color themes)
- Personal information (name, title, bio)
- Skills and their proficiency levels
- Projects portfolio
- Contact information
- Social media links
- Statistics

**Quick Start:**
1. Open `src/config.json`
2. Replace placeholder content with your information
3. Save the file
4. The website updates automatically!

📚 **See `CONFIG_GUIDE.md` for detailed instructions and examples**

### Advanced Customization

If you want to modify the component code directly, all components are in `src/components/`:
- `Hero.jsx` - Landing section
- `About.jsx` - About section with skills
- `Projects.jsx` - Portfolio showcase
- `Contact.jsx` - Contact form and info
- `Footer.jsx` - Footer section
- `Navbar.jsx` - Navigation bar

### Themes & Colors

The website comes with **10 pre-designed color themes**! Simply change the `theme` field in `src/config.json`:

```json
{
  "theme": "sunset"
}
```

**Available themes:** `purple`, `blue`, `sunset`, `forest`, `crimson`, `midnight`, `sakura`, `aurora`, `fire`, `lavender`

See `CONFIG_GUIDE.md` for theme previews and descriptions.

**Advanced:** You can create custom themes by editing `src/themes.js`

### Adding Your Photo

To add your photo instead of the placeholder graphic:
1. Add your image to the `public` folder (e.g., `public/profile.jpg`)
2. Update the `image` field in `Hero.jsx` or add it to config.json if you'd like
3. Replace the SVG placeholder with `<img src="/profile.jpg" alt={config.personal.name} />`

## Tech Stack

- React 19
- Vite
- CSS3 with custom animations
- Modern ES6+ JavaScript

## Project Structure

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Deployment

This site can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder
```

### GitHub Pages
Add to `vite.config.js`:
```js
export default {
  base: '/repository-name/',
}
```

Then build and deploy the `dist` folder.

## CI/CD

This repository includes GitHub Actions workflows for:

### Build Workflow (`.github/workflows/build.yml`)
- ✅ Runs on every push and pull request
- 🧪 Tests builds on Node.js 18.x and 20.x
- 📦 Creates build artifacts
- 🔍 Runs linter checks

### Deploy Preview (`.github/workflows/deploy-preview.yml`)
- 🎯 Automatically builds on PR creation
- 💬 Comments on PR with build status and size
- 📤 Uploads preview artifacts

### Bundle Size Check (`.github/workflows/size-check.yml`)
- 📊 Compares bundle sizes between base and PR
- 📈 Shows size impact of changes
- 💬 Comments detailed size report on PRs

All workflows ensure code quality and prevent broken builds from being merged!

## Contributing

When creating a pull request:
1. The build workflow will automatically run
2. Ensure all checks pass before merging
3. Review the bundle size impact
4. Test with multiple themes

## License

MIT License - feel free to use this template for your personal portfolio!

## Support

If you have any questions or need help customizing the website, feel free to reach out!
