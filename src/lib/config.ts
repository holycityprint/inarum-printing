export const SITE = {
  name: 'INARUM PRINTING',
  description: 'Jasa percetakan Bandung: sablon, print, merch & kemasan. Cepat, rapi, harga bersahabat.',
  url: 'https://example.com', // ganti ke domain valid (harus http/https)
  waRaw: '081222243253',
  wa: '6281222243253',
  phone: '(022) 2536257',
  email: 'halo@inarum.co.id',
  address: 'Jl. Contoh No. 123, Bandung, Jawa Barat 40123',
  hours: 'Senin–Sabtu 09.00–17.00',
  social: {
    instagram: '',
    tiktok: '',
    facebook: ''
  },
  services: [
    { title: 'Cetak Banner & Spanduk', desc: 'Bahan tahan cuaca, ukuran custom, finishing rapi.', icon: '🖨️' },
    { title: 'Sablon Kaos', desc: 'Plastisol, DTG, DTF, minimal order fleksibel.', icon: '👕' },
    { title: 'Merchandise', desc: 'Mug, tumbler, totebag, pin, dll.', icon: '🎁' },
    { title: 'Stiker & Label', desc: 'Vinyl, transparan, holo, die-cut presisi.', icon: '🏷️' },
    { title: 'Kemasan', desc: 'Box, sleeve, paper bag custom.', icon: '📦' },
    { title: 'Kartu Nama & Brosur', desc: 'Cetak offset/digital, laminasi doff/glossy.', icon: '💳' },

    // Tambahan baru + thumbnail
    { title: 'Topi Custom', desc: 'Snapback, trucker, bucket. Bordir/patch DTF, qty fleksibel.', icon: '🧢', image: '/gallery/svc-topi.webp' },
    { title: 'Lanyard Custom', desc: 'Polyester/satin, cetak 1/2 sisi, pilihan hook (lobster, oval, safety).', icon: '🔗', image: '/gallery/svc-lanyard.webp' },
    { title: 'Totebag Custom', desc: 'Canvas/blacu/drill. Sablon/DTF, ukuran & warna custom.', icon: '🛍️', image: '/gallery/svc-totebag.webp' }
  ]
} as const

export type SiteConfig = typeof SITE