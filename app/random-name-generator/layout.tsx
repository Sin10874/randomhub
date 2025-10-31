import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random Name Generator - Real & Fantasy Names",
  description: "Generate authentic names from 18+ countries or creative fantasy names. Free name generator for characters, babies, games, and creative projects. Instant bulk generation with cultural authenticity.",
  keywords: "random name generator, character name generator, fantasy name generator, baby name generator, rpg name generator, real names, cultural names, game character names",
  alternates: {
    canonical: `${siteUrl}/random-name-generator`,
  },
  openGraph: {
    title: "Random Name Generator - Real & Fantasy Names | RandomHub",
    description: "Generate authentic names from multiple cultures or fantasy names for characters. Free forever!",
    url: `${siteUrl}/random-name-generator`,
    type: "website",
    siteName: "RandomHub",
    images: [
      {
        url: `${siteUrl}/og-image-name-generator.png`,
        width: 1200,
        height: 630,
        alt: "Random Name Generator - RandomHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Name Generator - Real & Fantasy Names",
    description: "Generate authentic names from 18+ countries or creative fantasy names. Free forever!",
    images: [`${siteUrl}/og-image-name-generator.png`],
  },
};

export default function NameGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

