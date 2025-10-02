import type { Metadata } from 'next'

import './globals.css'
import { Source_Serif_4 , Inter} from 'next/font/google'
import Navbar from '@/components/Navbar'
import GoogleAnalytics from '@/provider/GoogleAnalytics'
import JsonLd from '@/provider/JsonLd'
const sourceSerif4 = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const metadata: Metadata = {
  title: {
    default: 'Vautomate - AI-Powered E-commerce Growth Intelligence',
    template: '%s | Vautomate'
  },
  description: 'Automate your e-commerce growth with AI-powered insights from Shopify, Meta & Google Analytics. Get weekly actionable projects and smart execution for 97% average growth.',
  keywords: [
    'AI e-commerce',
    'Shopify automation',
    'e-commerce growth',
    'AI analytics',
    'Meta ads automation',
    'Google Analytics automation',
    'e-commerce intelligence',
    'automated marketing',
    'AI marketing tools',
    'Shopify AI',
    'e-commerce automation',
    'growth hacking',
    'marketing automation',
    'AI insights',
    'business intelligence'
  ],
  authors: [{ name: 'Vautomate Team' }],
  creator: 'Vautomate',
  publisher: 'Vautomate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vautomate.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vautomate.ai',
    title: 'Vautomate - AI-Powered E-commerce Growth Intelligence',
    description: 'Automate your e-commerce growth with AI-powered insights from Shopify, Meta & Google Analytics. Get weekly actionable projects and smart execution for 87% average growth.',
    siteName: 'Vautomate',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Vautomate - AI Growth Engine for E-commerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vautomate - AI-Powered E-commerce Growth Intelligence',
    description: 'Automate your e-commerce growth with AI-powered insights from Shopify, Meta & Google Analytics. Get weekly actionable projects and smart execution for 87% average growth.',
    creator: '@vautomate',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <GoogleAnalytics />
      </head>
      <body className={`${sourceSerif4.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
