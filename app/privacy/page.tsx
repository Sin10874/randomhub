import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              This is a placeholder page for the Privacy Policy.
            </p>
            <p className="mb-4">
              Content will be added here in the future to describe how RandomHub
              handles user data and privacy.
            </p>
          </div>
          <Link
            href="/"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
