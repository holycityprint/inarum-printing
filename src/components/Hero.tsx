import Link from 'next/link'
import { SITE } from '@/lib/config'
import HeroCarousel from './HeroCarousel'
import TypingText from './TypingText'
import ScrollReveal from './ScrollReveal'

const slides = [
  { src: '/gallery/hero-printer.webp', alt: `Printer produksi — ${SITE.name}` },
  { src: '/gallery/hero-merch.webp', alt: `Merch & souvenir — ${SITE.name}` }
]

export default function Hero() {
  return (
    // Jarak super rapat dari header (≈6px)
    <section className="container-bleed bg-gradient-to-br from-brand-50 to-white pt-[6px]">
      <div className="container-wide grid md:grid-cols-2 items-center gap-8 pb-8 md:pb-12">
        <ScrollReveal variant="up">
          <span className="badge mb-2">Percetakan Bandung</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest text-brand-900 text-balance">
            <TypingText text="Cetak Custom Satuan di Bandung" speed={22} startDelay={0} once />
          </h1>
          <p className="mt-4 text-black/70 measure">
            Mudah, cepat, hasil rapi. Dari banner, kaos, stiker, hingga kemasan—semua bisa custom.
            Kualitas terjamin, harga bersahabat.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${SITE.wa}?text=${encodeURIComponent(`Halo ${SITE.name}, saya ingin pesan.`)}`}
              target="_blank" rel="noopener" className="btn btn-primary"
            >
              Pesan via WhatsApp
            </a>
            <Link href="#gallery" className="btn btn-outline">Lihat Galeri</Link>
          </div>
        </ScrollReveal>

        <div className="relative">
          <HeroCarousel items={slides} interval={4000} />
        </div>
      </div>
    </section>
  )
}