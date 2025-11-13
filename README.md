# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. Features smooth animations, a clean design, and sections for showcasing your work and skills.

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

## License

MIT License - feel free to use this template for your personal portfolio!

## Support

If you have any questions or need help customizing the website, feel free to reach out!
