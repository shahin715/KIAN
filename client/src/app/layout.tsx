import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Assistant,
} from "next/font/google";

import "./globals.css";

import MainLayout from "@/components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "KIAN Ecommerce",
  description: "Modern Ecommerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${assistant.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          min-h-full
          flex
          flex-col
          font-(--font-assistant)
        "
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}