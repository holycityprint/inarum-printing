export const SITE = {
  name: 'CV.INARUM',
  description:
    'Percetakan Bandung (Katapang): spanduk/banner, stiker/label, kartu nama, brosur, kemasan, kaos & merchandise. Cepat, rapi, harga bersahabat.',
  url: 'https://example.com', // ganti ke domain production saat sudah ada

  // Kontak
  email: 'cv.inarum@gmail.com',
  phone: '082119970400',

  // WhatsApp
  waRaw: '082119970400', // untuk tampilan
  wa: '6282119970400',   // E.164 untuk link wa.me

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

  // Layanan (pakai image dari /public/gallery)
  services: [
    { title: 'Cetak Banner & Spanduk', desc: 'Indoor/outdoor, bahan kuat, cetak tajam. Finishing rapi.', icon: '🖨️', image: '/gallery/svc-banner.webp' },
    { title: 'Sablon Kaos', desc: 'DTF/Plastisol/Polyflex. Bisa satuan & partai.', icon: '👕', image: '/gallery/svc-kaos.webp' },
    { title: 'Merchandise', desc: 'Mug, tumbler, totebag, pin, dan lainnya.', icon: '🎁', image: '/gallery/svc-merch.webp' },
    { title: 'Stiker & Label', desc: 'Vinyl doff/glossy, transparan, hologram. Cutting presisi.', icon: '🏷️', image: '/gallery/svc-stiker.webp' },
    { title: 'Kemasan', desc: 'Box makanan, sleeve, paper bag custom.', icon: '📦', image: '/gallery/svc-kemasan.webp' },
    { title: 'Kartu Nama & Brosur', desc: 'Art carton 260–310 gsm, brosur A5/A4/A3 lipat 2/3.', icon: '💳', image: '/gallery/svc-kartunama.webp' },
    { title: 'Topi Custom', desc: 'Snapback, trucker, bucket. Bordir/patch DTF.', icon: '🧢', image: '/gallery/svc-topi.webp' },
    { title: 'Lanyard Custom', desc: 'Polyester/satin, satu atau dua sisi, pilihan hook.', icon: '🔗', image: '/gallery/svc-lanyard.webp' },
    { title: 'Totebag Custom', desc: 'Canvas/blacu/drill. Sablon/DTF, ukuran & warna custom.', icon: '🛍️', image: '/gallery/svc-totebag.webp' },
  ],
} as const

export type SiteConfig = typeof SITE
export type Service = (typeof SITE)['services'][number]