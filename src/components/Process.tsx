import ScrollReveal from './ScrollReveal'

export default function Process() {
  const steps = [
    { t: 'Konsultasi', d: 'Bahas kebutuhan, bahan, deadline, dan anggaran.' },
    { t: 'Desain/Proof', d: 'Kirim desain atau kami bantu layout; approval sebelum cetak.' },
    { t: 'Produksi', d: 'Cetak dan finishing sesuai spesifikasi.' },
    { t: 'QC & Pengiriman', d: 'Cek kualitas lalu kirim/pickup.' }
  ]
  return (
    <section className="container-wide py-12">
      <ScrollReveal variant="up">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">Proses Kerja</h2>
      </ScrollReveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <ScrollReveal key={s.t} variant="up" delay={i * 90} className="card p-5">
            <h3 className="font-semibold text-brand-800">{s.t}</h3>
            <p className="mt-1 text-sm text-black/70">{s.d}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}