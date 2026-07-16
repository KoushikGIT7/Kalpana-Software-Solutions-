import type { Service } from '@/lib/types'

export const services: Service[] = [
  {
    slug: 'web-engineering',
    title: 'High-Concurrency Web Systems',
    shortTitle: 'Web Systems',
    tagline: 'High-Performance Modern Web',
    description:
      'We build scalable, secure, and highly performant web applications using Next.js, React, Node.js, and modern GraphQL/REST APIs. Engineered for enterprise latency thresholds and optimized for user conversion.',
    icon: 'Code2',
    number: '01',
    problem:
      'Most development shops ship working code. Few ship maintainable, observable, production-hardened systems that your team can own and evolve.',
    approach:
      'We apply a design-first, architecture-led approach: requirements are formalized into technical specifications before a single line of code is written. Every feature is scoped, estimated, and tracked with full transparency.',
    deliverables: [
      'Technical architecture document',
      'Production-ready codebase (TypeScript, tested)',
      'CI/CD pipeline configuration',
      'API documentation (OpenAPI)',
      'Deployment runbook',
      'Post-launch monitoring setup',
    ],
    techUsed: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'FastAPI', 'GitHub Actions'],
    relatedCaseStudies: ['kucafe', 'medichain'],
  },
  {
    slug: 'mobile-apps',
    title: 'Mission-Critical Mobile Interfaces',
    shortTitle: 'Mobile Systems',
    tagline: 'Native & Cross-Platform',
    description:
      'Bespoke iOS and Android mobile solutions engineered to deliver seamless performance, offline-first capabilities, and responsive, fluid interfaces.',
    icon: 'Smartphone',
    number: '02',
    problem:
      'Maintaining separate iOS and Android teams doubles cost and creates divergent user experiences. React Native done correctly eliminates this split without compromising on quality.',
    approach:
      'Architecture is designed for offline-first resilience and sub-200ms interaction response. We build custom native modules only where performance demands it, keeping the codebase portable.',
    deliverables: [
      'React Native codebase (iOS + Android)',
      'App Store and Play Store submission builds',
      'Push notification integration',
      'Analytics event specification',
      'Crash reporting configuration',
      'UX testing session report',
    ],
    techUsed: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'Firebase', 'Fastlane'],
    relatedCaseStudies: ['kucafe'],
  },
  {
    slug: 'cloud-devops',
    title: 'Resilient Cloud Infrastructure',
    shortTitle: 'Cloud Architecture',
    tagline: 'Resilient & Scalable Systems',
    description:
      'CI/CD pipelines, containerization, and infrastructure as code. Architecting resilient cloud structures on AWS and GCP with automated failover and zero-downtime deployments.',
    icon: 'Cloud',
    number: '03',
    problem:
      'Teams scale their applications on infrastructure that was never designed for growth. The result: unpredictable bills, cascading failures, and 3am incidents.',
    approach:
      'Infrastructure is treated as code from day one. We design for failure, automate everything, and instrument every layer with structured observability before the first user arrives.',
    deliverables: [
      'Infrastructure-as-Code (Terraform/CDK)',
      'CI/CD pipeline (GitHub Actions)',
      'Kubernetes or ECS cluster configuration',
      'Observability stack (metrics, logs, traces)',
      'Disaster recovery runbook',
      'Cost optimization report',
    ],
    techUsed: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana', 'Nginx'],
    relatedCaseStudies: ['railtrace', 'medichain'],
  },
  {
    slug: 'qa-testing',
    title: 'Zero-Defect Delivery Automation',
    shortTitle: 'QA Automation',
    tagline: 'Zero-defect Delivery Standards',
    description:
      'Automated regression pipelines, unit/integration testing suites, and performance load tests. We implement robust verification standards to guarantee zero-defect production rollouts.',
    icon: 'ShieldCheck',
    number: '04',
    problem:
      'Manual QA doesn\'t scale. Automated testing without a strategy creates brittle suites that slow down deployments. Neither approach alone produces reliable software.',
    approach:
      'We apply the testing pyramid: a strong foundation of fast unit tests, a coverage layer of integration tests against real service boundaries, and targeted E2E tests for critical user paths.',
    deliverables: [
      'Test strategy document',
      'Automated test suite (unit + integration + E2E)',
      'CI integration (tests run on every PR)',
      'Coverage report with gap analysis',
      'Performance baseline benchmarks',
      'Bug report with severity classification',
    ],
    techUsed: ['Playwright', 'Jest', 'Vitest', 'Cypress', 'k6', 'Postman', 'GitHub Actions'],
    relatedCaseStudies: ['kucafe', 'railtrace'],
  },
]

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug)
