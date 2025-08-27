 import Link from 'next/link'
 import { catalogItems, getProduct } from '@/lib/zaluzijas'

 export const metadata = { title: 'Žalūzijas — Katalogs' }

 export default function Page(){
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="h1">Žalūziju Katalogs</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Atklājiet mūsu plašo žalūziju un logu pārklājumu klāstu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {catalogItems.map((item) => {
            const product = getProduct(item.id)
            const src = product.thumbnail
            return (
              <Link
                key={item.id}
                href={`/zaluzijas/${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden group block"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
 }
