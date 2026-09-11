import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madhav Sagi | AI & Full-Stack Software Engineer",
  description: "M.S. CS (AI) Student @ Georgia Tech | Software Engineer bridging Full-Stack Systems, Cloud Architecture, and Machine Learning.",
  keywords: ["Madhav Sagi", "Software Engineer", "AI Engineer", "Machine Learning", "Full-Stack Developer", "Georgia Tech", "Tampa FL"],
  authors: [{ name: "Madhav Sagi" }],
  openGraph: {
    title: "Madhav Sagi | AI & Full-Stack Software Engineer",
    description: "M.S. CS (AI) Student @ Georgia Tech | Software Engineer bridging Full-Stack Systems, Cloud Architecture, and Machine Learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
