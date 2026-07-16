'use client'

import { useEffect, useState } from 'react'

export function ScrollProgressBar(): React.ReactElement {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="scroll-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      style={{
        width: `${progress}%`,
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        background: 'var(--accent)',
        zIndex: 9999,
        transformOrigin: 'left',
        pointerEvents: 'none',
        transition: 'width 50ms linear',
      }}
    />
  )
}
