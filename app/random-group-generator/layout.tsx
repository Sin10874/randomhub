import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";
const pageUrl = `${siteUrl}/random-group-generator`;

export const metadata: Metadata = {
  title: "Random Group Generator - Free Team Maker & Group Randomizer",
  description: "Free random group generator to create fair, balanced teams instantly. Perfect team maker for classrooms, sports, work projects, and events. Split any list into random groups with our easy-to-use group randomizer. Generate unlimited teams - no registration required.",
  keywords: "random group generator, team generator, group maker, random team generator, group randomizer, team maker, team picker, random group maker, classroom group generator, sports team generator, fair team generator, balanced team maker, split into groups, divide into teams",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Random Group Generator - Free Team Maker & Group Randomizer",
    description: "Create fair, balanced teams instantly. Perfect for classrooms, sports, work projects, and events. Free random group generator with unlimited regeneration.",
    url: pageUrl,
    siteName: "RandomHub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-group-generator.png`,
        width: 1200,
        height: 630,
        alt: "RandomHub Random Group Generator - Team Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Group Generator - Free Team Maker & Group Randomizer",
    description: "Create fair, balanced teams instantly. Perfect for classrooms, sports, work, and events. Free forever!",
    images: [`${siteUrl}/og-group-generator.png`],
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

export default function RandomGroupGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
