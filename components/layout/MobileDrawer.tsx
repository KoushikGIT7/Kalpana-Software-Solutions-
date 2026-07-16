'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '@/lib/types'
import { LogoText } from '@/components/ui/LogoText'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export function MobileDrawer({ isOpen, onClose, navItems }: MobileDrawerProps): React.ReactElement {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Focus trap + Escape key handler
  useEffect(() => {
    if (!isOpen) return

    const previousFocus = document.activeElement as HTMLElement
    // Small delay so the drawer slide-in starts before focus jumps
    const focusTimer = setTimeout(() => closeButtonRef.current?.focus(), 50)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const drawer = drawerRef.current
      if (!drawer) return

      const focusable = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
        )
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(focusTimer)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previousFocus?.focus()
    }
  }, [isOpen, onClose])

  const handleToggle = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label))
  }

  const handleLinkClick = () => {
    onClose()
    setExpandedItem(null)
  }

  return (
    <>
      {/* ── Backdrop ───────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          background: 'rgba(0,0,0,0.65)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 300ms cubic-bezier(0,0,0.2,1)',
        }}
      />

      {/* ── Drawer panel ───────────────────────────────────────────────── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          zIndex: 70,
          // CSS vars ensure correct bg in both light and dark
          background: 'var(--drawer-bg)',
          boxShadow: '-4px 0 32px rgba(0,0,0,0.25)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: isOpen
            ? 'transform 300ms cubic-bezier(0,0,0.2,1)'
            : 'transform 250ms cubic-bezier(0.4,0,1,1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ── Drawer header ────────────────────────────────────────────── */}
        <div
          className="flex items-center justify-between px-6"
          style={{
            minHeight: 64,
            flexShrink: 0,
            borderBottom: '1px solid var(--border)',
          }}
        >
          <Link href="/" onClick={handleLinkClick} aria-label="Kalpana Software Solutions — Home" className="flex items-center gap-2">
            <Image
              src="/images/logo/Screenshot 2026-07-16 002941.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain rounded-md"
              style={{ maxHeight: 32, width: 'auto' }}
            />
            <LogoText />
          </Link>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-150"
            style={{ color: 'var(--text-secondary)' }}
          >
            {/* Inline X icon — no extra import */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="2" y1="2" x2="16" y2="16" />
              <line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          </button>
        </div>

        {/* ── Nav items ────────────────────────────────────────────────── */}
        <nav aria-label="Mobile primary" className="flex-1 py-2 overflow-y-auto">
          <ul className="list-none m-0 p-0">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0
              const isExpanded = expandedItem === item.label

              return (
                <li key={item.href} style={{ borderBottom: '1px solid var(--border)' }}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => handleToggle(item.label)}
                        aria-expanded={isExpanded}
                        aria-controls={`drawer-submenu-${item.label}`}
                        className="flex items-center justify-between w-full px-6 transition-colors duration-150"
                        style={{
                          minHeight: 52,
                          color: 'var(--text-primary)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-200 flex-shrink-0"
                          style={{
                            color: 'var(--text-tertiary)',
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        id={`drawer-submenu-${item.label}`}
                        style={{
                          maxHeight: isExpanded ? '600px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 220ms cubic-bezier(0.4,0,0.2,1)',
                          background: 'var(--bg-surface1)',
                        }}
                      >
                        <ul className="list-none m-0 p-0 pb-2">
                          {item.children!.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={handleLinkClick}
                                className="flex flex-col gap-0.5 pl-8 pr-6 py-3.5 transition-colors duration-150"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                <span
                                  className="text-sm font-medium"
                                  style={{ color: 'var(--text-primary)' }}
                                >
                                  {child.label}
                                </span>
                                <span
                                  className="text-xs leading-relaxed"
                                  style={{ color: 'var(--text-secondary)' }}
                                >
                                  {child.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center px-6 transition-colors duration-150"
                      style={{
                        minHeight: 52,
                        color: 'var(--text-primary)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
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

      </div>
    </>
  )
}
