import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random Website Generator - Discover 300+ Curated Sites | RandomHub",
  description: "Click GO to instantly visit a random website! Explore 300+ hand-picked sites including fun games, creative tools, learning resources & entertainment. Break your browsing routine - discover something new every click!",
  keywords: "random website generator, random site generator, discover new websites, random url, web discovery tool, fun random sites, surprise me website, random website button, explore internet, theuselessweb alternative",
  alternates: {
    canonical: `${siteUrl}/random-website-generator`,
  },
  openGraph: {
    title: "Random Website Generator - Click & Discover 300+ Sites | RandomHub",
    description: "🎲 One click to explore random websites! 300+ curated sites from fun games to creative tools. Like TheUselessWeb but better - discover something awesome every time!",
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
    title: "Random Website Generator - Discover 300+ Curated Sites",
    description: "Click GO to visit a random website instantly! 300+ hand-picked sites: games, tools, learning & more. Your web exploration starts here!",
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
