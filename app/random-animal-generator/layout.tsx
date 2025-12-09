import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Random Animal Generator - 180+ Species | RandomHub',
  description: 'Free random animal generator with 180+ species across mammals, birds, reptiles, fish, amphibians, and invertebrates. Perfect for education, games, and animal discovery.',
  keywords: [
    'random animal generator',
    'animal generator',
    'random animals',
    'animal name generator',
    'mammals',
    'birds',
    'reptiles',
    'fish',
    'amphibians',
    'invertebrates',
    'educational tool',
    'animal quiz',
    'wildlife generator',
    'animal trivia',
    'biology education',
    'animal species',
    'classroom activities',
    'learning tools',
  ],
  openGraph: {
    title: 'Random Animal Generator - 180+ Species',
    description: 'Generate random animals from 180+ species. Filter by mammals, birds, reptiles, fish, amphibians, and invertebrates. Free educational tool.',
    url: 'https://randomhub.io/random-animal-generator',
    siteName: 'RandomHub',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Animal Generator - 180+ Species',
    description: 'Generate random animals from 180+ species. Perfect for education and fun!',
  },
  alternates: {
    canonical: 'https://randomhub.io/random-animal-generator',
  },
};

export default function AnimalGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
