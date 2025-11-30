import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Primary sans-serif font for UI and body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display font for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Mono font for data and code
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RandomHub - Free Random Word Generator & Random Tools",
    template: "%s | RandomHub",
  },
  description: "Generate random English words, names, cities and more with RandomHub. Free forever! Customize filters including word type, letter constraints, syllables. Perfect for writers, teachers, and creative projects. 5000+ words database.",
  keywords: "random word generator, random name generator, random city generator, word generator, name generator, free random tools, English words, creative writing tools",
  authors: [{ name: "RandomHub" }],
  creator: "RandomHub",
  publisher: "RandomHub",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon.svg', color: '#3b82f6' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "RandomHub - Free Random Word Generator & Random Tools",
    description: "Generate random English words, names, cities and more. Free forever! 5000+ words with custom filters.",
    url: siteUrl,
    siteName: "RandomHub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RandomHub - Free Random Word Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RandomHub - Free Random Word Generator",
    description: "Generate random English words with custom filters. Free forever!",
    images: ["/og-image.png"],
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
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RandomHub',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/android-chrome-512x512.png`,
    description: 'Free random generation tools including word, name, city, and letter generators',
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RandomHub',
    url: siteUrl,
    description: 'Generate random English words, names, cities and more with RandomHub. Free forever!',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FDFBF7" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GY5D56TB81"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GY5D56TB81');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
