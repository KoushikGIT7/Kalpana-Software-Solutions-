import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { blogPosts } from '@/lib/data/blog'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Technical insights and engineering principles from Kalpana Software Solutions.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="blog-hero-heading"
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
                  <li className="text-[var(--text-secondary)]">Insights</li>
                </ol>
              </nav>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                Engineering Blog
              </span>
              <h1
                id="blog-hero-heading"
                className="text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance"
              >
                Thoughts on Software, Architecture, and Reliability.
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-prose">
                Technical deep dives, case study breakdowns, and our philosophy on building
                enterprise-grade systems that don't fail.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Post List */}
        <section aria-label="Blog posts" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface1)] hover:border-[rgba(37,99,235,0.20)] hover:shadow-xl hover:shadow-[rgba(37,99,235,0.06)] transition-all duration-200"
                >
                  <div className="flex flex-col gap-4 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2563EB] bg-[rgba(37,99,235,0.10)] border border-[rgba(37,99,235,0.20)] px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                        {post.date} &middot; {post.readTime}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] group-hover:text-[#2563EB] transition-colors duration-150 flex-shrink-0">
                    Read Article
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-0.5 transition-transform duration-150"
                    />
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
