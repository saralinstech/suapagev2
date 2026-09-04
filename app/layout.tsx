import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./bio-overrides.css";
import "./bio-editorial.css";
import "./bio-icons.css";
import "./bio-carousel.css";
import "./bio-group-carousel.css";
import "./bio-carousel-polish.css";
import "./bio-accessory-icons.css";
import "./header-polish.css";
import "./home-flow.css";
import "./hero-motion.css";
import "./hero-browser-cards.css";
import "./hero-browser-cards-v2.css";
import "./hero-browser-cards-v3.css";
import "./hero-browser-controls.css";
import "./material-icons.css";
import "./material-icons-fix.css";
import "./bio-carousel-label.css";
import "./bio-carousel-alignment.css";
import "./bio-carousel-eyebrow-align.css";
import "./bio-final-copy.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suapage — Seu próximo cliente começa aqui",
  description: "Sites e experiências digitais que fazem sua marca ser percebida, entendida e escolhida.",
  metadataBase: new URL("https://suapage.saratech.chatgpt.site"),
  keywords: ["criação de sites", "site institucional", "landing page", "landing page de serviço", "site de vendas", "Suapage"],
  openGraph: {
    title: "Suapage — Seu próximo cliente começa aqui",
    description: "Sites e experiências digitais que fazem sua marca ser percebida, entendida e escolhida.",
    url: "https://suapage.saratech.chatgpt.site",
    siteName: "Suapage",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Suapage — Seu próximo cliente começa aqui",
    description: "Sites e experiências digitais para apresentar, vender e crescer.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
