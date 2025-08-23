"use client"
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'

export default function Header(){
  const { count } = useCart()
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-brand.teal">LOGO</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Sākums</Link>
          <Link href="/logi">Logi</Link>
          <Link href="/zaluzijas">Žalūzijas</Link>
          <Link href="/piederumi">Piederumi</Link>
          <Link href="/projekti">Projekti</Link>
          <Link href="/par-mums">Par mums</Link>
          <Link href="/kontakti">Kontakti</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/grozs" className="relative">
            <span className="material-icons">shopping_cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand.teal text-white text-xs rounded-full w-5 h-5 grid place-items-center">{count}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
