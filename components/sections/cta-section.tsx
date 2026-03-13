'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { CTA_SECTION, BRAND } from '@/lib/constants'

const CtaSection = () => {
  return (
    <section
      id="contacto"
      className="relative py-32 px-8 overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Decorative radial glow — subtle depth, no text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 500px at 50% 50%, rgba(37, 99, 235, 0.08), transparent)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center"
        style={{ padding: '48px 48px' }}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#F5C518' }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F5C518' }} />
          Disponible para nuevos proyectos
        </span>

        {/* Headline */}
        <h2
          className="font-[var(--font-jakarta)] font-black text-5xl md:text-6xl uppercase tracking-tight leading-tight"
          style={{ whiteSpace: 'pre-line', color: '#FFFFFF', marginTop: '32px' }}
        >
          {CTA_SECTION.headline}
        </h2>

        {/* Subheadline */}
        <p className="text-gray-400 max-w-md mx-auto leading-relaxed text-base" style={{ marginTop: '32px', marginBottom: '32px' }}>
          {CTA_SECTION.subheadline}
        </p>

        {/* CTA Button */}
        <a
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full font-bold text-lg mt-10 hover:brightness-110 transition-all duration-200"
          style={{
            backgroundColor: '#F5C518',
            color: '#0A1628',
            padding: '20px 48px',
          }}
        >
          <MessageCircle size={22} />
          Quiero mi web
        </a>

        {/* Subtext */}
        <p className="text-gray-500 text-sm" style={{ marginTop: '24px' }}>
          {CTA_SECTION.ctaSubtext}
        </p>
      </motion.div>
    </section>
  )
}

export default CtaSection
