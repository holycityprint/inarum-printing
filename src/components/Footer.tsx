import { SITE } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-8">
      <div className="container-wide py-6 text-sm text-black/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          {SITE.social.instagram && <a className="hover:underline" href={SITE.social.instagram} target="_blank" rel="noopener">Instagram</a>}
          {SITE.social.facebook && <a className="hover:underline" href={SITE.social.facebook} target="_blank" rel="noopener">Facebook</a>}
        </div>
      </div>
    </footer>
  )
}