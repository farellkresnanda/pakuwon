"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import { Playfair_Display } from "next/font/google";

import "./globals.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // ⬅️ Tambahkan ini

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // sesuaikan kebutuhanmu
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // ⬅️ Detect route change

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // ⬅️ Refresh AOS saat route berubah
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo_pakuwon.png" />
        <title>Pakuwon Bekasi</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
