import type { MetadataRoute } from "next";

const siteUrl = "https://www.harveydelaney.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-04-25",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}