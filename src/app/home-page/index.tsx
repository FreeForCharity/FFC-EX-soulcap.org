import React from 'react'
import Link from 'next/link'
import { EXTERNAL, BRAND } from '@/lib/soulcap'
import { assetPath } from '@/lib/assetPath'

const progress = [
  { label: 'Cells Annotated', value: 75 },
  { label: 'Visual Progress', value: 50 },
  { label: 'Milestones Achieved', value: 40 },
]

const achievements = [
  {
    title: 'Project Timeline',
    body: "Explore our roadmap to see how far we've come in our mission.",
  },
  {
    title: 'Key Milestones',
    body: 'Discover the significant achievements that mark our progress in this project.',
  },
  {
    title: 'Future Goals',
    body: 'Learn about our upcoming objectives and how we plan to achieve them.',
  },
  {
    title: 'Stay Updated',
    body: 'Join our public calendar to keep track of important dates and events.',
    href: EXTERNAL.googleCalendar,
  },
]

const HomePage: React.FC = () => {
  return (
    <main className="pt-[84px]">
      {/* Hero */}
      <section
        className="px-4 py-16 md:py-24"
        style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark}, ${BRAND.primary})` }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="text-white">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Transforming Healthcare Through Innovative Cell Analysis
            </h1>
            <p className="mt-6 text-lg text-white/85">
              At SOULCAP, we are dedicated to revolutionising the understanding of human health by
              harnessing the power of cell annotation. Our mission is to provide cutting-edge
              insights that drive advancements in medical research and patient care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={EXTERNAL.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND.accent }}
              >
                Donate now
              </a>
              <Link
                href="/about"
                className="rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath('/Images/soulcap/home-hero.png')}
              alt="SOULCAP cell annotation"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission band */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl" style={{ color: BRAND.primary }}>
            Empowering healthcare through innovative cell annotation and research advancements.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            At SOULCAP, our mission is to revolutionise the understanding of human health by
            meticulously annotating cells. We aim to enhance research capabilities and drive
            breakthroughs in medical science. Join us on this transformative journey as we unlock
            the potential of cellular insights.
          </p>
        </div>
      </section>

      {/* Discover */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl" style={{ color: BRAND.primary }}>
            Discover the Power of SOULCAP
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            SOULCAP revolutionises the way we understand cellular health by providing detailed
            insights into cell annotation. Our innovative platform empowers researchers to unlock
            new possibilities in biomedical research.
          </p>
          <Link
            href="/research-data"
            className="mt-8 inline-block rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND.primary }}
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Progress */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-400">
            Progress
          </p>
          <h2
            className="mt-2 text-center text-2xl font-bold md:text-3xl"
            style={{ color: BRAND.primary }}
          >
            Tracking Our Annotation Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            We are committed to annotating cells with precision and care. Our current progress
            reflects our dedication to advancing scientific understanding.
          </p>
          <div className="mt-10 space-y-6">
            {progress.map((p) => (
              <div key={p.label}>
                <div className="mb-1 flex justify-between text-sm font-semibold text-gray-700">
                  <span>{p.label}</span>
                  <span>{p.value}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full"
                    style={{ width: `${p.value}%`, backgroundColor: BRAND.accent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-400">
            Achievements
          </p>
          <h2
            className="mt-2 text-center text-2xl font-bold md:text-3xl"
            style={{ color: BRAND.primary }}
          >
            Our Journey: Milestones and Achievements
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold" style={{ color: BRAND.primary }}>
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{a.body}</p>
                {a.href && (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold"
                    style={{ color: BRAND.accent }}
                  >
                    Open calendar →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-400">
            Upcoming
          </p>
          <h2
            className="mt-2 text-center text-2xl font-bold md:text-3xl"
            style={{ color: BRAND.primary }}
          >
            Events
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Join us for our upcoming events to stay updated on the SOULCAP project. Live events are
            pulled directly from our public calendar.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-gray-100">
            <iframe
              title="SOULCAP public events calendar"
              src={EXTERNAL.googleCalendarEmbed}
              className="h-[480px] w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href={EXTERNAL.googleCalendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND.primary }}
            >
              Subscribe to our calendar
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
