import { SITE } from '@/lib/config'
import ScrollReveal from './ScrollReveal'
import ServiceCard from './ServiceCard'

type Service = (typeof SITE)['services'][number]
const services: ReadonlyArray<Service> = SITE.services

export default function Services() {
  return (
    <section className="container-wide py-12">
      <ScrollReveal variant="up">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">Layanan</h2>
        <p className="mt-2 text-black/70">Pilih solusi cetak sesuai kebutuhanmu.</p>
      </ScrollReveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const image =
            (typeof s === 'object' && s !== null && 'image' in s
              ? (s as { image?: string }).image
              : undefined) || undefined

          return (
            <ScrollReveal key={s.title} variant="up" delay={i * 80}>
              <ServiceCard title={s.title} desc={s.desc} icon={s.icon} image={image} />
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}