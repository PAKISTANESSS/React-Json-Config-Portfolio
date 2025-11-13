# Configuration Guide

This guide explains how to customize your personal website by editing the `src/config.json` file.

## Overview

All the content on your website can be customized by editing a single JSON file: `src/config.json`

You don't need to touch any React component code - just edit the JSON file and the website will automatically update!

## Configuration Structure

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

## Quick Start Steps

1. **Open** `src/config.json` in your text editor

2. **Replace** all the placeholder content:
   - Change "Your Name" to your actual name
   - Update your job title and description
   - Add your real email, phone, and location
   - Update social media links

3. **Customize Skills:**
   ```json
   "skills": [
     { "name": "Your Skill", "level": 95 },
     { "name": "Another Skill", "level": 80 }
   ]
   ```

4. **Add Your Projects:**
   - Replace sample projects with your real projects
   - Update titles, descriptions, and links
   - Add relevant technology tags

5. **Save** the file

6. **View** your changes - Vite will automatically reload!

---

## Example: Full Config

```json
{
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

## Tips & Best Practices

✅ **DO:**
- Use valid JSON syntax (commas, quotes, brackets)
- Keep descriptions concise and engaging
- Use realistic skill levels
- Test your changes by viewing the site

❌ **DON'T:**
- Forget commas between items
- Use single quotes (use double quotes for JSON)
- Make descriptions too long
- Leave trailing commas at the end of arrays/objects

---

## Validation

After editing, make sure your JSON is valid:

1. Use a JSON validator (like jsonlint.com)
2. Or check the browser console for errors
3. Most code editors highlight JSON syntax errors

---

## Need Help?

If the website doesn't load after editing:
1. Check the browser console (F12) for errors
2. Validate your JSON syntax
3. Make sure you saved the file
4. Refresh the page (Ctrl+R or Cmd+R)

---

Happy customizing! 🎉

