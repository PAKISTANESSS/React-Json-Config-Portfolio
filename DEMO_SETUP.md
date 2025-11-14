# GitHub Pages Deployment Guide

> **Step-by-step guide to deploy your portfolio to GitHub Pages**

---

## 📖 Table of Contents

- [What You'll Get](#what-youll-get)
- [Setup Steps](#setup-steps)
- [Customizing the Demo](#customizing-the-demo)
- [Automatic Updates](#automatic-updates)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)
- [Advanced Configuration](#advanced-configuration)

---

## 🌐 What You'll Get

A **free, live demo** of your portfolio at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**  
`https://pakistanesss.github.io/React-Json-Config-Portfolio/`

### Features
- ✅ **Free hosting** - No cost  
- ✅ **HTTPS included** - Secure by default  
- ✅ **Auto-deploy** - Updates on every push  
- ✅ **Global CDN** - Fast loading worldwide  
- ✅ **Custom domain support** - Use your own domain

---

## 📋 Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Scroll down and click **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
   
   ![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

5. Click **Save**

### 2. Push Your Code

The workflow will automatically run when you push to `main` or `master`:

```bash
git add .
git commit -m "Add demo deployment"
git push origin main
```

### 3. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy Demo to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. ✅ Once complete, your demo is live!

### 4. Access Your Demo

Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

---

## 🔄 Automatic Updates

Every time you push to the main branch:
1. ✅ The workflow automatically runs
2. 🏗️ Builds the latest version
3. 🚀 Deploys to GitHub Pages
4. 🌐 Your demo is updated!

---

## 🎨 Customizing the Demo

### Update Your Config

Simply edit `src/config.json` with the content you want to display on your demo site.

**Tips for demo content:**
- Use generic or template-focused content if you want to showcase the template
- Or use your real portfolio to show off your work as an example
- Make sure you're comfortable with any personal information being public

**Example demo-style content:**
```json
{
  "theme": "purple",
  "personal": {
    "name": "Portfolio Template Demo",
    "title": "Modern React Portfolio Template",
    "description": "A customizable portfolio - edit config.json to make it yours!"
  }
}
```

**⚠️ Important:** Whatever is in `src/config.json` will be publicly visible on GitHub Pages.

---

## 🚨 Troubleshooting

### Pages Not Showing Up

1. **Check Workflow Status**
   - Go to Actions tab
   - Make sure "Deploy Demo to GitHub Pages" completed successfully
   - Look for ✅ green checkmark

2. **Verify Pages Settings**
   - Settings → Pages
   - Ensure Source is set to "GitHub Actions"

3. **Check Repository Visibility**
   - Public repositories: Works immediately
   - Private repositories: Requires GitHub Pro, Team, or Enterprise

### 404 Error or Broken Assets

This usually means the base path isn't configured correctly.

**Fix:**
The `vite.config.js` is already configured to handle this automatically, but if you have issues:

1. Check that `PUBLIC_URL` is set in the workflow (it is by default)
2. Verify the base path matches your repository name

### Manual Trigger

If you want to redeploy without pushing code:

1. Go to **Actions** tab
2. Click **Deploy Demo to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select branch and click **Run workflow**

---

## 📊 Monitoring

### View Deployment Status

- **Actions Tab**: See all deployment runs
- **Environments**: Check deployment history
  - Go to repository → **Environments** → **github-pages**
  - View deployment history and URLs

---

## 🔒 Security Notes

1. **Don't commit sensitive data** to the demo
2. **Use placeholder content** in `config.json` for the demo
3. **Review PR changes** before merging (they'll be deployed!)

---

## 📝 Updating README

Add a demo badge and link to your README.md:

```markdown
## 🌐 Live Demo

Check out the live demo: [https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)

[![Deploy Demo](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions/workflows/deploy-demo.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions/workflows/deploy-demo.yml)
```

---

## 🎯 Best Practices for Template Demo

1. **Use Generic Content**
   - Name: "Your Name" or "Portfolio Demo"
   - Don't use personal information
   
2. **Showcase All Features**
   - Fill in all sections (projects, skills, etc.)
   - Use different themes in screenshots
   
3. **Add Clear CTA**
   - "Use This Template" button
   - Link to setup instructions
   
4. **Keep It Updated**
   - Demo automatically updates with each push
   - Test changes locally first

---

## ⚙️ Advanced Configuration

### Custom Domain

Want to use a custom domain like `demo.yoursite.com`?

1. Add a `public/CNAME` file with your domain:
   ```
   demo.yoursite.com
   ```

2. Configure DNS:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`

3. Update Settings → Pages → Custom domain

### Deploy to Different Branch

If you want to deploy from a specific branch:

Edit `.github/workflows/deploy-demo.yml`:

```yaml
on:
  push:
    branches: [ demo ]  # Only deploy from 'demo' branch
```

---

## 🎉 That's It!

Your portfolio template now has a live demo that automatically updates! This makes it much easier for people to see what they're getting before using your template.

**Next Steps:**
1. ✅ Enable GitHub Pages in repository settings
2. ✅ Push your code
3. ✅ Share your demo URL!
4. ✅ Add demo link to README

Happy sharing! 🚀

