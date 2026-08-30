import type { Metadata } from 'next'
import { LegalArticle, LegalHeading } from '@/components/content-page'
import { SITE } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How SOULCAP Foundation uses cookies and similar technologies, and your choices.',
}

export default function CookiePolicy() {
  return (
    <LegalArticle title="Cookie Policy" effectiveDate="2026-08-30">
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
          <strong>Analytics (Google Consent Mode).</strong> If you are in the European Economic
          Area, the United Kingdom, or Switzerland, Google Analytics sets no cookies and collects no
          identifiers until you accept — it still counts your visit in an aggregate, cookie-free way
          that cannot be tied back to you. Everywhere else, Google Analytics cookies are set from
          your first visit, and you can turn them off at any time using the Cookie Preferences link
          in our footer; we delete the cookies when you do. Which rule applies to your visit is
          determined by Google from your IP address at the time of your visit; IP geolocation is
          approximate.
        </li>
        <li>
          <strong>Third-party.</strong> Embedded services such as Google Calendar (events) and
          YouTube may set their own cookies when used.
        </li>
      </ul>

      <LegalHeading>Managing your choices</LegalHeading>
      <p>
        When you first visit, our cookie-consent banner lets you accept, decline, or customize
        non-essential cookies. You can change your mind at any time: the Cookie Preferences link in
        the footer reopens these choices, and withdrawing consent deletes the analytics and
        marketing cookies this site set. You can also control cookies through your browser settings.
      </p>

      <LegalHeading>Do Not Track and Global Privacy Control</LegalHeading>
      <p>
        This site does not read or respond to the &quot;Do Not Track&quot; or Global Privacy Control
        browser signals. We do not sell or share personal information as defined by the CCPA/CPRA,
        so there is nothing for those signals to opt out of. In the EEA, the UK, and Switzerland,
        analytics cookies stay off until you opt in through the consent banner; everywhere else they
        are set from your first visit, and you can turn them off at any time via the Cookie
        Preferences link in the footer — we delete the cookies when you do.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>Questions about this policy? Email {SITE.email}.</p>
    </LegalArticle>
  )
}
