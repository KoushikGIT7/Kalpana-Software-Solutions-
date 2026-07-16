'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import { MegaMenu } from './MegaMenu'
import { MobileDrawer } from './MobileDrawer'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { navItems } from '@/lib/data/site'
import type { NavItem } from '@/lib/types'

const ANNOUNCEMENT_DISMISSED_KEY = 'kss_announcement_dismissed'

export function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [announcementDismissed, setAnnouncementDismissed] = useState(true)
  const pathname = usePathname()
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Read dismissal state from sessionStorage (client only)
  useEffect(() => {
    const dismissed = sessionStorage.getItem(ANNOUNCEMENT_DISMISSED_KEY)
    setAnnouncementDismissed(dismissed === 'true')
  }, [])

  // Sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mega-menu and mobile drawer on route change
  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // Close mega-menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Hover intent: 150ms delay before opening, 80ms grace before closing
  const handleMouseEnter = useCallback((label: string, hasChildren: boolean) => {
    if (!hasChildren) return
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => setActiveMenu(label), 150)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => setActiveMenu(null), 80)
  }, [])

  const handleMenuMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
  }, [])

  const handleDismissAnnouncement = () => {
    sessionStorage.setItem(ANNOUNCEMENT_DISMISSED_KEY, 'true')
    setAnnouncementDismissed(true)
  }

  const isActiveLink = (href: string): boolean => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0"
      style={{ zIndex: 40 }}
    >
      {/* ── Announcement bar ─────────────────────────────────────────────── */}
      {!announcementDismissed && (
        <div
          className="flex items-center justify-center gap-3 px-4 text-white text-xs font-medium"
          style={{ background: 'var(--accent)', minHeight: 36 }}
        >
          <span className="hidden sm:inline">
            Now accepting Q3 2026 projects — limited engagement slots.
          </span>
          <span className="sm:hidden">Limited Q3 2026 slots available.</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:no-underline transition-all duration-150"
          >
            Request Audit →
          </Link>
          <button
            onClick={handleDismissAnnouncement}
            aria-label="Dismiss announcement"
            className="ml-2 flex items-center justify-center w-5 h-5 rounded-full hover:bg-white/20 transition-colors duration-150 flex-shrink-0"
          >
            {/* Inline X to avoid importing icon just for this */}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="1" y1="1" x2="9" y2="9" />
              <line x1="9" y1="1" x2="1" y2="9" />
            </svg>
          </button>
        </div>
      )}

      {/* ── Main nav bar ─────────────────────────────────────────────────── */}
      <div
        className="transition-all duration-150"
        style={{
          background: isScrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: isScrolled ? 'var(--nav-shadow)' : 'none',
        }}
      >
        {/*
          FIX: Root cause of CTA overflow was `justify-between` on a container
          without `min-width: 0` on the center nav, causing the nav to push the
          CTA off-screen on narrow viewports. Fixed by:
          1. Setting `min-w-0` on the nav so it can shrink
          2. Using `flex-shrink-0` on both logo and CTA
          3. Adding a `flex-1` gap region so nav stays centered
          4. Capping the overall container at max-w-7xl with proper padding
        */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center gap-4"
          style={{ height: 72 }}
        >
          {/* Logo — flex-shrink-0 prevents logo from being crushed */}
          <Link
            href="/"
            aria-label="Kalpana Software Solutions — Home"
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Image
              src="/images/logo/Screenshot 2026-07-16 002941.png"
              alt="Logo"
              width={36}
              height={36}
              className="object-contain rounded-md"
              style={{ maxHeight: 36, width: 'auto' }}
              priority
            />
            <div className="flex flex-col justify-center">
              <span className="text-[13px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                Kalpana Software
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop nav — flex-1 + min-w-0 allows it to shrink, centered with justify-center */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex flex-1 items-center justify-center min-w-0"
          >
            <ul className="flex items-center gap-0.5 list-none m-0 p-0">
              {navItems.map((item: NavItem) => {
                const hasChildren = !!item.children?.length
                const isActive = isActiveLink(item.href)
                const isMenuOpen = activeMenu === item.label

                return (
                  <li
                    key={item.href}
                    onMouseEnter={() => handleMouseEnter(item.label, hasChildren)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    {hasChildren ? (
                      <button
                        aria-haspopup="true"
                        aria-expanded={isMenuOpen}
                        className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest rounded-md transition-colors duration-150 whitespace-nowrap"
                        style={{
                          color: isActive || isMenuOpen ? 'var(--accent)' : 'var(--text-secondary)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          size={12}
                          className="transition-transform duration-200"
                          style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className="flex items-center px-3 py-2 text-xs font-semibold uppercase tracking-widest rounded-md transition-colors duration-150 whitespace-nowrap"
                        style={{
                          color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Desktop right actions — flex-shrink-0 prevents CTA from overflowing */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-auto">
            <ThemeToggle />
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center whitespace-nowrap rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase px-5 py-2.5 transition-all duration-150 hover:-translate-y-0.5 shadow-sm"
              style={{ letterSpacing: '0.06em' }}
            >
              Request Audit
            </Link>
          </div>

          {/* Mobile hamburger — flex-shrink-0 */}
          <div className="lg:hidden flex items-center gap-3 ml-auto flex-shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-150"
              style={{
                color: 'var(--text-secondary)',
              }}
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mega-menu panels ─────────────────────────────────────────────── */}
      {navItems.map((item: NavItem) => {
        if (!item.children?.length) return null
        return (
          <div
            key={item.label}
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MegaMenu
              item={item}
              isOpen={activeMenu === item.label}
              onClose={() => setActiveMenu(null)}
            />
          </div>
        )
      })}

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </header>
  )
}
