import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTABannerSection(): React.ReactElement {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-10 md:py-24 lg:py-32"
      style={{ background: 'var(--bg-surface1)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}>
            Book A Technical Review
          </span>
          <h2
            id="cta-heading"
            className="text-3xl lg:text-[2.5rem] font-bold tracking-[-0.02em] text-balance"
            style={{ color: 'var(--text-primary)' }}
          >
            Stop Guessing. Get a Founder-Level Architecture Audit.
          </h2>
          <p className="text-base leading-relaxed max-w-prose" style={{ color: 'var(--text-secondary)' }}>
            We don't do hard sales. We do deep technical reviews. Book a free 30-minute architecture audit with our CTO to identify risks and map your scalability. If we aren't a fit, you keep the roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-[rgba(37,99,235,0.25)]"
              style={{ letterSpacing: '0.06em' }}
            >
              Request a Technical Audit
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-150 hover:bg-[rgba(255,255,255,0.05)]"
              style={{ letterSpacing: '0.06em', border: '1px solid var(--border-accent)', color: 'var(--text-primary)' }}
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
