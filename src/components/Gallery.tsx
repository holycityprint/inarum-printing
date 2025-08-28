import Image from 'next/image'
import { GALLERY, type GalleryItem } from '@/lib/gallery'
import ScrollReveal from './ScrollReveal'

export default function Gallery() {
  const images: ReadonlyArray<GalleryItem> = GALLERY
  return (
    <section className="container-wide py-12">
      <ScrollReveal variant="up">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">Galeri Pekerjaan</h2>
        <p className="mt-2 text-black/70">Beberapa hasil produksi kami.</p>
      </ScrollReveal>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <ScrollReveal key={img.src} variant="up" delay={i * 60}>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black/5 border border-black/10">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw" className="object-cover" />
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}