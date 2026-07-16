'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, X } from 'lucide-react'

const DISMISSED_KEY = 'kss_sticky_cta_dismissed'

export function StickyMobileCTA(): React.ReactElement | null {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const stored = sessionStorage.getItem(DISMISSED_KEY)
    if (stored === 'true') return
    setDismissed(false)

    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hide on contact page
  if (pathname === '/contact') return null
  if (dismissed || !visible) return null

  return (
    <div
      role="complementary"
      aria-label="Quick contact call to action"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-0 pointer-events-none"
    >
      <div
        className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl px-5 py-4"
        style={{
          background: 'var(--bg-surface3)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--accent-border)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px var(--accent-border)',
        }}
      >
        <div className="flex flex-col gap-0.5 min-w-0">
          <p className="text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
            Ready to start a project?
          </p>
          <p className="text-[10px] truncate" style={{ color: 'var(--text-secondary)' }}>
            Limited Q3 2026 slots available.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-4 py-2.5 transition-colors duration-150"
            style={{ letterSpacing: '0.06em' }}
          >
            Get a Proposal
            <ArrowRight size={11} />
          </Link>
          <button
            onClick={() => {
              sessionStorage.setItem(DISMISSED_KEY, 'true')
              setDismissed(true)
            }}
            aria-label="Dismiss this banner"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-150"
            style={{ color: 'var(--text-tertiary)' }}
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
