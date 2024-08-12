import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootLayoutProps } from '@/types';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Shorts Widget Creator",
  description: "Create embeddable widgets for YouTube Shorts videos",
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
