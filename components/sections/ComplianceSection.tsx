import { ShieldCheck, Lock, Server, FileCheck } from 'lucide-react'

const badges = [
  {
    icon: ShieldCheck,
    title: 'SOC2 Type II Ready',
    description: 'Auditable infrastructure & access controls.',
  },
  {
    icon: FileCheck,
    title: 'ISO 27001 Engineering',
    description: 'Information security management standards.',
  },
  {
    icon: Lock,
    title: 'HIPAA Compliant',
    description: 'Data encryption & secure PHI handling.',
  },
  {
    icon: Server,
    title: 'Zero-Trust Architecture',
    description: 'Default-deny network topologies.',
  },
]

export function ComplianceSection(): React.ReactElement {
  return (
    <section
      aria-label="Compliance and Security Standards"
      className="py-10 md:py-24"
      style={{ background: 'var(--bg-surface1)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3 block">
              Security by Default
            </span>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              Enterprise Compliance & Architecture
            </h2>
            <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
              We design systems for highly regulated industries. Compliance is not bolted on after launch; it is architected into the core of the database, API, and deployment pipeline from day one.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)] shadow-sm hover:border-[rgba(37,99,235,0.25)] transition-colors duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[rgba(37,99,235,0.1)] text-[#2563EB]">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">{badge.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
