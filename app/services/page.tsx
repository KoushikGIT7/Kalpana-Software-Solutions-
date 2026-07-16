import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Smartphone, Cloud, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '@/lib/data/services'
import { CTABannerSection } from '@/components/sections/CTABannerSection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full-stack web engineering, mobile apps, cloud DevOps, and QA automation. Four disciplines, one accountable team. Explore our engineering services.',
  alternates: { canonical: '/services' },
}

const iconMap: Record<string, React.ReactElement> = {
  Code2: <Code2 size={24} />,
  Smartphone: <Smartphone size={24} />,
  Cloud: <Cloud size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
}

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Requirements, risk identification, technical scoping, and proposal.' },
  { step: '02', title: 'Design', desc: 'Architecture, data models, wireframes, and API specifications.' },
  { step: '03', title: 'Build', desc: 'Development sprints with weekly check-ins and transparency.' },
  { step: '04', title: 'QA', desc: 'Automated and manual testing against defined acceptance criteria.' },
  { step: '05', title: 'Deploy', desc: 'CI/CD deployment, monitoring setup, and handover documentation.' },
]

export default function ServicesPage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Page hero */}
        <section
          aria-labelledby="services-hero-heading"
          className="pt-40 pb-20 border-b border-[var(--border)]"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-5 max-w-2xl">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                  <li><Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--text-secondary)]">Services</li>
                </ol>
              </nav>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                Our Services
              </span>
              <h1
                id="services-hero-heading"
                className="text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance"
              >
                Bespoke Engineering Capabilities
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-prose">
                Four engineering disciplines. One accountable team. Full transparency from discovery to post-launch support.
              </p>
            </div>
          </div>
        </section>

        {/* Service tiles */}
        <section aria-label="Service list" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-6 p-8 rounded-xl border border-[var(--border)] bg-[var(--bg-surface1)] hover:border-[rgba(37,99,235,0.20)] hover:shadow-lg hover:shadow-[rgba(37,99,235,0.05)] transition-all duration-200 hover:-translate-y-1.5"
                  aria-label={`${service.shortTitle}: ${service.tagline}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(37,99,235,0.10)] text-[#2563EB] group-hover:bg-[rgba(37,99,235,0.16)] transition-colors duration-150">
                      {iconMap[service.icon]}
                    </div>
                    <span className="text-3xl font-extrabold text-[var(--border)]" style={{ fontFamily: 'var(--font-mono), monospace' }}>
                      {service.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150">
                      {service.title}
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2 list-none m-0 p-0">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[var(--text-secondary)]">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] group-hover:text-[#2563EB] transition-colors duration-150 mt-auto">
                    Explore {service.shortTitle}
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process timeline */}
        <section
          aria-labelledby="process-heading"
          className="py-24 border-t border-[var(--border)]"
          style={{ background: 'var(--bg-surface1)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-3 mb-14 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                Our Process
              </span>
              <h2 id="process-heading" className="text-3xl font-bold text-[var(--text-primary)] tracking-[-0.02em]">
                How Every Engagement Runs
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, idx) => (
                <div key={step.step} className="flex flex-col gap-4 relative">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(37,99,235,0.10)] text-[#2563EB] font-bold text-sm flex-shrink-0"
                      style={{ fontFamily: 'var(--font-mono), monospace' }}
                    >
                      {step.step}
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:block flex-1 h-px bg-[var(--border)]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">{step.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABannerSection />
      </main>
    </>
  )
}
