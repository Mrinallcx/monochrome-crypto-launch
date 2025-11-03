import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";
import { Providers } from "./providers";
import { SmoothScroll } from "./components/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TOTO Token - Next Generation Cryptocurrency",
  description: "TOTO is a revolutionary cryptocurrency token built on cutting-edge blockchain technology. Secure, fast, and transparent digital finance.",
  authors: [{ name: "TOTO Token" }],
  openGraph: {
    title: "TOTO Token - Next Generation Cryptocurrency",
    description: "The future of decentralized finance, built on transparency and innovation.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.variable}>
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
