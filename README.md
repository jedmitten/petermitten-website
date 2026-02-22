# Peter Mitten — Website Guide

Peter Mitten is a sculptor working and residing in the San Diego, California region.

The site lives at **[peter-mitten.com](https://peter-mitten.com)** and is hosted automatically through GitHub. When changes are saved to the `main` branch, the site rebuilds and publishes itself within a few minutes — no manual uploading required.

---

## How the Site Is Organized

| File or Folder | What it is |
|---|---|
| `_works/` | One file per sculpture. These become the individual work pages. |
| `_exhibitions/` | One file per exhibition. These feed the Exhibitions page. |
| `assets/images/works/` | All sculpture images, organized in subfolders by work. |
| `index.md` | The homepage. (Rarely needs editing.) |
| `gallery.md` | The gallery page. (Rarely needs editing.) |
| `cv.md` | The CV page. |
| `exhibitions.md` | The exhibitions page. (Rarely needs editing — add exhibitions via `_exhibitions/` instead.) |
| `about.md` | The About page. |
| `contact.md` | The Contact page. |
| `_includes/header.html` | The navigation links at the top of every page. |

---

## Editing an Existing Work

Each sculpture is a plain text file inside the `_works/` folder, for example `_works/gorge.md`. Open the file and you will see a block at the top between the `---` lines — this holds the structured information about the piece.

```
---
title: "Gorge"
alt_text: "Gorge - abstract sculpture by Peter Mitten"
year: 2018
category: "studio"
materials: "cast iron"
dimensions: '12" x 8" x 6"'
image: /assets/images/works/gorge/gorge_1.png
featured: true
gallery_images:
  - src: /assets/images/works/gorge/gorge-2.png
  - src: /assets/images/works/gorge/gorge-3.png
---

Optional description of the work goes here.
```

- **title** — the name of the work as it appears on the page
- **alt_text** — a plain-English description of the work for search engines and accessibility
- **year** — leave blank if unknown
- **category** — `studio`, `public`, or `residential`
- **materials** — e.g. `"bronze"` or `"cast iron, steel"`
- **dimensions** — e.g. `'24" x 12" x 8"'`
- **image** — the main image shown in the gallery and at the top of the work's page
- **featured** — set to `true` to include this work in the homepage slideshow; remove the line or set to `false` to exclude it
- **gallery_images** — additional images shown below the main image; each line starting with `- src:` is one image

Any text written below the closing `---` appears as a description on the work's page.

---

## Adding a New Work

1. Create a new file in `_works/` named after the work, using hyphens instead of spaces and all lowercase — e.g. `_works/desert-canyon.md`

2. Paste in the front matter template and fill in the details:

```
---
title: "Desert Canyon"
alt_text: "Desert Canyon - abstract metal sculpture by Peter Mitten"
year:
category: "studio"
materials: ""
dimensions: ""
image: /assets/images/works/desert-canyon/desert-canyon.jpg
gallery_images:
---

Description goes here.
```

3. Add the image files to `assets/images/works/desert-canyon/`

---

## Adding or Changing Images

Images for each work live in their own subfolder inside `assets/images/works/`. For example, all images for *Gorge* are in `assets/images/works/gorge/`.

To change the main image for a work, update the `image:` line in the work's front matter to point to the new file.

To add detail or alternate-view images, add them to the work's image folder and list them under `gallery_images:` in the front matter:

```
gallery_images:
  - src: /assets/images/works/gorge/gorge-2.png
  - src: /assets/images/works/gorge/gorge-3.png
```

Images appear in the order they are listed.

---

## Homepage Slideshow

The homepage displays a rotating slideshow of selected works. To include a work in the slideshow, add `featured: true` to its front matter. To remove it, delete that line or change it to `featured: false`.

Currently featured works: Gavilon's Shadow, Poly Playground, Echoes of Shawanasee, Momentum, Yeibichai, Grove Canopy.

---

## Adding an Exhibition

Each exhibition is a plain text file inside the `_exhibitions/` folder. The Exhibitions page is built automatically from these files — upcoming events appear at the top in full detail, past events appear as a compact list grouped by type.

### Adding an upcoming exhibition

Create a new file in `_exhibitions/` with a descriptive name, e.g. `_exhibitions/circle-center-2027.md`:

```
---
title: "Exhibition Title"
date: 2027-03-15
venue: "Gallery Name"
location: "City, State"
link: "https://..."
category: "selected"
past: false
summary: "One sentence description for search engines."
---

Full description of the exhibition goes here. This text appears on the Exhibitions page while the show is upcoming.
```

- **date** — the date of the event in YYYY-MM-DD format (e.g. `2027-03-15`)
- **venue** — the name of the gallery or venue
- **location** — city and state
- **link** — a URL to an event page, if there is one (leave as `""` if not)
- **category** — `solo` for one-person shows, `selected` for group or other exhibitions
- **past** — set to `false` while upcoming; change to `true` to archive it after the show

### Archiving a past exhibition

Open the exhibition file and change `past: false` to `past: true`. The entry will move from the Upcoming section into the appropriate past list (One Person Exhibitions or Selected Exhibitions) the next time the site rebuilds.

---

## Editing the CV

Open `cv.md` and edit the text directly. This page uses standard formatting:

- A line starting with `##` becomes a heading
- A line starting with `-` becomes a bullet point

---

## Adding a New Page

Create a new file at the root level of the project, e.g. `statement.md`, with this at the top:

```
---
layout: default
title: Statement
permalink: /statement/
---

Page content goes here.
```

Then add a link to it in `_includes/header.html` following the same pattern as the existing navigation links.

---

## How Changes Get Published

1. Save your changes to any file
2. Commit and push to the `main` branch on GitHub
3. GitHub automatically rebuilds the site — this takes 1–3 minutes
4. Visit [peter-mitten.com](https://peter-mitten.com) to see the result

---

## If Something Isn't Showing Up

**Check the build status** — go to the [Actions tab](https://github.com/jedmitten/petermitten-website/actions) on GitHub. A green checkmark means the build succeeded. A red X means something went wrong — click into it to see the error.

**Hard-refresh your browser** — the browser may be showing a cached version of the page. Press `Cmd+Shift+R` on Mac or `Ctrl+Shift+R` on Windows to force a fresh load.

**CSS changes** are particularly likely to be cached. If the design looks wrong after a change, a hard refresh almost always fixes it.
