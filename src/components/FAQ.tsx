import ScrollReveal from './ScrollReveal'

export default function FAQ() {
  const faqs = [
    { q: 'Berapa minimal order?', a: 'Fleksibel, sebagian besar produk bisa 1 pcs.' },
    { q: 'Berapa lama produksi?', a: 'Tergantung jenis produk; umumnya 1–3 hari kerja setelah approve.' },
    { q: 'Apakah bisa kirim ke luar kota?', a: 'Bisa. Kami kirim via kurir pilihanmu.' }
  ]
  return (
    <section className="container-wide py-12">
      <ScrollReveal variant="up">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">FAQ</h2>
      </ScrollReveal>

      <div className="mt-4 space-y-2">
        {faqs.map((f, i) => (
          <ScrollReveal key={f.q} variant="up" delay={i * 70}>
            <details className="group rounded-lg border border-black/10 bg-white p-4 open:shadow">
              <summary className="cursor-pointer font-medium text-brand-800 marker:hidden">{f.q}</summary>
              <p className="mt-2 text-sm text-black/70">{f.a}</p>
            </details>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}