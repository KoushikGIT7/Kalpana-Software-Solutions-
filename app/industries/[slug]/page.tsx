import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, HeartPulse, TrendingUp, GraduationCap, ArrowRight, CheckCircle2, Shield } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { industries, industryBySlug } from '@/lib/data/industries'
import { caseStudyBySlug } from '@/lib/data/case-studies'

const iconMap: Record<string, React.ReactElement> = {
  Building2: <Building2 size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  GraduationCap: <GraduationCap size={24} />,
}

interface Params { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industryBySlug(slug)
  if (!industry) return {}
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/industries/${slug}` },
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<Params>
}): Promise<React.ReactElement> {
  const { slug } = await params
  const industry = industryBySlug(slug)
  if (!industry) notFound()

  const relatedStudies = industry.relatedCaseStudies
    .map((s) => caseStudyBySlug(s))
    .filter(Boolean)

  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="industry-hero-heading"
          className="pt-40 pb-20 border-b border-[var(--border)] relative overflow-hidden"
          style={{ background: 'var(--bg)' }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-5 max-w-2xl">
                <nav aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                    <li><Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">Home</Link></li>
                    <li aria-hidden="true">/</li>
                    <li><Link href="/industries" className="hover:text-[var(--text-secondary)] transition-colors">Industries</Link></li>
                    <li aria-hidden="true">/</li>
                    <li className="text-[var(--text-secondary)]">{industry.title.split(' ')[0]}</li>
                  </ol>
                </nav>
                <div className="flex items-center gap-3 mt-2">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(37,99,235,0.10)] text-[#2563EB]">
                    {iconMap[industry.icon]}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Industry Vertical</span>
                </div>
                <h1
                  id="industry-hero-heading"
                  className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance mt-2"
                >
                  {industry.title}
                </h1>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-prose mt-2">{industry.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 w-fit rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-150 hover:-translate-y-0.5 mt-4"
                  style={{ letterSpacing: '0.06em' }}
                >
                  Get a Proposal
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* Right Side Image */}
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl group">
                <Image
                  src={industry.imagePath}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Subtle gradient overlay to ensure the image blends elegantly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2 flex flex-col gap-12">
                {/* Challenge */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">The Challenge</h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-prose">{industry.challenge}</p>
                </div>

                {/* Solutions */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">What We Build</h2>
                  <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    {industry.solutions.map((sol) => (
                      <li key={sol} className="flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-surface1)] border border-[var(--border)] min-w-0">
                        <CheckCircle2 size={15} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-secondary)] leading-snug break-words">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-[var(--bg-surface1)] border border-[var(--border)]">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                    Compliance &amp; Standards
                  </h3>
                  <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    {industry.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 min-w-0">
                        <Shield size={13} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[var(--text-secondary)] leading-relaxed break-words">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {relatedStudies.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">Related Work</h3>
                    {relatedStudies.map((study) => study && (
                      <Link
                        key={study.slug}
                        href={`/work/${study.slug}`}
                        className="group flex flex-col gap-2 p-4 rounded-lg bg-[var(--bg-surface1)] border border-[var(--border)] hover:border-[rgba(37,99,235,0.20)] transition-all duration-150"
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2563EB]">{study.category}</span>
                        <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150">{study.title}</span>
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
