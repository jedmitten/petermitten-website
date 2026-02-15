# Admin Guide - Peter Mitten Portfolio

## How to Change the Site Theme

**File to edit:** `src/layouts/BaseLayout.astro`

**Line to change:** Line 14

```javascript
const SITE_THEME = 'light'; // ← Change this value
```

### Available Themes:

1. **`'light'`** - Clean white background, dark text (DEFAULT)
2. **`'dark'`** - Dark background, light text
3. **`'sandiego-sunset'`** - Warm sunset colors (oranges, reds)
4. **`'california-ocean'`** - Cool ocean blues
5. **`'gallery-minimal'`** - Pure black & white (gallery style)

### Example:

To switch to dark theme:
```javascript
const SITE_THEME = 'dark';
```

To switch to sunset theme:
```javascript
const SITE_THEME = 'sandiego-sunset';
```

### After Changing:

1. Save the file
2. Refresh your browser (dev server auto-reloads)
3. If deploying: `npm run build` then push to GitHub

---

## Theme Customization

To customize theme colors, edit: `src/styles/variables.scss`

Each theme has its own section with color variables:
- `--color-bg-primary` - Main background
- `--color-text-primary` - Main text
- `--color-accent` - Accent color
- etc.

---

## Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```
