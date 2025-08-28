import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SITE } from '@/lib/config'
import { SeoJsonLd } from '@/components/SeoJsonLd'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: `${SITE.name} — Percetakan & Merchandise`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — Percetakan & Merchandise`,
    description: SITE.description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: SITE.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Percetakan & Merchandise`,
    description: SITE.description,
    images: ['/og.jpg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SeoJsonLd />
      </body>
    </html>
  )
}