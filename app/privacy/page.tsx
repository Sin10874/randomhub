import Navbar from '../components/Navbar';
import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how RandomHub protects your privacy. We don't collect personal data, require registration, or use tracking cookies.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy - RandomHub",
    description: "Learn how RandomHub protects your privacy. No data collection, no tracking, no registration required.",
    url: `${siteUrl}/privacy`,
    type: "website",
    siteName: "RandomHub",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - RandomHub",
    description: "Learn how RandomHub protects your privacy. No data collection, no tracking, no registration required.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: `${siteUrl}/privacy`,
    description: "Learn how RandomHub protects your privacy. We don't collect personal data, require registration, or use tracking cookies.",
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'RandomHub',
      url: siteUrl,
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: October 31, 2025</p>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 space-y-6">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-purple-100 mb-8">
              <p className="text-base sm:text-lg font-semibold text-purple-700 mb-2">
                🔒 Your Privacy Matters
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                At RandomHub, we take your privacy seriously. This page explains our commitment to protecting your data and how we operate our service with minimal data collection.
              </p>
            </div>

            {/* No Personal Data Collection */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                1. No Personal Data Collection
              </h2>
              <p className="leading-relaxed">
                RandomHub is designed to respect your privacy. We <strong>do not collect, store, or process any personal information</strong>. You can use our tools without:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Creating an account or providing an email address</li>
                <li>Sharing your name, address, or contact information</li>
                <li>Providing payment details (because we&apos;re free!)</li>
                <li>Logging in with social media accounts</li>
              </ul>
            </section>

            {/* What We Don't Track */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                2. What We Don&apos;t Track
              </h2>
              <p className="leading-relaxed">
                Unlike many websites, we minimize tracking and data collection:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>No tracking cookies:</strong> We don&apos;t use cookies to track your behavior across sessions</li>
                <li><strong>No user profiles:</strong> We don&apos;t build profiles or track individual users</li>
                <li><strong>No third-party analytics:</strong> We don&apos;t share data with advertising networks or data brokers</li>
                <li><strong>No generated content storage:</strong> Words, names, or cities you generate are not saved by us</li>
              </ul>
            </section>

            {/* Technical Information */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                3. Technical Information
              </h2>
              <p className="leading-relaxed">
                To provide and maintain our service, we may collect minimal technical information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Server logs:</strong> Standard web server logs (IP addresses, browser type, timestamps) for security and performance purposes</li>
                <li><strong>Anonymous usage statistics:</strong> Aggregated, non-identifiable data about site usage to improve our service</li>
                <li><strong>Session data:</strong> Temporary data stored in your browser to maintain your filter preferences during your visit (cleared when you close the browser)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                This information is <strong>anonymous, aggregated, and cannot be used to identify you personally</strong>.
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                4. How We Use Information
              </h2>
              <p className="leading-relaxed">
                The minimal technical data we collect is used solely for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Maintaining and improving service performance</li>
                <li>Detecting and preventing security threats</li>
                <li>Understanding general usage patterns (e.g., which tools are most popular)</li>
                <li>Troubleshooting technical issues</li>
              </ul>
              <p className="leading-relaxed mt-3">
                We <strong>never sell, rent, or share</strong> any information with third parties for marketing purposes.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                5. Third-Party Services
              </h2>
              <p className="leading-relaxed">
                RandomHub is hosted on <strong>Vercel</strong>, a trusted web hosting platform. Vercel may collect standard hosting information (like IP addresses) as part of their service. We encourage you to review <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Vercel&apos;s Privacy Policy</a>.
              </p>
              <p className="leading-relaxed mt-3">
                We do not integrate with advertising networks, social media trackers, or other third-party data collection services.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                6. Data Security
              </h2>
              <p className="leading-relaxed">
                While we collect minimal data, we still take security seriously:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Our website uses <strong>HTTPS encryption</strong> to secure your connection</li>
                <li>We follow industry best practices for web application security</li>
                <li>We regularly update our infrastructure and dependencies</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                7. Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed">
                RandomHub is safe for all ages. Since we don&apos;t collect personal information, there are no special concerns regarding children&apos;s privacy. Parents and educators can confidently use our tools in educational settings.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                8. Your Rights
              </h2>
              <p className="leading-relaxed">
                Because we don&apos;t collect personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>There&apos;s no personal data to access, correct, or delete</li>
                <li>You can use our service completely anonymously</li>
                <li>You can stop using our service at any time without any data concerns</li>
                <li>You don&apos;t need to opt-out of anything because we don&apos;t track you</li>
              </ul>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                9. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                10. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our practices, please feel free to contact us through our website.
              </p>
            </section>

            {/* Summary */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-100 mt-8">
              <p className="text-base sm:text-lg font-semibold text-green-700 mb-2">
                ✨ In Simple Terms
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                RandomHub is built with privacy first. We don&apos;t collect your personal information, we don&apos;t track you, and we don&apos;t sell data. You can use our tools freely and anonymously. That&apos;s our commitment to you.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm py-6 mt-auto border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            © 2025 RandomHub
          </p>
        </div>
      </footer>
    </div>
  );
}
