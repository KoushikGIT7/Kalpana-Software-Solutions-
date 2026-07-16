'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  numericValue: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  numericValue,
  prefix = '',
  suffix = '',
  duration = 1200,
  className,
}: AnimatedCounterProps): React.ReactElement {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const startTime = performance.now()
          const endValue = numericValue

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * endValue))

            if (progress < 1) {
              requestAnimationFrame(tick)
            } else {
              setCount(endValue)
            }
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [numericValue, duration, hasAnimated])

  // Handle non-numeric special cases
  const displayValue = numericValue === 24 && suffix === '/7'
    ? '24/7'
    : numericValue === 99.9
    ? count < numericValue
      ? count.toFixed(0)
      : '99.9'
    : count.toLocaleString()

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{numericValue === 24 && suffix === '/7' ? '' : suffix}
    </span>
  )
}
