import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { team } from '@/lib/data/site'

export function FounderSection(): React.ReactElement {
  const cto = team.find((m) => m.name === 'Gaurav Kr Tripathi')
  
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="py-16 md:py-24 lg:py-32"
      style={{ background: 'var(--bg-surface1)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image Card */}
          <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 w-full">
            <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid var(--border)' }}>
              {/* Dark gradient overlay behind text (Desktop only) */}
              <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
              
              {cto?.imagePath && (
                <Image
                  src={cto.imagePath}
                  alt={cto.name}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              
              {/* Overlay badge (Desktop only) */}
              <div className="hidden lg:flex absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                <span className="text-sm font-bold tracking-widest text-[#3B82F6] uppercase">
                  {cto?.title}
                </span>
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  {cto?.name}
                </span>
              </div>
            </div>

            {/* Mobile badge (Under image) */}
            <div className="lg:hidden flex flex-col gap-1 px-1">
              <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">
                {cto?.title}
              </span>
              <span className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {cto?.name}
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]" style={{ letterSpacing: '0.08em' }}>
              Founder-to-Founder Accountability
            </span>
            <h2
              id="founder-heading"
              className="text-3xl lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-tight text-balance"
              style={{ color: 'var(--text-primary)' }}
            >
              "We don't hide behind account managers. The person architects your system is the person you speak to."
            </h2>
            
            <p className="text-base leading-relaxed text-[var(--text-secondary)] mt-2">
              Most agencies win your business with senior architects, then secretly hand your project off to junior developers. We reject this model. As founders, we take personal accountability for the code we ship. If it fails, our name is on the line. 
            </p>
            
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              Before we write a single line of code, we will conduct a deep technical audit of your requirements to ensure what you are building is actually scalable.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-[rgba(37,99,235,0.25)]"
                style={{ letterSpacing: '0.06em' }}
              >
                Book a Technical Audit
                <ArrowRight size={14} />
              </Link>
              
              <a
                href={cto?.linkedIn || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full font-bold text-xs uppercase tracking-widest px-6 py-4 transition-all duration-150 hover:bg-[rgba(255,255,255,0.05)] text-[var(--text-primary)]"
                style={{ border: '1px solid var(--border-accent)' }}
              >
                <ExternalLink size={14} />
                Verify on LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
