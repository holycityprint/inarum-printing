import './globals.css'
import type { Metadata } from 'next'

const baseUrl =
  process.env.VERCEL_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: 'CV.INARUM',
    template: '%s · CV.INARUM',
  },
  description: 'Percetakan Bandung (Katapang) — cepat, rapi, harga bersahabat.',
  metadataBase: new URL(baseUrl),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}