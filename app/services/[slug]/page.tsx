import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Code2, Smartphone, Cloud, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { services, serviceBySlug } from '@/lib/data/services'
import { caseStudyBySlug } from '@/lib/data/case-studies'

const iconMap: Record<string, React.ReactElement> = {
  Code2: <Code2 size={24} />,
  Smartphone: <Smartphone size={24} />,
  Cloud: <Cloud size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
}

interface Params {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = serviceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: `${service.tagline} — ${service.description.slice(0, 120)}`,
    alternates: { canonical: `/services/${slug}` },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>
}): Promise<React.ReactElement> {
  const { slug } = await params
  const service = serviceBySlug(slug)
  if (!service) notFound()

  const relatedStudies = service.relatedCaseStudies
    .map((s) => caseStudyBySlug(s))
    .filter(Boolean)

  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="service-hero-heading"
          className="pt-40 pb-20 border-b border-[var(--border)]"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-5 max-w-2xl">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                  <li><Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/services" className="hover:text-[var(--text-secondary)] transition-colors">Services</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--text-secondary)]">{service.shortTitle}</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(37,99,235,0.10)] text-[#2563EB]">
                  {iconMap[service.icon]}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                  Service {service.number}
                </span>
              </div>
              <h1
                id="service-hero-heading"
                className="text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance"
              >
                {service.title}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-prose">{service.tagline}</p>
              <div className="flex flex-col sm:flex-row items-start gap-3 mt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-150 hover:-translate-y-0.5"
                >
                  Get a Proposal
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main content */}
              <div className="lg:col-span-2 flex flex-col gap-12">
                {/* Problem */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">The Problem</h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-prose">{service.problem}</p>
                </div>

                {/* Approach */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Our Approach</h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-prose">{service.approach}</p>
                </div>

                {/* Deliverables */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Deliverables</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-surface1)] border border-[var(--border)]">
                        <CheckCircle2 size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-secondary)] leading-snug">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-8">
                {/* Tech used */}
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-[var(--bg-surface1)] border border-[var(--border)]">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-[var(--text-secondary)] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related case studies */}
                {relatedStudies.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                      Related Work
                    </h3>
                    {relatedStudies.map((study) => study && (
                      <Link
                        key={study.slug}
                        href={`/work/${study.slug}`}
                        className="group flex flex-col gap-2 p-4 rounded-lg bg-[var(--bg-surface1)] border border-[var(--border)] hover:border-[rgba(37,99,235,0.20)] transition-all duration-150"
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2563EB]">
                          {study.category}
                        </span>
                        <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150">
                          {study.title}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)] line-clamp-2">{study.tagline}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        <CTABannerSection />
      </main>
    </>
  )
}
