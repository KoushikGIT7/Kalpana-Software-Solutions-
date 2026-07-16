export function ProcessTimelineSection(): React.ReactElement {
  const steps = [
    {
      day: 'Day 1',
      title: 'Technical Discovery',
      description: 'We audit your existing architecture, formalize the core problem definition, and align on latency and security requirements.',
    },
    {
      day: 'Day 7',
      title: 'Architecture Blueprint',
      description: 'Delivery of the complete technical specification, API design, database schema, and infrastructure topology.',
    },
    {
      day: 'Day 14',
      title: 'Sprint Zero Completion',
      description: 'CI/CD pipelines configured, staging environments provisioned, and the foundation layer of the codebase deployed.',
    },
    {
      day: 'Day 30',
      title: 'V1 Production Release',
      description: 'The first functional milestone is deployed to production, fully tested and backed by our SLA.',
    },
  ]

  return (
    <section
      aria-label="Onboarding Process and Timeline"
      className="py-16 md:py-24 overflow-hidden relative"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3 block">
            Predictable Velocity
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            The First 30 Days
          </h2>
          <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            We eliminate the anxiety of "endless consulting phases." Our onboarding process is hyper-structured to get code into production fast without sacrificing architectural integrity.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-[var(--border)] z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col relative group">
                {/* Vertical line for mobile */}
                {i !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[56px] left-[28px] bottom-[-32px] w-0.5 bg-[var(--border)] z-0" />
                )}
                
                <div className="flex md:flex-col gap-6 md:gap-4 items-start md:items-center relative z-10">
                  {/* Circle marker */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--bg-surface1)] border-2 border-[var(--border-accent)] flex items-center justify-center text-sm font-bold text-[var(--text-primary)] group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors duration-300 flex-shrink-0 shadow-sm bg-[var(--bg)]">
                    {step.day}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col md:text-center pt-2 md:pt-4">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
