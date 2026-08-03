import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages = [
    { path: "", priority: 1 },
    { path: "/o-mnie", priority: 0.9 },
    { path: "/oferta", priority: 0.9 },
    { path: "/faq", priority: 0.7 },
    { path: "/kontakt", priority: 0.9 },
    { path: "/polityka-prywatnosci", priority: 0.3 },
  ];

  return [
    ...corePages.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...landingPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
