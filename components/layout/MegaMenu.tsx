'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { NavItem } from '@/lib/types'

interface MegaMenuProps {
  item: NavItem
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ item, isOpen, onClose }: MegaMenuProps): React.ReactElement | null {
  if (!item.children) return null

  return (
    <div
      role="region"
      aria-label={`${item.label} submenu`}
      aria-hidden={!isOpen}
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1)',
        // Full-width panel anchored below the header bar
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        // Background and border via CSS vars — works in both light and dark
        background: 'var(--megamenu-bg)',
        boxShadow: 'var(--megamenu-shadow)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Left — nav links (2 cols of the 3-col grid) */}
          <div className="col-span-2 grid grid-cols-2 gap-1">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={onClose}
                className="group flex flex-col gap-1 rounded-lg p-4 transition-colors duration-150 hover:bg-[var(--accent-muted)]"
              >
                <span
                  className="text-sm font-semibold leading-tight transition-colors duration-150"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {/* On group hover, shift to accent via CSS group class */}
                  <span className="group-hover:text-[#2563EB] transition-colors duration-150">
                    {child.label}
                  </span>
                </span>
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {child.description}
                </span>
              </Link>
            ))}
          </div>

          {/* Right — featured promo tile */}
          {item.featured && (
            <div
              className="flex flex-col justify-between rounded-xl p-6"
              style={{
                background: 'var(--accent-muted)',
                border: '1px solid var(--accent-border)',
              }}
            >
              <div className="flex flex-col gap-3">
                <span
                  className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
                  style={{
                    color: '#2563EB',
                    background: 'rgba(37,99,235,0.12)',
                  }}
                >
                  {item.featured.tag}
                </span>
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.featured.headline}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.featured.description}
                </p>
              </div>
              <Link
                href={item.featured.href}
                onClick={onClose}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-150 mt-4"
              >
                {item.featured.cta}
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform duration-150"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
