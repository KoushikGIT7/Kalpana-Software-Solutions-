import { Key, UserCheck, Eye, Activity, Shield } from 'lucide-react'
import { enterpriseGuarantees } from '@/lib/data/site'

const iconMap: Record<string, React.ReactElement> = {
  Key: <Key size={24} />,
  UserCheck: <UserCheck size={24} />,
  Eye: <Eye size={24} />,
  Activity: <Activity size={24} />,
  Shield: <Shield size={24} />,
}

export function EnterpriseCommitmentsSection(): React.ReactElement {
  return (
    <section
      id="commitments"
      aria-labelledby="commitments-heading"
      className="py-10 md:py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      {/* Subtle glow background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit" style={{ background: 'var(--accent-muted)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
            The Kalpana Standard
          </span>
          <h2
            id="commitments-heading"
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-balance"
            style={{ color: 'var(--text-primary)' }}
          >
            Engineering guarantees that eliminate enterprise risk.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mt-2">
            We do not offer "best effort" support. Our systems are backed by legally binding SLAs: 99.99% uptime, sub-200ms global API latency, and a 15-minute response time for critical production incidents. We offer strict founder-level accountability, zero-risk handovers, and absolute transparency from Day 1.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {enterpriseGuarantees.map((guarantee, idx) => (
            <div
              key={guarantee.title}
              className="group flex flex-col gap-5 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: 'var(--bg-surface1)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
              }}
            >
              {/* Top Row: Icon + Index */}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white" style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}>
                  {iconMap[guarantee.icon]}
                </div>
                <span className="text-4xl font-extrabold opacity-10" style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--text-primary)' }}>
                  0{idx + 1}
                </span>
              </div>

              {/* Title + Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{guarantee.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
