import type { Metadata } from "next";
import { Black_Han_Sans, Space_Grotesk } from "next/font/google";
import ClientOverlays from "@/components/ClientOverlays";
import "./globals.css";

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const getSiteUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
  if (!url) return "http://localhost:3000";
  return url.startsWith("http") ? url : `https://${url}`;
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "IRL Culture Fest 2026 — India's First IRL Festival",
  description:
    "Celebrating India's offline community builders across Delhi, Mumbai, Bangalore & Pune. November 2026.",
  openGraph: {
    title: "IRL Culture Fest 2026 — India's First IRL Festival",
    description:
      "Celebrating India's offline community builders across Delhi, Mumbai, Bangalore & Pune. November 2026.",
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#FF2B2B",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${blackHanSans.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>
        <ClientOverlays />
        {children}
      </body>
    </html>
  );
}




