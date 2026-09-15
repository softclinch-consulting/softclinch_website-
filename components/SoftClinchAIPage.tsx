'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

// ─── Constants ─────────────────────────────────────────────────────────────────

const SYSTEM_MSGS = [
  'Initializing SoftClinch Intelligence...',
  'Loading AI Engine...',
  'Connecting Neural Network...',
  'Connecting Cloud Infrastructure...',
  'Loading Digital Marketing Systems...',
  'Loading Enterprise Applications...',
  'Initializing SaaS Platform...',
  'Connecting AI Agents...',
  'Connection Established',
]

const CARDS = [
  { id: 'whatsapp',  icon: '💬', label: 'WhatsApp',          sub: 'Message us',          color: '#25D366', href: 'https://wa.me/softclinch' },
  { id: 'website',   icon: '🌐', label: 'Website',           sub: 'softclinch.com',      color: '#2563EB', href: 'https://softclinch.com' },
  { id: 'schedule',  icon: '📅', label: 'Book Consultation', sub: 'Free strategy call',  color: '#00E5FF', href: '#' },
  { id: 'email',     icon: '📧', label: 'Email',             sub: 'hello@softclinch.com',color: '#38BDF8', href: 'mailto:hello@softclinch.com' },
  { id: 'call',      icon: '📞', label: 'Call',              sub: 'Talk to us now',      color: '#818CF8', href: 'tel:+1' },
  { id: 'linkedin',  icon: '💼', label: 'LinkedIn',          sub: '/softclinch',         color: '#0A66C2', href: '#' },
  { id: 'instagram', icon: '📸', label: 'Instagram',         sub: '@softclinch',         color: '#E1306C', href: '#' },
  { id: 'youtube',   icon: '▶',  label: 'YouTube',           sub: 'SoftClinch TV',       color: '#FF0000', href: '#' },
  { id: 'x',         icon: '𝕏',  label: 'X',                 sub: '@softclinch',         color: '#e2e8f0', href: '#' },
]

// Pre-computed stable particle positions for intro gather effect
const GATHER_PTS = Array.from({ length: 65 }, () => ({
  left:  Math.random() * 100,
  top:   Math.random() * 100,
  tx:    (Math.random() - 0.5) * 720,
  ty:    (Math.random() - 0.5) * 520,
  delay: Math.random() * 0.75,
  size:  Math.random() * 3 + 1,
  hue:   Math.random() > 0.5 ? 217 : 195,
}))

function hexToRgb(hex: string) {
  return `${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)}`
}

export function SoftClinchAIPage() {
  const router = useRouter()
  const [phase, setPhase]             = useState(0)
  const [visibleMsgs, setVisibleMsgs] = useState<string[]>([])
  const [msgIdx, setMsgIdx]           = useState(0)
  const [progress, setProgress]       = useState(0)
  const [showMain, setShowMain]       = useState(false)
  const [introGone, setIntroGone]     = useState(false)
  const [aiText, setAiText]           = useState('')
  const [aiDone, setAiDone]           = useState(false)
  const [activeCard, setActiveCard]   = useState<string | null>(null)
  const [cardTilts, setCardTilts]     = useState<Record<string, { rx: number; ry: number }>>({})
  const [logoPulse, setLogoPulse]     = useState(false)
  const [onCard, setOnCard]           = useState(false)

  const logoSrc = "/logo.png"

  // Canvases + DOM refs
  const neuralCanvasRef  = useRef<HTMLCanvasElement>(null)
  const trailCanvasRef   = useRef<HTMLCanvasElement>(null)
  const cursorDotRef     = useRef<HTMLDivElement>(null)
  const cursorRingRef    = useRef<HTMLDivElement>(null)
  const spotlightRef     = useRef<HTMLDivElement>(null)
  const parallaxRef      = useRef<HTMLDivElement>(null)
  const dataStreamSvgRef = useRef<SVGSVGElement>(null)

  // Mutable refs (avoid closure staleness)
  const mouseRef        = useRef({ x: -999, y: -999 })
  const showMainRef     = useRef(false)
  const neuralRAF       = useRef(0)
  const cursorRAF       = useRef(0)
  const trailPts        = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string }>>([])
  const cursorTarget    = useRef({ x: -100, y: -100 })
  const cursorRingCur   = useRef({ x: -100, y: -100 })

  useEffect(() => { showMainRef.current = showMain }, [showMain])

  // ── Intro phase timing ──────────────────────────────────────────────────────
  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 950),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3450),
      setTimeout(() => setPhase(5), 7500),
      setTimeout(() => { setPhase(6); setShowMain(true) }, 9000),
      setTimeout(() => setIntroGone(true), 10400),
    ]
    return () => ts.forEach(clearTimeout)
  }, [])

  // ── System messages typewriter ──────────────────────────────────────────────
  useEffect(() => {
    if (phase < 4 || msgIdx >= SYSTEM_MSGS.length) return
    const t = setTimeout(() => {
      setVisibleMsgs(p => [...p, SYSTEM_MSGS[msgIdx]])
      setProgress(Math.round(((msgIdx + 1) / SYSTEM_MSGS.length) * 100))
      setMsgIdx(i => i + 1)
    }, msgIdx === 0 ? 160 : 490)
    return () => clearTimeout(t)
  }, [phase, msgIdx])

  // ── AI assistant typewriter ─────────────────────────────────────────────────
  const AI_FULL = "Hello 👋  I'm SoftClinch AI. How would you like to connect today?"
  useEffect(() => {
    if (!showMain) return
    let i = 0
    const t = setInterval(() => {
      i++; setAiText(AI_FULL.slice(0, i))
      if (i >= AI_FULL.length) { clearInterval(t); setAiDone(true) }
    }, 44)
    return () => clearInterval(t)
  }, [showMain])

  // ── Custom cursor + trail loop (single RAF, always running) ─────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY }
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Mouse spotlight
      if (spotlightRef.current) {
        spotlightRef.current.style.background =
          `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(37,99,235,0.09) 0%, transparent 65%)`
      }

      // Parallax depth on aurora layer
      if (parallaxRef.current) {
        const px = (e.clientX / window.innerWidth  - 0.5) * 22
        const py = (e.clientY / window.innerHeight - 0.5) * 14
        parallaxRef.current.style.transform = `translate(${px}px, ${py}px) scale(1.05)`
      }

      // Cursor trail particles (only in main interface)
      if (showMainRef.current) {
        for (let i = 0; i < 2; i++) {
          trailPts.current.push({
            x:     e.clientX + (Math.random() - 0.5) * 4,
            y:     e.clientY + (Math.random() - 0.5) * 4,
            vx:    (Math.random() - 0.5) * 2.2,
            vy:    (Math.random() - 0.5) * 1.8 - 0.4,
            life:  1,
            color: Math.random() > 0.5 ? '#2563EB' : '#00E5FF',
          })
        }
        if (trailPts.current.length > 100) trailPts.current = trailPts.current.slice(-100)
      }
    }

    window.addEventListener('mousemove', onMove)

    const loop = () => {
      // Smoothly interpolate cursor ring
      const t = cursorTarget.current, r = cursorRingCur.current
      r.x += (t.x - r.x) * 0.16
      r.y += (t.y - r.y) * 0.16

      const dot  = cursorDotRef.current
      const ring = cursorRingRef.current
      if (dot)  dot.style.transform  = `translate(${t.x - 3}px, ${t.y - 3}px)`
      if (ring) ring.style.transform = `translate(${r.x - 18}px, ${r.y - 18}px)`

      // Trail canvas draw
      const canvas = trailCanvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')!
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (const p of trailPts.current) {
          p.x += p.vx; p.y += p.vy; p.vy += 0.045; p.life -= 0.058
          if (p.life > 0) {
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.life * 2.5, 0, Math.PI * 2)
            const alpha = Math.floor(p.life * 190).toString(16).padStart(2, '0')
            ctx.fillStyle = p.color + alpha
            ctx.fill()
          }
        }
        trailPts.current = trailPts.current.filter(p => p.life > 0)
      }

      cursorRAF.current = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(cursorRAF.current)
    }
  }, [])

  // ── Trail canvas resize ─────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = trailCanvasRef.current
    if (!canvas) return
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // ── Neural network canvas ───────────────────────────────────────────────────
  useEffect(() => {
    if (!showMain) return
    const canvas = neuralCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    type Pt = { x: number; y: number; vx: number; vy: number; r: number; hue: number; pulse: number }
    const pts: Pt[] = Array.from({ length: 90 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.48,
      vy:    (Math.random() - 0.5) * 0.48,
      r:     Math.random() * 1.7 + 0.4,
      hue:   Math.random() > 0.55 ? 217 : 195,
      pulse: Math.random() * Math.PI * 2,
    }))

    let thunderFrames = 0
    const nextThunder = () => Math.floor((30 + Math.random() * 12) * 60)
    let thunderAt = nextThunder()

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x, my = mouseRef.current.y

      for (const p of pts) {
        const dx = mx - p.x, dy = my - p.y
        const d2 = dx * dx + dy * dy
        if (d2 < 170 * 170 && d2 > 0) {
          p.vx += dx * 0.00007; p.vy += dy * 0.00007
        }
        p.x += p.vx; p.y += p.vy; p.pulse += 0.018

        const spd = Math.hypot(p.vx, p.vy)
        if (spd > 1.2) { p.vx *= 1.2 / spd; p.vy *= 1.2 / spd }

        if (p.x < -10) p.x = canvas.width + 10
        else if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        else if (p.y > canvas.height + 10) p.y = -10
      }

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 125) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `hsla(217,90%,65%,${(1 - d / 125) * 0.23})`
            ctx.lineWidth = 0.55
            ctx.stroke()
          }
        }
      }

      // Dots with animated pulse glow
      for (const p of pts) {
        const pr = p.r * (1 + Math.sin(p.pulse) * 0.18)
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pr * 4)
        grd.addColorStop(0, `hsla(${p.hue},100%,76%,0.88)`)
        grd.addColorStop(1, `hsla(${p.hue},100%,65%,0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, pr * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      }

      // Subtle thunder glow ~every 35s
      thunderFrames++
      if (thunderFrames >= thunderAt) {
        ctx.fillStyle = 'rgba(0,229,255,0.032)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        thunderFrames = 0; thunderAt = nextThunder()
      }

      neuralRAF.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(neuralRAF.current)
      window.removeEventListener('resize', resize)
    }
  }, [showMain])

  // ── Card 3D tilt ────────────────────────────────────────────────────────────
  const handleCardMove = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const rx = ((e.clientY - rect.top)  / rect.height - 0.5) * -18
    const ry = ((e.clientX - rect.left) / rect.width  - 0.5) *  18
    setCardTilts(p => ({ ...p, [id]: { rx, ry } }))
  }

  const handleCardLeave = (id: string) => {
    setActiveCard(null); setOnCard(false)
    setCardTilts(p => ({ ...p, [id]: { rx: 0, ry: 0 } }))
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, overflowY: 'auto', background: '#020617', fontFamily: "'Inter','SF Pro Display',system-ui,sans-serif" }}>

      {/* Top Close / Return button */}
      <button
        onClick={() => router.back()}
        aria-label="Back to website"
        title="Return to website"
        style={{
          position: 'fixed', top: '24px', right: '28px', zIndex: 100000,
          width: '46px', height: '46px', borderRadius: '50%',
          background: 'rgba(15,23,42,0.85)',
          border: '1px solid rgba(0,229,255,0.4)',
          color: '#00E5FF',
          fontSize: '20px', fontWeight: 'bold',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(0,229,255,0.2)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)'
          e.currentTarget.style.borderColor = '#00E5FF'
          e.currentTarget.style.background = 'rgba(37,99,235,0.4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
          e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'
          e.currentTarget.style.background = 'rgba(15,23,42,0.85)'
        }}
      >
        ✕
      </button>

      {/* ══ Custom cursor ══ */}
      {/* Dot — snaps exactly to mouse */}
      <div ref={cursorDotRef} style={{
        position: 'fixed', zIndex: 9999, top: 0, left: 0,
        width: '6px', height: '6px', borderRadius: '50%',
        background: '#00E5FF',
        boxShadow: '0 0 8px 2px #00E5FF',
        pointerEvents: 'none', willChange: 'transform',
      }} />
      {/* Ring — lags behind with lerp */}
      <div ref={cursorRingRef} style={{
        position: 'fixed', zIndex: 9998, top: 0, left: 0,
        width: '36px', height: '36px', borderRadius: '50%',
        border: onCard ? '1.5px solid rgba(0,229,255,0.9)' : '1px solid rgba(37,99,235,0.65)',
        boxShadow: onCard ? '0 0 14px rgba(0,229,255,0.45)' : 'none',
        transform: 'scale(1)',
        pointerEvents: 'none', willChange: 'transform',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }} />

      {/* ══ Cursor sparkle trail canvas ══ */}
      <canvas ref={trailCanvasRef} style={{ position: 'fixed', inset: 0, zIndex: 9997, pointerEvents: 'none' }} />

      {/* ══ Mouse spotlight ══ */}
      <div ref={spotlightRef} style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }} />

      {/* ═══════════════ CINEMATIC INTRO ═══════════════ */}
      {!introGone && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: '#020617',
          opacity: phase >= 6 ? 0 : 1,
          transition: 'opacity 1.4s ease',
          pointerEvents: phase >= 6 ? 'none' : 'auto',
        }}>

          {/* Phase 1 — electric spark */}
          {phase === 1 && (
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#00E5FF',
              boxShadow: '0 0 12px 8px #00E5FF, 0 0 48px 20px rgba(37,99,235,0.75)',
              animation: 'sparkBurst 0.65s ease-out forwards',
            }} />
          )}

          {/* Phase 2 — lightning bolt SVG */}
          {phase >= 2 && phase < 4 && (
            <svg viewBox="0 0 1440 900" preserveAspectRatio="none"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', animation: 'fadeOutLightning 0.85s ease-in forwards 0.95s' }}>
              <defs>
                <filter id="lg"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <filter id="lgh"><feGaussianBlur stdDeviation="11" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <polyline filter="url(#lgh)"
                points="0,450 155,435 298,205 448,605 598,185 718,462 808,84 938,394 1088,115 1238,414 1440,325"
                fill="none" stroke="#00E5FF" strokeWidth="2.5"
                strokeDasharray="3300" strokeDashoffset="3300"
                style={{ animation: 'drawLightning 0.44s ease-out forwards' }} />
              <polyline filter="url(#lg)" points="448,605 478,685 432,755" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="250" strokeDashoffset="250" style={{ animation: 'drawLightning 0.3s ease-out 0.13s forwards' }} />
              <polyline filter="url(#lg)" points="808,84  848,164 798,254" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="250" strokeDashoffset="250" style={{ animation: 'drawLightning 0.3s ease-out 0.19s forwards' }} />
              <polyline filter="url(#lg)" points="1088,115 1120,202 1058,294" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="250" strokeDashoffset="250" style={{ animation: 'drawLightning 0.3s ease-out 0.24s forwards' }} />
              <rect width="1440" height="900" fill="rgba(0,229,255,0.065)" style={{ animation: 'flashFade 0.5s ease-out forwards' }} />
            </svg>
          )}

          {/* Phase 3 — particles converging */}
          {phase >= 3 && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              {GATHER_PTS.map((p, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  left: `${p.left}%`, top: `${p.top}%`,
                  width: `${p.size}px`, height: `${p.size}px`,
                  borderRadius: '50%',
                  background: `hsl(${p.hue},100%,70%)`,
                  boxShadow: `0 0 7px hsl(${p.hue},100%,70%)`,
                  animation: `gatherPt 1.7s cubic-bezier(0.23,1,0.32,1) ${p.delay}s forwards`,
                  ['--tx' as string]: `${-p.tx}px`,
                  ['--ty' as string]: `${-p.ty}px`,
                }} />
              ))}
            </div>
          )}

          {/* Phase 4+ — Logo + system boot text */}
          {phase >= 4 && (
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px',
              padding: '0 32px', animation: 'fadeInUp 0.75s ease-out forwards',
            }}>
              {/* Logo with scan line */}
              <div style={{ position: 'relative', overflow: 'hidden', animation: 'logoReveal 0.8s ease-out forwards' }}>
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0,229,255,0.28) 50%, transparent 100%)',
                  animation: 'scanPass 1.9s ease-in-out',
                }} />
                <img src={logoSrc} alt="SoftClinch" style={{
                  height: '78px', width: 'auto', display: 'block',
                  filter: 'drop-shadow(0 0 14px rgba(37,99,235,0.75)) drop-shadow(0 0 28px rgba(0,229,255,0.4))',
                }} />
              </div>

              {/* System messages */}
              <div style={{ fontFamily: 'monospace', fontSize: '13px', lineHeight: '2', width: '340px', maxWidth: '88vw' }}>
                {visibleMsgs.map((msg, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    color: i === visibleMsgs.length - 1 && msgIdx < SYSTEM_MSGS.length ? '#00E5FF' : '#60a5fa',
                    animation: 'msgAppear 0.26s ease-out forwards',
                  }}>
                    <span style={{ color: '#2563EB', fontSize: '16px', flexShrink: 0 }}>›</span>
                    <span>{msg}</span>
                    {i === visibleMsgs.length - 1 && msgIdx < SYSTEM_MSGS.length
                      ? <span style={{ animation: 'blink 0.8s step-start infinite', color: '#00E5FF' }}>▌</span>
                      : <span style={{ color: '#22c55e', marginLeft: 'auto', fontSize: '12px' }}>✓</span>
                    }
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div style={{ width: '340px', maxWidth: '88vw', height: '2px', background: 'rgba(37,99,235,0.14)', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: '99px', width: `${progress}%`,
                  background: 'linear-gradient(90deg, #2563EB, #00E5FF)',
                  boxShadow: '0 0 10px #00E5FF',
                  transition: 'width 0.46s ease',
                }} />
              </div>

              {/* System online */}
              {phase >= 5 && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  color: '#22c55e', fontFamily: 'monospace', fontWeight: 700,
                  fontSize: '16px', letterSpacing: '0.12em',
                  animation: 'systemOnlineFade 0.5s ease-out forwards',
                }}>
                  <span>✓</span>
                  <span>SYSTEM ONLINE</span>
                  <span style={{
                    display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%',
                    background: '#22c55e', boxShadow: '0 0 10px #22c55e',
                    animation: 'pulseGlow 1.2s ease-in-out infinite',
                  }} />
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ═══════════════ MAIN INTERFACE ═══════════════ */}
      <div style={{ opacity: showMain ? 1 : 0, transition: 'opacity 1.3s ease', minHeight: '100vh' }}>

        {/* Neural network canvas — Layer 0 */}
        <canvas ref={neuralCanvasRef} style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0 }} />

        {/* Aurora mesh blobs — Layer 0, parallax */}
        <div ref={parallaxRef} style={{
          position: 'fixed', inset: '-6%', zIndex: 0, pointerEvents: 'none',
          transition: 'transform 0.18s ease-out',
        }}>
          <div style={{ position: 'absolute', top: '-8%',  left: '-12%', width: '58%', height: '58%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)', filter: 'blur(85px)', animation: 'blob1 24s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', top: '28%',  right: '-8%', width: '46%', height: '46%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)', filter: 'blur(95px)', animation: 'blob2 30s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '-8%', left: '22%', width: '52%', height: '42%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', filter: 'blur(75px)', animation: 'blob3 21s ease-in-out infinite reverse' }} />
          <div style={{ position: 'absolute', top: '42%',  left: '33%', width: '28%', height: '28%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 70%)', filter: 'blur(55px)', animation: 'blob4 15s ease-in-out infinite' }} />
        </div>

        {/* Digital grid — Layer 0 */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.038) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.038) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

        {/* Central depth fog — Layer 0 */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 75% 55% at 50% 30%, rgba(37,99,235,0.09) 0%, transparent 70%)',
        }} />

        {/* Animated SVG data streams — Layer 0 */}
        <svg ref={dataStreamSvgRef} style={{
          position: 'fixed', inset: 0, width: '100%', height: '100%',
          zIndex: 0, opacity: 0.12, pointerEvents: 'none', overflow: 'visible',
        }}>
          {[
            { d: 'M-50,200 Q200,150 400,250 T800,200 T1200,250 T1600,200', delay: '0s' },
            { d: 'M-50,600 Q300,550 500,650 T900,600 T1300,650 T1650,600', delay: '1.5s' },
            { d: 'M-50,400 Q250,350 450,450 T850,400 T1250,450 T1650,400', delay: '3s' },
          ].map((path, i) => (
            <path key={i} d={path.d} fill="none" stroke="rgba(37,99,235,0.6)" strokeWidth="0.8"
              strokeDasharray="30 15"
              style={{ animation: `streamFlow 5s linear ${path.delay} infinite` }} />
          ))}
        </svg>

        {/* ── Content ── */}
        <div style={{
          position: 'relative', zIndex: 2, minHeight: '100vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: '44px 16px 88px', gap: '28px',
        }}>

          {/* ─── AI CORE ─── */}
          <div
            style={{ position: 'relative', width: '290px', height: '290px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onMouseEnter={() => setLogoPulse(true)}
            onMouseLeave={() => setLogoPulse(false)}
          >
            {/* Orbit ring 1 */}
            <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(37,99,235,0.42)', animation: 'ring1 8s linear infinite' }}>
              <div style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', width: '7px', height: '7px', borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 9px 2px #2563EB' }} />
            </div>

            {/* Orbit ring 2 */}
            <div style={{ position: 'absolute', width: '244px', height: '244px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.22)', animation: 'ring2 13.5s linear infinite' }}>
              <div style={{ position: 'absolute', bottom: '-4px', left: '34%', width: '6px', height: '6px', borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 8px 2px #00E5FF' }} />
            </div>

            {/* Orbit ring 3 */}
            <div style={{ position: 'absolute', width: '286px', height: '286px', borderRadius: '50%', border: '1px solid rgba(56,189,248,0.13)', animation: 'ring3 19s linear infinite' }}>
              <div style={{ position: 'absolute', top: '24%', right: '-4px', width: '5px', height: '5px', borderRadius: '50%', background: '#38BDF8', boxShadow: '0 0 6px 2px #38BDF8' }} />
            </div>

            {/* Hover pulse rings */}
            {logoPulse && (
              <>
                <div style={{ position: 'absolute', width: '152px', height: '152px', borderRadius: '50%', border: '2px solid rgba(0,229,255,0.55)', animation: 'pulseRing 0.88s ease-out forwards', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', width: '152px', height: '152px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.3)',  animation: 'pulseRing 0.88s ease-out 0.22s forwards', pointerEvents: 'none' }} />
              </>
            )}

            {/* Logo core */}
            <div style={{
              position: 'relative', zIndex: 5,
              padding: '24px', borderRadius: '50%',
              background: 'rgba(2,6,23,0.88)',
              border: `1px solid ${logoPulse ? 'rgba(0,229,255,0.42)' : 'rgba(37,99,235,0.32)'}`,
              backdropFilter: 'blur(22px)',
              boxShadow: logoPulse
                ? '0 0 0 1px rgba(0,229,255,0.2), 0 0 65px rgba(37,99,235,0.38), 0 0 130px rgba(0,229,255,0.18)'
                : '0 0 0 1px rgba(37,99,235,0.08), 0 0 42px rgba(37,99,235,0.16), 0 0 85px rgba(0,229,255,0.08)',
              animation: 'floatCore 4.5s ease-in-out infinite',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            }}>
              <img src={logoSrc} alt="SoftClinch AI" style={{
                height: '68px', width: 'auto', display: 'block',
                filter: 'drop-shadow(0 0 8px rgba(37,99,235,0.48))',
              }} />
            </div>
          </div>

          {/* ─── Service rings ─── */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '560px' }}>
            {[
              { icon: '🚀', label: 'Digital Marketing', color: '#2563EB', rgb: '37,99,235' },
              { icon: '⚙️', label: 'AI & Custom Apps',  color: '#00E5FF', rgb: '0,229,255' },
              { icon: '☁️', label: 'SaaS & Automation', color: '#38BDF8', rgb: '56,189,248' },
            ].map(s => (
              <div key={s.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '7px 16px', borderRadius: '99px',
                background: `rgba(${s.rgb},0.08)`,
                border: `1px solid rgba(${s.rgb},0.28)`,
                color: s.color,
                fontSize: '12px', fontFamily: 'monospace', fontWeight: 600, letterSpacing: '0.03em',
              }}>
                <span style={{ fontSize: '14px' }}>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* ─── AI assistant panel ─── */}
          <div style={{
            width: '100%', maxWidth: '520px',
            background: 'rgba(37,99,235,0.055)',
            border: '1px solid rgba(37,99,235,0.22)',
            borderRadius: '18px',
            backdropFilter: 'blur(24px)',
            padding: '20px 22px',
            boxShadow: '0 0 50px rgba(37,99,235,0.07)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
              {/* Avatar */}
              <div style={{
                flexShrink: 0, width: '38px', height: '38px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #1d4ed8, #00E5FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 800, color: '#fff',
                boxShadow: '0 0 16px rgba(37,99,235,0.55)',
              }}>AI</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px' }}>
                  <span style={{
                    fontFamily: 'monospace', fontSize: '11px', fontWeight: 700,
                    letterSpacing: '0.05em',
                    background: 'linear-gradient(90deg, #38BDF8, #00E5FF)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>SoftClinch AI</span>
                  <span style={{
                    display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%',
                    background: '#22c55e', boxShadow: '0 0 8px #22c55e',
                    animation: 'pulseGlow 1.8s ease-in-out infinite',
                  }} />
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#22c55e' }}>Online</span>
                </div>
                <p style={{ margin: 0, color: 'rgba(248,250,252,0.88)', fontSize: '14px', lineHeight: '1.65' }}>
                  {aiText}
                  {!aiDone && <span style={{ animation: 'blink 0.75s step-start infinite', color: '#00E5FF' }}>▌</span>}
                </p>
              </div>
            </div>
          </div>

          {/* ─── Connect modules header ─── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ display: 'block', height: '1px', width: '44px', background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4))' }} />
            <span style={{
              fontFamily: 'monospace', fontSize: '10px',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #2563EB 0%, #00E5FF 40%, #38BDF8 60%, #2563EB 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              animation: 'textShimmer 3s linear infinite',
            }}>Connect Modules</span>
            <span style={{ display: 'block', height: '1px', width: '44px', background: 'linear-gradient(90deg, rgba(37,99,235,0.4), transparent)' }} />
          </div>

          {/* ─── Connect cards 3×3 grid ─── */}
          <div style={{ width: '100%', maxWidth: '560px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {CARDS.map(card => {
                const active = activeCard === card.id
                const tilt   = cardTilts[card.id] ?? { rx: 0, ry: 0 }
                const rgb    = hexToRgb(card.color)
                return (
                  <a
                    key={card.id}
                    href={card.href}
                    onMouseEnter={() => { setActiveCard(card.id); setOnCard(true) }}
                    onMouseLeave={() => handleCardLeave(card.id)}
                    onMouseMove={e => handleCardMove(e, card.id)}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px',
                      padding: '18px 12px 16px',
                      background: active ? `rgba(${rgb},0.13)` : 'rgba(255,255,255,0.022)',
                      border: `1px solid ${active ? card.color + '55' : 'rgba(37,99,235,0.13)'}`,
                      borderRadius: '14px',
                      backdropFilter: 'blur(14px)',
                      textDecoration: 'none',
                      /* 3D tilt + lift */
                      transform: `perspective(700px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${active ? -4 : 0}px) scale(${active ? 1.02 : 1})`,
                      transition: active
                        ? 'background 0.18s, border-color 0.18s, box-shadow 0.18s'
                        : 'all 0.55s cubic-bezier(0.34,1.56,0.64,1)',
                      boxShadow: active
                        ? `0 14px 40px rgba(${rgb},0.25), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 0 1px rgba(${rgb},0.15)`
                        : 'none',
                      willChange: 'transform',
                    }}
                  >
                    {/* Icon with glow on hover */}
                    <span style={{
                      fontSize: '26px', lineHeight: '1',
                      filter: active ? `drop-shadow(0 0 10px ${card.color})` : 'none',
                      transition: 'filter 0.25s ease',
                      display: 'block',
                    }}>{card.icon}</span>

                    <span style={{ color: 'rgba(248,250,252,0.9)', fontSize: '12px', fontWeight: 600, textAlign: 'center', lineHeight: '1.25' }}>
                      {card.label}
                    </span>

                    <span style={{
                      color: active ? 'rgba(96,165,250,0.78)' : 'rgba(96,165,250,0.44)',
                      fontSize: '10px', fontFamily: 'monospace', textAlign: 'center',
                      transition: 'color 0.2s',
                    }}>
                      {card.sub}
                    </span>

                    {/* Active pulse dot */}
                    {active && (
                      <div style={{
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: card.color, boxShadow: `0 0 9px ${card.color}`,
                        animation: 'pulseGlow 0.65s ease-in-out infinite',
                        marginTop: '2px',
                      }} />
                    )}
                  </a>
                )
              })}
            </div>
          </div>

          {/* ─── Footer ─── */}
          <div style={{
            textAlign: 'center', fontFamily: 'monospace', fontSize: '11px',
            color: 'rgba(37,99,235,0.35)', letterSpacing: '0.04em', paddingTop: '8px',
          }}>
            <span style={{ color: 'rgba(0,229,255,0.35)' }}>SoftClinch Intelligence Network</span>
            <span style={{ margin: '0 10px', opacity: 0.4 }}>·</span>
            <span>We Ensure What We Assure</span>
          </div>
        </div>
      </div>
    </div>
  )
}
