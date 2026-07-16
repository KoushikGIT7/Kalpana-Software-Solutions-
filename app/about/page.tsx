import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, ShieldCheck, Lock, User, BarChart3, Clock } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { team } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'KALPANAAA Software Solutions is a bespoke engineering firm. Founder-led delivery, production-grade systems, zero templates.',
  alternates: { canonical: '/about' },
}

const iconMap: Record<string, React.ReactElement> = {
  Code2: <Code2 size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Lock: <Lock size={20} />,
  User: <User size={20} />,
  BarChart3: <BarChart3 size={20} />,
  Clock: <Clock size={20} />,
}

const values = [
  {
    icon: 'Code2',
    title: 'Engineering Over Assembly',
    description:
      'Every system is designed from requirements, not assembled from templates. The codebase reflects your problem, not our convenience.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Quality Without Negotiation',
    description:
      'Testing, documentation, and maintainability are not optional extras billed separately. They are part of the definition of done.',
  },
  {
    icon: 'User',
    title: 'Founder-Led Accountability',
    description:
      'The person you speak to in the proposal is the person who builds your product. No bait-and-switch to junior engineers after contract signing.',
  },
  {
    icon: 'BarChart3',
    title: 'Radical Transparency',
    description:
      'Weekly progress reports, public task boards, and defined sign-off checkpoints. You always know exactly where your project stands.',
  },
]

const categoryColors: Record<string, string> = {
  award: '#F59E0B',
  certification: '#2563EB',
}

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          id="team"
          aria-labelledby="about-hero-heading"
          className="pt-40 pb-24 border-b border-[var(--border)]"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left */}
              <div className="flex flex-col gap-6">
                <nav aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                    <li>
                      <Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-[var(--text-secondary)]">About</li>
                  </ol>
                </nav>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                  About KALPANAAA
                </span>
                <h1
                  id="about-hero-heading"
                  className="text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] text-balance"
                >
                  Built on the Principle That Software Should Work
                </h1>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  KALPANAAA Software Solutions is a bespoke engineering firm that delivers production-grade
                  systems for organizations where software failure has real consequences.
                </p>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  We work across government, healthcare, finance, and education — sectors where
                  compliance, security, and uptime are the baseline, not the goal. Every engagement
                  is founder-led, every codebase is custom, and every delivery comes with full
                  documentation and handover.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 w-fit rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-150 hover:-translate-y-0.5 mt-2"
                >
                  Start a Conversation
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* Right: Founder card */}
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col gap-5 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface1)]"
                >
                  <div className="flex items-center gap-4">
                    {member.imagePath ? (
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0" style={{ border: '1px solid var(--border)' }}>
                        <Image src={member.imagePath} alt={member.name} fill className="object-cover" />
                      </div>
                    ) : (
                      <div
                        className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgba(37,99,235,0.12)] text-[#2563EB] text-xl font-extrabold select-none flex-shrink-0"
                        aria-hidden="true"
                      >
                        {member.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-[var(--text-primary)]">{member.name}</p>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">{member.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Next.js', 'FastAPI', 'PostgreSQL', 'AWS', 'ServiceNow'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-[var(--text-secondary)] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] px-2.5 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          id="vision"
          aria-labelledby="values-heading"
          className="py-24 border-b border-[var(--border)]"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-3 mb-14 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                Our Principles
              </span>
              <h2 id="values-heading" className="text-3xl font-bold text-[var(--text-primary)] tracking-[-0.02em]">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex flex-col gap-4 p-7 rounded-xl border border-[var(--border)] bg-[var(--bg-surface1)]"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[rgba(37,99,235,0.10)] text-[#2563EB] flex-shrink-0">
                    {iconMap[v.icon]}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[var(--text-primary)]">{v.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>





        <CTABannerSection />
      </main>
    </>
  )
}
