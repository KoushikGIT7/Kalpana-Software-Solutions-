import type {
  FAQ,
  Credential,
  Testimonial,
  EnterpriseGuarantee,
  StatItem,
  NavItem,
  TeamMember,
  CaseStudy,
} from '@/lib/types'

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats: StatItem[] = [
  { value: '100+', numericValue: 100, suffix: '+', label: 'Projects Delivered', prefix: '' },
  { value: '< 200ms', numericValue: 200, suffix: 'ms', label: 'API Latency SLA', prefix: '< ' },
  { value: '24/7', numericValue: 24, suffix: '/7', label: 'Operations Support', prefix: '' },
  { value: '100%', numericValue: 100, suffix: '%', label: 'Operational Security', prefix: '' },
]

// ─── Enterprise Guarantees ───────────────────────────────────────────────────

export const enterpriseGuarantees: EnterpriseGuarantee[] = [
  {
    title: 'The Zero-Risk Handover',
    description: "We don't hold your code hostage. You get full IP transfer, exhaustive architectural documentation, and zero vendor lock-in. We build the engine; you own the keys.",
    icon: 'Key',
  },
  {
    title: 'Founder-to-Founder Accountability',
    description: "Most agencies sell you senior architects in the pitch, and junior devs in the execution. No bait-and-switch. The engineers who architect your system build your system.",
    icon: 'UserCheck',
  },
  {
    title: 'Radical Transparency Pipeline',
    description: "Never wonder what we're doing. You get Day-1 access to our CI/CD pipelines, live staging environments, and real-time sprint boards. No black boxes.",
    icon: 'Eye',
  },
  {
    title: 'Hard SLA Guarantees',
    description: "We treat uptime as a feature. Every production system we deploy comes with strict, measurable SLAs: 99.99% uptime, sub-200ms latency, and a 15-minute critical incident response time.",
    icon: 'Activity',
  },
  {
    title: 'Security-First Compliance',
    description: "SOC2-ready by default. Automated dependency auditing, strict OWASP compliance, and enterprise-grade encryption at rest and in transit.",
    icon: 'Shield',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'How do you price projects?',
    answer:
      'We price projects based on scope, not time. Every engagement begins with a discovery session where we define requirements, identify risks, and produce a fixed-scope proposal. You know the cost before any work begins. For ongoing engagements, we offer monthly retainer arrangements with defined deliverables.',
  },
  {
    question: 'What is your typical engagement process?',
    answer:
      'Our process follows four phases: Discovery (requirements, architecture, proposal) → Design (wireframes, technical specifications, data models) → Build (development sprints with weekly check-ins) → Launch (QA sign-off, deployment, handover documentation). Every phase has a defined deliverable and sign-off checkpoint.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer:
      'Yes, with the right fit. We work best with founders who have a clear problem definition and can commit to a structured discovery process. We do not take on engagements where requirements are undefined and the expectation is "figure it out". If you have a validated problem and need a serious technical partner, we want to talk.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'Our primary verticals are government and public sector, healthcare, finance, and education — industries where software reliability, security, and compliance requirements are non-negotiable. We have delivered production systems in all four. We also work outside these verticals when the technical challenge aligns with our capabilities.',
  },
  {
    question: 'Can you work with our existing codebase?',
    answer:
      'Yes. A significant portion of our work is inheriting and modernizing existing systems. Before committing to any engagement involving an existing codebase, we conduct a code audit to assess architecture health, security posture, test coverage, and technical debt. This audit informs the scope and timeline of the engagement.',
  },
  {
    question: 'What is your response time SLA?',
    answer:
      'For active projects: critical issues (system down, data loss risk) receive a response within 15 minutes, 24/7. High-severity issues receive a response within 2 business hours. Standard queries are responded to within 1 business day. All SLAs are defined in the engagement agreement.',
  },
  {
    question: 'Do you provide ongoing support after delivery?',
    answer:
      'Yes. Every project includes a 30-day post-launch support period at no additional cost. Beyond that, we offer structured support retainers covering monitoring, incident response, dependency updates, and minor feature additions. Retainer pricing is based on estimated monthly hours.',
  },
  {
    question: 'Are you hiring?',
    answer:
      'Occasionally. We maintain a small, high-caliber team intentionally. When we expand, we look for engineers with strong fundamentals, product sensibility, and the ability to communicate clearly with non-technical stakeholders. If this describes you, send a brief introduction and two examples of your best work to our contact email.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote:
      'KALPANAAA delivered a production-grade system in half the time I expected. More importantly, the codebase was clean enough that our internal team could own it immediately after handover. That is rare.',
    outcome: 'Halved deployment timeline & achieved seamless zero-friction handover.',
    name: 'Dr. Rajesh Kumar',
    title: 'Department Head, Computer Science',
    company: 'Karnatak University',
    initials: 'RK',
  },
  {
    quote:
      'The team understood the constraints of working with government infrastructure before we had to explain them. They designed around compliance and legacy systems without using them as excuses for low quality.',
    outcome: 'Successfully integrated modern APIs within strict state government firewalls.',
    name: 'Priya Nair',
    title: 'Project Lead',
    company: 'State IT Department',
    initials: 'PN',
  },
]

// ─── Team ─────────────────────────────────────────────────────────────────────

export const team: TeamMember[] = [
  {
    name: 'Gaurav Kr Tripathi',
    title: 'Founder, MD & CTO',
    bio: 'Former enterprise systems architect with over 15 years of experience building mission-critical platforms for highly regulated industries. Specialized in distributed systems and cloud-native infrastructure.',
    initials: 'GT',
    imagePath: '/images/gaurav-ceo.png',
  },
  {
    name: 'Akshit Ujjain',
    title: 'Co-Founder & CEO',
    bio: 'Strategic leader driving business growth, client partnerships, and company vision across global markets. Ensuring operational excellence and scalable organizational structures.',
    initials: 'AU',
  },
  {
    name: 'Rahul Kr Pathak',
    title: 'Chief Operating Officer',
    bio: 'Operations specialist focusing on streamlined delivery, quality assurance, and cross-functional team management. Ensuring every project meets strict latency and security standards.',
    initials: 'RP',
  },
]

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  {
    label: 'Industries',
    href: '/industries',
    children: [
      {
        label: 'Government',
        href: '/industries/government',
        description: 'Compliance-first systems for public sector.',
      },
      {
        label: 'Healthcare',
        href: '/industries/healthcare',
        description: 'Clinical and patient-facing platforms.',
      },
      {
        label: 'Finance',
        href: '/industries/finance',
        description: 'Precision engineering for financial systems.',
      },
      {
        label: 'Education',
        href: '/industries/education',
        description: 'Learning platforms built for scale.',
      },
    ],
  },
  {
    label: 'Work',
    href: '/work',
    children: [
      { label: 'KUCafe', href: '/work/kucafe', description: 'University cafe ordering system' },
      { label: 'MediChain', href: '/work/medichain', description: 'Healthcare data dashboard' },
      { label: 'RailTrace', href: '/work/railtrace', description: 'Railway tracking interface' },
    ],
  },
  {
    label: 'Our Commitments',
    href: '/#commitments',
    children: [
      { label: 'Zero-Risk Handover', href: '/#commitments', description: 'Full IP transfer' },
      { label: 'Founder Accountability', href: '/#commitments', description: 'No bait-and-switch' },
      { label: 'Radical Transparency', href: '/#commitments', description: 'Real-time pipeline access' },
      { label: 'Security & SLA', href: '/#commitments', description: 'Enterprise-grade guarantees' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Engineering', href: '/services/web-engineering', description: 'Full-stack systems built for production scale.' },
      { label: 'Mobile Apps', href: '/services/mobile-apps', description: 'Cross-platform iOS and Android applications.' },
      { label: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure that scales without surprises.' },
      { label: 'Quality Assurance', href: '/services/qa-testing', description: 'Zero-defect delivery through systematic testing.' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Founder', href: '/#founder', description: 'Meet Gaurav Kr Tripathi, Founder & CTO' },
      { label: 'Our Team', href: '/about#team', description: 'Meet our engineers' },
      { label: 'Corporate Vision', href: '/about#vision', description: 'Our engineering principles' },
    ],
  },
]

// ─── Why Kalpana ─────────────────────────────────────────────────────────────

export const whyKalpana = [
  {
    icon: 'Code2',
    title: 'No Templates. Pure Engineering.',
    description:
      'Every system is architected from requirements, not assembled from boilerplate. Your product reflects your problem, not our last client.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Zero-Defect QA Process',
    description:
      'Automated testing across unit, integration, and E2E layers. Critical paths are tested before every deploy, not after every incident.',
  },
  {
    icon: 'Lock',
    title: 'Modern, Audited Stack',
    description:
      'We use proven, actively maintained technology with documented security postures. No experimental frameworks in production systems.',
  },
  {
    icon: 'User',
    title: 'Founder-Led Delivery',
    description:
      'Your project is owned by the same person you spoke to in the proposal. No handoff to a junior team after the contract is signed.',
  },
  {
    icon: 'BarChart3',
    title: 'Transparent Milestones',
    description:
      'Weekly progress reports, public task boards, and defined sign-off checkpoints. You know the status of your project at all times.',
  },
  {
    icon: 'Clock',
    title: '24/7 Operations Support',
    description:
      'Critical incidents get a 2-hour response around the clock. We stay accountable to uptime, not just delivery.',
  },
]


