'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, HeartPulse, TrendingUp, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react'
import { industries } from '@/lib/data/industries'

const iconMap: Record<string, React.ReactElement> = {
  Building2: <Building2 size={18} />,
  HeartPulse: <HeartPulse size={18} />,
  TrendingUp: <TrendingUp size={18} />,
  GraduationCap: <GraduationCap size={18} />,
}

export function IndustriesSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = industries[activeIndex]

  return (
    <section
      aria-labelledby="industries-heading"
      className="py-10 md:py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-surface1)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}>
            Industries
          </span>
          <h2
            id="industries-heading"
            className="text-3xl lg:text-[2.5rem] font-bold tracking-[-0.02em] text-balance"
            style={{ color: 'var(--text-primary)' }}
          >
            Built for Regulated Environments
          </h2>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Industries">
          {industries.map((industry, idx) => (
            <button
              key={industry.slug}
              role="tab"
              aria-selected={activeIndex === idx}
              aria-controls={`industry-panel-${industry.slug}`}
              id={`industry-tab-${industry.slug}`}
              onClick={() => setActiveIndex(idx)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeIndex === idx ? '#2563EB' : 'var(--bg-surface2)',
                color: activeIndex === idx ? '#fff' : 'var(--text-secondary)',
                border: activeIndex === idx ? '1px solid transparent' : '1px solid var(--border)',
              }}
            >
              {iconMap[industry.icon]}
              <span>{industry.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab panel with Split Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start min-h-[500px]"
            id={`industry-panel-${active.slug}`}
            role="tabpanel"
            aria-labelledby={`industry-tab-${active.slug}`}
          >
            {/* Left: Dynamic content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                  {iconMap[active.icon]}
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {active.title}
                  </span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {active.description}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-tertiary)' }}>
                    Key Capabilities
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
                    {active.solutions.slice(0, 4).map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 mt-2" style={{ color: 'var(--text-tertiary)' }}>
                    Compliance & Standards
                  </h3>
                  <div className="flex flex-col gap-2">
                    {active.features.slice(0, 2).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 p-3 rounded-lg"
                        style={{ border: '1px solid var(--border)', background: 'var(--bg-surface2)' }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                          aria-hidden="true"
                        />
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/industries/${active.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-150 group w-fit"
              >
                Explore {active.title.split(' ')[0]} Solutions
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>

            {/* Right: Dynamic image */}
            <div className="relative w-full aspect-video lg:aspect-square lg:max-h-[600px] rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
              {active.imagePath && (
                <Image
                  src={active.imagePath}
                  alt={`${active.title} Interface`}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              {/* Gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface1)] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
