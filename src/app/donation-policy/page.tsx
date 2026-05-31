import type { Metadata } from 'next'
import { LegalArticle, LegalHeading } from '@/components/content-page'
import { SITE, EXTERNAL, HUBSPOT } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Donation Policy',
  description: 'How donations to SOULCAP Foundation are processed, acknowledged, and refunded.',
}

export default function DonationPolicy() {
  return (
    <LegalArticle title="Donation Policy" effectiveDate="2026-05-31">
      <p>
        {SITE.legalName} is a US 501(c)(3) non-profit organization. This policy describes how
        donations are processed and handled.
      </p>

      <LegalHeading>How to donate</LegalHeading>
      <p>
        Donations are processed securely through{' '}
        <a href={EXTERNAL.donate} target="_blank" rel="noopener noreferrer" className="underline">
          Square
        </a>
        . SOULCAP does not collect or store your full payment-card information; it is handled by
        Square under its own terms and privacy policy.
      </p>

      <LegalHeading>Receipts &amp; tax deductibility</LegalHeading>
      <p>
        Proof of donation is provided upon payment. As SOULCAP is a 501(c)(3) organization,
        donations may be tax-deductible to the extent allowed by law; please consult your tax
        advisor. No goods or services are provided in exchange for a donation unless explicitly
        stated.
      </p>

      <LegalHeading>Use of funds</LegalHeading>
      <p>
        Donations support SOULCAP&apos;s mission to build open, FAIR, and AI-ready standards for
        immune cell identification and annotation, including reference datasets, open-source tools,
        and community programs.
      </p>

      <LegalHeading>Refunds</LegalHeading>
      <p>
        Donations are generally non-refundable. If you believe a donation was made in error or an
        incorrect amount was charged, contact us promptly at {HUBSPOT.fallbackEmail} and we will
        review the request.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>Questions about donations? Email {HUBSPOT.fallbackEmail}.</p>
    </LegalArticle>
  )
}
