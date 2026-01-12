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
  title: {
    default: "AI Phone Answering & Automation for San Antonio Businesses | True Signal Digital",
    template: "%s | True Signal Digital",
  },
  description:
    "Never miss another lead. AI-powered phone answering, chatbots, and automation for HVAC, plumbers, contractors, and local service businesses in San Antonio.",
  keywords: [
    "AI phone answering",
    "San Antonio",
    "HVAC automation",
    "plumber lead generation",
    "contractor AI",
    "business automation",
    "missed calls",
    "24/7 answering service",
  ],
  authors: [{ name: "True Signal Digital" }],
  creator: "True Signal Digital",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://truesignaldigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "True Signal Digital",
    title: "AI Phone Answering & Automation for San Antonio Businesses",
    description:
      "Never miss another lead. AI-powered phone answering, chatbots, and automation for local service businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Signal Digital - AI Automation for Local Businesses",
    description: "Never miss another lead with AI-powered phone answering and automation.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
