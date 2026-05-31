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

/**
 * Layout for legal/policy pages. Renders a title, effective date, a
 * "draft pending review" notice, and prose children with sensible defaults.
 */
export function LegalArticle({
  title,
  effectiveDate,
  children,
}: {
  title: string
  effectiveDate: string
  children: React.ReactNode
}) {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-bold" style={{ color: BRAND.primary }}>
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-500">Effective date: {effectiveDate}</p>
        <p
          className="mt-4 rounded-md border-l-4 bg-gray-50 p-3 text-sm text-gray-600"
          style={{ borderColor: BRAND.accent }}
        >
          Draft for review. This policy is a working draft for SOULCAP Foundation and does not
          constitute legal advice; it should be reviewed by qualified counsel before publication.
        </p>
        <div className="legal-prose mt-8 space-y-4 text-[16px] leading-relaxed text-gray-700">
          {children}
        </div>
      </div>
    </PageShell>
  )
}

/** Section heading inside a LegalArticle. */
export function LegalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 text-xl font-semibold" style={{ color: BRAND.primary }}>
      {children}
    </h2>
  )
}
