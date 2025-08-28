import { SITE } from './config'

export const waLink = (opts?: { phone?: string; text?: string }) => {
  const phone = (opts?.phone ?? SITE.wa).replace(/[^\d]/g, '')
  const text = encodeURIComponent(opts?.text ?? '')
  return `https://wa.me/${phone}${text ? `?text=${text}` : ''}`
}