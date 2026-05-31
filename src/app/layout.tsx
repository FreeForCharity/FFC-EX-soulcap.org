import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://freeforcharity.github.io/FFC-EX-soulcap.org'),
  title: {
    default: 'SOULCAP | Transforming Healthcare Through Innovative Cell Analysis',
    template: '%s | SOULCAP',
  },
  description:
    'SOULCAP Foundation is a global 501(c)(3) non-profit building a universal standard for immune cell identification and annotation in cytometry — advancing open, FAIR, and AI-ready data.',
  keywords: [
    'SOULCAP',
    'cytometry',
    'immune cell annotation',
    'flow cytometry',
    'FAIR data',
    'bioinformatics',
    'cell analysis',
    'nonprofit',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://freeforcharity.github.io/FFC-EX-soulcap.org/',
    siteName: 'SOULCAP',
    title: 'SOULCAP | Transforming Healthcare Through Innovative Cell Analysis',
    description:
      'A global standard for immune cell identification and annotation — advancing open, FAIR, and AI-ready cytometry data.',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Free For Charity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOULCAP | Transforming Healthcare Through Innovative Cell Analysis',
    description: 'A global standard for immune cell identification and annotation in cytometry.',
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://checkout.square.site" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://checkout.square.site" />
        <link rel="dns-prefetch" href="https://calendar.google.com" />

        {/* Preload critical LCP image */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/Images/soulcap/home-hero.png`}
          fetchPriority="high"
        />

        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        {/* <PopupProvider> */}
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* <PopupsRootClient /> */}
        {/* </PopupProvider> */}
      </body>
    </html>
  )
}
