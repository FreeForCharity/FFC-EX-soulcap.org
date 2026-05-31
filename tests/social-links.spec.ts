import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * Verify that SOULCAP's social media links (LinkedIn, YouTube) are present and
 * functional, and that defunct platforms (like Google+) are not present.
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    await page.goto('/')
    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)
  })

  test('should display active social media links', async ({ page }) => {
    await page.goto('/')

    const linkedInLink = page.locator(`footer a[href*="${testConfig.socialLinks.linkedin.url}"]`)
    await expect(linkedInLink).toBeVisible()
    await expect(linkedInLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.linkedin.ariaLabel
    )

    const youtubeLink = page.locator(`footer a[href*="${testConfig.socialLinks.youtube.url}"]`)
    await expect(youtubeLink).toBeVisible()
    await expect(youtubeLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.youtube.ariaLabel
    )
  })

  test('should have exactly 2 social media icons', async ({ page }) => {
    await page.goto('/')
    const socialMediaLinks = page.locator(
      `footer a[aria-label="${testConfig.socialLinks.linkedin.ariaLabel}"], footer a[aria-label="${testConfig.socialLinks.youtube.ariaLabel}"]`
    )
    await expect(socialMediaLinks).toHaveCount(2)
  })
})
