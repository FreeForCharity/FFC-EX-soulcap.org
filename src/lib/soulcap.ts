/**
 * Central SOULCAP site configuration.
 *
 * This file is the single source of truth for SOULCAP branding, navigation,
 * and EXTERNAL DEPENDENCIES migrated from the source design (soulcap.org,
 * a WordPress + Oxygen Builder site). Keeping every external integration in
 * one place makes it easy to confirm/replace them (see the migration tracking
 * issues) and guarantees the static site has no runtime dependency on the
 * source WordPress install.
 */

export const SITE = {
  name: 'SOULCAP',
  legalName: 'SOULCAP Foundation',
  tagline: 'Transforming Healthcare Through Innovative Cell Analysis',
  description:
    'SOULCAP Foundation is a global 501(c)(3) non-profit building a universal standard for immune cell identification and annotation in cytometry — advancing open, FAIR, and AI-ready data.',
  // Operating address (from the source Contact page).
  address: 'SOULCAP Foundation, Dover, Delaware, USA (operating globally)',
  copyrightHolder: 'SOULCAP',
} as const

/**
 * EXTERNAL DEPENDENCIES — identified during migration.
 * Each of these must be confirmed correct (see tracking issue) because they
 * are owned outside this repository.
 */
export const EXTERNAL = {
  /** Donation management — Square hosted checkout. */
  donate: 'https://checkout.square.site/merchant/MLS2NWJYC0DMG/checkout/BDXZWDTKTTTK3TI4L4LWWW2S',
  /** Public events calendar — Google Calendar (calendar@soulcap.org). */
  googleCalendar: 'https://calendar.google.com/calendar/u/0?cid=Y2FsZW5kYXJAc291bGNhcC5vcmc',
  /** Social profiles. */
  linkedin: 'https://www.linkedin.com/company/soulcap/',
  linkedinFoundation: 'https://www.linkedin.com/company/soulcapfoundation/',
  youtube: 'https://www.youtube.com/@initiativesoulcap',
} as const

export interface NavItem {
  label: string
  path: string
}

/** Primary navigation — mirrors the source site information architecture. */
export const NAV: NavItem[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Research & Data', path: '/research-data' },
  { label: 'Community', path: '/community' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Resources', path: '/resources' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
]

/** Legal/policy pages retained from the template (the source design lacks these). */
export const LEGAL_LINKS: NavItem[] = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'Donation Policy', path: '/donation-policy' },
  { label: 'Vulnerability Disclosure', path: '/vulnerability-disclosure-policy' },
  { label: 'Security Acknowledgements', path: '/security-acknowledgements' },
]

/** Brand colors (scientific blue / teal palette). */
export const BRAND = {
  primary: '#1a4f8b',
  primaryDark: '#13396a',
  accent: '#2bb3c0',
} as const
