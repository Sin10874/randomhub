import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random Website Generator - Discover New Websites | RandomHub",
  description: "Free random website generator with 300+ curated sites. Discover new websites across productivity, creative, learning, entertainment, and more categories. Break your browsing routine and explore the web!",
  keywords: "random website generator, discover websites, random site, website discovery, explore internet, random web page, find new websites, website explorer, random url generator, web discovery tool",
  alternates: {
    canonical: `${siteUrl}/random-website-generator`,
  },
  openGraph: {
    title: "Free Random Website Generator - Discover New Sites | RandomHub",
    description: "Discover random websites from 300+ curated sites. Break your browsing routine and explore productivity, creative, learning, and entertainment websites. 100% free!",
    url: `${siteUrl}/random-website-generator`,
    type: "website",
    siteName: "RandomHub",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image-website-generator.png`,
        width: 1200,
        height: 630,
        alt: "Random Website Generator - Discover New Websites - RandomHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Random Website Generator - Discover New Sites",
    description: "Discover random websites from 300+ curated sites. Break your browsing routine and explore the web. 100% free!",
    images: [`${siteUrl}/og-image-website-generator.png`],
    creator: "@RandomHub",
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
};

export default function WebsiteGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
