import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
import { LEADERSHIP, BRAND } from '@/lib/soulcap'
import { FaLinkedinIn } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'SOULCAP Foundation is a global 501(c)(3) non-profit building a universal standard for immune cell identification and annotation in cytometry.',
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="About SOULCAP"
        intro="Building a universal standard for immune cell identification and annotation."
      />

      <Section title="Mission">
        <p>
          SOULCAP Foundation is a global non-for-profit organization dedicated to building a
          universal standard for immune cell identification and annotation. By defining such
          standards and harmonizing annotation practices, we address one of the key challenges in
          scientific research: reproducibility.
        </p>
        <p>
          Our community-driven initiative unites subject matter and technology experts around the
          world, who are using existing knowledge to align on best annotation practices, but goes
          beyond to generate new reference datasets to support our position.
        </p>
        <p>
          The SOULCAP Foundation empowers stakeholders worldwide to contribute, align, and benefit
          from a common language. These standards are informed and correlated to existing global
          ontologies, and will be translated to open-source bioinformatics tools and made publicly
          accessible.
        </p>
      </Section>

      <Section title="A note from our Founder" alt>
        <p className="font-medium">Dr. Ryan Brinkman, Founder and President of SOULCAP:</p>
        <blockquote
          className="border-l-4 pl-4 italic text-gray-600"
          style={{ borderColor: BRAND.accent }}
        >
          “This effort is motivated by the idea that in the context of FAIR (Findable, Accessible,
          Interoperable, and Reusable) data in science, common terminology is crucial. Similar to
          how everyone can look at an X-ray and agree that a bone should be labelled
          &quot;tibia&quot;, I believe having bivariate plots labelled the same way will be
          transformative. High throughput automated gating of cell populations is coming, especially
          through ML approaches that will be able to efficiently and effectively re-gate all the
          data that is sitting around in organizations now and going forward. When we combine that
          with standardized labelling, we will be able to link studies across datasets and
          fundamentally change the funnel of data available for predictive science and significantly
          increase the ROI on collected data.”
        </blockquote>
      </Section>

      <Section title="Value Proposition">
        <p>
          SOULCAP Foundation accelerates immunology breakthroughs by establishing global standards
          for immune cell identification and annotation in cytometry research. Through open-source
          tools, vendor partnerships, and global scientific collaboration, we enhance research
          reproducibility and unite scientists, clinicians, industry leaders, and regulatory
          agencies in transforming how the world understands and measures immune function.
        </p>
        <p>
          We envision a future where seamless integration of cytometry data and trustworthy
          AI-driven insights accelerate the discovery of life-saving therapies, enabling precision
          medicine that transforms patient outcomes worldwide.
        </p>
      </Section>

      <Section title="Organization" alt>
        <p>
          The SOULCAP Foundation is registered as a 501(c)(3) non-for-profit organization. SOULCAP
          operates through a multi-layered organizational structure that balances scientific rigor,
          operational efficiency, and community engagement. This model ensures that standards are
          shaped by experts across disciplines while remaining open, transparent, and inclusive.
        </p>
      </Section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl" style={{ color: BRAND.primary }}>
            Leadership
          </h2>
          <p className="mb-8 text-[17px] leading-relaxed text-gray-700">
            SOULCAP is led by a diverse group of experts from academia, clinical institutions, and
            industry. Our board, committee chairs, and working group leads bring deep domain
            expertise in immunology, cytometry, bioinformatics, and data standards.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((leader) => (
              <div key={leader.name} className="rounded-lg border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: BRAND.accent }}>
                  {leader.title}
                </p>
                <p className="mt-2 text-sm text-gray-600">{leader.focus}</p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: BRAND.primary }}
                >
                  <FaLinkedinIn className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title="How We Work" alt>
        <p>
          SOULCAP operates through a network of volunteers on active committees and working groups
          that drive scientific development and operational excellence.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Committees</strong> design, implement, and maintain the functions that keep
            SOULCAP going.
          </li>
          <li>
            <strong>Working Groups</strong> drive technical development of standards and tools,
            ensuring deliverables are relevant across modalities and applications.
          </li>
          <li>
            <strong>Task Forces</strong> are shorter-term, high-impact initiatives that address
            urgent or cross-cutting needs.
          </li>
        </ul>
        <p>
          <strong>Founders:</strong> Ryan Brinkman, Goce Bogdanoski, Kelly Lundsten, Kamila
          Czechowska.
        </p>
      </Section>

      <Section title="Network & Collaborations">
        <p>
          SOULCAP connects academia, clinics, and industry to create a common immune data language,
          working alongside respected global scientific societies, key opinion leaders, reagent
          manufacturers, and biopharma and academic institutions — including ESCCA (European Society
          for Clinical Cell Analysis), IUIS (International Union of Immunological Societies), and
          ICCS (International Clinical Cytometry Society).
        </p>
      </Section>
    </PageShell>
  )
}
