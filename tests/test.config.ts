/**
 * Test Configuration for SOULCAP
 *
 * This file contains all content-specific values used in E2E tests.
 * It is the single source of truth for test expectations so content can be
 * customized without editing individual spec files.
 */

export const testConfig = {
  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   * SOULCAP uses LinkedIn and YouTube (see src/lib/soulcap.ts EXTERNAL).
   */
  socialLinks: {
    linkedin: {
      url: 'linkedin.com/company/soulcapfoundation',
      ariaLabel: 'LinkedIn',
    },
    youtube: {
      url: 'youtube.com/@initiativesoulcap',
      ariaLabel: 'YouTube',
    },
    github: {
      url: 'github.com/FreeForCharity/FFC-EX-soulcap.org',
      ariaLabel: 'GitHub',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'SOULCAP. All Rights Reserved.',
    searchText: 'All Rights Reserved',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Logo / hero image Configuration
   * Used in: tests/logo.spec.ts, tests/image-loading.spec.ts
   */
  logo: {
    headerAlt: 'SOULCAP logo',
    heroAlt: 'SOULCAP cell annotation',
    heroFilename: 'home-hero',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
