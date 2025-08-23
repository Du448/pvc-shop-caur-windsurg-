import ProductGrid from '@/components/ProductGrid'
import { products } from '@/lib/data'

export const metadata = { title: 'PVC Logi — Katalogs' }

export default function Page(){
  const items = products.filter(p=>p.category==='logi')
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">PVC Logi</h1>
        <ProductGrid items={items} />
      </div>
    </section>
  )
}
