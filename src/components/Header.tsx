import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/config'
import { waLink } from '@/lib/wa'
import CategoryPills from './CategoryPills'

const categories = [
  'Banner', 'Sablon Kaos', 'Stiker', 'Merchandise', 'Kemasan',
  'Topi', 'Lanyard', 'Totebag', 'Digital Printing', 'Offset',
  'Undangan', 'Kartu Nama', 'Brosur'
]

export default function Header() {
  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 text-white text-sm">
        <div className="container-wide flex items-center justify-between py-2 gap-3">
          <div className="font-medium">{SITE.name}</div>
          <div className="flex items-center gap-3">
            {SITE.phone && (
              <a href={`tel:${SITE.phone}`} className="hidden sm:inline hover:underline">
                {SITE.phone}
              </a>
            )}
            <a
              href={waLink({ text: `Halo ${SITE.name}, saya ingin bertanya.` })}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-300"></span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bar utama */}
      <div className="bg-white border-b border-black/5">
        <div className="container-wide flex items-center gap-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/gallery/Logo-inarum.png"
              alt={`${SITE.name} logo`}
              width={40}
              height={40}
              className="rounded-md border border-black/10 bg-white"
            />
            <span className="text-lg sm:text-xl font-semibold text-brand-800">{SITE.name}</span>
          </Link>

          {/* Search */}
          <div className="ml-auto flex-1 max-w-xl">
            <label className="relative block">
              <input
                type="search"
                placeholder="Cari produk/layanan..."
                className="w-full rounded-md border border-black/10 bg-white px-3 py-2 pl-9 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/50" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.3-4.3m1.1-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </label>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="relative rounded-md p-2 hover:bg-black/[0.03]" aria-label="Keranjang">
              <svg className="h-5 w-5 text-black/70" viewBox="0 0 24 24" fill="none">
                <path d="M6 6h15l-2 9H8L6 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6 5 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] text-white px-1">0</span>
            </button>
            <Link href="#" className="hidden sm:inline btn btn-outline">Login</Link>
            <Link href="#" className="btn btn-primary">Daftar</Link>
          </div>
        </div>
      </div>

      {/* Bar kategori (pakai pill interaktif) */}
      <nav className="bg-brand-50/80 border-b border-brand-100 backdrop-blur">
        <CategoryPills items={categories} />
      </nav>
    </header>
  )
}