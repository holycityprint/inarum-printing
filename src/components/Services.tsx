'use client'

import Image from 'next/image'
import { SITE } from '../lib/config'

// Fallback gambar berdasarkan judul
const FALLBACK_BY_TITLE: Record<string, string> = {
  'Cetak Banner & Spanduk': '/gallery/svc-banner.webp',
  'Sablon Kaos': '/gallery/svc-kaos.webp',
  'Merchandise': '/gallery/svc-merch.webp',
  'Stiker & Label': '/gallery/svc-stiker.webp',
  'Kemasan': '/gallery/svc-kemasan.webp',
  'Kartu Nama & Brosur': '/gallery/svc-kartunama.webp',
  'Topi Custom': '/gallery/svc-topi.webp',
  'Lanyard Custom': '/gallery/svc-lanyard.webp',
  'Totebag Custom': '/gallery/svc-totebag.webp',
}

const FALLBACK_BY_INDEX = [
  '/gallery/svc-banner.webp',
  '/gallery/svc-kaos.webp',
  '/gallery/svc-merch.webp',
  '/gallery/svc-stiker.webp',
  '/gallery/svc-kemasan.webp',
  '/gallery/svc-kartunama.webp',
  '/gallery/svc-topi.webp',
  '/gallery/svc-lanyard.webp',
  '/gallery/svc-totebag.webp',
]

function pickImage(title: string, explicit: unknown, idx: number) {
  const v = typeof explicit === 'string' ? explicit.trim() : ''
  if (v) return v
  return FALLBACK_BY_TITLE[title] || FALLBACK_BY_INDEX[idx] || ''
}

const Services = () => {
  const items = SITE.services.map((s, i) => ({
    ...s,
    image: pickImage((s as any).title, (s as any).image, i),
  }))

  return (
    <section id="layanan" className="container mx-auto py-12">
      <header className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Layanan</h2>
        <p className="text-muted-foreground mt-1">Pilih layanan cetak sesuai kebutuhanmu.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <article key={i} className="card p-0 overflow-hidden bg-white/70 dark:bg-neutral-900/50">
            <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={s.title}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span className="text-5xl" aria-hidden="true">{s.icon}</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services