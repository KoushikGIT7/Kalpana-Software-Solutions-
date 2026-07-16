import Link from 'next/link'
import Image from 'next/image'

function GitHubIcon({ size = 16 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon({ size = 16 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.859L1.254 2.25H8.08l4.257 5.649 5.907-5.649zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

const footerLinks = {
  Services: [
    { label: 'Web Engineering', href: '/services/web-engineering' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'QA & Testing', href: '/services/qa-testing' },
  ],
  'Executive Directors': [
    { label: 'Koushik Abhishek', href: '/about#team' },
  ],
  'Operations Base': [
    { label: 'India', href: '/contact' },
    { label: 'Global (Remote)', href: '/contact' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer(): React.ReactElement {
  const currentYear = 2026 // Hardcoded to match image exactly for copyright

  return (
    <footer
      aria-label="Site footer"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Kalpana Software Solutions — Home" className="w-fit flex items-center gap-2">
              <Image
                src="/images/logo/Screenshot 2026-07-16 002941.png"
                alt="Logo"
                width={36}
                height={36}
                className="object-contain rounded-md"
                style={{ maxHeight: 36, width: 'auto' }}
              />
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-bold leading-tight uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  KALPANAAA
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
                  SOFTWARE SOLUTIONS
                </span>
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs pr-4 mt-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Providing enterprise-grade, full-lifecycle IT automation and software engineering solutions for complex digital challenges.
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
              Performance Index: <span style={{ color: 'var(--accent)' }}>latency &le; 200ms</span>
            </p>
            <div className="flex items-center gap-3 mt-4">
              {[
                {
                  href: 'https://github.com',
                  label: 'Kalpana Software Solutions on GitHub',
                  Icon: GitHubIcon,
                },
                {
                  href: 'https://linkedin.com',
                  label: 'Kalpana Software Solutions on LinkedIn',
                  Icon: LinkedInIcon,
                },
                {
                  href: 'https://x.com',
                  label: 'Kalpana Software Solutions on X',
                  Icon: XIcon,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-150"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[13px] font-bold uppercase tracking-widest"
              style={{ color: 'var(--text-primary)' }}
            >
              OUR SERVICES
            </h3>
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {[
                { label: 'Web Engineering', href: '/services/web-engineering' },
                { label: 'Omnichannel Mobile Apps', href: '/services/mobile-apps' },
                { label: 'Cloud & DevOps Automation', href: '/services/cloud-devops' },
                { label: 'Enterprise Quality Assurance', href: '/services/qa-testing' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] transition-colors duration-150 hover:text-[#2563EB]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Executive Directors Column */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[13px] font-bold uppercase tracking-widest"
              style={{ color: 'var(--text-primary)' }}
            >
              EXECUTIVE DIRECTORS
            </h3>
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              {[
                { name: 'Gaurav Kr Tripathi', role: 'Founder, MD & CTO' },
                { name: 'Akshit Ujjain', role: 'Co-Founder & CEO' },
                { name: 'Rahul Kr Pathak', role: 'Chief Operating Officer' },
              ].map((person) => (
                <li key={person.name} className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium transition-colors duration-150 hover:text-[#2563EB]" style={{ color: 'var(--text-primary)' }}>
                    {person.name}
                  </span>
                  <span className="text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
                    {person.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Base Column */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[13px] font-bold uppercase tracking-widest"
              style={{ color: 'var(--text-primary)' }}
            >
              OPERATIONS BASE
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              <li className="flex flex-col gap-1.5 mb-2">
                <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Kalpanaaaa Software Solutions Pvt. Ltd.</span>
                <span className="text-[13px]" style={{ color: 'var(--text-tertiary)' }}>Corporate Infrastructure Suite v1.0</span>
              </li>
              <li className="mt-1">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>TLS 1.3 Security Tunnels Active</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>AES-256 Vault Protection</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
            &copy; {currentYear} Kalpanaaaa Software Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy" className="text-[13px] hover:text-[#2563EB] transition-colors" style={{ color: 'var(--text-tertiary)' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[13px] hover:text-[#2563EB] transition-colors" style={{ color: 'var(--text-tertiary)' }}>
              Terms of Service
            </Link>
            <Link href="/audit-logs" className="text-[13px] hover:text-[#2563EB] transition-colors" style={{ color: 'var(--text-tertiary)' }}>
              System Audit Logs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
