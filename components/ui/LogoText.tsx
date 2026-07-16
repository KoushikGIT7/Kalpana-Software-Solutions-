'use client'

import React from 'react'

export function StylizedA({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span className="relative z-10 font-bold">Λ</span>
      <span 
        className="absolute w-[0.45em] h-[0.12em] bg-[#2563EB] rounded-full" 
        style={{ bottom: '0.35em', left: '50%', transform: 'translateX(-50%)' }}
      />
    </span>
  )
}

export function LogoText({ className = '', primaryColor = 'var(--text-primary)', secondaryColor = 'var(--accent)' }: { className?: string, primaryColor?: string, secondaryColor?: string }) {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <span className="text-[13px] font-bold leading-tight flex items-center tracking-wider" style={{ color: primaryColor }}>
        <span>K</span>
        <StylizedA />
        <span>LP</span>
        <StylizedA />
        <span>N</span>
        <StylizedA />
        <StylizedA />
        <StylizedA />
        <StylizedA />
      </span>
      <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: secondaryColor }}>
        SOFTWARE SOLUTIONS
      </span>
    </div>
  )
}
