# Admin Guide - Peter Mitten Portfolio

## Quick Settings

All site settings are now centralized in config files for easy management.

---

## How to Change the Site Theme

**File to edit:** `src/config.ts`

**Line to change:** ~21

```typescript
theme: {
    default: 'light', // ← Change this value
    available: [...]
}
```

### Available Themes:

1. **`'light'`** - Clean white background, dark text (DEFAULT)
2. **`'dark'`** - Dark background, light text
3. **`'sandiego-sunset'`** - Warm sunset colors (oranges, reds)
4. **`'california-ocean'`** - Cool ocean blues
5. **`'gallery-minimal'`** - Pure black & white (gallery style)

### Example:

```typescript
theme: {
    default: 'dark', // Now using dark theme
    available: [...]
}
```

---

## How to Edit Navigation

**File to edit:** `src/data/navigation.ts`

Add, remove, or reorder navigation items:

```typescript
export const NAV_ITEMS: NavItem[] = [
  { label: 'Gallery', href: '/gallery/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Shows', href: '/shows/' },
  // Add new items here:
  { label: 'About', href: '/about/' }
];
```

---

## Site-Wide Settings

**File:** `src/config.ts`

### Change Site Title
```typescript
SITE_CONFIG = {
  title: 'Peter Mitten', // ← Change here
  ...
}
```

### Change Description
```typescript
description: 'Your new description here',
```

### Update Author Info
```typescript
author: {
    name: 'Peter Mitten',
    email: 'newemail@example.com', // ← Update
    location: 'New Location'
}
```

### Add Social Links
```typescript
social: {
    instagram: 'https://instagram.com/username',
    facebook: 'https://facebook.com/username',
    twitter: 'https://twitter.com/username'
}
```

---

## Gallery Settings

**File:** `src/config.ts`

### Change Image Quality
```typescript
GALLERY_CONFIG = {
  thumbnail: {
    width: 600,
    height: 450,
    quality: 85  // ← 0-100, higher = better quality, larger file
  },
  fullsize: {
    width: 1200,
    height: 900,
    quality: 90
  }
}
```

### Available Categories

The site supports these artwork categories:

- `painting` - Paintings
- `drawing` - Drawings
- `sculpture` - Sculpture works
- `mixed-media` - Mixed media works
- `studio` - Studio works

**Note:** To add a new category, you must:
1. Add it to `GALLERY_CONFIG.categories` in `src/config.ts`
2. Add it to the schema in `src/content/config.ts`
3. Add a filter button in `src/pages/gallery.astro`

---

## Adding New Artwork

**Step-by-step guide for non-technical users:**

### Step 1: Prepare Your Images

1. Save your artwork images to your computer
2. Use descriptive names (e.g., `sunset-painting.jpg`)
3. Recommended formats: `.jpg` or `.png`

### Step 2: Add Images to the Website

1. Navigate to the project folder
2. Go to `public/images/works/`
3. Create a new folder with your artwork name (e.g., `sunset-painting`)
4. Copy your images into this folder

**Example structure:**
```
public/images/works/sunset-painting/
  ├── main.jpg           (main gallery image)
  ├── detail1.jpg        (optional - detail view)
  └── detail2.jpg        (optional - another detail)
```

### Step 3: Create the Artwork File

1. Navigate to `src/content/works/`
2. Create a new file: `artwork-name.md` (e.g., `sunset-painting.md`)
3. Copy and paste this template:

```markdown
---
title: "Your Artwork Title"
year: 2024
category: "painting"
materials: "Oil on canvas"
dimensions: "24 x 36 inches"
image: /images/works/folder-name/main.jpg
gallery_images:
  - /images/works/folder-name/detail1.jpg
  - /images/works/folder-name/detail2.jpg
featured: false
sold: false
price: "$5,000"
location: "San Diego, CA"
---

Write a description of your artwork here. This text will appear on the artwork's detail page.
```

4. Fill in your artwork's information
5. **Important:** Make sure image paths match your folder structure

### Step 4: Validate Your Changes

Before publishing, check that everything is correct:

```bash
npm run validate
```

If you see errors, they will tell you exactly what's wrong:
- Missing images
- Incorrect image paths
- Invalid categories

### Step 5: Preview Locally

```bash
npm run dev
```

Visit `http://localhost:4321/gallery/` to see your new artwork.

### Step 6: Publish

```bash
git add .
git commit -m "Add new artwork: [artwork name]"
git push origin main
```

The site will automatically build and deploy in a few minutes.

---

## Image Path Requirements

**CRITICAL:** Image paths must be formatted correctly or the build will fail.

**Correct format:**
```
image: /images/works/artwork-name/main.jpg
```

**Common mistakes:**
- ❌ `/assets/images/works/...` (old format, no longer supported)
- ❌ `/public/images/...` (don't include "public")
- ❌ `images/works/...` (must start with `/`)

**Valid image extensions:**
- `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

**Valid categories:**
- `painting`, `drawing`, `sculpture`, `mixed-media`, `studio`

---

## After Making Changes:

1. **Save the file**
2. **Refresh browser** (dev server auto-reloads)
3. **For production:**
   ```bash
   npm run build
   git add .
   git commit -m "Update site settings"
   git push origin main
   ```

---

## Theme Customization

To customize theme **colors** (not just switch themes):

**Edit:** `src/styles/variables.scss`

Each theme has color variables:
```scss
[data-theme="light"] {
    --color-bg-primary: #ffffff;      // ← Background color
    --color-text-primary: #1a1a1a;    // ← Text color
    --color-accent: #2d3436;          // ← Accent color
    // ... more colors
}
```

---

## Quick Reference

| What to Change | File | Line/Section |
|----------------|------|--------------|
| Site theme | `src/config.ts` | Line ~21 |
| Site title | `src/config.ts` | Line ~12 |
| Navigation items | `src/data/navigation.ts` | Lines 11-21 |
| Image quality | `src/config.ts` | Lines 36-54 |
| Theme colors | `src/styles/variables.scss` | Throughout |
| Add new page | Create `src/pages/pagename.astro` | - |

---

## Commands

```bash
npm run dev      # Start development server
npm run validate # Check all content and images are valid
npm run build    # Validate and build for production
npm run preview  # Preview production build
```

## Environment Variables

For local development, copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Available variables:
- `PUBLIC_SITE_URL` - Your site URL (default: https://petermitten.com)
- `CONTACT_EMAIL` - Contact email (default: contact@petermitten.com)

These are used in:
- Site configuration
- Meta tags
- Contact page

---

## Need Help?

- **Astro Docs:** https://docs.astro.build
- **This project README:** See `README.md`
