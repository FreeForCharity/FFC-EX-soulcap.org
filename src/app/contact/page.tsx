import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
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
        {/*
          The source site embeds a HubSpot form (fields: Name, Institution, Email,
          Inquiry Type, Message). The HubSpot portal/form IDs must be supplied and
          embedded before this is fully functional — tracked as an external
          dependency in the migration issues.
        */}
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-gray-600">
          <p className="font-medium" style={{ color: BRAND.primary }}>
            Contact form (HubSpot)
          </p>
          <p className="mt-2 text-[15px]">
            Fields: Name · Institution · Email · Inquiry Type · Message.
          </p>
          <p className="mt-2 text-[14px] text-gray-500">
            The HubSpot embed needs portal and form IDs to be wired up — see the migration tracking
            issue for the external-dependency confirmation.
          </p>
        </div>
      </Section>
    </PageShell>
  )
}
