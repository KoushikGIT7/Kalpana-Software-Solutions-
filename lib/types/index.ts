// ─── Core Content Types ──────────────────────────────────────────────────────

export interface Service {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  icon: string
  number: string
  problem: string
  approach: string
  deliverables: string[]
  techUsed: string[]
  relatedCaseStudies: string[]
}

export interface Industry {
  slug: string
  title: string
  icon: string
  description: string
  challenge: string
  imagePath?: string
  solutions: string[]
  features: string[]
  relatedCaseStudies: string[]
}

export interface CaseStudy {
  slug: string
  title: string
  category: string
  industry: string
  service: string
  tagline: string
  outcome: string
  metrics: { label: string; value: string }[]
  challenge: string
  approach: string
  results: string
  techUsed: string[]
  imageAlt: string
  imagePath: string
}

export interface TeamMember {
  name: string
  title: string
  bio: string
  initials: string
  linkedIn?: string
  imagePath?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Credential {
  title: string
  organization: string
  year: string
  category: 'award' | 'certification'
}

export interface Testimonial {
  quote: string
  outcome: string
  name: string
  title: string
  company: string
  initials: string
}

export interface EnterpriseGuarantee {
  title: string
  description: string
  icon: string
}

export interface StatItem {
  value: string
  numericValue: number
  suffix: string
  label: string
  prefix?: string
}

export interface NavItem {
  label: string
  href: string
  description?: string
  children?: NavChild[]
  featured?: NavFeatured
}

export interface NavChild {
  label: string
  href: string
  description: string
}

export interface NavFeatured {
  tag: string
  headline: string
  description: string
  href: string
  cta: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  readTime: string
  category: string
}
