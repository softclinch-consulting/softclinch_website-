'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SoftClinchAIWidget() {
  const pathname = usePathname()

  // Hide floating widget if user is already on the dedicated AI page route
  if (pathname === '/softclinch-ai' || pathname === '/ai') {
    return null
  }

  return (
    <div style={{ position: 'fixed', right: '24px', bottom: '28px', zIndex: 9990 }}>
      <Link
        href="/softclinch-ai"
        aria-label="Open SoftClinch AI"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 18px 10px 12px',
          background: 'linear-gradient(135deg, rgba(2,6,23,0.92), rgba(15,23,42,0.95))',
          border: '1px solid rgba(0,229,255,0.45)',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px rgba(0,229,255,0.25), 0 0 16px rgba(37,99,235,0.4)',
          backdropFilter: 'blur(16px)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          color: '#ffffff',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.06) translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,229,255,0.4), 0 0 24px rgba(37,99,235,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,229,255,0.25), 0 0 16px rgba(37,99,235,0.4)'
        }}
      >
        {/* Animated AI orb icon */}
        <div style={{ position: 'relative', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB, #00E5FF)',
            opacity: 0.8,
            animation: 'pulseGlow 2s ease-in-out infinite',
          }} />
          <div style={{
            position: 'relative', zIndex: 1, width: '30px', height: '30px', borderRadius: '50%',
            background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '16px' }}>⚡</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <span style={{
            fontSize: '13px', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.04em',
            background: 'linear-gradient(90deg, #ffffff, #00E5FF)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>SoftClinch AI</span>
          <span style={{ fontSize: '10px', color: '#60a5fa', opacity: 0.9 }}>Click to connect</span>
        </div>
      </Link>
    </div>
  )
}
