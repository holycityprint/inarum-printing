export const SITE = {
  name: 'INARUM PRINTING',
  description:
    'Jasa percetakan Bandung: sablon, print, merch & kemasan. Cepat, rapi, harga bersahabat.',
  url: 'https://example.com', // ganti ke domain production kamu jika sudah ada

  // Kontak
  email: 'cv.inarum@gmail.com',
  phone: '082119970400',

  // WhatsApp
  waRaw: '082119970400',  // untuk tampilan
  wa: '6282119970400',    // E.164 untuk link wa.me

  // Alamat
  address:
    'Taman Kopo Katapang Blk. P5 No.36, Pangauban, Kec. Katapang, Kabupaten Bandung, Jawa Barat 40921',

  hours: 'Senin–Sabtu 09.00–17.00',

  // Sosial (opsional)
  social: {
    instagram: '',
    tiktok: '',
    facebook: '',
    maps:
      'https://www.google.com/maps/search/?api=1&query=Taman%20Kopo%20Katapang%20Blk.%20P5%20No.36%2C%20Pangauban%2C%20Kec.%20Katapang%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040921',
  },

  services: [
    { title: 'Cetak Banner & Spanduk', desc: 'Bahan tahan cuaca, ukuran custom, finishing rapi.', icon: '🖨️' },
    { title: 'Sablon Kaos', desc: 'Plastisol, DTG, DTF, minimal order fleksibel.', icon: '👕' },
    { title: 'Merchandise', desc: 'Mug, tumbler, totebag, pin, dan lainnya.', icon: '🎁' },
    { title: 'Stiker & Label', desc: 'Vinyl, transparan, holo, dengan die-cut presisi.', icon: '🏷️' },
    { title: 'Kemasan', desc: 'Box, sleeve, paper bag custom.', icon: '📦' },
    { title: 'Kartu Nama & Brosur', desc: 'Cetak offset/digital, laminasi doff/glossy.', icon: '💳' },

    // Tambahan + thumbnail
    { title: 'Topi Custom', desc: 'Snapback, trucker, bucket. Bordir/patch DTF, qty fleksibel.', icon: '🧢', image: '/gallery/svc-topi.webp' },
    { title: 'Lanyard Custom', desc: 'Polyester/satin, cetak satu atau dua sisi, pilihan hook (lobster, oval, safety).', icon: '🔗', image: '/gallery/svc-lanyard.webp' },
    { title: 'Totebag Custom', desc: 'Canvas/blacu/drill. Sablon/DTF, ukuran dan warna custom.', icon: '🛍️', image: '/gallery/svc-totebag.webp' },
  ],
} as const

export type SiteConfig = typeof SITE