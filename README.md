---
title: Peter Mitten
url: https://www.peter-mitten.com
location: San Diego, California
medium: Sculpture
materials: [bronze, cast aluminum, iron]
---

# Peter Mitten

Peter Mitten is a sculptor working and residing in the San Diego, California region. His work can be seen publicly in and around the United States.

---

## Site Editing Guide

The site is built with Jekyll. Content is managed through Markdown files and front matter; images are stored in `assets/images/`.

### Adding or Editing a Portfolio Work

Each sculpture is a Markdown file in the `_works/` collection. To add a new work, create a file at `_works/sculpture-title.md` with front matter and an optional description in the body:

```yaml
---
title: Sculpture Title
category: studio   # Current categories in use: "studio", "public", "residential"
tags: [bronze]
image: /assets/images/works/sculpture-title.jpg
gallery_images:
  - src: /assets/images/works/sculpture-title/detail.jpg
    caption: "Detail view"
  - src: /assets/images/works/sculpture-title/view-b.jpg
    caption: "Alternate view"
featured: false
---

Optional description text here.
```

To edit an existing work, open its file in `_works/` and update the relevant front matter fields or body text.

### Changing the Primary Image for a Work

Update the `image:` field in the work's front matter to point to the new file, and place the image in `assets/images/works/`. The primary image is used in the portfolio grid and as the default display on the work's individual page.

### Adding a Detail Image or Additional Views

Add images to the `gallery_images:` list in the work's front matter using objects with `src` and optional `caption` properties:

```yaml
gallery_images:
  - src: /assets/images/works/sculpture-name/detail-1.jpg
    caption: "Detail view"
  - src: /assets/images/works/sculpture-name/detail-2.jpg
    caption: "Installation view"
```

The `caption` field is optional - you can omit it if you don't need captions. Images appear in the order listed. The layout uses the `.grid.detail` class which displays images at their natural aspect ratios in a responsive grid (minimum 400px columns).

### Homepage Slides

The homepage carousel is configured in `index.md`. The three original slide images from the previous site are:

| Work | Image file |
|------|-----------|
| Poly Playground | `assets/images/slides/poly-playground-slide.jpg` |
| Gavilon's Shadow | `assets/images/slides/gavilons-shadow-slide.jpg` |
| Echoes of Shawanasee | `assets/images/slides/echoes-of-shawanasee-slide.jpg` |

Check `index.md` to see how slides are currently configured and update accordingly.

### Background Color / Background Image

The site background is defined in the main stylesheet. To set a background image, add the image to `assets/images/` and update the `background-image` property in the relevant CSS or SCSS file. To change the background color only, update the `background-color` value (the previous site used `#282828`).

### Adding a New Page (e.g. About, CV, Statement)

Create a new Markdown file at the root level, e.g. `about.md`, with appropriate front matter:

```yaml
---
layout: page
title: About
permalink: /about/
---
```

Then add it to the site navigation by editing `_includes/header.html` (or the relevant include file where the navigation is defined).

### Updating the Contact Page Text

Edit `contact.md` at the root of the project. The short bio text and contact invitation can be updated in the body of that file.

### Image Files Reference

Original high-resolution images from the previous site are organized as follows — all are suitable for print at their original sizes (750KB–1.8MB):

- `assets/images/works/` — primary sculpture images
- `assets/images/slides/` — homepage carousel images
- `assets/images/works/details/` — detail shots (Gavilon's Shadow has one)

---

## Troubleshooting

### Changes Not Showing Up

If your edits aren't appearing on the live site:

1. **Hard refresh your browser** to bypass cache:
   - Chrome/Edge: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Firefox: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)

2. **Clear browser cache** for the site

3. **Rebuild Jekyll** if testing locally:
   ```bash
   rm -rf _site
   bundle exec jekyll serve
   ```

CSS changes in particular are heavily cached by browsers.