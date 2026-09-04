import type { Metadata } from 'next'
import { LegalArticle, LegalHeading } from '@/components/content-page'
import { SITE } from '@/lib/soulcap'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SOULCAP Foundation collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <LegalArticle title="Privacy Policy" effectiveDate="2026-08-30">
      <p>
        {SITE.legalName} (&quot;SOULCAP&quot;, &quot;we&quot;, &quot;us&quot;) respects your
        privacy. This policy explains what personal information we collect through this website, how
        we use it, and the choices you have. By using this site you agree to this policy.
      </p>

      <LegalHeading>Who we are</LegalHeading>
      <p>
        SOULCAP Foundation is a 501(c)(3) non-profit organization. Postal address: {SITE.address}.
        For privacy questions, contact {SITE.email}.
      </p>

      <LegalHeading>Information we collect</LegalHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Email enquiries.</strong> When you email us (e.g. via the address on our Contact
          page), we receive whatever information you include — typically your name, institution, and
          message — and use it to respond.
        </li>
        <li>
          <strong>Donations (Square).</strong> Donations are processed by Square via a hosted
          checkout. We do not collect or store your full payment-card details; Square processes
          payment information under its own privacy policy.
        </li>
        <li>
          <strong>Analytics &amp; cookies.</strong> We use Google Tag Manager and associated
          analytics, governed by Google Consent Mode. Google&apos;s tags set no analytics or
          advertising cookies and read no identifiers from your device until you accept through the
          cookie consent banner, wherever in the world you are — until then only aggregate,
          cookieless measurement takes place. There is no country in which analytics cookies are set
          before you choose, and you can turn them off again at any time via the Cookie Preferences
          link in the footer. The same rule applies to every visitor, so nothing depends on where
          you are. See our Cookie Policy for details and controls.
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
        us operate (such as Square and Google), or where required by law.
      </p>

      <LegalHeading>Your rights</LegalHeading>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or restrict
        processing of your personal data, and to withdraw consent. To exercise these rights, contact{' '}
        {SITE.email}.
      </p>

      <LegalHeading>Your rights in the EU, UK, and EEA (GDPR)</LegalHeading>
      <p>
        If you visit from the European Union, the United Kingdom, or the wider European Economic
        Area, the EU General Data Protection Regulation (GDPR) or the UK GDPR applies to our
        handling of your personal data, and this section supplements the rest of this policy.
      </p>
      <p>
        <strong>How consent works, in plain language.</strong> We use Google Consent Mode. The same
        rule applies to every visitor, so nothing depends on where you are. Google Analytics runs
        cookie-free until you accept, wherever in the world you are. (Visitors in Switzerland are
        protected by Switzerland&apos;s Federal Act on Data Protection (FADP) rather than the GDPR;
        the treatment described here is the same either way.) There is no country in which analytics
        cookies are set before you choose. Our Cookie Policy describes this in detail.
      </p>
      <p>
        <strong>Legal bases.</strong> We process personal data only on these bases: consent
        (Google&apos;s tags set no analytics or advertising cookies and read no identifiers from
        your device until you accept through the cookie consent banner, wherever in the world you
        are; you can withdraw consent at any time via the Cookie Preferences link in the footer,
        after which this site deletes the tracking cookies it set and Google&apos;s tags return to
        the cookieless state); legitimate interests (operating, securing, and improving this
        website, balanced against your rights); and legal obligation (where processing is required
        to comply with applicable law).
      </p>
      <p>
        <strong>Your rights.</strong> You have the right to: access the personal data we hold about
        you; have inaccurate data rectified; have your data erased; restrict or object to
        processing; receive your data in a portable format; and withdraw any consent you have given,
        at any time, without affecting the lawfulness of processing before withdrawal. Contact{' '}
        {SITE.email} to exercise any of these rights; we will respond within the time limits the
        GDPR sets. You also have the right to lodge a complaint with your national data protection
        supervisory authority (in the UK, the Information Commissioner&apos;s Office).
      </p>

      <LegalHeading>Your California privacy rights (CCPA/CPRA)</LegalHeading>
      <p>
        If you are a California resident, the California Consumer Privacy Act, as amended by the
        California Privacy Rights Act (CCPA/CPRA), gives you specific rights, and this section
        supplements the rest of this policy.
      </p>
      <p>
        <strong>We do not sell or share your personal information.</strong> {SITE.legalName} does
        not sell personal information, and does not share it for cross-context behavioral
        advertising, as those terms are defined by California law — and has not done so in the
        preceding 12 months. We do not knowingly collect or sell the personal information of anyone
        under 16. We do not collect sensitive personal information beyond what is necessary to
        provide this website and our services, and we do not use it to infer characteristics about
        you.
      </p>
      <p>
        <strong>Your rights.</strong> You have the right to: know what personal information we
        collect, use, and disclose, and to access it; delete personal information we collected from
        you; correct inaccurate personal information; opt out of any sale or sharing of personal
        information (not applicable, since we do neither); limit the use of sensitive personal
        information; and not be discriminated against for exercising any of these rights.
      </p>
      <p>
        <strong>Opt-out preference signals (Global Privacy Control / Do Not Track).</strong> This
        site does not read or respond to the Global Privacy Control or Do Not Track browser signals.
        We do not sell or share personal information as defined by the CCPA/CPRA, so there is
        nothing for those signals to opt out of. Analytics cookies are never set before you accept,
        anywhere in the world; you can turn them off again at any time via the Cookie Preferences
        link in the footer, and we delete the cookies when you do.
      </p>
      <p>
        <strong>Exercising your rights.</strong> Submit a request to {SITE.email}. We will verify
        your request using information associated with your interactions with us, and you may use an
        authorized agent to submit a request on your behalf. We will respond within the timeframes
        California law requires.
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
        Email {SITE.email}.
      </p>
    </LegalArticle>
  )
}
