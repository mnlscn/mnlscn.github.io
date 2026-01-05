# Manuel Scionti - Portfolio

Personal portfolio built with Hugo featuring a code/terminal aesthetic.

## 📁 Structure

```
manuel-portfolio/
├── hugo.toml              # Site configuration
├── content/
│   ├── _index.md          # Homepage content
│   └── blog/
│       ├── _index.md      # Blog list page
│       └── *.md           # Blog posts
├── layouts/
│   ├── _default/
│   │   └── baseof.html    # Base template
│   ├── blog/
│   │   ├── list.html      # Blog list template
│   │   └── single.html    # Single post template
│   └── index.html         # Homepage template
└── static/
    ├── css/style.css      # All styles
    └── js/main.js         # Neural network + effects
```

## 🚀 Setup & Development

### 1. Install Hugo

**macOS:**
```bash
brew install hugo
```

**Windows:**
```bash
choco install hugo-extended
```

**Linux:**
```bash
sudo apt install hugo
# oppure
sudo snap install hugo
```

### 2. Run locally

```bash
cd manuel-portfolio
hugo server -D
```

Apri http://localhost:1313 nel browser.

### 3. Add a new blog post

```bash
hugo new blog/my-new-post.md
```

Oppure crea manualmente un file in `content/blog/`:

```markdown
---
title: "Titolo del Post"
date: 2025-01-20
tags: ["AI", "LLM"]
tokens: "1.5k"
---

Il contenuto del tuo post qui...
```

## 📤 Deploy su GitHub Pages

### Step 1: Crea il repository

Se non esiste già, crea `mnlscn.github.io` su GitHub.

### Step 2: Configura GitHub Actions

Crea il file `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.124.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Abilita GitHub Pages

1. Vai su GitHub → Repository → Settings → Pages
2. Source: seleziona "GitHub Actions"

### Step 4: Push e deploy

```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

GitHub Actions builderà e deployerà automaticamente.

### Step 5: Custom domain (opzionale)

1. Compra il dominio (es. `manuel-info.md`)
2. Crea file `static/CNAME` con dentro solo: `manuel-info.md`
3. Dal provider DNS, aggiungi:
   - Type: CNAME
   - Host: @ (o www)
   - Value: mnlscn.github.io

## ✏️ Personalizzazione

### Modificare i dati personali

Edita `hugo.toml`:

```toml
[params]
  email = "tua@email.com"
  github = "https://github.com/tuousername"
  linkedin = "https://linkedin.com/in/tuoprofilo"
```

### Modificare l'homepage

Edita `layouts/index.html` — contiene tutto l'HTML delle sezioni.

### Modificare gli stili

Edita `static/css/style.css` — tutte le variabili colore sono in `:root`.

### Modificare le animazioni

Edita `static/js/main.js` — neural network e token streaming.

## 📝 Scrivere blog post

I post sono scritti in Markdown. Supportano:

- **Headers**: `## Titolo`
- **Code blocks**: ` ```python ... ``` `
- **Links**: `[testo](url)`
- **Lists**: `- item`
- **Blockquotes**: `> citazione`

Il frontmatter richiesto:

```yaml
---
title: "Titolo"
date: 2025-01-20
tags: ["tag1", "tag2"]  # opzionale
tokens: "1.5k"          # opzionale, per l'estetica
---
```

---

Built with Hugo 🖤
