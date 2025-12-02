import { Metadata } from 'next';

const siteUrl = 'https://randomhub.io';
const pageUrl = `${siteUrl}/random-charades-generator`;

export const metadata: Metadata = {
  title: 'Free Charades Generator - Random Charades Words & Ideas Online',
  description:
    'Generate random charades words instantly with our free online charades generator. 900+ words across 7 categories (movies, TV shows, books, songs, actions, objects, famous people) and 4 difficulty levels. Perfect for game nights, parties, and team building. No signup required!',
  keywords:
    'charades generator, random charades, charades words, charades ideas, charades game, party game generator, charades words list, free charades generator, online charades, charades for parties, game night ideas, team building games, charades categories, charades difficulty levels',
  authors: [{ name: 'RandomHub' }],
  creator: 'RandomHub',
  publisher: 'RandomHub',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Free Charades Generator - 900+ Random Charades Words',
    description:
      'Instantly generate charades words for your game night! Choose from movies, TV shows, books, songs & more. 4 difficulty levels. 100% free with no signup.',
    siteName: 'RandomHub',
    images: [
      {
        url: `${siteUrl}/og-charades.png`,
        width: 1200,
        height: 630,
        alt: 'RandomHub Charades Generator - Free Online Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Charades Generator - Random Words for Game Night',
    description:
      'Generate random charades words instantly! 900+ words, 7 categories, 4 difficulty levels. Perfect for parties & team building. Free forever!',
    images: [`${siteUrl}/og-charades.png`],
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
