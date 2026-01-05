# Manuel Scionti - Terminal Portfolio

A Unix terminal-style portfolio built with Hugo.

## 🚀 Quick Deploy

1. **Upload this entire folder** to your GitHub repo `mnlscn.github.io`
2. Go to **Settings → Pages → Source** → Select **"GitHub Actions"**
3. Wait 2 minutes for the build
4. Visit `mnlscn.github.io` 🎉

## 📝 Adding Blog Posts

Create a new file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: 2025-01-20
description: "A brief description"
tags: ["AI", "LLM", "Tutorial"]
---

Your content here in Markdown...
```

Then commit and push — GitHub Actions will rebuild automatically.

## 🛠️ Local Development (Optional)

```bash
# Install Hugo (macOS)
brew install hugo

# Run locally
hugo server -D

# Open http://localhost:1313
```

## 📁 Structure

```
├── content/
│   ├── _index.md          # Homepage
│   └── blog/
│       └── *.md           # Blog posts
├── layouts/
│   ├── _default/
│   │   └── baseof.html    # Base template
│   ├── blog/
│   │   ├── list.html      # Blog list
│   │   └── single.html    # Blog post
│   └── index.html         # Homepage
├── static/
│   ├── css/style.css      # Terminal styles
│   └── js/main.js         # Interactivity
├── hugo.toml              # Site config
└── .github/workflows/
    └── hugo.yml           # Auto-deploy
```

## ✏️ Customization

Edit `hugo.toml` to update:
- Email
- Social links
- Site description

Edit `layouts/index.html` to update:
- About section content
- Projects list
- Skills

## 🎨 Terminal Commands

Users can type commands or click buttons:
- `about` - Show about section
- `projects` - List projects
- `skills` - Show skills
- `blog` - View blog posts
- `contact` - Contact info
- `github` - Open GitHub
- `linkedin` - Open LinkedIn
- `help` - Show all commands

Keyboard shortcuts: `1` `2` `3` `4` `5` for sections, `/` to focus input.
