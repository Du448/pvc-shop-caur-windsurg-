import Hero from '@/components/Hero'
import CategoryCards from '@/components/CategoryCards'
import ProductGrid from '@/components/ProductGrid'
import Testimonials from '@/components/Testimonials'
import { products } from '@/lib/data'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <CategoryCards />
        </div>
      </section>
      <section id="katalogs" className="section bg-[var(--muted)]">
        <div className="container">
          <h2 className="h2 mb-6">Populāri produkti</h2>
          <ProductGrid items={products.slice(0,8)} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Testimonials />
        </div>
      </section>
    </>
  )
}
