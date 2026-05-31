import type { Metadata } from 'next'
import { LegalArticle, LegalHeading } from '@/components/content-page'
import { SITE, HUBSPOT } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SOULCAP Foundation collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <LegalArticle title="Privacy Policy" effectiveDate="2026-05-31">
      <p>
        {SITE.legalName} (&quot;SOULCAP&quot;, &quot;we&quot;, &quot;us&quot;) respects your
        privacy. This policy explains what personal information we collect through this website, how
        we use it, and the choices you have. By using this site you agree to this policy.
      </p>

      <LegalHeading>Who we are</LegalHeading>
      <p>
        SOULCAP Foundation is a 501(c)(3) non-profit organization. Postal address: {SITE.address}.
        For privacy questions, contact {HUBSPOT.fallbackEmail}.
      </p>

      <LegalHeading>Information we collect</LegalHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Contact form (HubSpot).</strong> When you submit our contact form we collect the
          information you provide (such as name, institution, email, inquiry type, and message).
          This is processed by HubSpot on our behalf.
        </li>
        <li>
          <strong>Donations (Square).</strong> Donations are processed by Square via a hosted
          checkout. We do not collect or store your full payment-card details; Square processes
          payment information under its own privacy policy.
        </li>
        <li>
          <strong>Analytics &amp; cookies.</strong> With your consent, we use Google Tag Manager and
          associated analytics to understand site usage. See our Cookie Policy for details and
          controls.
        </li>
        <li>
          <strong>Embedded content.</strong> Pages may embed third-party content (e.g., a Google
          Calendar, YouTube videos). Those providers may set their own cookies and collect data as
          if you visited them directly.
        </li>
        <li>
          <strong>Server logs.</strong> Our static site is hosted on GitHub Pages, which may log
          standard request data (such as IP address and user agent) for security and operations.
        </li>
      </ul>

      <LegalHeading>How we use your information</LegalHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>To respond to your inquiries and partnership or data-contribution requests.</li>
        <li>To process and acknowledge donations.</li>
        <li>To operate, maintain, and improve the website.</li>
        <li>To send updates you have requested (e.g., newsletter), where applicable.</li>
      </ul>

      <LegalHeading>Sharing your information</LegalHeading>
      <p>
        We do not sell your personal information. We share it only with service providers that help
        us operate (such as HubSpot, Square, and Google), or where required by law.
      </p>

      <LegalHeading>Your rights</LegalHeading>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or restrict
        processing of your personal data, and to withdraw consent. To exercise these rights, contact{' '}
        {HUBSPOT.fallbackEmail}.
      </p>

      <LegalHeading>Children&apos;s privacy</LegalHeading>
      <p>
        Our services are not directed to children under 13, and we do not knowingly collect their
        data.
      </p>

      <LegalHeading>International transfers</LegalHeading>
      <p>
        SOULCAP operates globally; your information may be processed in countries other than your
        own. We take reasonable steps to protect it consistent with this policy.
      </p>

      <LegalHeading>Changes &amp; contact</LegalHeading>
      <p>
        We may update this policy and will post changes here with a new effective date. Questions?
        Email {HUBSPOT.fallbackEmail}.
      </p>
    </LegalArticle>
  )
}
