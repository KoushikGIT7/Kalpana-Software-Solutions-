'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop(): null {
  const pathname = usePathname()

  useEffect(() => {
    // If the path changes and there is no anchor tag (#hash) in the current URL,
    // force reset the scroll position to the top of the page.
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
