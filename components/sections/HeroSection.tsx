'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { stats } from '@/lib/data/site'

const heroDomains = [
  {
    id: 'government',
    label: 'Government',
    title: 'Government Automation Portals',
    description: 'Modern digital portals, licensing workflows, and municipal automation solutions designed for regulatory transparency and high-volume citizen access.',
    features: ['Compliant with G2C Standards', 'Automated Permit Workflows', 'Federal Data Sovereignty'],
    image: '/images/industries/government.png?v=2'
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Clinical Data Pipelines',
    description: 'Secure, high-availability healthcare software systems built for clinical workflows, telemedicine platforms, and patient data management.',
    features: ['HIPAA-Aligned Engineering', 'EHR & HL7/FHIR Integration', 'End-to-End Encryption'],
    image: '/images/industries/healthcare.png?v=2'
  },
  {
    id: 'finance',
    label: 'Finance',
    title: 'High-Frequency FinTech Systems',
    description: 'Engineering financial systems that handle transactions, risk, and regulatory reporting with precision and zero tolerance for errors.',
    features: ['Sub-100ms Processing', 'Immutable Audit Logs', 'Real-Time Fraud Alerts'],
    image: '/images/industries/finance.png?v=2'
  },
  {
    id: 'education',
    label: 'Education',
    title: 'Scalable EdTech Platforms',
    description: 'Building learning management systems and institutional tools that deliver measurable educational outcomes at scale.',
    features: ['Multi-Role Access Control', 'SCORM & LTI Support', 'Accessibility-First UI'],
    image: '/images/industries/education.png?v=2'
  }
]

export function HeroSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeDomain = heroDomains[activeIndex]

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-0"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle dot-grid overlay — uses CSS var so it adapts to theme */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Radial accent glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 60% 40%, var(--accent-muted) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-16 lg:py-24 min-h-[600px]">
          {/* Left: Text (60%) */}
          <div className="flex-1 lg:max-w-[58%] flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 w-fit">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{
                  color: 'var(--accent)',
                  border: '1px solid var(--accent-border)',
                  background: 'var(--accent-muted)',
                  letterSpacing: '0.08em',
                }}
              >
                Bespoke Engineering Partner
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-extrabold tracking-[-0.03em] text-balance"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: 1.05,
                color: 'var(--text-primary)',
              }}
            >
              Architecting{' '}
              <span style={{ color: 'var(--accent)' }}>Digital</span>
              <br className="hidden sm:block" />
              {' '}Transformation
            </h1>

            {/* Subhead Domain Tabs */}
            <div className="mt-4 flex flex-wrap gap-2 border-b border-border pb-3 mb-2" style={{ borderColor: 'var(--border)' }}>
              {heroDomains.map((domain, idx) => (
                <button
                  key={domain.id}
                  onClick={() => setActiveIndex(idx)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer hover:bg-muted"
                  style={{
                    backgroundColor: activeIndex === idx ? 'var(--accent-muted)' : 'transparent',
                    color: activeIndex === idx ? 'var(--accent)' : 'var(--text-secondary)',
                    border: activeIndex === idx ? '1px solid var(--accent-border)' : '1px solid transparent',
                  }}
                >
                  {domain.label}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {activeDomain.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base font-light leading-relaxed max-w-2xl min-h-[48px]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {activeDomain.description}
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 pt-2">
                    {activeDomain.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-4 w-4 shrink-0" style={{ color: 'var(--accent)' }} aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-7 py-4 transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-[rgba(37,99,235,0.25)]"
                style={{ letterSpacing: '0.06em' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal h-4 w-4" aria-hidden="true"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path><path d="M6 12h16"></path></svg>
                Contact Us
              </Link>
              <div className="flex items-center gap-2 text-xs font-mono font-bold" style={{ color: 'var(--accent)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                <span>99.9% Citizen SLA Index</span>
              </div>
            </div>
          </div>

          {/* Right: Illustration (40%) */}
          <div className="flex-shrink-0 w-full lg:w-[40%] lg:max-w-[480px]">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-[var(--bg-surface2)]"
              style={{ aspectRatio: '4/3', border: '1px solid var(--border)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeDomain.image}
                    alt={`${activeDomain.label} interface`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg)] via-transparent to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1.5 py-8 px-6"
              style={{ borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}
            >
              <div
                className="text-3xl font-extrabold"
                style={{
                  color: 'var(--stat-number)',
                  fontFamily: 'var(--font-mono), monospace',
                }}
              >
                {stat.prefix}
                <AnimatedCounter
                  numericValue={stat.numericValue}
                  suffix={stat.suffix}
                  prefix=""
                />
              </div>
              <p
                className="text-xs font-medium leading-snug"
                style={{ color: 'var(--text-secondary)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
