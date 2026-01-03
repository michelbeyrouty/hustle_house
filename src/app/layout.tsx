import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@common/NavBar";
import Footer from "@common/Footer";
import ClaritySetup from "@common/Script/Clarity";
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
  title: "HUSTLE HOUSE",
  description:
    "Hustle House was founded in 2020 in Sehaile-Keserwan. The gym is known for its friendly atmosphere, where we take care of every member, through science based programs and a daily care and follow up.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ClaritySetup />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-black text-foreground font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
