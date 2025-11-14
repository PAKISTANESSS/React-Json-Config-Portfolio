# Contributing to React Portfolio Template

First off, thank you for considering contributing to this project! 🎉

This document provides guidelines for contributing to the React Portfolio Template. Following these guidelines helps maintain code quality and makes the contribution process smooth for everyone.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing](#testing)

---

## 📜 Code of Conduct

This project follows a Code of Conduct. By participating, you are expected to uphold this code:

- **Be respectful** and inclusive
- **Be patient** with others
- **Accept constructive criticism** gracefully
- **Focus on what's best** for the community

---

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When reporting a bug, include:**

- **Clear title** and description
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node version)
- **Config file** (if relevant, remove personal info)

**Example:**

```markdown
**Bug:** Contact form doesn't hide when email is empty

**Steps:**
1. Set `"email": ""` in config.json
2. Run `npm run dev`
3. Navigate to contact section

**Expected:** Email field should be hidden
**Actual:** Email field still shows

**Environment:**
- OS: Windows 11
- Browser: Chrome 120
- Node: 20.10.0
```

### Suggesting Enhancements

Enhancement suggestions are welcome! Please include:

- **Clear use case** - Why is this needed?
- **Proposed solution** - How should it work?
- **Alternatives considered** - What other options did you think of?
- **Mockups/examples** (if applicable)

### Pull Requests

We actively welcome your pull requests!

---

## 💻 Development Setup

### Prerequisites

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher
- Git

### Setup Steps

1. **Fork the repository**
   
   Click the "Fork" button at the top of the repository.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/React-Json-Config-Portfolio.git
   cd React-Json-Config-Portfolio
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/pakistanesss/React-Json-Config-Portfolio.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

---

## 🔄 Pull Request Process

### Before Submitting

- [ ] **Test your changes** thoroughly
- [ ] **Run the linter** (`npm run lint`)
- [ ] **Build successfully** (`npm run build`)
- [ ] **Test with multiple themes**
- [ ] **Update documentation** if needed
- [ ] **Keep commits clean** and well-described

### Submitting the PR

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub

3. **Fill out the PR template** completely

4. **Wait for review**
   - CI/CD will run automatically
   - A maintainer will review your PR
   - Address any feedback

### PR Checklist

```markdown
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Build passes (`npm run build`)
- [ ] Linter passes (`npm run lint`)
- [ ] Tested on multiple themes
- [ ] Tested responsive design
- [ ] Bundle size checked
```

---

## 📝 Coding Standards

### JavaScript/React

- **Use functional components** with hooks
- **Use const/let** instead of var
- **Destructure props** when possible
- **Keep components small** and focused
- **Use meaningful variable names**

**Good:**
```javascript
const Hero = () => {
  const { name, title } = config.personal;
  
  return (
    <section className="hero">
      <h1>{name}</h1>
      <p>{title}</p>
    </section>
  );
};
```

**Avoid:**
```javascript
function Hero() {
  var n = config.personal.name;
  var t = config.personal.title;
  
  return <section className="hero"><h1>{n}</h1><p>{t}</p></section>;
}
```

### CSS

- **Use CSS variables** for colors
- **Use meaningful class names**
- **Keep specificity low**
- **Mobile-first approach**
- **Consistent spacing**

**Good:**
```css
.hero {
  background: var(--gradient);
  padding: 2rem;
}

@media (min-width: 768px) {
  .hero {
    padding: 4rem;
  }
}
```

### File Organization

- **One component per file**
- **Co-locate styles** with components
- **Keep components in `src/components/`**
- **Use consistent naming** (PascalCase for components)

---

## 📨 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(themes): add ocean blue theme

Add new ocean blue color theme with fresh, calming gradient.
Includes all necessary CSS variable updates and theme config.

Closes #42
```

```bash
fix(contact): hide empty contact fields

Contact fields now properly hide when values are empty or null.
Uses optional chaining to safely check for values.

Fixes #38
```

```bash
docs(readme): improve quick start section

Add more detailed setup instructions with code examples.
Include troubleshooting tips for common issues.
```

### Best Practices

- **Use imperative mood** ("add" not "added")
- **Keep subject line short** (50 chars or less)
- **Capitalize first letter**
- **No period at the end** of subject
- **Reference issues/PRs** in footer

---

## 🧪 Testing

### Before Submitting

1. **Test Locally**
   ```bash
   npm run dev
   ```
   - Test all sections
   - Try different themes
   - Check responsive design
   - Test with various config options

2. **Build Test**
   ```bash
   npm run build
   npm run preview
   ```
   - Ensure build succeeds
   - Test production build
   - Check for console errors

3. **Lint Check**
   ```bash
   npm run lint
   ```
   - Fix any linter errors
   - Maintain code quality

### Theme Testing

Test your changes with multiple themes:
- Change `theme` in `config.json`
- Verify colors look good
- Check contrast/readability
- Test all theme values:
  - `purple`, `blue`, `sunset`
  - `forest`, `crimson`, `midnight`
  - `sakura`, `aurora`, `fire`, `lavender`

### Responsive Testing

Test on different screen sizes:
- 📱 Mobile: 375px, 414px
- 📱 Tablet: 768px, 1024px
- 💻 Desktop: 1280px, 1920px

Use browser dev tools device emulation.

### Config Testing

Test with various config scenarios:
- Empty fields (should hide)
- Long text (should wrap properly)
- Special characters
- Different data lengths

---

## 🎨 Adding New Themes

To add a new theme:

1. **Edit `src/themes.js`**
   ```javascript
   newtheme: {
     name: "Theme Name",
     primary: "#hexcolor",
     secondary: "#hexcolor",
     gradient: "linear-gradient(...)",
     highlight: "linear-gradient(...)"
   }
   ```

2. **Update `CONFIG_GUIDE.md`**
   - Add theme to the table
   - Include description
   - Add emoji icon

3. **Test thoroughly**
   - Check all sections
   - Verify readability
   - Test on light/dark backgrounds

---

## 🐛 Debugging Tips

### Common Issues

**Changes not appearing:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

**Build fails:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Linter errors:**
```bash
# Auto-fix what's possible
npm run lint --fix
```

### Browser DevTools

- **Console**: Check for JavaScript errors
- **Network**: Check for failed requests
- **Elements**: Inspect CSS and DOM
- **Performance**: Check render times

---

## 📖 Documentation

When making changes, update relevant documentation:

- **README.md** - Main project documentation
- **CONFIG_GUIDE.md** - Configuration details
- **DEMO_SETUP.md** - Deployment instructions
- **CONTRIBUTING.md** - This file
- **Code comments** - For complex logic

---

## ❓ Questions?

- 💬 **[Start a Discussion](https://github.com/pakistanesss/React-Json-Config-Portfolio/discussions)**
- 🐛 **[Open an Issue](https://github.com/pakistanesss/React-Json-Config-Portfolio/issues)**
- 📧 **Contact maintainers**

---

## 🎉 Recognition

Contributors will be recognized in:
- GitHub contributors page
- Release notes (for significant contributions)
- Documentation (where appropriate)

---

Thank you for contributing! 🙏

Your efforts help make this template better for everyone.

---

<div align="center">

**Happy Coding!** 💻✨

</div>

