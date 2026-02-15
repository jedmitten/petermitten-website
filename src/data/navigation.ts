/**
 * Navigation Configuration
 *
 * Define site navigation items here.
 * Add or remove items to change the main navigation menu.
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Gallery',
    href: '/gallery/'
  },
  {
    label: 'CV',
    href: '/cv/'
  },
  {
    label: 'Shows',
    href: '/shows/'
  }
];

// Optional: Footer navigation if different from main nav
export const FOOTER_ITEMS: NavItem[] = [
  // Same as nav for now, but can be customized
  ...NAV_ITEMS
];
