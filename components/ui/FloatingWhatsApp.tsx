'use client'

import React from 'react'

export function FloatingWhatsApp(): React.ReactElement {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9110405638'
  const chatLink = `https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20arranging%20a%20Technical%20Audit%20for%20my%20project.`

  return (
    <a
      href={chatLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat directly on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 group animate-bounce-subtle"
      style={{
        boxShadow: '0 8px 32px rgba(37,211,102,0.3)',
      }}
    >
      {/* Official WhatsApp Logo SVG */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 12.008 0c3.237.001 6.278 1.261 8.567 3.55a12.029 12.029 0 0 1 3.551 8.56c-.004 6.68-5.329 12-12.012 12-1.997-.002-3.957-.521-5.69-1.508L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.226 2.01 13.747 1.008 11.996 1.008c-5.437 0-9.863 4.37-9.867 9.801 0 1.73.475 3.41 1.374 4.871l-.994 3.635 3.738-.971z" />
      </svg>
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-150 origin-right bg-[var(--bg-surface1)] text-[var(--text-primary)] border border-[var(--border)] text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
        Chat directly with us
      </span>
    </a>
  )
}
