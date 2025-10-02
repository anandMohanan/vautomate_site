import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-26">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-primary mb-4">
            Your Privacy Matters
          </h1>
          <h2 className="text-2xl font-serif text-gray-800 mb-6">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information while you use VAutomate AI.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: June 10, 2025
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          {/* What We Collect */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Collect</h3>
            <p className="text-gray-700">
              Basic analytics data and profile information to improve our service
            </p>
          </section>

          {/* How We Protect */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Protect</h3>
            <p className="text-gray-700">
              Industry-standard security measures to keep your data safe
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
            <p className="text-gray-700">
              You can access, update, or delete your personal information anytime
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h3>
            <p className="text-gray-700 mb-4">
              This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use VAutomate AI and tells you about your privacy rights and how the law protects you.
            </p>
            <p className="text-gray-700">
              We use your personal data to provide and improve the service. By using the service, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Google Services Usage */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Google Services Usage</h3>

            <h4 className="text-lg font-medium text-gray-900 mb-3">Google Data We Access</h4>
            <p className="text-gray-700 mb-4">
              VAutomate AI requests only the following limited Google permissions:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Google Analytics (Read-Only): To view website analytics data for service improvement</li>
              <li>Profile Information: Your basic Google profile information (name and profile picture)</li>
              <li>Email Address: Your email address for account identification and communication</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> We do NOT access any Google Workspace APIs, Gmail messages, Google Drive files, Google Calendar events, Google Sheets, or any other personal Google account data beyond what is listed above.
            </p>

            <h4 className="text-lg font-medium text-gray-900 mb-3">Commitment: No AI/ML Model Training</h4>
            <p className="text-gray-700">
              We explicitly affirm that we do NOT use any Google user data, including Google Analytics data, profile information, or email addresses, to develop, improve, or train generalized AI and/or ML models.
            </p>
            <p className="text-gray-700">
              All data collected is used solely for service provision, account management, and website optimization. No data is used for machine learning model development or training purposes.
            </p>
          </section>

          {/* Other Information We Collect */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Information We Collect</h3>

            <h4 className="text-lg font-medium text-gray-900 mb-3">Usage Data</h4>
            <p className="text-gray-700 mb-4">
              Usage data is collected automatically when using the service and may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Your device's IP address and browser information</li>
              <li>Pages visited and time spent on our service</li>
              <li>Device identifiers and diagnostic data</li>
              <li>Mobile device information when accessing via mobile</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-900 mb-3">Cookies & Tracking</h4>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to improve your experience:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences</li>
              <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and maintain our service</li>
              <li>Manage your account and registration</li>
              <li>Process transactions and contracts</li>
              <li>Send important updates and notifications</li>
              <li>Provide customer support</li>
              <li>Analyze usage and improve our service</li>
              <li>Send promotional communications (opt-out available)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h3>
            <p className="text-gray-700 mb-4">
              We may share your information in these limited circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Service Providers:</strong> Trusted partners who help us operate our service</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
              <li><strong>With Consent:</strong> Any other purpose with your explicit consent</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
            <p className="text-gray-700 mb-4">
              You have the right to access, update, or delete your personal information. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access and review your personal data</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of promotional communications</li>
              <li>Control cookie preferences in your browser</li>
              <li>Contact us for data portability requests</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
            <p className="text-gray-700">
              The security of your personal data is important to us. We use commercially acceptable means to protect your information, but remember that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Children's Privacy</h3>
            <p className="text-gray-700 mb-4">
              Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent and believe your child has provided us with personal data, please contact us.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Policy Updates</h3>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. You are advised to review this policy periodically.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About This Policy?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please don't hesitate to contact us:
            </p>
            <p className="text-gray-700 font-medium">
              hey@vautomate.ai
            </p>
          </section>

          {/* Footer */}
          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-gray-500 text-center">
              © 2025 VAutomate INC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
