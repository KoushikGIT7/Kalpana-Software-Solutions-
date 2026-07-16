'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'kss_cookie_consent'

export function CookieConsent(): React.ReactElement | null {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      // Small delay so it doesn't pop immediately on load
      const t = setTimeout(() => setShow(true), 1800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[80] rounded-2xl p-5 flex flex-col gap-4"
      style={{
        background: 'var(--bg-surface3)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--border-accent)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Cookie Notice</p>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          We use essential cookies for site functionality. We do not use advertising or tracking
          cookies.{' '}
          <Link href="/privacy" className="text-[#2563EB] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={accept}
          className="flex-1 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest py-2.5 transition-colors duration-150"
          style={{ letterSpacing: '0.06em' }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="flex-1 rounded-full font-bold text-xs uppercase tracking-widest py-2.5 transition-colors duration-150"
          style={{ letterSpacing: '0.06em', border: '1px solid var(--border-accent)', color: 'var(--text-secondary)' }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}
