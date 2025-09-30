import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leeds Artificial Intelligence Society | University of Leeds",
  description:
    "Your home for all things artificial intelligence at the University of Leeds. From beginner workshops to hackathons, panels, and socials—everyone is welcome.",
  alternates: {
    canonical: "https://leedsaisoc.co.uk/",
  },
  openGraph: {
    type: "website",
    url: "https://www.leedsaisoc.co.uk/",
    siteName: "Leeds AI Society",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeedsAISoc",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0E0B0B] text-gray-200`}
      >
        <div className="min-h-dvh w-full">{children}</div>
      </body>
    </html>
  );
}
