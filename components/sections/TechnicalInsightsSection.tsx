import Link from 'next/link'
import { ArrowRight, Terminal } from 'lucide-react'

const insights = [
  {
    category: 'Architecture',
    title: 'Scaling PostgreSQL to 10M rows/sec without sharding',
    date: 'Oct 12, 2025',
    readTime: '8 min read',
  },
  {
    category: 'DevOps',
    title: 'Zero-downtime migrations on AWS ECS with blue/green deployments',
    date: 'Sep 28, 2025',
    readTime: '12 min read',
  },
  {
    category: 'Security',
    title: 'Implementing strict Zero-Trust auth in React Native',
    date: 'Sep 14, 2025',
    readTime: '6 min read',
  },
]

export function TechnicalInsightsSection(): React.ReactElement {
  return (
    <section
      aria-label="Engineering Blog and Technical Insights"
      className="py-16 md:py-24"
      style={{ background: 'var(--bg-surface1)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-start lg:items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3 block">
              Engineering Proof
            </span>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              How We Solve Hard Problems
            </h2>
            <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
              We don&apos;t just write code; we engineer systems. Read our latest technical deep dives into how we tackle concurrency, scaling, and compliance at the edge.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] hover:border-[#2563EB] text-[var(--text-primary)] hover:text-[#2563EB] font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all duration-150"
          >
            Request a Technical Audit
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="group flex flex-col p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-[rgba(37,99,235,0.3)] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={14} className="text-[var(--text-tertiary)] group-hover:text-[#2563EB] transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] group-hover:text-[#2563EB] transition-colors">
                  {insight.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors leading-tight mb-4 flex-grow">
                {insight.title}
              </h3>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                <span className="text-xs text-[var(--text-tertiary)]">
                  {insight.date}
                </span>
                <span className="text-xs font-semibold text-[var(--text-secondary)]">
                  {insight.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
