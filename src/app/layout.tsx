import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import {
  LocalBusinessStructuredData,
  OrganizationStructuredData,
} from "@/components/seo";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default:
      "AI Phone Answering & Automation for San Antonio Businesses | SignalCrew",
    template: "%s | SignalCrew",
  },
  description:
    "Never lose another customer to voicemail. AI-powered phone answering, chatbots, and automation for HVAC, plumbers, contractors, and local service businesses in San Antonio.",
  keywords: [
    "AI phone answering",
    "San Antonio",
    "HVAC automation",
    "plumber lead generation",
    "contractor AI",
    "business automation",
    "missed calls",
    "24/7 answering service",
    "SignalCrew",
  ],
  authors: [{ name: "SignalCrew" }],
  creator: "SignalCrew",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://signalcrew.ai"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SignalCrew",
    title: "AI Phone Answering & Automation for San Antonio Businesses",
    description:
      "Never lose another customer to voicemail. AI-powered phone answering, chatbots, and automation for local service businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SignalCrew - AI Automation for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SignalCrew - AI Automation for Local Businesses",
    description:
      "Never lose another customer to voicemail with AI-powered phone answering and automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
        <LocalBusinessStructuredData />
        <OrganizationStructuredData />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased font-body`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
