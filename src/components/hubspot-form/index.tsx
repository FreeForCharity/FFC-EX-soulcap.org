'use client'

import React, { useEffect, useRef, useState } from 'react'
import { HUBSPOT, BRAND } from '@/lib/soulcap'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string
          formId: string
          region?: string
          target: string
        }) => void
      }
    }
  }
}

const EMBED_SRC = 'https://js.hsforms.net/forms/embed/v2.js'

/**
 * Embeds the SOULCAP HubSpot contact form (portal 47034399).
 *
 * When a form GUID is configured (NEXT_PUBLIC_HUBSPOT_FORM_ID), the official
 * HubSpot embed script renders the live form. Until the GUID is supplied the
 * component shows a graceful email fallback so the page stays functional.
 */
export default function HubSpotForm() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!HUBSPOT.formId) return

    const renderForm = () => {
      if (window.hbspt && targetRef.current) {
        window.hbspt.forms.create({
          portalId: HUBSPOT.portalId,
          formId: HUBSPOT.formId,
          region: HUBSPOT.region,
          target: '#hubspot-contact-form',
        })
        setLoaded(true)
      }
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`)
    if (existing && window.hbspt) {
      renderForm()
      return
    }

    const script = existing ?? document.createElement('script')
    if (!existing) {
      script.src = EMBED_SRC
      script.async = true
      document.body.appendChild(script)
    }
    script.addEventListener('load', renderForm)
    return () => script.removeEventListener('load', renderForm)
  }, [])

  if (!HUBSPOT.formId) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-gray-600">
        <p className="font-medium" style={{ color: BRAND.primary }}>
          Contact form (HubSpot · portal {HUBSPOT.portalId})
        </p>
        <p className="mt-2 text-[15px]">
          Fields: Name · Institution · Email · Inquiry Type · Message.
        </p>
        <p className="mt-3 text-[15px]">
          In the meantime, email us at{' '}
          <a
            href={`mailto:${HUBSPOT.fallbackEmail}`}
            className="font-medium"
            style={{ color: BRAND.accent }}
          >
            {HUBSPOT.fallbackEmail}
          </a>
          .
        </p>
        <p className="mt-2 text-[13px] text-gray-400">
          The live HubSpot form embed activates once its form ID is configured
          (NEXT_PUBLIC_HUBSPOT_FORM_ID).
        </p>
      </div>
    )
  }

  return (
    <div>
      <div id="hubspot-contact-form" ref={targetRef} />
      {!loaded && <p className="text-[15px] text-gray-500">Loading contact form…</p>}
    </div>
  )
}
