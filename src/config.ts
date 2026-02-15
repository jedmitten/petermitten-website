/**
 * Site Configuration
 *
 * Centralized settings for the Peter Mitten portfolio site.
 * Edit these values to change site-wide settings.
 */

export const SITE_CONFIG = {
  // Basic site info
  title: 'Peter Mitten',
  subtitle: 'Artist - San Diego & Southern California',
  description: 'Contemporary artist based in San Diego and Southern California since 1977. Explore paintings, drawings, and artwork inspired by the California landscape.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://petermitten.com',

  // Author info
  author: {
    name: 'Peter Mitten',
    bio: 'Artist and painter residing in San Diego since 1977',
    location: 'San Diego, California',
    email: import.meta.env.CONTACT_EMAIL || 'contact@petermitten.com'
  },

  // Theme Settings (Admin Only)
  // Options: 'light', 'dark', 'sandiego-sunset', 'california-ocean', 'gallery-minimal'
  theme: {
    default: 'california-ocean',
    available: [
      'light',
      'dark',
      'sandiego-sunset',
      'california-ocean',
      'gallery-minimal'
    ]
  },

  // Social links (optional)
  social: {
    instagram: '', // Add URL if available
    facebook: '',  // Add URL if available
    twitter: ''    // Add URL if available
  }
} as const;

export const GALLERY_CONFIG = {
  // Gallery display settings
  categories: ['painting', 'drawing', 'sculpture', 'mixed-media', 'studio'],
  itemsPerPage: 12,

  // Image optimization settings
  thumbnail: {
    width: 600,
    height: 450,
    quality: 85
  },

  fullsize: {
    width: 1200,
    height: 900,
    quality: 90
  },

  // Gallery images
  galleryImages: {
    width: 800,
    height: 600,
    quality: 85
  }
} as const;

export const SEO_CONFIG = {
  // Default SEO settings
  defaultImage: '/assets/images/og-default.jpg',
  twitterCard: 'summary_large_image',
  locale: 'en_US',

  // Open Graph
  ogType: 'website',
} as const;
