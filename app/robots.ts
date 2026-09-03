import type { MetadataRoute } from "next";

const siteUrl = "https://suapage.saratech.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` };
}
