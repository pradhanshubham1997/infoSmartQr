import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartyQ | Turn Customer Feedback into 5-Star Google Reviews ⭐",
  description: "SmartyQ helps businesses collect feedback using QR codes, improve it with AI, and grow their reputation effortlessly. Perfect for cafes, restaurants, salons, and local shops.",
  keywords: ["QR code feedback", "AI review improvement", "Google reviews", "customer experience", "local business marketing", "SaaS feedback system"],
  openGraph: {
    title: "SmartyQ | QR-Based AI Feedback System",
    description: "Grow your business reputation with the smartest QR feedback tool.",
    type: "website",
    images: ["/hero-mockup.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
