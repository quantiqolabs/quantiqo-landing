import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantiqo Labs — We Build the Infrastructure Frontier Products Are Made Of",
  description: "Full-service engineering & design partner for Web3, DeFi, AI, and Fintech. Branding, UI/UX, Motion, Full-Stack Dev. From 0 to launch.",
  metadataBase: new URL("https://quantiqolabs.com"),
  openGraph: {
    title: "Quantiqo Labs",
    description: "Full-service engineering & design partner for Web3, DeFi, AI, and Fintech.",
    url: "https://quantiqolabs.com",
    siteName: "Quantiqo Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@quantiqolabs",
    title: "Quantiqo Labs",
    description: "Full-service engineering & design partner for Web3, DeFi, AI, and Fintech.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}