'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Scale, Building2, Calculator, Activity } from 'lucide-react'
import { PORTFOLIO_ITEMS, PORTFOLIO_SECTION } from '@/lib/constants'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Scale,
  Building2,
  Calculator,
  Activity,
}

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
                  {isLive && item.previewImage ? (
                    <>
                      <Image
                        src={item.previewImage}
                        alt={`Demo ${item.niche}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                    </>
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
