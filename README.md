# Peter Mitten - Artist Portfolio

Contemporary artist portfolio website built with Astro.

## Features

- 🎨 5 custom themes (admin-controlled)
- 🖼️ Gallery with category filtering
- 📱 Fully responsive design
- ⚡ Static site generation with Astro
- 🚀 Deployed to GitHub Pages
- ♿ Accessibility focused (reduced motion support)
- 🖼️ Optimized image handling with Astro Image component

## Local Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
/
├── public/              # Static assets (images, favicon, etc.)
│   └── images/         # Artwork images
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ThemeSwitcher.astro
│   ├── content/        # Content collections
│   │   └── works/      # Artwork markdown files
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/          # File-based routing
│   │   ├── index.astro
│   │   ├── gallery.astro
│   │   ├── cv.astro
│   │   ├── shows.astro
│   │   └── works/
│   │       └── [...slug].astro
│   └── styles/         # Global styles
│       ├── variables.scss  # Theme variables
│       └── global.scss     # Global styles
└── astro.config.mjs    # Astro configuration
```

## Theme System

The site features 5 custom themes (admin-controlled):

- **Light** - Clean, bright default theme (current)
- **Dark** - GitHub-inspired dark theme
- **San Diego Sunset** - Warm sunset palette
- **California Ocean** - Cool ocean-inspired palette
- **Gallery Minimal** - Minimal black/white gallery theme

**Admin only:** To change the site theme, see `ADMIN-GUIDE.md`

## Content Management

### Adding New Artwork

1. Create a new markdown file in `src/content/works/`:

```markdown
---
title: "Artwork Title"
year: 2024
category: "painting"  # painting, drawing, sculpture, mixed-media
materials: "Oil on canvas"
dimensions: "24 x 36 inches"
image: /images/works/artwork-name/main.jpg
gallery_images:
  - /images/works/artwork-name/detail1.jpg
  - /images/works/artwork-name/detail2.jpg
series: "Series Name"
featured: true
sold: false
price: "$5,000"
location: "San Diego, CA"
---

Description of the artwork goes here.
```

2. Add images to `public/images/works/artwork-name/`

3. The gallery will automatically update

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

To deploy manually:

```bash
npm run build
```

Then upload the `dist/` folder to your hosting provider.

## License

Copyright © 2024 Peter Mitten. All rights reserved.
