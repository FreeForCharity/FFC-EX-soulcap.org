import type { MetadataRoute } from 'next'
import { NAV, LEGAL_LINKS } from '@/lib/soulcap'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://freeforcharity.github.io/FFC-EX-soulcap.org'
  const now = new Date()

  const routes = ['/', ...NAV.map((n) => n.path), ...LEGAL_LINKS.map((l) => l.path)]

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
