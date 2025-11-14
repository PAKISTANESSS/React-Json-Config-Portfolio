# Complete Configuration Guide

> **The ultimate guide to customizing your portfolio using `config.json`**

---

## 📖 Table of Contents

- [Overview](#overview)
- [Theme Selection](#theme-selection)
- [Personal Information](#personal-information)
- [Statistics](#statistics)
- [Skills](#skills)
- [Projects](#projects)
- [Contact Information](#contact-information)
- [Social Media](#social-media)
- [Quick Start Steps](#quick-start-steps)
- [Full Example](#full-example)
- [Tips & Best Practices](#tips--best-practices)
- [Troubleshooting](#troubleshooting)

---

## 📝 Overview

All the content on your website can be customized by editing a single JSON file: **`src/config.json`**

### What Makes This Special?

✅ **No code required** - Just edit JSON
✅ **Live reload** - See changes instantly  
✅ **Smart defaults** - Empty fields auto-hide  
✅ **Type safe** - Clear structure to follow  
✅ **Fast** - Change theme in seconds  

### How It Works

```
Edit config.json → Save file → See changes instantly!
```

No React knowledge needed. No CSS required. Just edit and done! 🎉

---

## Configuration Structure

### Theme Selection

```json
{
  "theme": "purple"
}
```

**Available Themes:**

Choose from 10 beautiful pre-designed color themes. Simply set the `theme` field to one of these values:

| Theme Name | Value | Description |
|------------|-------|-------------|
| 🟣 **Purple Dream** | `"purple"` | Elegant purple gradient (default) - Professional and modern |
| 🔵 **Ocean Blue** | `"blue"` | Fresh blue gradient - Clean and calming |
| 🌅 **Sunset Orange** | `"sunset"` | Warm pink to yellow gradient - Vibrant and energetic |
| 🌲 **Forest Green** | `"forest"` | Teal to mint green gradient - Natural and refreshing |
| 🔴 **Crimson Red** | `"crimson"` | Bold red gradient - Powerful and passionate |
| 🌙 **Midnight Blue** | `"midnight"` | Dark blue gradient - Sophisticated and professional |
| 🌸 **Sakura Pink** | `"sakura"` | Soft pink gradient - Gentle and elegant |
| 🌈 **Aurora** | `"aurora"` | Mint to pink gradient - Dreamy and unique |
| 🔥 **Fire** | `"fire"` | Red to orange gradient - Bold and dynamic |
| 💜 **Lavender Dream** | `"lavender"` | Deep purple gradient - Rich and luxurious |

**Example:**
```json
{
  "theme": "sunset",
  "personal": {
    "name": "Your Name",
    ...
  }
}
```

**Tips:**
- The theme affects all gradients, buttons, and accent colors throughout the site
- Changes take effect immediately when you save the config file
- All themes are optimized for readability and accessibility
- Try different themes to find the one that matches your personality!

---

### Personal Information

```json
"personal": {
  "name": "Your Name",
  "title": "Your Job Title | Role | Expertise",
  "description": "A short tagline about what you do",
  "aboutText": [
    "First paragraph about yourself",
    "Second paragraph about yourself"
  ]
}
```

**Fields:**
- `name` - Your full name (appears in hero section and footer)
- `title` - Your job title or professional tagline
- `description` - A short description that appears under your title
- `aboutText` - Array of paragraphs for your About section

---

### Statistics

```json
"stats": {
  "experience": "5+",
  "experienceLabel": "Years Experience",
  "projects": "50+",
  "projectsLabel": "Projects Completed",
  "clients": "30+",
  "clientsLabel": "Happy Clients"
}
```

**Fields:**
- Each stat has a value (e.g., "5+") and a label
- You can use numbers, "+", or any short text

---

### Skills

```json
"skills": [
  { "name": "React", "level": 90 },
  { "name": "JavaScript", "level": 85 }
]
```

**Fields:**
- `name` - Name of the skill/technology
- `level` - Proficiency level (0-100)

**Tips:**
- Add as many skills as you want
- Remove skills you don't need
- The level determines the progress bar width

---

### Projects

```json
"projects": [
  {
    "title": "Project Name",
    "description": "Project description",
    "image": "🛒",
    "tags": ["React", "Node.js", "MongoDB"],
    "link": "#"
  }
]
```

**Fields:**
- `title` - Project name
- `description` - Brief project description
- `image` - Emoji icon (you can use any emoji or replace with actual image paths later)
- `tags` - Array of technologies used
- `link` - URL to the project (GitHub, live demo, etc.)

**Tips:**
- Add as many projects as you want
- Remove sample projects you don't need
- Use "#" for placeholder links
- You can use emojis for quick setup, or replace with actual image URLs

---

### Contact Information

```json
"contact": {
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567",
  "location": "Your City, Country"
}
```

**Fields:**
- `email` - Your email address
- `phone` - Your phone number
- `location` - Your city and country

---

#### 🎯 Conditional Display - Hide Contact Info

**The website automatically hides contact fields that are empty or don't exist!**

Each contact information field (email, phone, location) will only display if it has a value. This is useful if you only want to share certain contact methods.

**Example - Only show email:**
```json
"contact": {
  "email": "your.email@example.com",
  "phone": "",
  "location": ""
}
```
Result: Only the email field will appear in the contact section.

**Example - Hide phone number:**
```json
"contact": {
  "email": "your.email@example.com",
  "location": "San Francisco, USA"
}
```
Result: Email and location will display, but no phone number field.

**Example - Show all contact info:**
```json
"contact": {
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567",
  "location": "Your City, Country"
}
```
Result: All three contact methods will be displayed.

---

### Social Media

```json
"social": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "twitter": "https://twitter.com/yourusername"
}
```

**Fields:**
- `github` - Your GitHub profile URL
- `linkedin` - Your LinkedIn profile URL
- `twitter` - Your Twitter/X profile URL

**Tips:**
- Replace "yourusername" with your actual username
- Use full URLs including "https://"
- Links will open in new tabs automatically

---

#### 🎯 Conditional Display - Hide Social Links

**The website automatically hides social links that are empty or don't exist!**

This means you only see the social media links you actually configure. If you don't have a Twitter account or don't want to display it, simply leave it empty or remove it from the config.

**Method 1 - Set to empty string:**
```json
"social": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "twitter": ""
}
```
Result: Only GitHub and LinkedIn icons will appear on the website.

**Method 2 - Remove the field entirely:**
```json
"social": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername"
}
```
Result: Same as above - only GitHub and LinkedIn will display.

**Method 3 - Hide all social links:**
```json
"social": {
  "github": "",
  "linkedin": "",
  "twitter": ""
}
```
Result: The entire "Connect" section in the footer will be hidden, and no social icons will appear in the contact section.

**Where social links appear:**
- Contact section (as icon buttons)
- Footer (as text links under "Connect")
- Both locations automatically hide links based on your config!

---

## Quick Start Steps

1. **Open** `src/config.json` in your text editor

2. **Choose a theme** that matches your style:
   - Set `"theme"` to one of: `purple`, `blue`, `sunset`, `forest`, `crimson`, `midnight`, `sakura`, `aurora`, `fire`, `lavender`
   - Try different themes to see which one you like!

3. **Replace** all the placeholder content:
   - Change "Your Name" to your actual name
   - Update your job title and description
   - Add your real email, phone, and location
   - Update social media links

4. **Customize Skills:**
   ```json
   "skills": [
     { "name": "Your Skill", "level": 95 },
     { "name": "Another Skill", "level": 80 }
   ]
   ```

5. **Add Your Projects:**
   - Replace sample projects with your real projects
   - Update titles, descriptions, and links
   - Add relevant technology tags

6. **Save** the file

7. **View** your changes - Vite will automatically reload!

---

## Example: Full Config

```json
{
  "theme": "sunset",
  "personal": {
    "name": "John Doe",
    "title": "Full Stack Developer | React Specialist",
    "description": "Building modern web applications with clean code and great UX.",
    "aboutText": [
      "I'm a passionate full-stack developer with 7 years of experience creating scalable web applications. I specialize in React, Node.js, and modern JavaScript frameworks.",
      "I love solving complex problems and building products that make a difference. When I'm not coding, I contribute to open-source projects and write technical articles."
    ]
  },
  "stats": {
    "experience": "7+",
    "experienceLabel": "Years Experience",
    "projects": "100+",
    "projectsLabel": "Projects Completed",
    "clients": "50+",
    "clientsLabel": "Happy Clients"
  },
  "skills": [
    { "name": "React", "level": 95 },
    { "name": "JavaScript/TypeScript", "level": 90 },
    { "name": "Node.js", "level": 85 },
    { "name": "PostgreSQL", "level": 80 }
  ],
  "contact": {
    "email": "john.doe@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "San Francisco, USA"
  },
  "social": {
    "github": "https://github.com/johndoe",
    "linkedin": "https://linkedin.com/in/johndoe",
    "twitter": "https://twitter.com/johndoe"
  }
}
```

---

## 💡 Tips & Best Practices

### JSON Syntax Rules

✅ **DO:**
- Use **double quotes** for all strings
- Add **commas** between items
- Keep proper **indentation** for readability
- Use **valid JSON** syntax

❌ **DON'T:**
- Use single quotes ('text')
- Forget commas between items
- Add trailing commas at the end
- Mix up brackets `[]` and braces `{}`

### Content Tips

| Aspect | Best Practice | Example |
|--------|--------------|---------|
| **Name** | Use your real or brand name | "Jane Developer" |
| **Title** | Be specific and memorable | "Full Stack Engineer & UI Designer" |
| **Description** | Keep it under 100 characters | "Building amazing web experiences" |
| **Skills** | List 4-8 key skills | Focus on your strongest areas |
| **Projects** | Show 3-6 best projects | Quality over quantity |

### Writing Effective Descriptions

**For Projects:**
- Start with what it does
- Mention key technologies
- Keep it under 200 characters
- End with the value/benefit

**Good Example:**
```
"A collaborative task management app with real-time updates, drag-and-drop functionality, and team collaboration features."
```

**Avoid:**
```
"This is a project I made using React and stuff. It's pretty cool and has lots of features."
```

### Theme Selection

**Choose themes that match your brand:**

- **Professional**: `midnight`, `blue`, `purple`
- **Creative**: `sunset`, `aurora`, `lavender`
- **Bold**: `fire`, `crimson`
- **Natural**: `forest`, `sakura`

**Tip:** Try 2-3 themes and ask friends which looks best!

---

## ✅ Validation

### Check Your JSON

After editing, validate your JSON:

1. **Online Validator**: [jsonlint.com](https://jsonlint.com)
2. **VS Code**: Install "JSON" extension (shows errors inline)
3. **Browser Console**: Press F12 and check for errors
4. **Command Line**:
   ```bash
   node -e "JSON.parse(require('fs').readFileSync('src/config.json', 'utf8'))"
   ```

### Common JSON Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `Unexpected token` | Missing comma or quote | Add comma between items |
| `Unexpected end` | Missing closing bracket | Check all `{` have `}` |
| `Unexpected string` | Missing comma before | Add comma after previous item |
| `Unexpected number` | Number as object key | Wrap in quotes: `"level": 90` |

### Auto-Format Your JSON

**VS Code:**
- Right-click → Format Document
- Or: `Shift + Alt + F` (Windows/Linux)
- Or: `Shift + Option + F` (Mac)

**Online:**
- Paste into [jsonformatter.org](https://jsonformatter.org)
- Click "Format/Beautify"

---

## 🔧 Troubleshooting

### Website Doesn't Load

**Problem:** Blank page or errors after editing config

**Solutions:**
1. **Check browser console** (F12)
   - Look for red error messages
   - Common: JSON syntax errors
   
2. **Validate JSON**
   - Copy your config to [jsonlint.com](https://jsonlint.com)
   - Fix any reported errors
   
3. **Check file saved**
   - Look for dot/asterisk in tab title
   - Save again: `Ctrl+S` / `Cmd+S`
   
4. **Hard refresh**
   - `Ctrl+Shift+R` (Windows/Linux)
   - `Cmd+Shift+R` (Mac)

### Changes Not Appearing

**Problem:** Made changes but don't see them

**Solutions:**
```bash
# 1. Restart dev server
npm run dev

# 2. Clear cache
rm -rf node_modules/.vite
npm run dev

# 3. Reinstall (if above fails)
rm -rf node_modules
npm install
npm run dev
```

### Theme Not Changing

**Problem:** Changed theme but colors stay the same

**Check:**
- Theme name spelling (must be exact)
- Valid theme name (see theme table above)
- Browser cache cleared
- Dev server restarted

**Valid themes:** `purple`, `blue`, `sunset`, `forest`, `crimson`, `midnight`, `sakura`, `aurora`, `fire`, `lavender`

### Field Not Hiding When Empty

**Problem:** Set field to `""` but it still shows

**Solution:**
Make sure field is truly empty:
```json
// ✅ Correct
"email": ""

// ✅ Also correct (removed entirely)
// "email": "...",  

// ❌ Wrong (spaces count as content)
"email": "  "

// ❌ Wrong (null shows as text)
"email": null
```

### Build Errors

**Problem:** `npm run build` fails

**Common causes:**
1. **JSON syntax error** - Validate your JSON
2. **Missing dependency** - Run `npm install`
3. **Node version** - Ensure Node 18+
4. **Cache issue** - Clear cache (see above)

---

## 📧 Still Need Help?

If you're stuck:

1. 📖 **Re-read this guide** - Answer might be here
2. 🔍 **Search issues** - [GitHub Issues](https://github.com/pakistanesss/React-Json-Config-Portfolio/issues)
3. 💬 **Ask for help** - [Open a discussion](https://github.com/pakistanesss/React-Json-Config-Portfolio/discussions)
4. 🐛 **Report a bug** - [Create an issue](https://github.com/pakistanesss/React-Json-Config-Portfolio/issues/new)

---

## 🎉 You're All Set!

You now know everything needed to customize your portfolio!

**Next steps:**
1. ✅ Fill in your information
2. ✅ Choose your favorite theme
3. ✅ Add your projects
4. ✅ Deploy to GitHub Pages

**Happy customizing!** 🚀

---

<div align="center">

**Questions?** Check the [main README](README.md) or [open an issue](https://github.com/pakistanesss/React-Json-Config-Portfolio/issues)

</div>

