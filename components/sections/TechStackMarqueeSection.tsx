import React from 'react'

// Simple custom SVG shapes for top technologies
const techLogos = [
  {
    name: 'React',
    svg: (
      <svg className="w-6 h-6 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>React</title>
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg className="w-6 h-6 text-[var(--text-primary)]" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Next.js</title>
        <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.08" />
        <path d="M149.508 157.52L69.142 54H54v72h14.4V68.217l68.647 88.083c4.321-4.225 8.15-8.853 12.461-18.78z" fill="currentColor" />
        <rect x="115" y="54" width="14.4" height="72" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg className="w-6 h-6 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>TypeScript</title>
        <path d="M1.125 0C.502 0 0 .502 0 1.125V22.88C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.12V1.12C24 .502 23.498 0 22.88 0H1.125zm13.784 10.997h2.72v1.547h-2.72v5.334c0 .88.423 1.198 1.295 1.198.375 0 .668-.042.868-.073v1.547a6.38 6.38 0 01-1.899.231c-1.897 0-3.033-.951-3.033-2.833V12.54h-1.921v-1.547h1.921V8.404h2.77v2.593zm-5.719 8.016c-.958.425-2.072.631-3.238.631-2.45 0-3.951-1.39-3.951-3.66 0-2.316 1.636-3.791 4.14-3.791 1.096 0 2.015.206 2.802.48v1.642a6.35 6.35 0 00-2.474-.46c-1.385 0-2.195.733-2.195 1.954 0 1.189.771 1.921 2.091 1.921.905 0 1.986-.242 2.825-.66v1.943z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg className="w-6 h-6 text-[#339933]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Node.js</title>
        <path d="M12 0L2 5.8v11.6L12 24l10-5.8V5.8L12 0zm8.2 16.2l-8.2 4.7-8.2-4.7V7.8l8.2-4.7 8.2 4.7v8.4zm-9.3-9.5h2.2v4.8h2.6v2h-4.8V6.7z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    svg: (
      <svg className="w-6 h-6 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>MongoDB</title>
        <path d="M12 0C7.5 4 4.5 9 4.5 13.5c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5C19.5 9 16.5 4 12 0zm0 18c-2.5 0-4.5-2-4.5-4.5S9.5 9 12 9s4.5 2 4.5 4.5S14.5 18 12 18z" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    svg: (
      <svg className="w-6 h-6 text-[var(--text-primary)]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Express.js</title>
        <path d="M0 0h24v24H0V0zm18.3 15.3c-.6-.7-1.3-.9-2.1-.9-1.2 0-1.9.6-1.9 1.4 0 .7.5 1.1 1.5 1.4l1.3.3c2 .5 3 1.4 3 2.9 0 2.2-1.8 3.6-4.3 3.6-2.1 0-3.6-.9-4.3-2.3l1.8-1.1c.4.8 1.2 1.4 2.4 1.4 1.2 0 2-.6 2-1.4 0-.8-.5-1.1-1.6-1.4l-1.3-.3c-1.8-.5-2.8-1.4-2.8-2.8 0-2.1 1.7-3.4 4-3.4 1.8 0 3.2.7 3.9 2l-1.6 1z" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    svg: (
      <svg className="w-6 h-6 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Amazon Web Services</title>
        <path d="M12.4 2.2c-3.1 0-5.7.8-7.7 2.3-.5.4-.5 1 .1 1.4l1.2.9c.4.3.9.2 1.3-.1 1.3-.9 3.1-1.4 5.1-1.4 3.7 0 5.6 1.8 5.6 4.3v.4c-1-.4-2.5-.7-4.4-.7-4.6 0-7.8 2-7.8 5.8 0 3.3 2.4 5.2 5.7 5.2 2.7 0 4.6-.9 5.8-2.7h.2l.4 1.8c.1.5.6.8 1.1.6l1.8-.6c.5-.2.7-.8.5-1.3v-8.9c-.1-4.7-3.1-7.1-9.1-7.1zm4.7 12.3c-.5 1.5-1.8 2.5-3.6 2.5-1.8 0-3-.9-3-2.5 0-1.7 1.3-2.6 3.8-2.6 1.2 0 2.1.2 2.8.5v2.1z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    svg: (
      <svg className="w-6 h-6 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Docker</title>
        <path d="M13.962 4.861a1.21 1.21 0 011.23 1.196c0 .66-.55 1.196-1.23 1.196a1.21 1.21 0 01-1.23-1.196c0-.66.55-1.196 1.23-1.196zM24 10.3c0-.1-.1-.3-.2-.5-1.4-1.5-3.8-1.5-5.2 0-.2.2-.3.4-.3.6v.9H4.1V9.5h2.2V7.1H4.1V4.8H1.9v4.7H0v2.4c0 3.7 2.9 6.8 6.6 7 4.1.2 8.7-.3 11.2-2.9 2.5-2.6 3.1-5.7 3.1-7.4v-.2h2.2v-2.3H24v2.4zm-19.9 5.1h-2v-2.4h2v2.4zm0-3.5h-2V9.5h2v2.4zm3.1 3.5h-2v-2.4h2v2.4zm0-3.5h-2V9.5h2v2.4zm3.2 3.5h-2v-2.4h2v2.4zm0-3.5h-2V9.5h2v2.4zm3.1 3.5h-2v-2.4h2v2.4zm0-3.5h-2V9.5h2v2.4z" />
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    svg: (
      <svg className="w-6 h-6 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Kubernetes</title>
        <path d="M12.01 0l7.24 3.09 3.09 7.24-3.09 7.24-7.24 3.09-7.24-3.09L1.68 10.33l3.09-7.24L12.01 0zm0 3.53l-5.32 2.27-2.27 5.32 2.27 5.32 5.32 2.27 5.32-2.27 2.27-5.32-2.27-5.32-5.32-2.27zm0 2.23l2.87 2.87-2.87 2.87-2.87-2.87 2.87-2.87z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <svg className="w-6 h-6 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>PostgreSQL</title>
        <path d="M12 0a12 12 0 00-8.9 20 1 1 0 001.3-1.4A10 10 0 1120 12a10 10 0 01-.7 3.5 1 1 0 001.8.8A12 12 0 0012 0zm-2 6.5A1.5 1.5 0 008.5 8 1.5 1.5 0 0010 9.5 1.5 1.5 0 0011.5 8 1.5 1.5 0 0010 6.5zm4 7a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0014 13.5z" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    svg: (
      <svg className="w-6 h-6 text-[#DC382D]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Redis</title>
        <path d="M12 0L2 5.8v12.4L12 24l10-5.8V5.8L12 0zM4.1 7.2L12 2.7l7.9 4.5L12 11.7 4.1 7.2zm0 8.3L12 11l7.9 4.5-7.9 4.5-7.9-4.5z" />
      </svg>
    ),
  },
  {
    name: 'Terraform',
    svg: (
      <svg className="w-6 h-6 text-[#7B42BC]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Terraform</title>
        <path d="M1.44 0h7.32v8.52H1.44zm13.8 0h7.32v8.52h-7.32zm-6.9 7.8h7.32v8.52H8.34zm6.9 7.8h7.32V24h-7.32zm-13.8 0h7.32V24H1.44z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    svg: (
      <svg className="w-6 h-6 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Python</title>
        <path d="M14.25.18a.25.25 0 00-.22.14l-.8 1.6a.25.25 0 01-.22.14h-4.26a2.25 2.25 0 00-2.25 2.25v2.25H3.25A2.25 2.25 0 001 8.75v3.25a2.25 2.25 0 002.25 2.25h1.25v-1.5H3.25a.75.75 0 01-.75-.75v-3.25a.75.75 0 01.75-.75h3v2.25A2.25 2.25 0 008.5 13.5h4.26a.25.25 0 00.22-.14l.8-1.6a.25.25 0 01.22-.14h4.26a2.25 2.25 0 002.25-2.25V7.12A2.25 2.25 0 0018.56 4.87h-1.25v1.5h1.25a.75.75 0 01.75.75v3.25a.75.75 0 01-.75.75h-3V8.88A2.25 2.25 0 0014.25.18z"/>
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    svg: (
      <svg className="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>FastAPI</title>
        <path d="M12 0L2.4 4v10.4c0 5.6 4.1 10.8 9.6 12 5.5-1.2 9.6-6.4 9.6-12V4L12 0zm-1.6 16.8L12.8 11h-4L13.6 5.6 11.2 11h4l-4.8 5.8z"/>
      </svg>
    ),
  },
  {
    name: 'Go',
    svg: (
      <svg className="w-6 h-6 text-[#00ADD8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Go</title>
        <path d="M1.81 7.56C2.9 5.67 5.64 4.5 8.91 4.5c4.7 0 7.82 2.45 7.82 6.06 0 3.86-3.13 6.13-7.82 6.13-3.23 0-5.96-1.14-7.06-2.98h14.22c.07-.38.11-.79.11-1.21 0-.42-.04-.83-.11-1.21H1.81zm11.26 3.19c-.31-1.39-1.92-2.36-4.16-2.36-2.27 0-3.89.97-4.17 2.36h8.33z"/>
      </svg>
    ),
  },
  {
    name: 'GraphQL',
    svg: (
      <svg className="w-6 h-6 text-[#E10098]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>GraphQL</title>
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 3L6.06 8.42v7.16L12 19l5.94-3.42V8.42L12 5zm0 3a4 4 0 100 8 4 4 0 000-8z"/>
      </svg>
    ),
  },
  {
    name: 'Playwright',
    svg: (
      <svg className="w-6 h-6 text-[#2EAD33]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Playwright</title>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-6.5h-2V7h2v3z"/>
      </svg>
    ),
  },
]

export function TechStackMarqueeSection(): React.ReactElement {
  const items = [...techLogos, ...techLogos, ...techLogos]
  const reversed = [...items].reverse()

  return (
    <section
      aria-label="Trending technology stack"
      className="overflow-hidden py-10"
      style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2 block text-center">
          Production-Proven Tech Stack
        </span>
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[var(--text-primary)] text-center">
          Modern Enterprise Architectures
        </h2>
      </div>

      {/* Row 1 — Scrolls Left */}
      <div className="relative overflow-hidden mb-4">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}
          aria-hidden="true"
        />
        <div className="flex gap-6 animate-marquee-left w-max">
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl flex-shrink-0 transition-all duration-300 hover:border-[rgba(37,99,235,0.4)]"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg-surface1)',
              }}
            >
              {tech.svg}
              <span
                className="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Scrolls Right */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}
          aria-hidden="true"
        />
        <div className="flex gap-6 animate-marquee-right w-max">
          {reversed.map((tech, i) => (
            <div
              key={`${tech.name}-rev-${i}`}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl flex-shrink-0 transition-all duration-300 hover:border-[rgba(37,99,235,0.4)]"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg-surface1)',
              }}
            >
              {tech.svg}
              <span
                className="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
