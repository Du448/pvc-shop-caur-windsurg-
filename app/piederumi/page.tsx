import ProductGrid from '@/components/ProductGrid'
import { products } from '@/lib/data'

export const metadata = { title: 'Piederumi — Katalogs' }

export default function Page(){
  const items = products.filter(p=>p.category==='piederumi')
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Piederumi</h1>
        <ProductGrid items={items} />
      </div>
    </section>
  )
}
