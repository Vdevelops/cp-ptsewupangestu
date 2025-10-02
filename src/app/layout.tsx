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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sewupangestu.com",
    title: "PT Sewu Pangestu Lestari - Solusi Cleaning & Security Terpercaya",
    description: "Perusahaan terdepan dalam layanan cleaning dan security terintegrasi dengan standar internasional.",
    siteName: "PT Sewu Pangestu Lestari",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Sewu Pangestu Lestari - Solusi Cleaning & Security Terpercaya",
    description: "Perusahaan terdepan dalam layanan cleaning dan security terintegrasi dengan standar internasional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
