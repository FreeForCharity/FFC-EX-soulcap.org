import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
import HubSpotForm from '@/components/hubspot-form'
import { EXTERNAL, SITE, BRAND } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact SOULCAP for collaboration inquiries, data contributions, and partnerships.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Global Partnerships & Inquiries"
        intro="SOULCAP welcomes collaboration inquiries, data-contribution requests, and partnership proposals."
      />

      <Section title="Get in touch">
        <p>
          <strong>Address:</strong> {SITE.address}
        </p>
        <p>
          Follow SOULCAP on{' '}
          <a
            href={EXTERNAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
            style={{ color: BRAND.accent }}
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            href={EXTERNAL.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
            style={{ color: BRAND.accent }}
          >
            YouTube
          </a>
          .
        </p>
      </Section>

      <Section title="Send us a message" alt>
        <HubSpotForm />
      </Section>
    </PageShell>
  )
}
