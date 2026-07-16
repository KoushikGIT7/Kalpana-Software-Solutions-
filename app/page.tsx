import type { Metadata } from 'next'
import {
  HeroSection,
  TrustBar,
  CaseStudiesSection,
  ServicesSection,
  IndustriesSection,
  EnterpriseCommitmentsSection,
  FounderSection,
  TestimonialsSection,
  FAQSection,
  CTABannerSection,
  ComplianceSection,
  EngagementModelsSection,
  TechnicalInsightsSection,
  ProcessTimelineSection,
  TechStackMarqueeSection,
} from '@/components/sections'

export const metadata: Metadata = {
  title: 'Kalpana Software Solutions — Bespoke Engineering Partner',
  description:
    'Production-grade software engineering for government, healthcare, finance, and education. 100+ systems delivered. Founder-led delivery. Zero templates.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <TrustBar />
        <ComplianceSection />
        <TechStackMarqueeSection />
        <TestimonialsSection />
        <EnterpriseCommitmentsSection />
        <FounderSection />
        <CaseStudiesSection />
        <ProcessTimelineSection />
        <ServicesSection />
        <IndustriesSection />
        <TechnicalInsightsSection />
        <EngagementModelsSection />
        <FAQSection />
        <CTABannerSection />
      </main>
    </>
  )
}
