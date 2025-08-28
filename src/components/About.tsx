import { SITE } from '@/lib/config'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section className="container-wide py-12">
      <ScrollReveal variant="up">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">Tentang {SITE.name}</h2>
        <p className="mt-2 text-black/70 measure">
          Kami membantu UMKM dan brand mengeksekusi kebutuhan cetak—dari konsep hingga finishing.
          Tim berpengalaman, lead time cepat, hasil konsisten.
        </p>
      </ScrollReveal>
    </section>
  )
}