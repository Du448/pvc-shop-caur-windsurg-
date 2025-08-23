import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Navigācija</h4>
          <div className="grid gap-2">
            <Link href="/">Sākums</Link>
            <Link href="/logi">Logi</Link>
            <Link href="/zaluzijas">Žalūzijas</Link>
            <Link href="/piederumi">Piederumi</Link>
            <Link href="/projekti">Projekti</Link>
            <Link href="/par-mums">Par mums</Link>
            <Link href="/kontakti">Kontakti</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Sociālie tīkli</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
        <div className="text-gray-500">© 2025 Uzņēmuma nosaukums</div>
      </div>
    </footer>
  )
}
