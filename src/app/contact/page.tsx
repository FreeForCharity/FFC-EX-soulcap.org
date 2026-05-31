import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
import { EXTERNAL, SITE, BRAND } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact SOULCAP for collaboration inquiries, data contributions, and partnerships.',
}

export default function ContactPage() {
  const linkStyle = { color: BRAND.accent } as const

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Global Partnerships & Inquiries"
        intro="SOULCAP welcomes collaboration inquiries, data-contribution requests, and partnership proposals."
      />

      <Section title="Get in touch">
        <p>
          Email us at{' '}
          <a href={`mailto:${SITE.email}`} className="font-medium" style={linkStyle}>
            {SITE.email}
          </a>
          .
        </p>
        <p>
          <strong>Address:</strong> {SITE.address}
        </p>
        <p>
          When reaching out, it helps to include your <strong>name</strong>, your{' '}
          <strong>institution</strong>, the <strong>type of inquiry</strong> (e.g. partnership, data
          contribution, governance), and a short <strong>message</strong>.
        </p>
        <a
          href={`mailto:${SITE.email}?subject=SOULCAP%20inquiry`}
          className="inline-block rounded-full px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: BRAND.accent }}
        >
          Email SOULCAP
        </a>
      </Section>

      <Section title="Follow SOULCAP" alt>
        <p>
          <a
            href={EXTERNAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
            style={linkStyle}
          >
            LinkedIn
          </a>{' '}
          ·{' '}
          <a
            href={EXTERNAL.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
            style={linkStyle}
          >
            YouTube
          </a>
        </p>
      </Section>
    </PageShell>
  )
}
