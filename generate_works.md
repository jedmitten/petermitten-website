#!/usr/bin/env bash
set -euo pipefail

SRC="assets/images/works"
OUT="_works"
FORCE=0

if [[ "${1:-}" == "--force" ]]; then
  FORCE=1
fi

# slugify helper (lowercase, spaces/underscores -> -, strip weird chars, trim dashes)
slugify() {
  echo "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[ _]+/-/g; s/[^a-z0-9-]+/-/g; s/^-+|-+$//g; s/-+/-/g'
}

mkdir -p "$OUT"

shopt -s nullglob nocaseglob

# folders under assets/images/works
for dir in "$SRC"/*/; do
  [[ -d "$dir" ]] || continue

  folder="$(basename "$dir")"
  slug="$(slugify "$folder")"
  md="$OUT/$slug.md"

  if [[ -f "$md" && "$FORCE" -ne 1 ]]; then
    echo "Skip (exists): $md"
    continue
  fi

  # collect images (sorted)
  images=( "$dir"*.jpg "$dir"*.jpeg "$dir"*.png "$dir"*.webp "$dir"*.gif "$dir"*.tif "$dir"*.tiff )
  if (( ${#images[@]} == 0 )); then
    echo "Skip (no images): $dir"
    continue
  fi

  # choose main image: prefer main.* if present, else first
  main=""
  for ext in jpg jpeg png webp gif tif tiff; do
    if [[ -f "${dir}main.${ext}" ]]; then
      main="${dir}main.${ext}"
      break
    fi
  done
  if [[ -z "$main" ]]; then
    main="${images[0]}"
  fi

  # make repo-relative web paths for Jekyll
  # dir like assets/images/works/FOLDER/
  rel_dir="assets/images/works/$folder"
  main_file="$(basename "$main")"
  main_url="/${rel_dir}/${main_file}"

  # title: turn slug-ish name into Title Case-ish (simple)
  title="$(echo "$folder" | sed -E 's/[_-]+/ /g')"

  {
    echo "---"
    echo "title: \"${title}\""
    echo "year: "
    echo "category: \"studio\""
    echo "materials: \"\""
    echo "dimensions: \"\""
    echo "image: ${main_url}"
    echo "gallery_images:"
    for img in "${images[@]}"; do
      f="$(basename "$img")"
      url="/${rel_dir}/${f}"
      # skip main if you don't want duplicates in gallery_images
      if [[ "$f" == "$main_file" ]]; then
        continue
      fi
      echo "  - src: ${url}"
      echo "    alt: \"${title}\""
    done
    echo "---"
    echo ""
    echo "Description goes here."
  } > "$md"

  echo "Wrote: $md (main: $main_file)"
done

echo "Done."
