import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title:
    "Workflow-First AI Assessment for B2B SaaS | Start with the Problem",
  description:
    "A fixed-scope, 8 to 12 week assessment for B2B SaaS founders ($500K to $5M ARR). Uncover what users actually struggle with, map how AI solves it, and prepare your product for an agent-driven future. Four deliverables. No guessing.",
  keywords: [
    "AI readiness assessment",
    "B2B SaaS AI strategy",
    "agentic AI",
    "workflow AI audit",
    "SaaS product strategy",
    "AI consulting for SaaS",
    "agent-ready product",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "SaaS AI Integration Planning",
    title: "Workflow-First AI Assessment for B2B SaaS",
    description:
      "Start with the problem. Not the technology. A workflow-first AI assessment for B2B SaaS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow-First AI Assessment for B2B SaaS",
    description:
      "Start with the problem. Not the technology. A workflow-first AI assessment for B2B SaaS.",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
