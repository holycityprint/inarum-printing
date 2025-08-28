'use client'

import type React from 'react'
import { useState } from 'react'

type Props = {
  title: string
  desc: string
  icon: string
  image?: string
  className?: string
}

export default function ServiceCard({ title, desc, icon, image, className = '' }: Props) {
  const [selected, setSelected] = useState(false)

  const toggle = () => setSelected((v) => !v)
  const onKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      data-selected={selected ? 'true' : 'false'}
      onClick={toggle}
      onKeyDown={onKey}
      className={`card overflow-hidden interactive-card ${className}`}
    >
      {/* Thumbnail + fallback emoji */}
      <div className="relative aspect-[4/3] bg-black/5 border-b border-black/5 select-none">
        <div className="absolute inset-0 grid place-items-center text-4xl">{icon}</div>
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-brand-800">{title}</h3>
        <p className="mt-1 text-sm text-black/70">{desc}</p>
      </div>
    </article>
  )
}