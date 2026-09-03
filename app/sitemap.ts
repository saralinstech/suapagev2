import type { MetadataRoute } from "next";

const siteUrl = "https://suapage.saratech.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/bio`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
