import { MARQUEE_ITEMS } from '@/lib/constants'

const MarqueeSection = () => {
  // Duplicate items to create seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section className="bg-[var(--navy)] py-5 overflow-hidden">
      <div className="flex">
        <div
          className="animate-marquee flex items-center gap-0 whitespace-nowrap"
          aria-hidden="false"
        >
          {items.map((item, index) => (
            <span key={index} className="flex items-center">
              <span className="text-white font-[var(--font-jakarta)] font-semibold text-sm uppercase tracking-widest" style={{ marginLeft: '64px', marginRight: '64px' }}>
                {item}
              </span>
              <span className="text-[var(--yellow)] text-xl font-bold select-none mx-8">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
