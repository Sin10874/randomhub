import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

// Primary sans-serif font for UI and body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display serif font for headings and emphasis
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://randomhub.io"; // 请替换为你的实际域名

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
        url: "/og-image.png", // 你需要创建这个图片
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
    // 添加你的Google Search Console验证码
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
    logo: `${siteUrl}/logo.png`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${crimsonPro.variable} font-display`}>
        {children}
      </body>
    </html>
  );
}
