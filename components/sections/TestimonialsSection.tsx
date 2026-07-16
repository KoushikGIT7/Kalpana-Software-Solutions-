import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/site'

export function TestimonialsSection(): React.ReactElement {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-10 md:py-24 lg:py-32"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-12 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}>
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-[2.5rem] font-bold tracking-[-0.02em] text-balance"
            style={{ color: 'var(--text-primary)' }}
          >
            Engineering Outcomes, Not Just Code
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className={`grid grid-cols-1 ${testimonials.length > 1 ? 'md:grid-cols-2' : ''} gap-6 lg:gap-8`}>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-5 p-7 lg:p-8 rounded-xl"
              style={{ border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
            >
              {/* Outcome Banner */}
              <div className="flex flex-col gap-1 pb-4 border-b border-[var(--border)]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB]">Business Impact</span>
                <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{t.outcome}</span>
              </div>

              {/* Quote text */}
              <blockquote className="flex-1 mt-2">
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <figcaption className="flex items-center gap-3 mt-2">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'rgba(37,99,235,0.30)' }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</span>
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {t.title} &middot; {t.company}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
