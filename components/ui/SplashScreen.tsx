'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function SplashScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedBefore')
    if (!hasVisited) {
      setShow(true)
      sessionStorage.setItem('hasVisitedBefore', 'true')
    }
  }, [])

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src="/images/logo/Screenshot 2026-07-16 002941.png"
              alt="Kalpana Logo"
              width={80}
              height={80}
              className="object-contain rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.2)]"
              priority
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <span className="text-xl font-bold tracking-[0.1em] text-white">KALPANAAA</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#2563EB] mt-1">SOFTWARE SOLUTIONS</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
