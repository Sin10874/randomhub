import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random Job Generator - 900+ Careers | Free Occupation Generator Tool",
  description: "Discover 900+ random jobs and careers with our comprehensive job generator. Browse 20+ categories from healthcare to technology, arts to science. Ideal for creative writing, character creation, RPG games, career exploration, and story development. Filter by industry, generate 1-20 jobs instantly, one-click copy. 100% free, unlimited use, no signup required.",
  keywords: "random job generator, career generator, occupation generator, random careers, job list generator, character jobs, RPG jobs, DND character jobs, writing prompts, character development, job picker, random occupation, free job generator, career ideas, profession generator, job randomizer, writing tools, character creator, job ideas, career randomizer, occupation picker, random profession, story character jobs, fictional character careers, job title generator, career name generator, occupation ideas, random career picker, job inspiration, creative writing jobs, novelist tools, screenwriter tools, game master tools, world building jobs, fantasy jobs, modern careers",
  alternates: {
    canonical: `${siteUrl}/random-job-generator`,
  },
  openGraph: {
    title: "Random Job Generator | 900+ Careers Across 20+ Industries | RandomHub",
    description: "Generate random jobs from 900+ careers spanning healthcare, technology, business, arts, entertainment & more. Perfect for writers, game developers & career explorers. Free unlimited use!",
    url: `${siteUrl}/random-job-generator`,
    type: "website",
    siteName: "RandomHub",
    images: [
      {
        url: `${siteUrl}/og-image-job-generator.png`,
        width: 1200,
        height: 630,
        alt: "Random Job Generator - 900+ Careers | RandomHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Job Generator | 900+ Careers | Free Tool",
    description: "Generate random jobs from 900+ careers across 20+ industries. Ideal for creative writing, RPG characters, story development & career exploration. Free unlimited use!",
    images: [`${siteUrl}/og-image-job-generator.png`],
  },
};

export default function JobGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
