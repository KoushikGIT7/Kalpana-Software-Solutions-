import type { CaseStudy } from '@/lib/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'kucafe',
    title: 'KUCafe',
    category: 'Full-Stack Web + Mobile',
    industry: 'Education',
    service: 'web-engineering',
    tagline: 'Campus food ordering platform serving 4,000+ students daily.',
    outcome:
      'Built a real-time campus food ordering platform that eliminated queuing, reduced order processing time by 60%, and serves 4,000+ students across 8 campus outlets.',
    metrics: [
      { label: 'Order processing time reduced', value: '60%' },
      { label: 'Daily active users', value: '4,000+' },
    ],
    challenge:
      'Karnatak University\'s campus cafeteria system relied on manual ordering with no digital presence. Peak lunch hours created queues of 20+ minutes, revenue was uncaptured, and kitchen staff had no visibility into demand.',
    approach:
      'We designed a mobile-first ordering platform with real-time kitchen dashboards, menu management, and payment integration. The system uses a WebSocket-based order pipeline to deliver sub-second kitchen notifications. Infrastructure was provisioned for peak load with auto-scaling policies.',
    results:
      'Order processing time fell from an average of 18 minutes to under 7 minutes within 30 days of launch. The platform processed over 12,000 orders in its first month with zero critical incidents. Kitchen staff satisfaction improved measurably due to structured demand forecasting.',
    techUsed: ['Next.js', 'React Native', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets', 'Razorpay', 'AWS'],
    imageAlt: 'KUCafe mobile app interface showing campus food ordering',
    imagePath: '/images/case-studies/kucafe.png',
  },
  {
    slug: 'medichain',
    title: 'MediChain',
    category: 'Healthcare Data Platform',
    industry: 'Healthcare',
    service: 'cloud-devops',
    tagline: 'Secure patient record system with zero-downtime delivery.',
    outcome:
      'Designed and deployed a HIPAA-aligned patient data management platform with end-to-end encryption, role-based access control, and a 99.97% uptime SLA over 8 months of operation.',
    metrics: [
      { label: 'Uptime over 8 months', value: '99.97%' },
      { label: 'Patient records managed', value: '50,000+' },
    ],
    challenge:
      'A regional healthcare network was operating with siloed, paper-based patient records across 6 clinics. Accessing a patient\'s history required inter-clinic phone calls. Data accuracy could not be guaranteed. The risk of misdiagnosis due to incomplete records was documented.',
    approach:
      'We built a centralized patient data platform with end-to-end encryption at rest and in transit, a complete audit trail for every data access event, and role-based access segmented by clinical function. The system was deployed on a private cloud with automated failover.',
    results:
      'Inter-clinic record retrieval dropped from an average of 34 minutes to under 90 seconds. The platform achieved 99.97% uptime across 8 months. Zero unauthorized data access events were recorded. Clinical staff reported a significant improvement in confidence about patient history accuracy.',
    techUsed: ['FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'Terraform', 'AES-256', 'GitHub Actions', 'Nginx'],
    imageAlt: 'MediChain dashboard showing patient record management interface',
    imagePath: '/images/case-studies/medichain.png',
  },
  {
    slug: 'railtrace',
    title: 'RailTrace',
    category: 'Government Infrastructure',
    industry: 'Government',
    service: 'web-engineering',
    tagline: 'Real-time railway asset tracking system for state operations.',
    outcome:
      'Built a real-time railway asset management system for state infrastructure with live GPS tracking, automated alert routing, and a 40% reduction in permit processing time.',
    metrics: [
      { label: 'Permit processing time reduced', value: '40%' },
      { label: 'Assets tracked in real-time', value: '200+' },
    ],
    challenge:
      'A state railways department managed 200+ infrastructure assets (stations, switches, crossings) through a combination of paper logs and spreadsheets. Maintenance scheduling was reactive, not predictive. Permit approvals required physical sign-offs across departments, taking up to 12 days.',
    approach:
      'We designed a web-based asset management platform with live GPS telemetry ingestion, automated maintenance scheduling, and a digital permit workflow that replaced the multi-department physical approval chain. The system integrated with existing government directory services for authentication.',
    results:
      'Permit processing dropped from an average of 12 days to under 7 days within the first quarter, a 40% reduction. Maintenance incidents decreased by 28% due to predictive scheduling. Over 200 assets are now tracked in real-time with automated alerting for anomalies.',
    techUsed: ['Next.js', 'FastAPI', 'PostgreSQL', 'WebSockets', 'Leaflet.js', 'Docker', 'Nginx', 'LDAP'],
    imageAlt: 'RailTrace dashboard showing real-time railway asset tracking map',
    imagePath: '/images/case-studies/railtrace.png',
  },
]

export const caseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug)
