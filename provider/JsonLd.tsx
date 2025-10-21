export default function JsonLd() {
    return (
      <>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vautomate",
              "url": "https://growth.vautomate.ai",
              "logo": "https://growth.vautomate.ai/logo.png",
              "description": "AI-powered e-commerce growth intelligence platform that automates growth for Shopify stores through AI insights and smart execution.",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/vautomate",
                "https://linkedin.com/company/vautomate"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />

        {/* Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Vautomate",
              "applicationCategory": "BusinessApplication",
              "applicationSubCategory": "E-commerce Intelligence Platform",
              "operatingSystem": "Web Browser",
              "offers": [
                {
                  "@type": "Offer",
                  "price": "19.80",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "19.80",
                    "priceCurrency": "USD",
                    "valueAddedTaxIncluded": false
                  },
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "Vautomate"
                  }
                }
              ],
              "description": "AI-powered e-commerce growth intelligence platform that provides weekly insights from Shopify, Meta & Google Analytics with actionable projects and smart execution for automated business growth.",
              "featureList": [
                "AI-powered analytics integration",
                "Weekly actionable insights",
                "Automated project execution",
                "Shopify, Meta & Google Analytics integration",
                "24/7 AI monitoring",
                "Growth intelligence reports"
              ],
              "screenshot": "https://growth.vautomate.ai/screenshot.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "56",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Vautomate transformed our e-commerce business. The AI insights are incredibly accurate and the automated execution saves us hours every week."
                }
              ],
              "provider": {
                "@type": "Organization",
                "name": "Vautomate"
              }
            })
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Vautomate",
              "url": "https://growth.vautomate.ai",
              "description": "AI-powered e-commerce growth intelligence platform",
              "inLanguage": "en-US",
              "copyrightHolder": {
                "@type": "Organization",
                "name": "Vautomate"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://growth.vautomate.ai/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI-Powered E-commerce Growth Intelligence",
              "description": "Automated e-commerce growth platform providing AI insights and execution for Shopify stores",
              "provider": {
                "@type": "Organization",
                "name": "Vautomate"
              },
              "serviceType": "Software as a Service",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Vautomate Pricing Plans",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Vautomate Pro",
                      "description": "Full AI-powered e-commerce growth intelligence platform"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "56"
              }
            })
          }}
        />
      </>
    )
  }
