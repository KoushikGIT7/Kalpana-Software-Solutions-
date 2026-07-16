'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Bot, Send, X, Sparkles, User, Loader2 } from 'lucide-react'

type Message = {
  id: string
  role: 'bot' | 'user'
  text: string
  isEmailForm?: boolean
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'bot',
  text: 'Hello! I am Kalpana AI. How can I help you transform your digital infrastructure today?',
}

export function KalpanaAIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [step, setStep] = useState(0) // 0: initial conversation, 1: ask email, 2: email captured
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault()
    const currentInput = inputValue
    if (!currentInput.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: currentInput.trim(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking and psychological manipulation flow
    setTimeout(() => {
      setIsTyping(false)
      
      let botResponseText = ''
      let isEmailForm = false
      const inputLower = currentInput.toLowerCase()

      if (step === 0) {
        // 1. Greetings & Human-check
        if (inputLower.match(/^(hi|hello|hey|greetings|morning|evening)|how are you|bot|human|person|help/)) {
          botResponseText = "Hello there! I'm Kalpana AI, the technical assistant here. I can answer questions about our services, tech stack, pricing, compliance, or help you book an architecture review. How can I help you scale today?"
        } 
        // 2. Services & Capabilities
        else if (inputLower.match(/service|what do you do|build|web|app|mobile|ios|android|custom|cloud|devops|ai|portal|design/)) {
          botResponseText = "We engineer high-performance web systems, resilient cloud infrastructure, and custom AI/mobile apps tailored for enterprise scale. To see if our capabilities align with your specific roadmap, could you provide your email? Our Founder will review and reach out directly."
          isEmailForm = true
          setStep(1)
        } 
        // 3. Tech Stack
        else if (inputLower.match(/tech|stack|use|react|next\.js|nextjs|aws|python|node|database|postgres|framework|php|migrate/)) {
          botResponseText = "We build with an elite modern stack including Next.js, React, Node, Python, AWS, and PostgreSQL to ensure sub-200ms latency and high scalability. To discuss the exact architecture required for your system, please provide your email address."
          isEmailForm = true
          setStep(1)
        } 
        // 4. Pricing & Budget
        else if (inputLower.match(/price|cost|budget|minimum|rate|hourly|fixed|expensive|quote|blueprint|pilot|free/)) {
          botResponseText = "We avoid blind quotes. Instead, we offer a low-risk 2-week Architecture Blueprint (Paid Pilot) to prove our engineering quality before you commit to a full-scale build. To discuss your budget band and get a custom proposal, please share your corporate email."
          isEmailForm = true
          setStep(1)
        } 
        // 5. Security & Compliance
        else if (inputLower.match(/soc2|hipaa|security|secure|nda|ip|intellectual property|safe|compliant|compliance/)) {
          botResponseText = "Security is non-negotiable. We engineer to SOC2 Type II and HIPAA compliance standards, and you own 100% of the IP from day one. I'd love to have our Founder walk you through our security protocols. May I have your email?"
          isEmailForm = true
          setStep(1)
        } 
        // 6. Team, Location, Process, & SLAs
        else if (inputLower.match(/where|location|offshore|who|developer|founder|team|size|long|time|process|start|bug|maintenance|sla|support|guarantee/)) {
          botResponseText = "We guarantee Founder-led delivery with elite engineers, backed by hard SLAs like 99.99% uptime and < 15min response times. To discuss timelines and how our team can integrate with yours, please drop your email below to schedule a call with Gaurav."
          isEmailForm = true
          setStep(1)
        } 
        // 7. Default Catch-All (Funnel to Review)
        else {
          botResponseText = "That's a very specific architectural challenge. To ensure you get a highly accurate answer rather than an automated guess, I'd like to escalate this to our Founder for a direct technical review. Could you provide your corporate email?"
          isEmailForm = true
          setStep(1)
        }
      } else if (step === 1) {
        if (inputLower.includes('@')) {
          botResponseText = "Thank you! I have securely forwarded your details to our Founder. We will review your profile and reach out to you shortly."
          setStep(2)
        } else {
          botResponseText = "That doesn't look like a valid email. Could you please provide your corporate email address?"
          isEmailForm = true
        }
      } else {
        botResponseText = "Our Founder has been notified and will be in touch soon. In the meantime, if you have any further project details, feel free to drop them here!"
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: botResponseText,
        isEmailForm,
      }

      setMessages((prev) => [...prev, botMsg])
    }, 1500)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Kalpana AI Chat"
        className={`fixed z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 overflow-hidden ${isOpen ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}`}
        style={{
          bottom: '24px',
          right: '96px', // Shifted left to sit smartly beside the WhatsApp button
          boxShadow: '0 8px 32px rgba(37,99,235,0.4)',
          border: '2px solid rgba(255,255,255,0.2)'
        }}
      >
        <Image 
          src="/images/avatar/kalpana_ai.png" 
          alt="Kalpana AI" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed z-[60] flex flex-col w-[360px] max-w-[calc(100vw-32px)] sm:w-[380px] h-[500px] max-h-[calc(100vh-32px)] rounded-2xl shadow-2xl transition-all duration-300 ease-out origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{
          bottom: '24px',
          right: '24px',
          background: 'var(--bg-surface1)',
          border: '1px solid var(--border-accent)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-5 py-4 relative"
          style={{ 
            background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30 shadow-md">
              <Image 
                src="/images/avatar/kalpana_ai.png" 
                alt="Kalpana AI" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white leading-tight">Kalpana AI</span>
              <span className="text-[11px] text-blue-200 uppercase tracking-widest font-semibold mt-0.5">Executive Assistant</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors relative z-10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scroll-smooth">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'bot' && (
                <div className="w-6 h-6 rounded-full flex-shrink-0 relative overflow-hidden border border-[var(--border)] shadow-sm">
                  <Image src="/images/avatar/kalpana_ai.png" alt="Kalpana" fill className="object-cover" />
                </div>
              )}
              
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#2563EB] text-white rounded-br-sm' 
                    : 'bg-[var(--bg-surface2)] text-[var(--text-primary)] rounded-bl-sm border border-[var(--border)]'
                }`}
              >
                {msg.text}
                {msg.isEmailForm && (
                  <div className="mt-3 text-[12px] opacity-80 italic border-t border-current/10 pt-2">
                    Please type your email below.
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-2.5 justify-start">
              <div className="w-6 h-6 rounded-full flex-shrink-0 relative overflow-hidden border border-[var(--border)] shadow-sm">
                <Image src="/images/avatar/kalpana_ai.png" alt="Kalpana" fill className="object-cover" />
              </div>
              <div className="rounded-2xl rounded-bl-sm px-4 py-3 bg-[var(--bg-surface2)] border border-[var(--border)] shadow-sm">
                <Loader2 size={16} className="animate-spin text-[var(--text-secondary)]" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[var(--bg)] border-t border-[var(--border)] relative z-10">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type={step === 1 ? "email" : "text"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={step === 1 ? "Enter your email..." : "Type your message..."}
              className="w-full bg-[var(--bg-surface2)] text-[var(--text-primary)] text-[14px] rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-shadow border border-[var(--border)]"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white disabled:opacity-50 disabled:hover:bg-[#2563EB] transition-colors"
            >
              <Send size={16} className="ml-0.5" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-[var(--text-tertiary)] font-medium">Powered by Kalpanaaaa Intelligence</span>
          </div>
        </div>
      </div>
    </>
  )
}
