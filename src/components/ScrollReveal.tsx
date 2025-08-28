'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Variant = 'up' | 'down' | 'left' | 'right' | 'fade'

type Props = {
  children: ReactNode
  className?: string
  variant?: Variant         // arah animasi (default: 'up')
  delay?: number            // jeda mulai (ms)
  once?: boolean            // true: animasi sekali; false: bisa berulang saat keluar/masuk viewport
  threshold?: number        // 0..1; seberapa banyak elemen terlihat baru dianggap "in-view"
  rootMargin?: string       // margin untuk observer
}

export default function ScrollReveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  once = false,             // default: berulang (sesuai permintaan)
  threshold = 0.25,
  rootMargin = '0px'
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined') return

    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setInView(true), Math.max(0, delay))
          if (once) io.disconnect()
        } else {
          if (!once) setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    io.observe(el)

    return () => {
      io.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay, once, threshold, rootMargin])

  const cls = `reveal reveal-${variant} ${inView ? 'in-view' : ''} ${className}`

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  )
}