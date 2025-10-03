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
  title: "PT Sewu Pangestu Lestari - Solusi Cleaning & Security Terpercaya",
  description: "Perusahaan terdepan dalam layanan cleaning dan security terintegrasi dengan standar internasional. Melayani berbagai sektor dengan solusi yang disesuaikan untuk setiap kebutuhan.",
  keywords: "cleaning service, security service, jasa cleaning, jasa security, PT Sewu Pangestu Lestari, layanan kebersihan, layanan keamanan",
  authors: [{ name: "PT Sewu Pangestu Lestari" }],
  creator: "PT Sewu Pangestu Lestari",
  publisher: "PT Sewu Pangestu Lestari",
  robots: "index, follow",
  icons: {
    icon: "/favicon-192x192.ico",
    shortcut: "/favicon-192x192.ico",
    apple: "/favicon-192x192.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sewupangestu.com",
    title: "PT Sewu Pangestu Lestari - Solusi Cleaning & Security Terpercaya",
    description: "Perusahaan terdepan dalam layanan cleaning dan security terintegrasi dengan standar internasional.",
    siteName: "PT Sewu Pangestu Lestari",
    images: [
      {
        url: "/assets/images/logo/ptsewu.png",
        width: 1200,
        height: 630,
        alt: "PT Sewu Pangestu Lestari Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Sewu Pangestu Lestari - Solusi Cleaning & Security Terpercaya",
    description: "Perusahaan terdepan dalam layanan cleaning dan security terintegrasi dengan standar internasional.",
    images: ["/assets/images/logo/ptsewu.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon-192x192.ico" sizes="192x192" />
        <link rel="shortcut icon" href="/favicon-192x192.ico" />
        <link rel="apple-touch-icon" href="/favicon-192x192.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
