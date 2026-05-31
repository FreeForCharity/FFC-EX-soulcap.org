import type { Metadata } from 'next'
import { LegalArticle, LegalHeading } from '@/components/content-page'
import { SITE } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How SOULCAP Foundation uses cookies and similar technologies, and your choices.',
}

export default function CookiePolicy() {
  return (
    <LegalArticle title="Cookie Policy" effectiveDate="2026-05-31">
      <p>
        This policy explains how SOULCAP Foundation uses cookies and similar technologies on this
        website, and how you can control them.
      </p>

      <LegalHeading>What are cookies?</LegalHeading>
      <p>
        Cookies are small text files stored on your device. They help websites function, remember
        preferences, and measure usage.
      </p>

      <LegalHeading>How we use cookies</LegalHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Necessary.</strong> Required for the site to work and to remember your cookie
          choices.
        </li>
        <li>
          <strong>Analytics (consent-based).</strong> Google Tag Manager and analytics tags load
          only after you consent, helping us understand how the site is used.
        </li>
        <li>
          <strong>Third-party.</strong> Embedded services such as Google Calendar (events) and
          YouTube may set their own cookies when used.
        </li>
      </ul>

      <LegalHeading>Managing your choices</LegalHeading>
      <p>
        When you first visit, our cookie-consent banner lets you accept, decline, or customize
        non-essential cookies. You can change your choice at any time by clearing site data or
        reopening the cookie preferences. You can also control cookies through your browser
        settings.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>Questions about this policy? Email {SITE.email}.</p>
    </LegalArticle>
  )
}
