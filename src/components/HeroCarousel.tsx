'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Item = { src: string; alt?: string }

export default function HeroCarousel({ items, interval = 4000 }: { items: Item[]; interval?: number }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval, paused])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
    >
      {items.map((it, i) => (
        <div key={it.src} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={it.src} alt={it.alt ?? ''} fill priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      ))}

      <button aria-label="Sebelumnya" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow">‹</button>
      <button aria-label="Berikutnya" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow">›</button>

      <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
        {items.map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-brand-600' : 'w-2.5 bg-white/80 hover:bg-white'}`} />
        ))}
      </div>
    </div>
  )
}