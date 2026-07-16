'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle(): React.ReactElement {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder with the same dimensions to prevent layout shift
    return (
      <div
        className="w-[52px] h-7 rounded-full flex-shrink-0"
        style={{ background: 'var(--bg-surface3)' }}
        aria-hidden="true"
      />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      role="switch"
      aria-checked={isDark}
      className="relative flex-shrink-0 flex items-center w-[52px] h-7 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        background: isDark ? 'rgba(37,99,235,0.20)' : 'rgba(37,99,235,0.12)',
        border: `1px solid ${isDark ? 'rgba(37,99,235,0.35)' : 'rgba(37,99,235,0.25)'}`,
        transition: 'background 200ms ease, border-color 200ms ease',
      }}
    >
      {/* Sun icon */}
      <span
        aria-hidden="true"
        className="absolute left-1.5 flex items-center justify-center w-4 h-4"
        style={{
          opacity: isDark ? 0.35 : 1,
          transition: 'opacity 200ms ease',
        }}
      >
        <SunIcon />
      </span>

      {/* Moon icon */}
      <span
        aria-hidden="true"
        className="absolute right-1.5 flex items-center justify-center w-4 h-4"
        style={{
          opacity: isDark ? 1 : 0.35,
          transition: 'opacity 200ms ease',
        }}
      >
        <MoonIcon />
      </span>

      {/* Sliding pill */}
      <span
        aria-hidden="true"
        className="absolute w-5 h-5 rounded-full shadow-sm"
        style={{
          background: isDark ? '#2563EB' : '#2563EB',
          left: isDark ? 'calc(100% - 1.5rem)' : '0.2rem',
          transition: 'left 250ms cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        }}
      />
    </button>
  )
}

function SunIcon(): React.ReactElement {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#F59E0B' }}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon(): React.ReactElement {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#93C5FD' }}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
