import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'vi'] as const;
export const localePrefix = 'always'; // Default
 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/blog': '/blog',
 
  // If locales use different paths, you can
  // specify each external path per locale.
  '/about': {
    en: '/about',
    vi: '/chung-toi'
  },

  '/detail/[pageId]': {
    en: '/detail/[pageId]',
    vi: '/chi-tiet/[pageId]'
  },
} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});