import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random City Generator - Discover Cities Worldwide",
  description: "Generate random cities from around the world with detailed information. Free city generator with maps, population, climate, landmarks, and cultural insights. Filter by continent or country.",
  keywords: "random city generator, city picker, travel destination generator, random place generator, geography tool, city randomizer, travel inspiration",
  alternates: {
    canonical: `${siteUrl}/random-city-generator`,
  },
  openGraph: {
    title: "Random City Generator - Discover Cities Worldwide | RandomHub",
    description: "Generate random cities with detailed maps, landmarks, and cultural information. Free forever!",
    url: `${siteUrl}/random-city-generator`,
    type: "website",
    siteName: "RandomHub",
    images: [
      {
        url: `${siteUrl}/og-image-city-generator.png`,
        width: 1200,
        height: 630,
        alt: "Random City Generator - RandomHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random City Generator - Discover Cities Worldwide",
    description: "Generate random cities with detailed maps, landmarks, and cultural information. Free forever!",
    images: [`${siteUrl}/og-image-city-generator.png`],
  },
};

export default function CityGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

