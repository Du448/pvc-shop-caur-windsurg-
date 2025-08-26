"use client"
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

export default function Header(){
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-brand-teal">LOGO</Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Sākums</Link>
          <Link href="/logi">Logi</Link>
          <Link href="/zaluzijas">Žalūzijas</Link>
          <Link href="/piederumi">Piederumi</Link>
          <Link href="/projekti">Projekti</Link>
          <Link href="/par-mums">Par mums</Link>
          <Link href="/kontakti">Kontakti</Link>
        </nav>
        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200"
            aria-label="Atvērt izvēlni"
            aria-expanded={open}
            onClick={()=>setOpen(v=>!v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <Link href="/grozs" className="relative" aria-label="Grozs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-teal text-white text-xs rounded-full w-5 h-5 grid place-items-center">{count}</span>
            )}
          </Link>
        </div>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container py-3 grid gap-3 text-sm">
            <Link href="/" onClick={()=>setOpen(false)}>Sākums</Link>
            <Link href="/logi" onClick={()=>setOpen(false)}>Logi</Link>
            <Link href="/zaluzijas" onClick={()=>setOpen(false)}>Žalūzijas</Link>
            <Link href="/piederumi" onClick={()=>setOpen(false)}>Piederumi</Link>
            <Link href="/projekti" onClick={()=>setOpen(false)}>Projekti</Link>
            <Link href="/par-mums" onClick={()=>setOpen(false)}>Par mums</Link>
            <Link href="/kontakti" onClick={()=>setOpen(false)}>Kontakti</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
