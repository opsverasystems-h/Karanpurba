import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karan Purba — Financial Consultant & Coach",
  description:
    "Build real wealth — without the sales pitch. Karan Purba has mentored 200+ advisors and guided 3,000+ families to financial clarity. Plan your future, or build your practice.",
  openGraph: {
    title: "Karan Purba — Financial Consultant & Coach",
    description:
      "Build real wealth — without the sales pitch. Plan your future, or build your practice.",
    type: "website",
  },
  metadataBase: new URL("https://karanpurba.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
