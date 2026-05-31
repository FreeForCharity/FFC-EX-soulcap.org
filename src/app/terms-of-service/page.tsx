import type { Metadata } from 'next'
import { LegalArticle, LegalHeading } from '@/components/content-page'
import { SITE, HUBSPOT } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing your use of the SOULCAP Foundation website.',
}

export default function TermsOfService() {
  return (
    <LegalArticle title="Terms of Service" effectiveDate="2026-05-31">
      <p>
        These terms govern your use of the {SITE.legalName} website. By accessing or using the site,
        you agree to these terms.
      </p>

      <LegalHeading>Use of the site</LegalHeading>
      <p>
        You may use this site for lawful purposes related to SOULCAP&apos;s mission. You agree not
        to misuse the site, interfere with its operation, or attempt to access it in unauthorized
        ways.
      </p>

      <LegalHeading>Content &amp; intellectual property</LegalHeading>
      <p>
        Content on this site is provided for informational and educational purposes. SOULCAP&apos;s
        standards, datasets, and tools are made available under the licenses stated alongside them.
        Other trademarks and content remain the property of their respective owners.
      </p>

      <LegalHeading>Data contributions</LegalHeading>
      <p>
        If you contribute data or materials to SOULCAP, you confirm you have the right to do so.
        Contributions are governed by SOULCAP&apos;s data and licensing policies; contributors
        retain rights as described in those policies.
      </p>

      <LegalHeading>Donations</LegalHeading>
      <p>
        Donations are handled by Square and are subject to our Donation Policy. SOULCAP is a US
        501(c)(3) non-profit organization.
      </p>

      <LegalHeading>Third-party services &amp; links</LegalHeading>
      <p>
        The site integrates and links to third-party services (e.g., HubSpot, Square, Google,
        LinkedIn, YouTube). We are not responsible for the content or practices of third parties.
      </p>

      <LegalHeading>Disclaimer &amp; limitation of liability</LegalHeading>
      <p>
        The site is provided &quot;as is&quot; without warranties of any kind. To the fullest extent
        permitted by law, SOULCAP is not liable for any damages arising from your use of the site.
      </p>

      <LegalHeading>Changes &amp; contact</LegalHeading>
      <p>
        We may update these terms and will post changes here with a new effective date. Questions?
        Email {HUBSPOT.fallbackEmail}.
      </p>
    </LegalArticle>
  )
}
