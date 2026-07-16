import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const models = [
  {
    title: 'Architecture Blueprint',
    subtitle: 'The Risk-Free Pilot',
    price: 'Fixed Price',
    description: 'Before committing to a full build, we spend 2 weeks architecting your entire system. You receive the technical spec, API definitions, and infrastructure diagrams.',
    features: [
      '2-week sprint',
      'System Architecture Diagram',
      'Database Schema Design',
      'Zero obligation to build with us',
    ],
    highlight: false,
  },
  {
    title: 'Dedicated Engineering Pod',
    subtitle: 'For Continuous Delivery',
    price: 'Starting at $10k/mo',
    description: 'A fractional team of elite engineers integrated into your company. Best for ongoing enterprise modernization and complex, evolving requirements.',
    features: [
      'Dedicated Tech Lead & Developers',
      'Weekly Sprint Reviews',
      'Direct Slack access to founders',
      'Scalable up or down with 30-day notice',
    ],
    highlight: true,
  },
  {
    title: 'End-to-End Build',
    subtitle: 'Milestone Delivery',
    price: 'Custom Quote',
    description: 'We take your requirements and deliver a production-ready system on a fixed timeline and budget. Best for well-defined v1 products.',
    features: [
      'Fixed-price milestone contracts',
      'QA & Automation testing included',
      'CI/CD pipeline configuration',
      'Post-launch SLA support',
    ],
    highlight: false,
  },
]

export function EngagementModelsSection(): React.ReactElement {
  return (
    <section
      aria-label="Engagement Models and Pricing"
      className="py-10 md:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
            Transparent Engagement
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            How We Work With You
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            We reject the traditional agency model of bait-and-switch scoping. Our engagement models are designed to eliminate risk and align entirely with your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {models.map((model, i) => (
            <div
              key={i}
              className="flex flex-col p-8 rounded-2xl relative transition-all duration-300"
              style={{
                background: model.highlight ? 'var(--bg-surface1)' : 'var(--bg)',
                border: model.highlight ? '2px solid var(--accent)' : '1px solid var(--border)',
                boxShadow: model.highlight ? '0 20px 40px rgba(37,99,235,0.08)' : 'none',
                transform: model.highlight ? 'translateY(-8px)' : 'none',
              }}
            >
              {model.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-2 block">
                  {model.subtitle}
                </span>
                <h3 className="text-xl font-extrabold text-[var(--text-primary)] mb-2">
                  {model.title}
                </h3>
                <p className="text-sm font-semibold text-[#2563EB]">
                  {model.price}
                </p>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 flex-grow">
                {model.description}
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {model.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--text-primary)] leading-snug font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-2 rounded-full font-bold text-xs uppercase tracking-widest w-full py-4 transition-all duration-150"
                style={{
                  background: model.highlight ? '#2563EB' : 'transparent',
                  color: model.highlight ? '#FFFFFF' : 'var(--text-primary)',
                  border: model.highlight ? 'none' : '1px solid var(--border-accent)',
                }}
              >
                Request Audit
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
