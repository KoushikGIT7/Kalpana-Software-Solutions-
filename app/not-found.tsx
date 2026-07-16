import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

const quickLinks = [
  { label: 'Services', href: '/services', desc: 'Explore our engineering capabilities.' },
  { label: 'Work', href: '/work', desc: 'Browse case studies from production systems.' },
  { label: 'About', href: '/about', desc: 'Learn who we are and how we work.' },
  { label: 'Contact', href: '/contact', desc: 'Start a conversation about your project.' },
]

export default function NotFoundPage(): React.ReactElement {
  return (
    <>
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-[100svh] flex flex-col items-center justify-center py-32 px-6"
        style={{ background: 'var(--bg)' }}
      >
        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative flex flex-col items-center text-center gap-8 max-w-2xl w-full">
          {/* Error code */}
          <p
            className="text-[8rem] font-extrabold leading-none tracking-tighter select-none"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              color: 'rgba(37,99,235,0.12)',
            }}
            aria-hidden="true"
          >
            404
          </p>

          <div className="flex flex-col gap-3 -mt-8">
            <h1 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em]">
              Page not found
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
              The URL you requested does not exist. It may have been moved, renamed, or the link is
              incorrect.
            </p>
          </div>

          {/* Quick navigation */}
          <nav aria-label="Suggested pages" className="w-full max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-4 text-left">
              Suggested Pages
            </p>
            <ul className="flex flex-col gap-2 list-none m-0 p-0 text-left">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-surface1)] hover:border-[rgba(37,99,235,0.20)] hover:bg-[rgba(37,99,235,0.04)] transition-all duration-150"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#2563EB] transition-colors duration-150">
                        {link.label}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)]">{link.desc}</span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-[var(--text-tertiary)] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back / home */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              <ArrowLeft size={13} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
