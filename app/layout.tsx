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
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('DOMContentLoaded', function() {
                // Wait for Tally to load
                if (window.Tally) {
                  // Override the default behavior for our form
                  const originalOpenPopup = window.Tally.openPopup;
                  window.Tally.openPopup = function(formId, options = {}) {
                    const defaultOptions = {
                      onSubmit: function(payload) {
                        // Show custom thank you message
                        showThankYouMessage();
                      },
                      ...options
                    };
                    return originalOpenPopup.call(this, formId, defaultOptions);
                  };
                }

                function showThankYouMessage() {
                  // Remove any existing thank you message
                  const existingMessage = document.getElementById('tally-thank-you-message');
                  if (existingMessage) {
                    existingMessage.remove();
                  }

                  // Create thank you message element
                  const message = document.createElement('div');
                  message.id = 'tally-thank-you-message';
                  message.innerHTML = \`
                    <div style="
                      position: fixed;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      background: white;
                      padding: 2rem 3rem;
                      border-radius: 12px;
                      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                      border: 2px solid #ff8c3c;
                      text-align: center;
                      z-index: 10000;
                      max-width: 400px;
                      width: 90%;
                    ">
                      <div style="font-size: 3rem; margin-bottom: 1rem;">✨</div>
                      <h3 style="
                        margin: 0 0 1rem 0;
                        color: #1f2937;
                        font-size: 1.5rem;
                        font-weight: 600;
                      ">Thank You!</h3>
                      <p style="
                        margin: 0 0 1.5rem 0;
                        color: #6b7280;
                        line-height: 1.6;
                      ">Thanks for submitting! We'll get back to you as soon as possible.</p>
                      <button onclick="closeThankYouMessage()" style="
                        background: #ff8c3c;
                        color: white;
                        border: none;
                        padding: 0.75rem 2rem;
                        border-radius: 6px;
                        font-weight: 500;
                        cursor: pointer;
                        transition: background-color 0.2s;
                      ">Got it!</button>
                    </div>
                    <div onclick="closeThankYouMessage()" style="
                      position: fixed;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      background: rgba(0, 0, 0, 0.5);
                      z-index: 9999;
                    "></div>
                  \`;

                  document.body.appendChild(message);

                  // Auto-close after 5 seconds
                  setTimeout(() => {
                    closeThankYouMessage();
                  }, 5000);
                }

                window.closeThankYouMessage = function() {
                  const message = document.getElementById('tally-thank-you-message');
                  if (message) {
                    message.remove();
                  }
                };
              });
            `
          }}
        />
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
