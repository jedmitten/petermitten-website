import { defineCollection, z } from 'astro:content';

// Gallery image can be either a string (URL) or an object with src/alt
const galleryImageSchema = z.union([
  z.string(),
  z.object({ src: z.string(), alt: z.string() })
]);

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.union([z.number(), z.null()]).optional(),
    category: z.union([z.string(), z.null()]).optional(),
    materials: z.union([z.string(), z.null()]).optional(),
    dimensions: z.union([z.string(), z.null()]).optional(),
    location: z.union([z.string(), z.null()]).optional(),
    price: z.union([z.string(), z.null()]).optional(),
    image: z.string(),
    gallery_images: z.union([z.array(galleryImageSchema), z.null()]).optional(),
    series: z.union([z.string(), z.null()]).optional(),
    featured: z.boolean().default(false),
    sold: z.boolean().default(false),
  }),
});

export const collections = {
  works: worksCollection,
};
