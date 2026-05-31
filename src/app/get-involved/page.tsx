import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
import { EXTERNAL, BRAND } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Join, support, and contribute to SOULCAP — advancing open, FAIR, and AI-ready cytometry.',
}

const ways = [
  {
    title: 'Join a Committee',
    body: 'Become an active member of the SOULCAP community advisory board. Contributors can join the strategy and/or operational committees that help shape the global framework for immune cell annotation.',
  },
  {
    title: 'Become a Data Contributor',
    body: 'Defined a new cell population? Created or validated a gating strategy? Contribute your data to a global reference resource.',
  },
  {
    title: 'Become an Ambassador',
    body: 'Learn how you can support, contribute to, and represent SOULCAP within your network.',
  },
]

export default function GetInvolvedPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Get Involved"
        title="Join, Support, and Contribute"
        intro="Join SOULCAP's global initiative to advance open, FAIR, and AI-ready cytometry."
      />

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {ways.map((w) => (
            <div key={w.title} className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-lg font-semibold" style={{ color: BRAND.primary }}>
                {w.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Section title="Donate" alt>
        <p>
          Support SOULCAP&apos;s mission to build open, global standards for immune cell annotation.
          Proof of donation will be provided upon payment.
        </p>
        <a
          href={EXTERNAL.donate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: BRAND.accent }}
        >
          Donate via Square
        </a>
      </Section>

      <Section title="Stay Connected">
        <ul className="list-disc space-y-1 pl-6">
          <li>Sign up for the SOULCAP newsletter.</li>
          <li>
            <a
              href={EXTERNAL.googleCalendar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
              style={{ color: BRAND.accent }}
            >
              Subscribe to SOULCAP&apos;s Google Calendar
            </a>
          </li>
        </ul>
      </Section>
    </PageShell>
  )
}
