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

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` if you need to customize the site URL or contact email.

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

4. **Build for production:**
   ```bash
   npm run build
   ```

   This will automatically validate all image references before building.

5. **Preview production build:**
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

## Environment Variables

The site uses environment variables for configuration:

- `PUBLIC_SITE_URL` - Your site's URL (default: https://petermitten.com)
- `CONTACT_EMAIL` - Contact email address (default: contact@petermitten.com)

These are configured in `.env` for local development. For production, they're set in the CI/CD workflow.

## Content Management

### Adding New Artwork

1. **Create image folder** in `public/images/works/`:
   ```bash
   mkdir -p public/images/works/artwork-name
   ```

2. **Add images** to that folder:
   - Main image (e.g., `main.jpg`)
   - Optional gallery images for detail views

3. **Create markdown file** in `src/content/works/artwork-name.md`:

```markdown
---
title: "Artwork Title"
year: 2024
category: "painting"  # painting, drawing, sculpture, mixed-media, studio
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

4. **Validate images** before committing:
   ```bash
   npm run validate
   ```

5. **Preview locally**:
   ```bash
   npm run dev
   ```

6. The gallery will automatically update

### Image Requirements

**IMPORTANT:** Image paths must follow this format:

- **Correct:** `/images/works/artwork-name/file.jpg`
- **Wrong:** `/assets/images/works/...` (old format)
- **Wrong:** `/public/images/...` (includes public directory)

**Valid categories:**
- `painting`
- `drawing`
- `sculpture`
- `mixed-media`
- `studio`

**Valid image extensions:**
- `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

The build process will automatically validate all image references and fail if:
- An image path is incorrectly formatted
- An image file doesn't exist in the `public/` directory
- A category is not in the valid list

## Validation

Before deploying, validate your content:

```bash
npm run validate
```

This checks:
- All image paths are correctly formatted
- All referenced images exist in the `public/` directory
- All categories are valid
- All years are in valid range (1900-2100)

The build command (`npm run build`) automatically runs validation first.

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

The deployment workflow:
1. Validates all content and images
2. Builds the static site
3. Deploys to GitHub Pages

### Manual Deployment

To deploy manually:

```bash
npm run build
```

Then upload the `dist/` folder to your hosting provider.

## License

Copyright © 2024 Peter Mitten. All rights reserved.
