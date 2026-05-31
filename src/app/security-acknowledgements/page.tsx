import type { Metadata } from 'next'
import { LegalArticle, LegalHeading } from '@/components/content-page'
import { HUBSPOT } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Security Acknowledgements',
  description:
    'Recognizing security researchers who have responsibly disclosed vulnerabilities to SOULCAP Foundation.',
}

export default function SecurityAcknowledgements() {
  return (
    <LegalArticle title="Security Acknowledgements" effectiveDate="2026-05-31">
      <p>
        SOULCAP Foundation thanks the security researchers who help keep our community safe by
        responsibly disclosing vulnerabilities under our Vulnerability Disclosure Policy.
      </p>

      <LegalHeading>Hall of thanks</LegalHeading>
      <p>
        No disclosures have been recognized yet. If you have responsibly reported an issue and would
        like to be credited here, let us know at {HUBSPOT.fallbackEmail}.
      </p>
    </LegalArticle>
  )
}
