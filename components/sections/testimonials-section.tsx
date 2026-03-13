'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/lib/constants'

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="section-label justify-center mb-3">· {TESTIMONIALS_SECTION.label}</p>
          <h2 className="font-[var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl text-[var(--navy)] uppercase tracking-tight mt-6" style={{ whiteSpace: 'pre-line', marginBottom: '40px' }}>
            {TESTIMONIALS_SECTION.headline}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col min-h-[260px]"
            >
              <div className="flex flex-col gap-6 flex-1" style={{ padding: '36px' }}>
                {/* Quote icon */}
                <Quote size={32} className="text-[var(--blue)]/25 shrink-0" />

                {/* Comment */}
                <p className="italic text-[var(--text-primary)] leading-relaxed text-base flex-1 mb-6">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-base">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-[var(--font-jakarta)] font-semibold text-[var(--navy)] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
