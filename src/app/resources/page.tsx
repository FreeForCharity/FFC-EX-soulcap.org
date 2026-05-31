import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
import { BRAND } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Open educational and technical resources to help researchers adopt SOULCAP immune data standards.',
}

const resources = [
  {
    title: 'Publications & Reports',
    body: 'Peer-reviewed papers, white papers, and technical documentation on cytometry standardization.',
  },
  {
    title: 'Tutorials & Training',
    body: 'Step-by-step guidance on implementing SOULCAP standards, contributing datasets, and integrating APIs.',
  },
  {
    title: 'Documentation',
    body: 'Comprehensive manuals describing ontology schemas, metadata models, and data submission procedures.',
  },
  {
    title: 'Reference Materials',
    body: 'Access reference datasets, templates, logos, and slide decks for teaching and outreach.',
  },
]

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Open Resources"
        intro="SOULCAP provides open educational and technical resources to help researchers adopt immune data standards."
      />

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {resources.map((r) => (
            <div key={r.title} className="rounded-lg border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold" style={{ color: BRAND.primary }}>
                {r.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Section title="Latest from the community" alt>
        <ul className="list-disc space-y-2 pl-6">
          <li>SOULCAP successfully held its 2025 Fall Town Hall on 2025-11-18.</li>
          <li>You&apos;re Invited: SOULCAP 2025 Town Hall.</li>
          <li>SOULCAP successfully hosted 3 events at CYTO 2025 in Denver.</li>
        </ul>
      </Section>
    </PageShell>
  )
}
