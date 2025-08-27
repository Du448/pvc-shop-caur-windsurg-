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
          <Link href="/" className="hover:text-brand-teal transition-colors">Sākums</Link>
          {/* Produkts dropdown */}
          <div className="relative inline-block group">
            <button className="inline-flex items-center gap-1 hover:text-brand-teal transition-colors" aria-haspopup="true" aria-expanded="false">
              Produkti
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
            </button>
            <div className="absolute left-0 top-full w-56 bg-white border border-gray-100 rounded-md shadow-lg py-2 hidden group-hover:block">
              <Link href="/logi" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand-teal">Logu profili</Link>
              <Link href="/zaluzijas" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand-teal">Žalūzijas</Link>
              <Link href="/piederumi" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand-teal">Piederumi</Link>
            </div>
          </div>
          <Link href="/projekti" className="hover:text-brand-teal transition-colors">Dzīvokļu projekti</Link>
          <Link href="/par-mums" className="hover:text-brand-teal transition-colors">Par mums</Link>
          <Link href="/kontakti" className="hover:text-brand-teal transition-colors">Kontakti</Link>
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
            <Link className="hover:text-brand-teal transition-colors" href="/" onClick={()=>setOpen(false)}>Sākums</Link>
            <div className="text-gray-500 font-medium pt-2">Produkti</div>
            <Link className="pl-4 hover:text-brand-teal transition-colors" href="/logi" onClick={()=>setOpen(false)}>Logu profili</Link>
            <Link className="pl-4 hover:text-brand-teal transition-colors" href="/zaluzijas" onClick={()=>setOpen(false)}>Žalūzijas</Link>
            <Link className="pl-4 hover:text-brand-teal transition-colors" href="/piederumi" onClick={()=>setOpen(false)}>Piederumi</Link>
            <Link className="hover:text-brand-teal transition-colors" href="/projekti" onClick={()=>setOpen(false)}>Dzīvokļu projekti</Link>
            <Link className="hover:text-brand-teal transition-colors" href="/par-mums" onClick={()=>setOpen(false)}>Par mums</Link>
            <Link className="hover:text-brand-teal transition-colors" href="/kontakti" onClick={()=>setOpen(false)}>Kontakti</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
