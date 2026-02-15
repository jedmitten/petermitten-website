#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validating image references in content files...\n');

// Get all markdown files in the works collection
const contentDir = path.join(__dirname, '../src/content/works');
const publicDir = path.join(__dirname, '../public');

let errorCount = 0;
let totalImages = 0;

async function validateImagePath(imagePath, sourceFile) {
  totalImages++;

  // Remove leading slash and construct file path
  const relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(publicDir, relativePath);

  try {
    await fs.access(fullPath);
    return true;
  } catch (error) {
    errorCount++;
    console.error(`❌ Missing image: ${imagePath}`);
    console.error(`   Referenced in: ${path.relative(process.cwd(), sourceFile)}`);
    console.error(`   Expected at: ${path.relative(process.cwd(), fullPath)}\n`);
    return false;
  }
}

async function validateWork(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');

  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.warn(`⚠️  No frontmatter found in ${path.relative(process.cwd(), filePath)}`);
    return;
  }

  const frontmatter = frontmatterMatch[1];

  // Extract main image
  const imageMatch = frontmatter.match(/^image:\s*(.+)$/m);
  if (imageMatch) {
    await validateImagePath(imageMatch[1].trim(), filePath);
  }

  // Extract gallery images - handle both array and single string formats
  const galleryMatch = frontmatter.match(/gallery_images:\s*\[([\s\S]*?)\]/);
  if (galleryMatch) {
    const galleryImages = galleryMatch[1]
      .split(',')
      .map(img => img.trim().replace(/['"]/g, ''))
      .filter(img => img.length > 0 && !img.startsWith('#'));

    for (const img of galleryImages) {
      await validateImagePath(img, filePath);
    }
  }
}

async function main() {
  try {
    const files = await fs.readdir(contentDir);
    const mdFiles = files.filter(f => f.endsWith('.md'));

    console.log(`Found ${mdFiles.length} content files to validate.\n`);

    for (const file of mdFiles) {
      await validateWork(path.join(contentDir, file));
    }

    console.log(`\n${'='.repeat(60)}`);
    if (errorCount === 0) {
      console.log(`✅ Success! All ${totalImages} image references are valid.`);
      console.log(`${'='.repeat(60)}\n`);
      process.exit(0);
    } else {
      console.log(`❌ Found ${errorCount} missing image(s) out of ${totalImages} total.`);
      console.log(`${'='.repeat(60)}`);
      console.log('\n💡 Tip: Image paths should start with /images/ and exist in public/ directory\n');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error during validation:', error.message);
    process.exit(1);
  }
}

main();
