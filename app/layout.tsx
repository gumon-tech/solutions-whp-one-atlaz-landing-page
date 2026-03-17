import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Noto_Sans_Thai,
  Noto_Serif_Thai
} from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const thaiBodyFont = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-body-th",
  weight: ["400", "500", "600", "700"]
});

const thaiDisplayFont = Noto_Serif_Thai({
  subsets: ["thai"],
  variable: "--font-display-th",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oneatlaz.com"),
  title: "One Atlaz | The Location Economy Platform",
  description:
    "A global-first platform for spatial intelligence, marketplace discovery, content, and deal flow.",
  openGraph: {
    title: "One Atlaz | The Location Economy Platform",
    description:
      "A global-first platform for spatial intelligence, marketplace discovery, content, and deal flow.",
    images: ["/og-image.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "One Atlaz | The Location Economy Platform",
    description:
      "A global-first platform for spatial intelligence, marketplace discovery, content, and deal flow.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${thaiBodyFont.variable} ${thaiDisplayFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
