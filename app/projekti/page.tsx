export const metadata = { title: 'Projekti' }

import Link from 'next/link'
import { series } from '@/lib/series'

export default function Page(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Logu projektu sadaļa</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {series.map(item => (
            <Link key={item.slug} href={`/projekti/${item.slug}`} className="group block rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-48 bg-cover bg-center" style={{backgroundImage:`url(${item.image})`}}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="inline-block bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-medium">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
