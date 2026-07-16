import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { caseStudies } from '@/lib/data/case-studies'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies from Kalpana Software Solutions: KUCafe campus ordering platform, MediChain patient records, RailTrace government asset tracking.',
  alternates: { canonical: '/work' },
}

export default function WorkPage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="work-hero-heading"
          className="pt-40 pb-20 border-b border-[var(--border)]"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-5 max-w-2xl">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                  <li>
                    <Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--text-secondary)]">Work</li>
                </ol>
              </nav>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                Case Studies
              </span>
              <h1
                id="work-hero-heading"
                className="text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance"
              >
                Systems Built. Problems Solved.
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-prose">
                Three case studies from production deployments in education, healthcare, and government.
                Real outcomes, real metrics, real codebases.
              </p>
            </div>
          </div>
        </section>

        {/* Case study cards */}
        <section aria-label="Case studies" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-10">
              {caseStudies.map((study, idx) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface1)] overflow-hidden hover:border-[rgba(37,99,235,0.20)] hover:shadow-xl hover:shadow-[rgba(37,99,235,0.06)] transition-all duration-200"
                  aria-label={`${study.title}: ${study.tagline}`}
                >
                  {/* Image — alternates left/right */}
                  <div
                    className={`relative w-full overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                    style={{ aspectRatio: '16/9', minHeight: 280 }}
                  >
                    <Image
                      src={study.imagePath}
                      alt={study.imageAlt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          idx % 2 === 1
                            ? 'linear-gradient(to right, rgba(17,17,24,0.7) 0%, transparent 60%)'
                            : 'linear-gradient(to left, rgba(17,17,24,0.7) 0%, transparent 60%)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col gap-6 p-8 lg:p-10 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2563EB] bg-[rgba(37,99,235,0.10)] border border-[rgba(37,99,235,0.20)] px-2.5 py-1 rounded-full">
                        {study.category}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                        {study.industry}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h2 className="text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150 tracking-[-0.02em]">
                        {study.title}
                      </h2>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{study.tagline}</p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex flex-col gap-1 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[var(--border)]"
                        >
                          <span
                            className="text-2xl font-extrabold text-[var(--text-primary)]"
                            style={{ fontFamily: 'var(--font-mono), monospace' }}
                          >
                            {m.value}
                          </span>
                          <span className="text-xs text-[var(--text-secondary)] leading-snug">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] group-hover:text-[#2563EB] transition-colors duration-150 mt-auto">
                      Read case study
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform duration-150"
                      />
                    </div>
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
