import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Image Loading Tests
 *
 * Verify that the header logo and hero image load correctly and are visible.
 * The hero image is a local asset (/Images/soulcap/home-hero.png) that should
 * load in all deployment scenarios including GitHub Pages.
 */

test.describe('Image Loading', () => {
  test('images should load correctly and be visible', async ({ page }) => {
    await page.goto('/')

    const headerLogo = page.locator(`header a[href="/"] img[alt="${testConfig.logo.headerAlt}"]`)
    const heroImage = page.locator(`img[alt="${testConfig.logo.heroAlt}"]`)

    await expect(headerLogo).toBeVisible()
    await expect(heroImage).toBeVisible()

    const headerSrc = await headerLogo.getAttribute('src')
    expect(headerSrc).toBeTruthy()

    const heroSrc = await heroImage.getAttribute('src')
    expect(heroSrc).toBeTruthy()
  })

  test('hero image should load from local assets', async ({ page }) => {
    const imageRequests: Array<{ url: string; status: number }> = []

    page.on('response', (response) => {
      if (response.url().includes(testConfig.logo.heroFilename)) {
        imageRequests.push({ url: response.url(), status: response.status() })
      }
    })

    await page.goto('/')

    const heroImage = page.locator(`img[alt="${testConfig.logo.heroAlt}"]`)
    await expect(heroImage).toBeVisible()

    expect(imageRequests.length).toBeGreaterThan(0)
    for (const request of imageRequests) {
      expect(request.status).toBe(200)
    }
  })
})
