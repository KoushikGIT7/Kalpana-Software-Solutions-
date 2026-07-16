import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for KALPANAAA Software Solutions. The terms under which we provide software engineering services.',
  alternates: { canonical: '/terms' },
}

const lastUpdated = 'July 2026'

export default function TermsPage(): React.ReactElement {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <section
          aria-labelledby="terms-heading"
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
                <li className="text-[var(--text-secondary)]">Terms of Service</li>
              </ol>
            </nav>

            <div className="flex flex-col gap-3 mb-12">
              <h1
                id="terms-heading"
                className="text-4xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em]"
              >
                Terms of Service
              </h1>
              <p className="text-sm text-[var(--text-tertiary)]">Last updated: {lastUpdated}</p>
            </div>

            <div
              className="flex flex-col gap-10 text-[var(--text-secondary)] leading-relaxed"
              style={{ fontSize: '0.9375rem' }}
            >
              <p>
                These Terms of Service govern the relationship between KALPANAAA Software Solutions
                (&quot;we&quot;, &quot;our&quot;, &quot;KALPANAAA&quot;) and clients who engage our
                software engineering services. By engaging our services, you agree to these terms.
              </p>

              <section aria-labelledby="services-terms-heading" className="flex flex-col gap-4">
                <h2 id="services-terms-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Services
                </h2>
                <p>
                  KALPANAAA Software Solutions provides custom software engineering services including
                  full-stack web development, mobile application development, cloud infrastructure and
                  DevOps, and QA automation. The specific deliverables, timeline, and pricing for each
                  engagement are defined in a separate project agreement or Statement of Work (&quot;SOW&quot;).
                </p>
                <p>
                  Services are provided on a project basis or retainer basis as agreed in the SOW. All
                  engagements begin with a discovery phase before development work commences.
                </p>
              </section>

              <section aria-labelledby="payment-heading" className="flex flex-col gap-4">
                <h2 id="payment-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Payment
                </h2>
                <p>
                  Payment terms are specified in each SOW. Standard terms require a deposit before work
                  begins, with milestone-based payments tied to defined deliverables. Invoices are due
                  within the number of days specified on the invoice, typically 14 days from the invoice
                  date. Late payments may incur interest at 1.5% per month or the maximum rate permitted
                  by law, whichever is lower.
                </p>
              </section>

              <section aria-labelledby="ip-heading" className="flex flex-col gap-4">
                <h2 id="ip-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Intellectual Property
                </h2>
                <p>
                  Upon full payment of all fees for a project, Kalpana Software Solutions assigns to
                  the client all intellectual property rights to the custom code and deliverables
                  produced specifically for that engagement. We retain the right to use general
                  methodologies, frameworks, and non-project-specific tools and components developed
                  independently of the engagement.
                </p>
                <p>
                  Any pre-existing intellectual property (open-source libraries, frameworks, or
                  proprietary tools) used in the project remains the property of its respective owner,
                  subject to its applicable license terms.
                </p>
              </section>

              <section aria-labelledby="confidentiality-heading" className="flex flex-col gap-4">
                <h2 id="confidentiality-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Confidentiality
                </h2>
                <p>
                  We treat all client information, project details, and business data as confidential.
                  We do not disclose client information to third parties without explicit written
                  consent, except where required by law. Clients may request a Non-Disclosure Agreement
                  (NDA) prior to discussing project details.
                </p>
              </section>

              <section aria-labelledby="warranty-heading" className="flex flex-col gap-4">
                <h2 id="warranty-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Warranty and Limitation of Liability
                </h2>
                <p>
                  KALPANAAA Software Solutions warrants that deliverables will materially conform to the
                  specifications in the SOW for a period of 30 days following project acceptance. Our
                  total liability for any claim arising from an engagement is limited to the total fees
                  paid by the client for the engagement in question. We are not liable for indirect,
                  consequential, or incidental damages.
                </p>
              </section>

              <section aria-labelledby="termination-heading" className="flex flex-col gap-4">
                <h2 id="termination-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Termination
                </h2>
                <p>
                  Either party may terminate an engagement with written notice. Clients are responsible
                  for payment of all work completed up to the date of termination. Termination
                  procedures and notice periods are specified in the relevant SOW.
                </p>
              </section>

              <section aria-labelledby="governing-law-heading" className="flex flex-col gap-4">
                <h2 id="governing-law-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of India. Disputes shall be resolved through
                  good-faith negotiation, and if unresolved, through arbitration in accordance with
                  applicable Indian arbitration law.
                </p>
              </section>

              <section aria-labelledby="changes-heading" className="flex flex-col gap-4">
                <h2 id="changes-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Changes to These Terms
                </h2>
                <p>
                  We reserve the right to update these Terms of Service. Changes apply to new
                  engagements entered into after the update date. Existing engagements continue under
                  the terms agreed at the time of the SOW.
                </p>
              </section>

              <section aria-labelledby="contact-terms-heading" className="flex flex-col gap-4">
                <h2 id="contact-terms-heading" className="text-xl font-bold text-[var(--text-primary)]">
                  Contact
                </h2>
                <p>
                  Questions about these terms should be directed to{' '}
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
