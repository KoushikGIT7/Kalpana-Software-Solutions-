import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for KALPANAAA Software Solutions. How we collect, use, and protect your information.',
  alternates: { canonical: '/privacy' },
}

const lastUpdated = 'July 2026'

export default function PrivacyPage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <section
          aria-labelledby="privacy-heading"
          className="pt-40 pb-24"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] list-none m-0 p-0">
                <li>
                  <Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[var(--text-secondary)]">Privacy Policy</li>
              </ol>
            </nav>

            <div className="flex flex-col gap-3 mb-12">
              <h1
                id="privacy-heading"
                className="text-4xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em]"
              >
                Privacy Policy
              </h1>
              <p className="text-sm text-[var(--text-tertiary)]">Last updated: {lastUpdated}</p>
            </div>

            <div
              className="flex flex-col gap-10 text-[var(--text-secondary)] leading-relaxed"
              style={{ fontSize: '0.9375rem' }}
            >
              <section aria-labelledby="intro-section">
                <p>
                  KALPANAAA Software Solutions (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates
                  the website at kalpanaaaa.com. This Privacy Policy explains what information we
                  collect when you visit our website or contact us, how we use it, and your rights
                  regarding that information.
                </p>
              </section>

              <section aria-labelledby="info-collected-heading" className="flex flex-col gap-4">
                <h2 id="info-collected-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Information We Collect
                </h2>
                <p>We collect information in the following ways:</p>
                <ul className="flex flex-col gap-2 list-none m-0 p-0 pl-4 border-l border-[var(--border)]">
                  <li>
                    <strong className="text-[var(--text-primary)]">Contact form submissions:</strong> When you
                    submit our contact form, we collect your name, email address, company name, project
                    description, and any other information you choose to provide.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Direct email:</strong> When you email us
                    directly, we collect your email address and the contents of your message.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Analytics:</strong> We may collect anonymized
                    usage data (page views, referrer, browser type) to understand how our website is
                    used. This data does not identify you personally.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="info-use-heading" className="flex flex-col gap-4">
                <h2 id="info-use-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  How We Use Your Information
                </h2>
                <p>We use the information we collect solely to:</p>
                <ul className="flex flex-col gap-2 list-none m-0 p-0 pl-4 border-l border-[var(--border)]">
                  <li>Respond to your enquiry and assess whether we are a fit for your project.</li>
                  <li>Communicate with you about a potential or active engagement.</li>
                  <li>Improve the content and usability of our website.</li>
                </ul>
                <p>
                  We do not sell, rent, or share your personal information with third parties for
                  marketing purposes. We do not send unsolicited marketing communications.
                </p>
              </section>

              <section aria-labelledby="retention-heading" className="flex flex-col gap-4">
                <h2 id="retention-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Data Retention
                </h2>
                <p>
                  Contact form submissions are retained for a period necessary to respond and to
                  maintain a record of project discussions. If no engagement results from the initial
                  contact, we delete the information within 12 months of the last communication.
                </p>
              </section>

              <section aria-labelledby="security-heading" className="flex flex-col gap-4">
                <h2 id="security-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Security
                </h2>
                <p>
                  We apply appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, disclosure, or loss. Our website is served
                  over HTTPS. Access to contact form submissions is restricted to authorized personnel.
                </p>
              </section>

              <section aria-labelledby="rights-heading" className="flex flex-col gap-4">
                <h2 id="rights-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="flex flex-col gap-2 list-none m-0 p-0 pl-4 border-l border-[var(--border)]">
                  <li>Request access to the personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of your personal information.</li>
                  <li>Object to our processing of your information.</li>
                </ul>
                <p>
                  To exercise any of these rights, contact us at{' '}
                  <a
                    href="mailto:Founder@kalpanaaasoftwaresolutions.in"
                    className="text-[#2563EB] hover:underline"
                  >
                    Founder@kalpanaaasoftwaresolutions.in
                  </a>
                  .
                </p>
              </section>

              <section aria-labelledby="cookies-heading" className="flex flex-col gap-4">
                <h2 id="cookies-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Cookies
                </h2>
                <p>
                  Our website may use a small number of essential cookies to remember your preferences
                  (for example, cookie consent state). We do not use advertising or tracking cookies.
                  If we add analytics that set cookies, we will update this policy and request your
                  consent.
                </p>
              </section>

              <section aria-labelledby="contact-section-heading" className="flex flex-col gap-4">
                <h2 id="contact-section-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Contact
                </h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your information,
                  contact us at{' '}
                  <a
                    href="mailto:Founder@kalpanaaasoftwaresolutions.in"
                    className="text-[#2563EB] hover:underline"
                  >
                    Founder@kalpanaaasoftwaresolutions.in
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
