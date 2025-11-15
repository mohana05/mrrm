import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.numbeelearning.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NumBee Learning Math App | MRRM Kids Learning Studio",
  description:
    "Discover NumBee Learning by MRRM: a speech-enabled math app for kids ages 4-8 with counting, patterns, skip counting, and multi-language support on iPhone and iPad.",
  keywords: [
    "NumBee Learning",
    "MRRM",
    "kids math app",
    "speech practice numbers",
    "skip counting iPad",
    "multi language math games",
    "educational apps for kids",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "NumBee Learning · Speech-enabled Math for Kids",
    description:
      "Help children master numbers with joyful counting, pattern, and speech activities in English, Spanish, and Hindi.",
    url: siteUrl,
    siteName: "NumBee Learning",
    images: [
      {
        url: "/Images/home.png",
        width: 1600,
        height: 900,
        alt: "NumBee Learning app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NumBee Learning · MRRM",
    description:
      "Interactive math adventures with speech practice, progress tracking, and multilingual support.",
    images: ["/Images/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MRRM",
      url: siteUrl,
      logo: `${siteUrl}/Images/mrrm-logo.png`,
      sameAs: [
        "https://apps.apple.com/us/app/numbee-learning/id6754674187",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "mrrmfamily2022@gmail.com",
        contactType: "customer support",
        availableLanguage: ["English", "Spanish", "Hindi"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "NumBee Learning",
      operatingSystem: "iOS/iPadOS",
      applicationCategory: "EducationalApplication",
      offers: {
        "@type": "Offer",
        price: "6.99",
        priceCurrency: "USD",
        description: "One-time premium unlock for NumBee Learning",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
      },
      installUrl: "https://apps.apple.com/us/app/numbee-learning/id6754674187",
      publisher: {
        "@type": "Organization",
        name: "MRRM",
      },
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} antialiased bg-gradient-to-b from-amber-50 via-white to-slate-50 text-slate-900`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fde68a,_transparent_55%)]">
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
