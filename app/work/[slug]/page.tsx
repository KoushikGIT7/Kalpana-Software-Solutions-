import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { caseStudies, caseStudyBySlug } from '@/lib/data/case-studies'
import { serviceBySlug } from '@/lib/data/services'

interface Params {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return caseStudies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudyBySlug(slug)
  if (!study) return {}
  return {
    title: study.title,
    description: `${study.tagline} ${study.outcome.slice(0, 100)}`,
    alternates: { canonical: `/work/${slug}` },
  }
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<Params>
}): Promise<React.ReactElement> {
  const { slug } = await params
  const study = caseStudyBySlug(slug)
  if (!study) notFound()

  const relatedService = serviceBySlug(study.service)

  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="case-study-hero-heading"
          className="pt-40 pb-0"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-16">
            <div className="flex flex-col gap-5 max-w-3xl">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                  <li>
                    <Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/work" className="hover:text-[var(--text-secondary)] transition-colors">
                      Work
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--text-secondary)]">{study.title}</li>
                </ol>
              </nav>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2563EB] bg-[rgba(37,99,235,0.10)] border border-[rgba(37,99,235,0.20)] px-2.5 py-1 rounded-full">
                  {study.category}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                  {study.industry}
                </span>
              </div>

              <h1
                id="case-study-hero-heading"
                className="text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance"
              >
                {study.title}
              </h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">{study.tagline}</p>

              {/* Outcome callout */}
              <div
                className="flex flex-col gap-2 p-5 rounded-xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.06)] mt-2"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                  Outcome
                </p>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed">{study.outcome}</p>
              </div>
            </div>
          </div>

          {/* Full-width hero image */}
          <div
            className="relative w-full border-t border-b border-[var(--border)] aspect-[4/3] md:aspect-[21/9] lg:aspect-auto lg:h-[520px]"
          >
            <Image
              src={study.imagePath}
              alt={study.imageAlt}
              fill
              className="object-cover theme-image-smart"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, transparent 40%, rgba(10,10,15,0.5) 100%)',
              }}
            />
          </div>
        </section>

        {/* Body */}
        <section className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main content */}
              <article className="lg:col-span-2 flex flex-col gap-12">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {study.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col gap-1.5 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-surface1)]"
                    >
                      <span
                        className="text-3xl font-extrabold text-[var(--text-primary)]"
                        style={{ fontFamily: 'var(--font-mono), monospace' }}
                      >
                        {m.value}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)] leading-snug">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Challenge */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">The Challenge</h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">{study.challenge}</p>
                </div>

                {/* Approach */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Our Approach</h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">{study.approach}</p>
                </div>

                {/* Results */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">The Results</h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">{study.results}</p>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="flex flex-col gap-8">
                {/* Tech stack */}
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-[var(--bg-surface1)] border border-[var(--border)]">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                    Technology Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-[var(--text-secondary)] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related service */}
                {relatedService && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                      Service Used
                    </h3>
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="group flex flex-col gap-3 p-4 rounded-lg bg-[var(--bg-surface1)] border border-[var(--border)] hover:border-[rgba(37,99,235,0.20)] transition-all duration-150"
                    >
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                        Service {relatedService.number}
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150">
                        {relatedService.title}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)] group-hover:text-[#2563EB] transition-colors duration-150">
                        Learn more
                        <ArrowRight size={11} />
                      </div>
                    </Link>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-[rgba(37,99,235,0.06)] border border-[rgba(37,99,235,0.15)]">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Have a similar challenge?
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Let&apos;s talk about your requirements and whether we are the right fit.
                  </p>
                    <div className="flex flex-col gap-2 mt-2">
                      <Link
                        href="/contact"
                        className="inline-flex justify-center items-center gap-2 w-full rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-5 py-3 transition-all duration-150"
                      >
                        Get a Proposal
                        <ArrowRight size={12} />
                      </Link>
                      <button
                        className="inline-flex justify-center items-center gap-2 w-full rounded-full bg-transparent border border-[var(--border-accent)] hover:border-[#2563EB] text-[var(--text-primary)] hover:text-[#2563EB] font-bold text-xs uppercase tracking-widest px-5 py-3 transition-all duration-150"
                      >
                        Architecture Blueprint
                      </button>
                    </div>
                </div>
              </aside>
            </div>

            {/* Back link */}
            <div className="mt-16 pt-8 border-t border-[var(--border)]">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
              >
                <ArrowLeft size={14} />
                Back to all case studies
              </Link>
            </div>
          </div>
        </section>

        <CTABannerSection />
      </main>
    </>
  )
}
