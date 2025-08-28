import { SITE } from './config'

export const GALLERY = [
  { src: '/gallery/hero-printer.webp', alt: `Printer produksi — ${SITE.name}` },
  { src: '/gallery/hero-merch.webp', alt: `Merch & souvenir — ${SITE.name}` }
] as const

export type GalleryItem = (typeof GALLERY)[number]