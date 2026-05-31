import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
import { BRAND } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Community',
  description:
    'SOULCAP builds bridges across the global immunology community — connecting academia, clinics, and industry.',
}

const pillars = [
  {
    title: 'Academia',
    body: 'Researchers and universities contribute foundational science, novel datasets, and methodological advances, ensuring the framework is rooted in cutting-edge immunology.',
  },
  {
    title: 'Clinics',
    body: 'Hospitals and medical centers bring real-world patient data and clinical workflows, enabling standards that are directly applicable to diagnostics and patient care.',
  },
  {
    title: 'Industry',
    body: 'Biotech, pharma, and technology companies contribute tools, platforms, and translational expertise, driving scalability and implementation across global pipelines.',
  },
]

export default function CommunityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Community"
        title="A Global, Collaborative Community"
        intro="Fostering connections between academia, clinics, and industry to create a common language for immune data."
      />

      <Section>
        <p>
          SOULCAP builds bridges across the global immunology community by fostering connections
          between academia, clinics, and industry. Together, we create a common language for immune
          data that drives discovery, accelerates clinical translation, and supports innovation in
          healthcare.
        </p>
      </Section>

      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold" style={{ color: BRAND.primary }}>
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <p>
          Through this ecosystem, SOULCAP empowers a truly collaborative environment where knowledge
          flows seamlessly across disciplines — turning immune data into a shared global resource.
        </p>
      </Section>
    </PageShell>
  )
}
