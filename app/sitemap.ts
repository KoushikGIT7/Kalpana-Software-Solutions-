import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { industries } from '@/lib/data/industries'
import { caseStudies } from '@/lib/data/case-studies'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kalpana-software.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/industries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${siteUrl}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${siteUrl}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...caseStudyRoutes]
}
