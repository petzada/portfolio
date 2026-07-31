import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/perfil";
import { projetos } from "@/content/projetos";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projetos.map((projeto) => ({
      url: `${siteUrl}/projetos/${projeto.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
