'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10882941181"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10882941181');

          // Conversion tracking function
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-10882941181/GkuiCNvi1bsaEP2BssUo',
                'value': 1.0,
                'currency': 'INR',
                'event_callback': callback
            });
            return false;
          }
          
          // Make conversion function globally available
          window.gtag_report_conversion = gtag_report_conversion;
        `}
      </Script>
    </>
  )
}
