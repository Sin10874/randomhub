import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random Sentence Generator - Free Online Tool",
  description: "Generate random sentences instantly with our free sentence generator. Filter by type (declarative, interrogative, exclamatory, imperative) and 8 topics (nature, science, education, daily life, technology, sports, travel, entertainment). Perfect for writers, students, teachers, and creative projects. Generate 1-10 sentences at once, copy with one click. Free forever, no registration required.",
  keywords: "random sentence generator, sentence generator, random sentences, writing prompts, creative writing tool, grammar practice, language learning, sentence builder, free sentence generator, writing inspiration, declarative sentences, interrogative sentences, exclamatory sentences, imperative sentences, sentence creator, grammar exercises, ESL sentences, writing prompts generator, sentence examples, creative writing prompts",
  alternates: {
    canonical: `${siteUrl}/tools/sentence-generator`,
  },
  openGraph: {
    title: "Random Sentence Generator - Free Online Tool | RandomHub",
    description: "Generate random sentences with customizable filters for type and topic. Filter by 4 sentence types and 8 topics. Perfect for writers, students, teachers, and creative projects. Free forever!",
    url: `${siteUrl}/tools/sentence-generator`,
    type: "website",
    siteName: "RandomHub",
    images: [
      {
        url: `${siteUrl}/og-image-sentence-generator.png`,
        width: 1200,
        height: 630,
        alt: "Random Sentence Generator - RandomHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Sentence Generator - Free Online Tool",
    description: "Generate random sentences with customizable filters for type and topic. Filter by 4 sentence types and 8 topics. Perfect for writers, students, teachers, and creative projects. Free forever!",
    images: [`${siteUrl}/og-image-sentence-generator.png`],
  },
};

export default function SentenceGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

