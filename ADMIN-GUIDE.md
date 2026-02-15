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

### Change Categories
```typescript
categories: ['painting', 'drawing', 'sculpture', 'custom-category'],
```

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
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Need Help?

- **Astro Docs:** https://docs.astro.build
- **This project README:** See `README.md`
