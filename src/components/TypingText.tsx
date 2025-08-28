'use client'

import { useEffect, useRef, useState } from 'react'

interface TypingTextProps {
  text: string
  speed?: number       // ms per karakter (lebih kecil = lebih cepat)
  startDelay?: number  // jeda sebelum mulai (ms)
  once?: boolean       // animasi sekali saja (true = default)
  className?: string
  caret?: boolean      // tampilkan kursor berkedip
}

export default function TypingText({
  text,
  speed = 28,
  startDelay = 0,
  once = true,
  className,
  caret = true
}: TypingTextProps) {
  // Mulai dengan teks penuh agar cocok dengan hasil SSR (hindari hydration mismatch)
  const [displayed, setDisplayed] = useState<string>(text)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined') return

    let intervalId: ReturnType<typeof setInterval> | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const prefersReduced =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const start = () => {
      if (prefersReduced) {
        setDisplayed(text)
        setHasAnimated(true)
        return
      }
      setDisplayed('') // reset sebelum mengetik
      let i = 0
      intervalId = setInterval(() => {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId)
          setHasAnimated(true)
        }
      }, Math.max(10, speed))
    }

    // Fallback jika IntersectionObserver tidak tersedia
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      timeoutId = setTimeout(start, startDelay)
      return () => {
        if (intervalId) clearInterval(intervalId)
        if (timeoutId) clearTimeout(timeoutId)
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if ((!once || !hasAnimated) && !startedRef.current) {
            startedRef.current = true
            timeoutId = setTimeout(start, startDelay)
          }
        } else {
          if (!once) {
            startedRef.current = false
            setDisplayed(text) // saat keluar viewport, tampilkan full text lagi
          }
        }
      },
      { threshold: 0.35 }
    )

    io.observe(el)

    return () => {
      io.disconnect()
      if (intervalId) clearInterval(intervalId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text, speed, startDelay, once, hasAnimated])

  const showCaret = caret && displayed.length < text.length

  return (
    <span
      ref={ref}
      suppressHydrationWarning
      className={`${className ?? ''} ${showCaret ? 'typing-caret' : ''}`}
      aria-label={text}
    >
      {displayed}
    </span>
  )
}