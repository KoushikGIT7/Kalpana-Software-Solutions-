import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, HeartPulse, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { industries } from '@/lib/data/industries'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Kalpana Software Solutions serves government, healthcare, finance, and education — regulated industries where software quality, security, and compliance are non-negotiable.',
  alternates: { canonical: '/industries' },
}

const iconMap: Record<string, React.ReactElement> = {
  Building2: <Building2 size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  GraduationCap: <GraduationCap size={24} />,
}

export default function IndustriesPage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="industries-hero-heading"
          className="pt-40 pb-20 border-b border-[var(--border)]"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-5 max-w-2xl">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                  <li><Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--text-secondary)]">Industries</li>
                </ol>
              </nav>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                Industries
              </span>
              <h1
                id="industries-hero-heading"
                className="text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance"
              >
                Built for Environments Where Failure Has Consequences
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-prose">
                Compliance, security, and reliability are not features — they are the baseline expectation in every vertical we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Industry cards */}
        <section aria-label="Industry list" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col gap-6 p-8 rounded-xl border border-[var(--border)] bg-[var(--bg-surface1)] hover:border-[rgba(37,99,235,0.20)] hover:shadow-lg hover:shadow-[rgba(37,99,235,0.05)] transition-all duration-200 hover:-translate-y-1.5"
                  aria-label={`${industry.title}: ${industry.description}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(37,99,235,0.10)] text-[#2563EB] group-hover:bg-[rgba(37,99,235,0.16)] transition-colors duration-150">
                    {iconMap[industry.icon]}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150">
                      {industry.title}
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{industry.description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] group-hover:text-[#2563EB] transition-colors duration-150 mt-auto">
                    Explore Solutions
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABannerSection />
      </main>
    </>
  )
}
