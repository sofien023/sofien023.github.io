# Sofien Ghorbel Portfolio

Personal portfolio website for Sofien Ghorbel - Data Scientist & Software Developer.

## Quick Start

1. Copy `.env.example` to `.env` and fill your API keys:
   ```
   cp .env.example .env
   nano .env  # Edit with your EmailJS & Google Analytics keys
   ```

2. Build (injects secure keys):
   ```
   node build.js
   ```

3. Open site:
   ```
   # On Windows
   start index.html

   # Or use Live Server extension
   ```

## Deploy to gh-pages

Install gh-pages:
```
npm i -g gh-pages
```

Deploy:
```
node build.js && gh-pages -d .
```

## Structure

```
css/style.css      # Styles (external)
js/script.js       # JS + Languages (EN/FR/AR translations)
js/keys-built.js   # API Keys (built from .env, gitignored)
build.js           # Build script
index.html         # Clean HTML
```

## Features

- Multi-language (EN/FR/AR with RTL)
- Contact form (EmailJS)
- Analytics (Google)
- Responsive/Mobile-first
- Smooth animations

Keys secured: Not exposed in source. Run `build.js` before deploy.

