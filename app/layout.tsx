import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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
    "theme-color": "#FF2D2D",
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
      className={`${archivo.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
