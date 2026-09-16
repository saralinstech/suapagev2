import type { MetadataRoute } from "next";

const siteUrl = "https://suapagev2.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/suapage-bio`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
