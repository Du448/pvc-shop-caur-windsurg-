import ProductGrid from '@/components/ProductGrid'
import { products } from '@/lib/data'

export const metadata = { title: 'Žalūzijas — Katalogs' }

export default function Page(){
  const items = products.filter(p=>p.category==='zaluzijas')
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Žalūzijas</h1>
        <ProductGrid items={items} />
      </div>
    </section>
  )
}
