# Personal Website

[![CI](https://github.com/Centurybbx/Centurybbx.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/Centurybbx/Centurybbx.github.io/actions/workflows/ci.yml)
[![Deploy](https://github.com/Centurybbx/Centurybbx.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Centurybbx/Centurybbx.github.io/actions/workflows/deploy.yml)

A minimal personal portfolio built with [Astro](https://astro.build), featuring a blog and game demos.

## Project Structure

```
/public
  /games          # Pre-built React games (iframed into site)
/src
  /pages          # Route components (index, projects, blog, about)
  /layouts        # BaseLayout wrapper
  /components     # React components (GameEmbed)
  /content        # Blog posts (Markdown)
  /styles         # Global CSS
  /data           # Project data
astro.config.mjs  # Astro configuration
```

## Features

- **Homepage** - Hero section and selected projects
- **Projects** - Game demos via iframe embedding
- **Blog** - Markdown-based blog with content collections
- **About** - Personal introduction
- **Styling** - Plain CSS, minimal and intentional

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Adding Games

1. Place your game in `/public/games/{game-name}/index.html`
2. Add the game to `/src/data/projects.ts`
3. Set `isGame: true` and `demoUrl: '/games/{game-name}/index.html'`

## Adding Blog Posts

Create Markdown files in `/src/content/blog/` with frontmatter:

```markdown
---
title: "Post Title"
description: "Short description"
pubDate: 2026-01-06
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

This project is configured for GitHub Pages with automatic deployment via GitHub Actions.

### Automatic Deployment (Recommended)

Push to `main` branch triggers the CI workflow, then the Deploy workflow runs automatically:

1. **CI** - Runs linting and build verification
2. **Deploy** - Deploys to GitHub Pages

Check the [Actions](https://github.com/Centurybbx/Centurybbx.github.io/actions) tab for status.

### Manual Deployment

```bash
npm run build
# Output goes to /dist - deploy to gh-pages branch
```

### GitHub Pages Setup

Ensure these settings in your repo Settings > Pages:
- **Source**: GitHub Actions
- **Build and deployment**: Configure as needed
