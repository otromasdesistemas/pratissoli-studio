import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/sections/hero-section'
import MarqueeSection from '@/components/sections/marquee-section'
import AboutSection from '@/components/sections/about-section'
import ServicesSection from '@/components/sections/services-section'
import PortfolioSection from '@/components/sections/portfolio-section'
import ProcessSection from '@/components/sections/process-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import CtaSection from '@/components/sections/cta-section'
import WhatsAppButton from '@/components/whatsapp-button'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8 md:gap-16">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default HomePage
