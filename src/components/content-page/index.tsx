import React from 'react'
import { BRAND } from '@/lib/soulcap'

/** Page hero banner used by all interior (non-home) SOULCAP pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <section
      className="px-4 py-16 md:py-20"
      style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark}, ${BRAND.primary})` }}
    >
      <div className="mx-auto max-w-4xl text-center text-white">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h1>
        {intro && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{intro}</p>}
      </div>
    </section>
  )
}

/** Standard content section with an optional heading. */
export function Section({
  title,
  alt,
  children,
}: {
  title?: string
  alt?: boolean
  children: React.ReactNode
}) {
  return (
    <section className={`px-4 py-14 ${alt ? 'bg-gray-50' : ''}`}>
      <div className="mx-auto max-w-4xl">
        {title && (
          <h2 className="mb-6 text-2xl font-bold md:text-3xl" style={{ color: BRAND.primary }}>
            {title}
          </h2>
        )}
        <div className="space-y-4 text-[17px] leading-relaxed text-gray-700">{children}</div>
      </div>
    </section>
  )
}

/** Wrapper that offsets content below the fixed header. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="pt-[84px]">{children}</main>
}
