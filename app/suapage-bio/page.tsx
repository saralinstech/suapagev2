import type { Metadata } from "next";
import { BioProductPage } from "../bio/page";

const siteUrl = "https://suapagev2.vercel.app";

export const metadata: Metadata = {
  title: "Suapage Bio — Sua marca inteira em um único link",
  description: "Crie uma bio personalizada para Instagram com seus links, serviços, produtos e contatos em uma experiência feita para celular.",
  keywords: ["link na bio", "mini site para Instagram", "bio personalizada", "página para Instagram", "Suapage Bio"],
  alternates: { canonical: `${siteUrl}/suapage-bio` },
  openGraph: { title: "Suapage Bio — Sua marca inteira em um único link", description: "Uma mini experiência digital com a estética e a estratégia da sua marca.", url: `${siteUrl}/suapage-bio`, siteName: "Suapage", type: "website" },
  twitter: { card: "summary", title: "Suapage Bio — Sua marca inteira em um único link", description: "Uma bio personalizada para apresentar, organizar e converter seus visitantes." },
};

export default function SuapageBioPage() { return <BioProductPage />; }
