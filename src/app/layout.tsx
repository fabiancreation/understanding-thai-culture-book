import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fontVariables } from "@/lib/fonts";
import { bookSchema, SITE_URL } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Understanding Thai Culture: How Thailand Works, Not What to See",
    template: "%s · Understanding Thai Culture",
  },
  description:
    "Thailand is the country in Southeast Asia that was never colonized. This single fact shapes everything that follows. The values, hierarchies, communication patterns, and beliefs that make Thai behavior readable. Volume I of the Understanding Thai Culture series.",
  keywords: [
    "Thai culture book",
    "Understanding Thailand",
    "kreng jai",
    "Thai values",
    "Thai Buddhism",
    "expat Thailand",
    "Thai communication",
    "Suntaree Komin",
  ],
  authors: [{ name: "Fabian Arndt" }],
  creator: "Fabian Arndt",
  openGraph: {
    type: "book",
    title: "Understanding Thai Culture",
    description:
      "Thailand is the country in Southeast Asia that was never colonized. This single fact shapes everything that follows.",
    url: SITE_URL,
    siteName: "Understanding Thai Culture",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Understanding Thai Culture, a book by Fabian Arndt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Thai Culture",
    description:
      "How Thailand works, not what to see. A portrait of the values and systems that shape Thai behavior.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
