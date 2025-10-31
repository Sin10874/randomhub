import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

// Primary sans-serif font for UI and body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display serif font for headings and emphasis
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RandomHub - Random Word Generator",
  description: "Generate random English words with custom filters - RandomHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.variable} ${crimsonPro.variable} font-display`}>
        {children}
      </body>
    </html>
  );
}
