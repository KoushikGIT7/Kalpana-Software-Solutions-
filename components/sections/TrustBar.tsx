const trustedPartners = [
  'Department of Public Health',
  'State Board of Education',
  'Global FinTech Solutions',
  'Karnatak University',
  'Municipal Automation Agency',
  'National Logistics Hub',
  'Healthcare Data Systems',
]

export function TrustBar(): React.ReactElement {
  // Duplicate for seamless loop
  const items = [...trustedPartners, ...trustedPartners]
  const reversed = [...items].reverse()

  return (
    <section
      aria-label="Technology trust bar"
      className="overflow-hidden py-8"
      style={{
        background: 'var(--bg-surface1)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-6">
        <p
          className="text-xs font-semibold uppercase tracking-widest text-center"
          style={{ color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}
        >
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden mb-3">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-surface1), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-surface1), transparent)' }}
          aria-hidden="true"
        />
        <div className="flex gap-4 animate-marquee-left w-max">
          {items.map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg flex-shrink-0"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg-surface2)',
              }}
            >
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: 'var(--text-secondary)' }}
              >
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-surface1), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-surface1), transparent)' }}
          aria-hidden="true"
        />
        <div className="flex gap-4 animate-marquee-right w-max">
          {reversed.map((partner, i) => (
            <div
              key={`${partner}-rev-${i}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg flex-shrink-0"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg-surface2)',
              }}
            >
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: 'var(--text-secondary)' }}
              >
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
