import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-800 bg-black text-white">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Navigācija</h4>
          <div className="grid gap-2">
            <Link className="text-white/80 hover:text-white" href="/">Sākums</Link>
            <Link className="text-white/80 hover:text-white" href="/logi">Logu profili</Link>
            <Link className="text-white/80 hover:text-white" href="/zaluzijas">Žalūzijas</Link>
            <Link className="text-white/80 hover:text-white" href="/piederumi">Piederumi</Link>
            <Link className="text-white/80 hover:text-white" href="/projekti">Projekti</Link>
            <Link className="text-white/80 hover:text-white" href="/par-mums">Par mums</Link>
            <Link className="text-white/80 hover:text-white" href="/kontakti">Kontakti</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Sociālie tīkli</h4>
          <div className="flex gap-4">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.91h-2.34V22C18.34 21.21 22 17.06 22 12.06z"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="hover:text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21 8.5c-2.3 0-4.27-1.43-5.08-3.46V16a5.5 5.5 0 1 1-5.5-5.5c.35 0 .68.04 1 .1v2.34a2.5 2.5 0 1 0 1.5 2.31V2h2.6a5.1 5.1 0 0 0 4.48 4.97V8.5z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/></svg>
            </a>
          </div>
        </div>
        <div className="text-white/60">© 2025 Uzņēmuma nosaukums</div>
      </div>
    </footer>
  )
}
