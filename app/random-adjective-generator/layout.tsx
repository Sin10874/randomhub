import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random Adjective Generator - Free Tool with 1300+ Words | RandomHub",
  description: "Free random adjective generator with 1300+ descriptive words. Perfect for creative writing, content creation, vocabulary learning. Advanced filters: syllables, letters, starting/ending characters. No registration required!",
  keywords: "random adjective generator, adjective generator free, descriptive adjectives, adjective finder, creative writing tool, vocabulary builder, word generator, adjective list, writing prompts, content creation tool, adjective generator online, random descriptive words",
  alternates: {
    canonical: `${siteUrl}/random-adjective-generator`,
  },
  openGraph: {
    title: "Free Random Adjective Generator - 1300+ Descriptive Words | RandomHub",
    description: "Generate random adjectives instantly with advanced filters. 1300+ words for creative writing, marketing, and vocabulary learning. 100% free, no registration!",
    url: `${siteUrl}/random-adjective-generator`,
    type: "website",
    siteName: "RandomHub",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image-adjective-generator.png`,
        width: 1200,
        height: 630,
        alt: "Random Adjective Generator - 1300+ Descriptive Words - RandomHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Random Adjective Generator - 1300+ Words",
    description: "Generate random adjectives with advanced filters. Perfect for creative writing, marketing, and vocabulary learning. 100% free!",
    images: [`${siteUrl}/og-image-adjective-generator.png`],
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

export default function AdjectiveGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
