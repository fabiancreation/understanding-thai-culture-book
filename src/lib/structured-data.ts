export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://understanding-thai-culture-book.vercel.app";

export const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Understanding Thai Culture",
  alternateName: "Understanding Thai Culture: How Thailand Works, Not What to See",
  author: {
    "@type": "Person",
    name: "Fabian Arndt",
  },
  inLanguage: "en",
  bookFormat: "https://schema.org/EBook",
  numberOfPages: 340,
  about: [
    "Thailand",
    "Thai culture",
    "Kreng jai",
    "Thai Buddhism",
    "Cross-cultural analysis",
    "Southeast Asia",
  ],
  description:
    "The values, hierarchies, communication patterns, and beliefs that make Thai behavior readable. Written by a resident analyst. Volume I of the Understanding Thai Culture series.",
  url: SITE_URL,
  image: `${SITE_URL}/cover.png`,
  publisher: {
    "@type": "Organization",
    name: "Understanding Thai Culture",
  },
  isPartOf: {
    "@type": "BookSeries",
    name: "Understanding Thai Culture",
    position: 1,
  },
  offers: {
    "@type": "Offer",
    price: "14.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  },
};
