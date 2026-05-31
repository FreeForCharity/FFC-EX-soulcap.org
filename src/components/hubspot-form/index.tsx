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

    // Surface misconfiguration: HubSpot only accepts known data-center regions.
    const KNOWN_REGIONS = ['na1', 'na2', 'eu1', 'ap1']
    if (!KNOWN_REGIONS.includes(HUBSPOT.region)) {
      console.warn(
        `[HubSpotForm] Unrecognized HubSpot region "${HUBSPOT.region}". ` +
          `Expected one of ${KNOWN_REGIONS.join(', ')}; the embed may silently fail to render.`
      )
    }

    let cancelled = false
    let pollId: ReturnType<typeof setInterval> | undefined
    let stopId: ReturnType<typeof setTimeout> | undefined

    const renderForm = (): boolean => {
      if (cancelled || !window.hbspt || !targetRef.current) return false
      window.hbspt.forms.create({
        portalId: HUBSPOT.portalId,
        formId: HUBSPOT.formId,
        region: HUBSPOT.region,
        target: '#hubspot-contact-form',
      })
      setLoaded(true)
      if (pollId) clearInterval(pollId)
      return true
    }

    // If the script already finished loading and hbspt is ready, render now.
    if (renderForm()) return

    // Ensure the embed script is present (reuse an existing tag if there is one).
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`)
    const script = existing ?? document.createElement('script')
    if (!existing) {
      script.src = EMBED_SRC
      script.async = true
      document.body.appendChild(script)
    }

    // Fresh-load path.
    script.addEventListener('load', renderForm)
    // Fallback for the race where the script is already attached/cached (so its
    // `load` event will not fire again) but `window.hbspt` is not yet populated.
    pollId = setInterval(renderForm, 200)
    stopId = setTimeout(() => pollId && clearInterval(pollId), 10000)

    return () => {
      cancelled = true
      script.removeEventListener('load', renderForm)
      if (pollId) clearInterval(pollId)
      if (stopId) clearTimeout(stopId)
    }
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
