import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CTAMerchBundle from '@/components/CTAMerchBundle'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="services"><Services /></section>

        {/* CTA khusus paket Merch */}
        <CTAMerchBundle />

        <section id="gallery"><Gallery /></section>
        <About />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}