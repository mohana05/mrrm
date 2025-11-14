import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.numbeelearning.com"),
  title: "NumBee Learning | mrrm",
  description:
    "NumBee Learning makes math fun for kids ages 3-8 with 10+ interactive counting, speech, and pattern activities designed by educators.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NumBee Learning",
    description:
      "Interactive math adventures for children ages 3-8. Counting, speech practice, progress tracking, and multi-language support.",
    url: "https://www.numbeelearning.com",
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
    title: "NumBee Learning",
    description:
      "Help your child master numbers with joyful, kid-safe practice activities.",
    images: ["/Images/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} antialiased bg-gradient-to-b from-amber-50 via-white to-slate-50 text-slate-900`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fde68a,_transparent_55%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
