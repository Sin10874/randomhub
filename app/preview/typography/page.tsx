'use client';

import { useState } from 'react';
import {
  Plus_Jakarta_Sans,
  Playfair_Display,
  Manrope,
  Source_Serif_4,
  Inter,
  Crimson_Pro,
  Spline_Sans,
  Literata,
  DM_Sans,
  EB_Garamond
} from 'next/font/google';
import localFont from 'next/font/local';

// Option A: Plus Jakarta Sans + Playfair Display
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta'
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-playfair'
});

// Option B: Manrope + Source Serif 4
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope'
});
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-source-serif'
});

// Option C: Inter + Crimson Pro
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});
const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-crimson'
});

// Option D: Geist Sans (local)
const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

// Option E: Spline Sans + Literata
const spline = Spline_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spline'
});
const literata = Literata({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-literata'
});

// Option F: DM Sans + EB Garamond
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans'
});
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-eb-garamond'
});

const fontOptions = [
  {
    name: 'Option A: Plus Jakarta Sans + Playfair Display',
    description: 'Modern geometric with classic elegance. High contrast creates premium feel.',
    sans: plusJakarta.variable,
    display: playfair.variable,
    sansName: 'var(--font-jakarta)',
    displayName: 'var(--font-playfair)',
  },
  {
    name: 'Option B: Manrope + Source Serif 4',
    description: 'Clean, professional, editorial. Excellent readability; sophisticated.',
    sans: manrope.variable,
    display: sourceSerif.variable,
    sansName: 'var(--font-manrope)',
    displayName: 'var(--font-source-serif)',
  },
  {
    name: 'Option C: Inter + Crimson Pro',
    description: 'Silicon Valley meets academia. Battle-tested Inter with dramatic Crimson.',
    sans: inter.variable,
    display: crimson.variable,
    sansName: 'var(--font-inter)',
    displayName: 'var(--font-crimson)',
  },
  {
    name: 'Option D: Geist Sans Only',
    description: 'Vercel design system. Single font family. Best performance (~65kb).',
    sans: geistSans.variable,
    display: geistSans.variable,
    sansName: 'var(--font-geist-sans)',
    displayName: 'var(--font-geist-sans)',
  },
  {
    name: 'Option E: Spline Sans + Literata',
    description: 'French geometric + Google reading font. Unique personality.',
    sans: spline.variable,
    display: literata.variable,
    sansName: 'var(--font-spline)',
    displayName: 'var(--font-literata)',
  },
  {
    name: 'Option F: DM Sans + EB Garamond',
    description: 'Contemporary sans + timeless serif. Geometric warmth meets elegance.',
    sans: dmSans.variable,
    display: ebGaramond.variable,
    sansName: 'var(--font-dm-sans)',
    displayName: 'var(--font-eb-garamond)',
  },
];

export default function TypographyPreview() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const current = fontOptions[selectedOption];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Typography Preview</h1>
          <p className="text-gray-600 mb-6">
            Compare font pairings for RandomHub. No global styles changed yet.
          </p>

          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-6">
            {fontOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedOption === index
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Option {String.fromCharCode(65 + index)}
              </button>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Toggle Dark Mode
          </button>
        </div>

        {/* Current Selection Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{current.name}</h2>
          <p className="text-gray-600 mb-4">{current.description}</p>
          <div className="flex gap-4 text-sm">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
              Sans: {current.sansName}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              Display: {current.displayName}
            </span>
          </div>
        </div>

        {/* Font Preview Container */}
        <div
          className={`${current.sans} ${current.display} rounded-2xl shadow-2xl overflow-hidden`}
        >
          {/* Light Background */}
          <div className={`p-12 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className={darkMode ? 'text-white' : 'text-gray-900'}>
              {/* Display Font Samples */}
              <h1
                className="text-6xl font-bold mb-4 tracking-tight"
                style={{ fontFamily: current.displayName }}
              >
                Welcome to RandomHub
              </h1>
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: current.displayName }}
              >
                Generate Random Words
              </h2>
              <h3
                className="text-3xl font-semibold mb-8"
                style={{ fontFamily: current.displayName }}
              >
                Powerful Filter Options
              </h3>

              {/* Sans Font Samples */}
              <div style={{ fontFamily: current.sansName }}>
                <p className="text-lg mb-4 leading-relaxed">
                  This is a paragraph sample in the primary sans-serif font. It demonstrates
                  how body text will appear throughout the application. The font should be
                  highly readable at various sizes and maintain clarity across different
                  screen densities.
                </p>

                <p className="text-base mb-4">
                  Regular body text (16px): The quick brown fox jumps over the lazy dog.
                  0123456789 — Common punctuation, numbers, and special characters.
                </p>

                <p className="text-sm mb-4 text-gray-600">
                  Small text (14px): Used for helper text, captions, and secondary information.
                  Must remain legible at smaller sizes.
                </p>

                {/* UI Elements */}
                <div className="mt-8 space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Form Label Example
                    </label>
                    <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                      Input field placeholder text
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
                    Button Text Sample
                  </button>

                  <div className="flex gap-4 text-sm">
                    <span className="font-light">Light (300)</span>
                    <span className="font-normal">Regular (400)</span>
                    <span className="font-medium">Medium (500)</span>
                    <span className="font-semibold">Semibold (600)</span>
                    <span className="font-bold">Bold (700)</span>
                  </div>
                </div>

                {/* Numbers */}
                <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                  <p className="text-4xl font-bold mb-2">1234567890</p>
                  <p className="text-sm text-gray-600">Numeric characters test</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accent Background */}
          <div className={`p-12 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 to-blue-50'}`}>
            <div className={darkMode ? 'text-white' : 'text-gray-900'}>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: current.displayName }}
              >
                On Colored Background
              </h2>
              <p className="text-lg" style={{ fontFamily: current.sansName }}>
                Testing readability on accent backgrounds. This simulates how text
                will appear on the gradient background of RandomHub.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Details</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• All fonts loaded via next/font/google or next/font/local</li>
            <li>• Fonts are scoped to this preview only (no global changes)</li>
            <li>• Variable fonts provide smooth weight transitions</li>
            <li>• All fonts: SIL Open Font License</li>
            <li>• Performance: 65-120kb per pairing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
