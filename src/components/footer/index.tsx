'use client'

import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { NAV, LEGAL_LINKS, EXTERNAL, SITE, BRAND } from '@/lib/soulcap'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  const socialLinks = [
    { icon: FaLinkedinIn, href: EXTERNAL.linkedin, label: 'LinkedIn' },
    { icon: FaYoutube, href: EXTERNAL.youtube, label: 'YouTube' },
  ]

  return (
    <footer className="text-white" style={{ backgroundColor: BRAND.primaryDark }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6 lg:px-8">
        {/* Column 1: About */}
        <div className="space-y-4">
          <h3 className="text-[24px] font-semibold">{SITE.name}</h3>
          <p className="text-[15px] leading-relaxed text-white/80">{SITE.description}</p>
          <p className="text-[14px] text-white/70">{SITE.address}</p>
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full p-2 transition-opacity hover:opacity-80"
                style={{ backgroundColor: BRAND.accent }}
              >
                <Icon className="h-5 w-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="space-y-4">
          <h3 className="text-[24px] font-semibold">Explore</h3>
          <ul className="space-y-2 text-[15px]">
            {NAV.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-white/80 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={EXTERNAL.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-colors hover:text-white"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4">
          <h3 className="text-[24px] font-semibold">Policies</h3>
          <ul className="space-y-2 text-[15px]">
            {LEGAL_LINKS.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-white/80 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15 px-4 py-6 text-center text-[15px] text-white/80">
        <p>
          © {currentYear} {SITE.copyrightHolder}. All Rights Reserved. {SITE.legalName} is a US
          501(c)(3) non-profit organization.
        </p>
      </div>
    </footer>
  )
}

export default Footer
