import type { Metadata } from 'next'
import { PageShell, PageHero, Section } from '@/components/content-page'
import { EXTERNAL, BRAND } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'News & Events',
  description:
    'Latest announcements, publications, recordings, and the public events calendar from SOULCAP.',
}

export default function NewsEventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News & Events"
        title="News & Events"
        intro="Read the latest announcements, publications, and progress reports from SOULCAP's global network."
      />

      <Section title="Events Calendar">
        <p>
          Access the public calendar for upcoming meetings, workshops, and webinars. Each event
          displays time zones, registration links, and post-event recaps.
        </p>
        <a
          href={EXTERNAL.googleCalendar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: BRAND.primary }}
        >
          Open the public calendar
        </a>
      </Section>

      <Section title="Recordings & Media" alt>
        <p>
          View recorded lectures, tutorials, and press coverage illustrating SOULCAP&apos;s
          contributions to FAIR (Findability, Accessibility, Interoperability, and Reuse) cytometry.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <a
              href={EXTERNAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
              style={{ color: BRAND.accent }}
            >
              LinkedIn page for webinar news
            </a>
          </li>
          <li>
            <a
              href={EXTERNAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
              style={{ color: BRAND.accent }}
            >
              YouTube channel for recordings
            </a>
          </li>
        </ul>
      </Section>
    </PageShell>
  )
}
