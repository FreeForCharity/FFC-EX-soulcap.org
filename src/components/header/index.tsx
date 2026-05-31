'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV, EXTERNAL, SITE, BRAND } from '@/lib/soulcap'
import { assetPath } from '@/lib/assetPath'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsMobileMenuOpen(false)

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <header
      id="header"
      className={`w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'h-[64px]' : 'h-[84px]'
      }`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath('/Images/soulcap/soulcap-logo.png')}
              alt={`${SITE.name} logo`}
              className={`transition-all duration-300 ${isScrolled ? 'h-9 w-9' : 'h-12 w-12'}`}
            />
            <span className="font-semibold tracking-wide" style={{ color: BRAND.primary }}>
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="px-3 py-2 text-[14px] font-semibold transition-colors duration-200"
                    style={{ color: isActive(item.path) ? BRAND.primary : '#4b5563' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={EXTERNAL.donate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 rounded-full px-5 py-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: BRAND.accent }}
                >
                  Donate now
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <RxCross2 className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[64px]' : 'top-[84px]'
            }`}
          >
            <div
              className="mx-auto max-w-[700px] bg-white px-6 py-4 shadow-[0_2px_5px_rgba(0,0,0,0.1)] max-h-[80vh] overflow-auto border-t-[3px]"
              style={{ borderColor: BRAND.accent }}
            >
              <ul className="space-y-2">
                {NAV.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className="block rounded-lg px-4 py-2 text-sm font-semibold"
                      style={{
                        color: isActive(item.path) ? BRAND.primary : '#374151',
                        backgroundColor: isActive(item.path) ? '#eaf2fb' : 'transparent',
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={EXTERNAL.donate}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="block rounded-lg px-4 py-2 text-center text-sm font-semibold text-white"
                    style={{ backgroundColor: BRAND.accent }}
                  >
                    Donate now
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
