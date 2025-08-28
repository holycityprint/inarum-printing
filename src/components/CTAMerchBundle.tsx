'use client'

import { SITE } from '@/lib/config'
import ScrollReveal from './ScrollReveal'
import { waLink } from '@/lib/wa'

export default function CTAMerchBundle() {
  const items = [
    { t: 'Topi Custom', img: '/gallery/svc-topi.webp', emoji: '🧢' },
    { t: 'Lanyard Custom', img: '/gallery/svc-lanyard.webp', emoji: '🔗' },
    { t: 'Totebag Custom', img: '/gallery/svc-totebag.webp', emoji: '🛍️' }
  ]
  const href = waLink({
    text: `Halo ${SITE.name}, saya tertarik paket Topi + Lanyard + Totebag. Mohon rekomendasi bahan & pricelist.`
  })

  return (
    <section className="container-bleed">
      <ScrollReveal variant="up">
        <div className="container-wide my-12 rounded-xl border border-brand-100 bg-brand-50/60 p-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">
                Paket Merch Hemat: Topi + Lanyard + Totebag
              </h2>
              <ul className="mt-3 bullets text-sm text-black/70">
                <li>Ideal untuk event, kantor, komunitas, dan promosi brand.</li>
                <li>Pilihan bahan dan teknik cetak sesuai kebutuhan.</li>
                <li>Diskon paket, lead time cepat, hasil rapi.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={href} target="_blank" rel="noopener" className="btn btn-primary">
                  Minta Pricelist
                </a>
                <a
                  href={waLink({ text: `Halo ${SITE.name}, saya ingin penawaran paket Merch (Topi/Lanyard/Totebag).` })}
                  target="_blank" rel="noopener"
                  className="btn btn-outline"
                >
                  Buat Penawaran
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full lg:w-[480px]">
              {items.map((it) => (
                <div key={it.t} className="card overflow-hidden">
                  <div className="relative aspect-square bg-black/5 border-b border-black/5">
                    <div className="absolute inset-0 grid place-items-center text-3xl select-none">
                      {it.emoji}
                    </div>
                    <img
                      src={it.img}
                      alt={it.t}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />
                  </div>
                  <div className="p-2 text-center text-xs font-medium text-brand-800">{it.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}