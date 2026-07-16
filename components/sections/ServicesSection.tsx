import Link from 'next/link'
import { Code2, Smartphone, Cloud, ShieldCheck, ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/services'

const iconMap: Record<string, React.ReactElement> = {
  Code2: <Code2 size={20} aria-hidden="true" />,
  Smartphone: <Smartphone size={20} aria-hidden="true" />,
  Cloud: <Cloud size={20} aria-hidden="true" />,
  ShieldCheck: <ShieldCheck size={20} aria-hidden="true" />,
}

export function ServicesSection(): React.ReactElement {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-16 md:py-24 lg:py-32"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-14 max-w-2xl">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}
          >
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl lg:text-[2.5rem] font-bold tracking-[-0.02em] text-balance"
            style={{ color: 'var(--text-primary)' }}
          >
            Bespoke Engineering Capabilities
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Four disciplines. One team. Full accountability from discovery to deployment.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col gap-5 p-7 lg:p-8 rounded-xl transition-all duration-200 hover:-translate-y-1.5 overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
              aria-label={`${service.shortTitle}: ${service.tagline}`}
            >
              {/*
                Top accent line — animates from 0 to full width on hover.
                Uses a CSS approach with group-hover since we cannot use
                an inline <style> tag in a Server Component cleanly.
                The line starts at width 0 and group-hover sets it to 100%.
              */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-[2px] bg-[#2563EB] w-0 group-hover:w-full transition-all duration-300"
              />

              {/* Number + icon */}
              <div className="flex items-center justify-between">
                <span
                  className="text-4xl font-extrabold"
                  style={{
                    color: 'var(--border-accent)',
                    fontFamily: 'var(--font-mono), monospace',
                    lineHeight: 1,
                  }}
                >
                  {service.number}
                </span>
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-[#2563EB] transition-colors duration-150"
                  style={{ background: 'var(--accent-muted)' }}
                >
                  {iconMap[service.icon]}
                </span>
              </div>

              {/* Title + description */}
              <div className="flex flex-col gap-2.5">
                <h3
                  className="text-lg font-bold transition-colors duration-150 group-hover:text-[#2563EB]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {service.shortTitle}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
              </div>

              {/* Arrow CTA */}
              <div
                className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150 mt-auto group-hover:text-[#2563EB]"
                style={{ color: 'var(--text-secondary)' }}
              >
                Learn More
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150 group hover:text-[#2563EB]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Explore all services
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
