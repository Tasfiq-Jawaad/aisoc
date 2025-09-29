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
  metadataBase: new URL("https://leedsaisoc.co.uk"),
  title: {
    default: "Leeds AI Society",
    template: "%s | Leeds AI Society",
  },
  applicationName: "Leeds AI Society",
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
