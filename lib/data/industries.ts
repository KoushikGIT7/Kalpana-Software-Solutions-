import type { Industry } from '@/lib/types'

export const industries: Industry[] = [
  {
    slug: 'government',
    title: 'Government & Public Sector',
    icon: 'Building2',
    imagePath: '/images/industries/government.png',
    description:
      'Modernizing public-sector digital infrastructure with compliance-first engineering, accessible interfaces, and secure data handling.',
    challenge:
      'Legacy government systems were not built for the demands of digital-first citizens. Procurement cycles are long, compliance requirements are strict, and the stakes of failure are public.',
    solutions: [
      'Citizen-facing portal development (WCAG AA accessible)',
      'Legacy system modernization and API bridging',
      'Secure document management systems',
      'Inter-department data integration platforms',
      'Automated permit and approval workflows',
    ],
    features: [
      'WCAG 2.1 AA accessibility compliance',
      'ISO 27001-aligned data handling practices',
      'Audit logging and role-based access control',
      'On-premise and government cloud deployment',
    ],
    relatedCaseStudies: ['railtrace'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & MedTech',
    icon: 'HeartPulse',
    imagePath: '/images/industries/healthcare.png',
    description:
      'Building clinical and patient-facing systems where reliability is measured in lives, not uptime percentages.',
    challenge:
      'Healthcare software must be accurate, secure, and compliant with data regulations. Patients depend on it. The margin for error is zero.',
    solutions: [
      'Electronic health record (EHR) integrations',
      'Patient portal and appointment management',
      'Clinical data pipeline and reporting dashboards',
      'Telemedicine platform development',
      'Medical device data ingestion APIs',
    ],
    features: [
      'End-to-end encryption for patient data',
      'Role-based access with complete audit trails',
      'HL7/FHIR API compatibility',
      'HIPAA-aligned engineering practices',
    ],
    relatedCaseStudies: ['medichain'],
  },
  {
    slug: 'finance',
    title: 'Finance & Fintech',
    icon: 'TrendingUp',
    imagePath: '/images/industries/finance.png',
    description:
      'Engineering financial systems that handle transactions, risk, and regulatory reporting with precision and zero tolerance for errors.',
    challenge:
      'Financial software failures have direct monetary consequences. Regulatory reporting errors create legal exposure. Performance at transaction scale is non-negotiable.',
    solutions: [
      'Payment processing integrations and dashboards',
      'Portfolio management and reporting platforms',
      'Fraud detection and alerting systems',
      'Regulatory compliance reporting automation',
      'Customer-facing banking and investment interfaces',
    ],
    features: [
      'Sub-100ms transaction processing targets',
      'Multi-factor authentication and session security',
      'Immutable audit logs for all financial events',
      'Real-time anomaly detection and alerting',
    ],
    relatedCaseStudies: ['kucafe'],
  },
  {
    slug: 'education',
    title: 'Education & EdTech',
    icon: 'GraduationCap',
    imagePath: '/images/industries/education.png',
    description:
      'Building learning platforms and institutional tools that deliver measurable educational outcomes at scale.',
    challenge:
      'Educational software serves diverse users — students, faculty, administrators — with conflicting needs. Engagement and accessibility must both be achieved without compromise.',
    solutions: [
      'Learning management system (LMS) development',
      'Student information system integrations',
      'Automated assessment and grading platforms',
      'Institutional analytics and reporting dashboards',
      'Collaborative learning and communication tools',
    ],
    features: [
      'Multi-role access control (student / faculty / admin)',
      'SCORM and LTI integration support',
      'Offline-capable mobile apps for low-connectivity environments',
      'Multilingual and accessibility-first interface design',
    ],
    relatedCaseStudies: ['kucafe'],
  },
]

export const industryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug)
