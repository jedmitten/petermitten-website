import { defineCollection, z } from 'astro:content';

// Valid categories matching GALLERY_CONFIG
const validCategories = ['painting', 'drawing', 'sculpture', 'mixed-media', 'studio'] as const;

// Valid image extensions
const validImageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// Gallery image can be either a string (URL) or an object with src/alt
const galleryImageSchema = z.union([
  z.string().refine(
    (path) => path.startsWith('/images/') && validImageExtensions.some(ext => path.toLowerCase().endsWith(ext)),
    {
      message: 'Gallery image path must start with /images/ and end with a valid image extension (.jpg, .jpeg, .png, .webp, .gif)'
    }
  ),
  z.object({
    src: z.string().refine(
      (path) => path.startsWith('/images/') && validImageExtensions.some(ext => path.toLowerCase().endsWith(ext)),
      {
        message: 'Gallery image src must start with /images/ and end with a valid image extension (.jpg, .jpeg, .png, .webp, .gif)'
      }
    ),
    alt: z.string()
  })
]);

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1, 'Title must not be empty'),
    year: z.union([
      z.number().int().min(1900, 'Year must be 1900 or later').max(2100, 'Year must be 2100 or earlier'),
      z.null()
    ]).optional(),
    category: z.union([
      z.enum(validCategories, {
        errorMap: () => ({
          message: `Category must be one of: ${validCategories.join(', ')}`
        })
      }),
      z.null()
    ]).optional(),
    materials: z.union([z.string(), z.null()]).optional(),
    dimensions: z.union([z.string(), z.null()]).optional(),
    location: z.union([z.string(), z.null()]).optional(),
    price: z.union([z.string(), z.null()]).optional(),
    image: z.string().refine(
      (path) => path.startsWith('/images/') && validImageExtensions.some(ext => path.toLowerCase().endsWith(ext)),
      {
        message: 'Image path must start with /images/ and end with a valid image extension (.jpg, .jpeg, .png, .webp, .gif)'
      }
    ),
    gallery_images: z.union([z.array(galleryImageSchema), z.null()]).optional(),
    series: z.union([z.string(), z.null()]).optional(),
    featured: z.boolean().default(false),
    sold: z.boolean().default(false),
  }),
});

export const collections = {
  works: worksCollection,
};
