import { SITE } from '@/lib/config'

export function SeoJsonLd() {
  let image: string | undefined
  if (typeof SITE.url === 'string' && /^https?:\/\//.test(SITE.url)) {
    image = `${SITE.url.replace(/\/$/, '')}/og.jpg`
  }

  const data: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: /^https?:\/\//.test(SITE.url) ? SITE.url : undefined,
    telephone: SITE.phone || undefined,
    email: SITE.email || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address,
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      addressCountry: 'ID'
    },
    openingHours: SITE.hours,
    sameAs: Object.values(SITE.social).filter(Boolean)
  }
  if (image) data.image = image

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}