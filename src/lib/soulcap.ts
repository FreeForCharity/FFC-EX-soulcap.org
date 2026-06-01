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
  // Public contact email (from the source Contact page).
  email: 'admin@soulcap.org',
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
  /** Embeddable version of the public calendar (avoids hardcoding stale events). */
  googleCalendarEmbed:
    'https://calendar.google.com/calendar/embed?src=calendar%40soulcap.org&ctz=America%2FVancouver',
  /** Social profiles. */
  linkedin: 'https://www.linkedin.com/company/soulcapfoundation/',
  youtube: 'https://www.youtube.com/@initiativesoulcap',
  github: 'https://github.com/FreeForCharity/FFC-EX-soulcap.org',
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

export interface Leader {
  name: string
  title: string
  focus: string
  linkedin: string
}

/** Board / leadership roster (migrated from the source About page). */
export const LEADERSHIP: Leader[] = [
  {
    name: 'Ryan Brinkman',
    title: 'Board Chair · President',
    focus: 'Strategy · Governance · Bioinformatics WG',
    linkedin: 'https://www.linkedin.com/in/ryan-brinkman-9bb1103/',
  },
  {
    name: 'Goce Bogdanoski',
    title: 'Board Member · Vice President',
    focus: 'Legal · Business Development · Strategy',
    linkedin: 'https://www.linkedin.com/in/goce-bogdanoski-myprofile/',
  },
  {
    name: 'Kelly Lundsten',
    title: 'Board Member · Director',
    focus: 'Research · Product · Annotation',
    linkedin: 'https://www.linkedin.com/in/kelly-lundsten/',
  },
  {
    name: 'Kamila Czechowska',
    title: 'Board Member · Director',
    focus: 'Operations · Collaboration · Outreach',
    linkedin: 'https://www.linkedin.com/in/kamila-czechowska-phd-9927969/',
  },
  {
    name: 'Jessica Houston',
    title: 'Board Member · Director',
    focus: 'Funding · Donor Relations',
    linkedin: 'https://www.linkedin.com/in/jessica-p-houston-81736114/',
  },
  {
    name: 'Mario Roederer',
    title: 'Independent Director',
    focus: 'Scientific Leadership · Oversight',
    linkedin: 'https://www.linkedin.com/in/mario-roederer-a957a946/',
  },
]

/** Brand colors (scientific blue / teal palette). */
export const BRAND = {
  primary: '#1a4f8b',
  primaryDark: '#13396a',
  accent: '#2bb3c0',
} as const
