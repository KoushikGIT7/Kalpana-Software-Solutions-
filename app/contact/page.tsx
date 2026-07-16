'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react'


const serviceOptions = [
  'Full-Stack Web Engineering',
  'Mobile Application',
  'Cloud & DevOps',
  'QA & Test Automation',
  'Not sure — need consultation',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage(): React.ReactElement {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) newErrors.message = 'Please describe your project.'
    else if (form.message.trim().length < 30) newErrors.message = 'Please provide at least 30 characters.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      
      if (response.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch (err) {
      console.error(err)
      setFormState('error')
    }
  }

  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="contact-hero-heading"
          className="pt-40 pb-20"
          style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-5 max-w-2xl">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs list-none m-0 p-0" style={{ color: 'var(--text-tertiary)' }}>
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li style={{ color: 'var(--text-secondary)' }}>Contact</li>
                </ol>
              </nav>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                Application
              </span>
              <h1
                id="contact-hero-heading"
                className="text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-balance"
                style={{ color: 'var(--text-primary)' }}
              >
                Apply for a Technical Audit
              </h1>
              <p className="text-lg leading-relaxed max-w-prose" style={{ color: 'var(--text-secondary)' }}>
                We accept a limited number of new enterprise engagements per quarter. Please provide detailed context below to ensure we are the right architectural fit for your requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Form + info */}
        <section className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                {formState === 'success' ? (
                  <div className="flex flex-col items-start gap-5 p-10 rounded-2xl border" style={{ borderColor: 'var(--accent-border)', background: 'var(--accent-muted)' }}>
                    <CheckCircle2 size={40} className="text-[#10B981]" />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Message received.</h2>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        We&apos;ll review your project and get back to you within one business day with
                        a clear response on fit and proposed next steps.
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                      style={{ color: 'var(--accent)' }}
                    >
                      Back to home
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Name <span className="text-[#EF4444]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          placeholder="Gaurav Kr Tripathi"
                          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-0"
                          style={{
                            backgroundColor: 'var(--bg-surface1)',
                            color: 'var(--text-primary)',
                            borderColor: errors.name ? '#EF4444' : 'var(--border-accent)',
                          }}
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="text-xs text-[#EF4444] flex items-center gap-1">
                            <AlertCircle size={11} aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Email <span className="text-[#EF4444]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          placeholder="hello@company.com"
                          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-0"
                          style={{
                            backgroundColor: 'var(--bg-surface1)',
                            color: 'var(--text-primary)',
                            borderColor: errors.email ? '#EF4444' : 'var(--border-accent)',
                          }}
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="text-xs text-[#EF4444] flex items-center gap-1">
                            <AlertCircle size={11} aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="company"
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-0"
                          style={{
                            backgroundColor: 'var(--bg-surface1)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-accent)',
                          }}
                        />
                      </div>

                      {/* Service */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="service"
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-0 appearance-none cursor-pointer"
                          style={{
                            backgroundColor: 'var(--bg-surface1)',
                            color: form.service ? 'var(--text-primary)' : 'var(--text-tertiary)',
                            borderColor: 'var(--border-accent)',
                          }}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {serviceOptions.map((o) => (
                            <option key={o} value={o} style={{ color: 'var(--text-primary)', background: 'var(--bg-surface1)' }}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Project Description <span className="text-[#EF4444]" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                        placeholder="Describe the problem you are trying to solve, your current infrastructure, and any constraints (timeline, compliance, legacy systems, etc.)."
                        className="w-full rounded-lg border px-4 py-3 text-sm leading-relaxed resize-none transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-0"
                        style={{
                          backgroundColor: 'var(--bg-surface1)',
                          color: 'var(--text-primary)',
                          borderColor: errors.message ? '#EF4444' : 'var(--border-accent)',
                        }}
                      />
                      {errors.message ? (
                        <p id="message-error" role="alert" className="text-xs text-[#EF4444] flex items-center gap-1">
                          <AlertCircle size={11} aria-hidden="true" />
                          {errors.message}
                        </p>
                      ) : (
                        <p id="message-hint" className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                          The more context you provide, the more useful our response will be.
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest px-7 py-4 transition-all duration-150 hover:-translate-y-0.5"
                        style={{ letterSpacing: '0.06em' }}
                      >
                        {formState === 'submitting' ? (
                          <>
                            <span
                              className="inline-block w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin"
                              aria-hidden="true"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <ArrowRight size={13} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Info sidebar */}
              <aside className="flex flex-col gap-6">
                <div className="flex flex-col gap-5 p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-surface1)', borderColor: 'var(--border)' }}>
                  <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
                    Response Commitment
                  </h2>
                  <ul className="flex flex-col gap-4 list-none m-0 p-0">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
                        Every submission is reviewed personally by the founder.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
                        You will receive a clear answer — qualified, not qualified, or needs more
                        information — within one business day.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
                        No sales pressure. No generic proposals. Just an honest assessment.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-surface1)', borderColor: 'var(--border)' }}>
                  <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
                    Direct Contact
                  </h2>
                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:Founder@kalpanaaasoftwaresolutions.in"
                      className="flex items-center gap-3 text-sm transition-colors duration-150 hover:text-[#2563EB]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <Mail size={14} className="text-[#2563EB] flex-shrink-0" />
                      <span className="break-all">Founder@kalpanaaasoftwaresolutions.in</span>
                    </a>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9110405638'}?text=Hi,%20I'm%20interested%20in%20arranging%20a%20Technical%20Audit%20for%20my%20project.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm transition-colors duration-150 hover:text-[#25D366]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <svg className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>WhatsApp</title>
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 12.008 0c3.237.001 6.278 1.261 8.567 3.55a12.029 12.029 0 0 1 3.551 8.56c-.004 6.68-5.329 12-12.012 12-1.997-.002-3.957-.521-5.69-1.508L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.226 2.01 13.747 1.008 11.996 1.008c-5.437 0-9.863 4.37-9.867 9.801 0 1.73.475 3.41 1.374 4.871l-.994 3.635 3.738-.971z"/>
                      </svg>
                      Direct WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-surface1)', borderColor: 'var(--border)' }}>
                  <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
                    Support SLA
                  </h2>
                  <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    <li className="flex items-start gap-3">
                      <Clock size={13} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Critical — 15 minutes</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>System down, data loss risk. 24/7.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                      <div>
                        <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>High — 2 business hours</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Significant degradation.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-tertiary)' }} />
                      <div>
                        <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Standard — 1 business day</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Questions, requests, minor issues.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
