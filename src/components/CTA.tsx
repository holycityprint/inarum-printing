import { SITE } from '@/lib/config'
import ScrollReveal from './ScrollReveal'

export default function CTA() {
  return (
    <section className="container-bleed">
      <ScrollReveal variant="up">
        <div className="container-wide my-12 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-10 text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold">Siap mulai cetak?</h2>
          <p className="mt-2 text-white/90">Konsultasi gratis. Dapatkan penawaran terbaik hari ini.</p>
          <a
            href={`https://wa.me/${SITE.wa}?text=${encodeURIComponent('Halo, saya ingin tanya soal layanan cetak.')}`}
            target="_blank" rel="noopener" className="mt-5 inline-flex btn bg-white text-brand-800"
          >
            Chat WhatsApp
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}