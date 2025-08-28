import { SITE } from '@/lib/config'

export default function Contact() {
  const mapQ = encodeURIComponent(SITE.address)
  const mapSrc = `https://www.google.com/maps?q=${mapQ}&output=embed`
  return (
    <section className="container-wide py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">Hubungi Kami</h2>
      <p className="mt-2 text-black/70">Butuh estimasi cepat? Kirim detail pesanan via WhatsApp.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-5">
          <ul className="space-y-2 text-sm">
            <li><strong>Alamat:</strong> {SITE.address}</li>
            {SITE.phone && <li><strong>Telepon:</strong> <a href={`tel:${SITE.phone}`} className="underline">{SITE.phone}</a></li>}
            <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${SITE.wa}`} target="_blank" rel="noopener" className="underline">{SITE.waRaw}</a></li>
            <li><strong>Email:</strong> <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a></li>
            <li><strong>Jam Operasional:</strong> {SITE.hours}</li>
          </ul>
          <a href={`https://wa.me/${SITE.wa}?text=${encodeURIComponent('Halo, saya ingin konsultasi.')}`} target="_blank" rel="noopener" className="mt-4 inline-flex btn btn-primary">
            Chat Sekarang
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-black/10">
          <iframe title="Lokasi di Maps" src={mapSrc} className="h-[300px] w-full md:h-full" loading="lazy" />
        </div>
      </div>
    </section>
  )
}