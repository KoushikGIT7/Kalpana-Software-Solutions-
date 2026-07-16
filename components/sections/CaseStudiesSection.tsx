import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/data/case-studies'

export function CaseStudiesSection(): React.ReactElement {
  return (
    <section
      aria-labelledby="case-studies-heading"
      className="py-16 md:py-24 lg:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}
            >
              Our Work
            </span>
            <h2
              id="case-studies-heading"
              className="text-3xl lg:text-[2.5rem] font-bold tracking-[-0.02em] text-balance"
              style={{ color: 'var(--text-primary)' }}
            >
              Selected Case Studies
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-150 group flex-shrink-0"
          >
            View all work
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group flex flex-col rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1.5"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
              aria-label={`Case study: ${study.title} — ${study.tagline}`}
            >
              {/* Image */}
              <div
                className="relative w-full"
                style={{ aspectRatio: '16/9', background: 'var(--bg-surface2)' }}
              >
                <Image
                  src={study.imagePath}
                  alt={study.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02] theme-image-smart"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-4 p-6 lg:p-8">
                {/* Category badge */}
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
                  style={{
                    color: '#2563EB',
                    background: 'var(--accent-muted)',
                    border: '1px solid var(--accent-border)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {study.category}
                </span>

                {/* Title + outcome */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-lg font-bold transition-colors duration-150 group-hover:text-[#2563EB]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {study.outcome}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-auto pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                  {study.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="flex flex-col gap-0.5">
                      <span
                        className="text-2xl font-extrabold"
                        style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--accent)' }}
                      >
                        {m.value}
                      </span>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA row */}
                <div
                  className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150 mt-2 group-hover:text-[#2563EB]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  View Case Study
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
