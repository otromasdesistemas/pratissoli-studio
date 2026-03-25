'use client'

import { motion } from 'framer-motion'
import { Scale, Building2, Calculator, Activity } from 'lucide-react'
import { PORTFOLIO_ITEMS, PORTFOLIO_SECTION } from '@/lib/constants'

// ─── CSS Mini Previews ────────────────────────────────────────────────────────

const AbogadosPreview = () => (
  <div
    className="relative w-full h-full overflow-hidden flex flex-col"
    style={{ background: '#0D1B2A' }}
  >
    {/* Simulated navbar bar */}
    <div style={{ height: '8px', background: 'rgba(201,168,76,0.3)', flexShrink: 0 }} />
    {/* Content */}
    <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
      <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
      <span
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          color: '#C9A84C',
          letterSpacing: '0.2em',
          fontWeight: 400,
        }}
      >
        VOLPE
      </span>
      <div className="flex flex-col items-center gap-1.5 mt-1">
        <div style={{ width: '70%', height: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px' }} />
        <div style={{ width: '50%', height: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px' }} />
        <div style={{ width: '60%', height: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px' }} />
      </div>
      <div
        style={{
          marginTop: '8px',
          width: '80px',
          height: '20px',
          background: 'rgba(201,168,76,0.8)',
          borderRadius: '10px',
          transition: 'transform 0.3s ease',
        }}
        className="group-hover:scale-105"
      />
    </div>
  </div>
)

const ArquitectosPreview = () => (
  <div
    className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center gap-2"
    style={{ background: '#09080A' }}
  >
    {/* Watermark */}
    <span
      className="absolute bottom-2 right-2 select-none font-bold"
      style={{ fontSize: '32px', color: 'rgba(201,167,108,0.08)', lineHeight: 1 }}
    >
      ARQ
    </span>
    <span
      style={{
        fontSize: '10px',
        color: 'rgba(201,167,108,0.6)',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
      }}
    >
      Valentín Bravo
    </span>
    <div style={{ width: '60%', height: '1px', background: '#C9A76C' }} />
    {/* 2×2 project grid */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', width: '70%' }}>
      {[
        'linear-gradient(135deg,#1a1a1a,#2d2d2d)',
        'linear-gradient(135deg,#222,#333)',
        'linear-gradient(135deg,#1c1c1c,#2a2a2a)',
        'linear-gradient(135deg,#252525,#363636)',
      ].map((bg, i) => (
        <div
          key={i}
          className="group-hover:brightness-150 transition-all duration-300"
          style={{ height: '28px', borderRadius: '4px', background: bg, transitionDelay: `${i * 50}ms` }}
        />
      ))}
    </div>
  </div>
)

const ContadoresPreview = () => (
  <div
    className="w-full h-full flex items-center justify-center px-4"
    style={{ background: '#F7F6F3' }}
  >
    <div
      className="group-hover:-translate-y-1 transition-transform duration-300 w-full"
      style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        borderBottom: '3px solid #2563EB',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 mb-2">
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB', flexShrink: 0 }} />
        <span style={{ fontSize: '9px', color: '#6B7280', letterSpacing: '0.05em' }}>Estado · Marzo 2026</span>
      </div>
      {/* Rows */}
      {[
        { w: '65%', check: false },
        { w: '50%', check: false },
        { w: '70%', check: true },
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-1.5 mb-1.5">
          <div
            style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#2563EB', opacity: 0.7, flexShrink: 0 }}
          />
          <div style={{ height: '6px', width: row.w, background: '#E5E7EB', borderRadius: '3px' }} />
          {row.check && (
            <span style={{ fontSize: '8px', color: '#22C55E', marginLeft: 'auto', fontWeight: 700 }}>✓</span>
          )}
        </div>
      ))}
      {/* Footer */}
      <div
        className="flex items-center justify-between mt-2 pt-1"
        style={{ borderTop: '1px solid #F3F4F6' }}
      >
        <span style={{ fontSize: '9px', color: '#1A1A2E', letterSpacing: '0.2em', fontWeight: 600 }}>MARCHETTI</span>
      </div>
    </div>
  </div>
)

const KinesiologosPreview = () => (
  <div
    className="relative w-full h-full overflow-hidden flex flex-col justify-center px-5 gap-2"
    style={{ background: '#0F1923' }}
  >
    {/* Watermark */}
    <span
      className="absolute select-none"
      style={{
        fontSize: '28px',
        fontWeight: 700,
        color: 'rgba(46,204,113,0.06)',
        top: '50%',
        left: '-10px',
        transform: 'translateY(-50%) rotate(-90deg)',
        whiteSpace: 'nowrap',
        letterSpacing: '0.1em',
      }}
    >
      MOVIMIENTO
    </span>
    {/* Badge */}
    <div
      className="self-start"
      style={{ background: 'rgba(46,204,113,0.15)', borderRadius: '99px', padding: '3px 10px' }}
    >
      <span style={{ fontSize: '10px', color: '#2ECC71', fontWeight: 500 }}>⚡ Turnos disponibles</span>
    </div>
    {/* Stat bars */}
    {[
      { label: 'Recuperación', fill: '85%' },
      { label: 'Satisfacción', fill: '70%' },
      { label: 'Disponibilidad', fill: '90%' },
    ].map((stat, i) => (
      <div key={i} className="flex flex-col gap-0.5">
        <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
          {stat.label}
        </span>
        <div
          style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: stat.fill }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.15 }}
            style={{ height: '100%', background: '#2ECC71', borderRadius: '2px' }}
          />
        </div>
      </div>
    ))}
    <span style={{ fontSize: '11px', color: '#2ECC71', letterSpacing: '0.15em', fontWeight: 600, marginTop: '4px' }}>
      FERREYRA
    </span>
  </div>
)

// ─── Maps ─────────────────────────────────────────────────────────────────────

const PREVIEW_MAP: Record<string, React.ComponentType> = {
  Abogados: AbogadosPreview,
  Arquitectos: ArquitectosPreview,
  Contadores: ContadoresPreview,
  Kinesiólogos: KinesiologosPreview,
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Scale,
  Building2,
  Calculator,
  Activity,
}

// ─── Section ──────────────────────────────────────────────────────────────────

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-[var(--blue)] font-semibold uppercase tracking-widest mb-3" style={{ fontSize: '16px' }}>
            {PORTFOLIO_SECTION.label}
          </p>
          <h2
            className="font-[var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl text-[var(--navy)] uppercase tracking-tight"
            style={{ whiteSpace: 'pre-line' }}
          >
            {PORTFOLIO_SECTION.headline}
          </h2>
          <p
            className="text-center max-w-2xl text-[var(--text-muted)] leading-relaxed"
            style={{ marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.3rem' }}
          >
            {PORTFOLIO_SECTION.subheadline}
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_ITEMS.map((item, index) => {
            const Icon = ICON_MAP[item.icon]
            const Preview = PREVIEW_MAP[item.niche]
            const isLive = item.status === 'live'
            const CardWrapper = isLive ? motion.a : motion.div
            const liveProps = isLive
              ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <CardWrapper
                key={item.niche}
                {...liveProps}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                className={`group bg-white rounded-2xl shadow-sm flex flex-col transition-all duration-300 ${
                  isLive ? 'hover:shadow-lg cursor-pointer hover:-translate-y-1' : ''
                }`}
              >
                {/* Preview area */}
                <div className="relative h-44 rounded-t-2xl overflow-hidden">
                  {Preview ? (
                    <Preview />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--navy)] to-[#1a2f55] flex items-center justify-center">
                      {Icon && (
                        <Icon
                          size={40}
                          className="text-white/20 group-hover:text-white/40 transition-colors duration-300"
                        />
                      )}
                    </div>
                  )}
                  {isLive && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                  )}
                </div>

                {/* Card body */}
                <div
                  className="flex flex-col gap-3 flex-1 min-h-[100px]"
                  style={{ padding: '20px 24px 24px 24px' }}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon size={16} className="text-[var(--blue)] shrink-0" />}
                    <h3 className="font-[var(--font-jakarta)] font-bold text-[var(--navy)] text-base">
                      {item.niche}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">{item.description}</p>

                  {isLive ? (
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold mt-auto pt-2 transition-colors duration-200 group-hover:text-[var(--blue)]"
                      style={{ color: '#6B8F71' }}
                    >
                      Así quedaría tu web →
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest mt-auto pt-2"
                      style={{ color: '#94A3B8' }}
                    >
                      Próximamente
                    </span>
                  )}
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
