'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/data/site'

export function FAQSection(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle(idx)
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = document.getElementById(`faq-btn-${Math.min(idx + 1, faqs.length - 1)}`)
      next?.focus()
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = document.getElementById(`faq-btn-${Math.max(idx - 1, 0)}`)
      prev?.focus()
    }
  }

  // JSON-LD for FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-10 md:py-24 lg:py-32"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-12 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}>
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl lg:text-[2.5rem] font-bold tracking-[-0.02em] text-balance"
            style={{ color: 'var(--text-primary)' }}
          >
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            const col = idx < Math.ceil(faqs.length / 2) ? 'left' : 'right'

            return (
              <div
                key={faq.question}
                className={`${col === 'right' ? 'lg:col-start-2' : ''}`}
              style={{ borderBottom: '1px solid var(--border)' }}
              >
                <button
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => handleToggle(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="flex items-center justify-between w-full py-5 text-left gap-4 group"
                >
                  <span className="text-sm font-semibold leading-snug transition-colors duration-150 group-hover:text-[#2563EB]" style={{ color: 'var(--text-primary)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ color: 'var(--text-tertiary)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 200ms cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <p className="text-sm leading-relaxed pb-5 pr-8" style={{ color: 'var(--text-secondary)' }}>
                    {faq.answer}
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
