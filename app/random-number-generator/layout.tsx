import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";
const pageUrl = `${siteUrl}/random-number-generator`;

export const metadata: Metadata = {
  title: "Random Number Generator - Generate Random Numbers Online",
  description: "Generate one or more random numbers in your custom range from 0 to 10,000. Free online random number generator with duplicate control, sorting options (ascending, descending, unsorted), and multiple output formats. Perfect for lottery numbers, PIN codes, statistical sampling, gaming, and more. No registration required.",
  keywords: "random number generator, random numbers, RNG, number generator, random number picker, lottery number generator, PIN generator, random integers, unique random numbers, pseudo random number generator, online random number tool, free number generator",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Random Number Generator - Generate Random Numbers Online",
    description: "Generate random numbers from 0 to 10,000. Control duplicates, sorting, and copy in multiple formats. Free forever!",
    url: pageUrl,
    siteName: "RandomHub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-number-generator.png`,
        width: 1200,
        height: 630,
        alt: "RandomHub Random Number Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Number Generator - Generate Random Numbers Online",
    description: "Generate random numbers from 0 to 10,000. Control duplicates, sorting, and output formats. Free forever!",
    images: [`${siteUrl}/og-number-generator.png`],
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

export default function RandomNumberGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
