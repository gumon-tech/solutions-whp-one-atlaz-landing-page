import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_Thai,
  Noto_Sans_Thai_Looped
} from "next/font/google";
import "./globals.css";

const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"]
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

const thaiBodyFont = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-body-th",
  weight: ["400", "500", "600", "700"]
});

const thaiDisplayFont = Noto_Sans_Thai_Looped({
  subsets: ["thai"],
  variable: "--font-display-th",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oneatlaz.com"),
  title: {
    default: "One Atlaz",
    template: "%s | One Atlaz"
  },
  applicationName: "One Atlaz",
  description:
    "One Atlaz brings land intelligence, market context, place-based insight, and deal workflow into one map-first platform.",
  openGraph: {
    title: "One Atlaz",
    description:
      "One Atlaz brings land intelligence, market context, place-based insight, and deal workflow into one map-first platform.",
    siteName: "One Atlaz",
    images: ["/og-image-th.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "One Atlaz",
    description:
      "One Atlaz brings land intelligence, market context, place-based insight, and deal workflow into one map-first platform.",
    images: ["/og-image-th.svg"]
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
    <html lang="th">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${thaiBodyFont.variable} ${thaiDisplayFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
