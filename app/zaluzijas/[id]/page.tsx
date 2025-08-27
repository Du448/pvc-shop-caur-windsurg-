import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllIds, getProduct } from '@/lib/zaluzijas'
import LightboxGallery from '@/components/LightboxGallery'

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllIds().map((id) => ({ id }))
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const product = getProduct(id)
  if (!product) return notFound()

  return (
    <section className="section">
      <div className="container">
        <div className="mb-6">
          <Link href="/zaluzijas" className="text-gray-600 hover:text-blue-600 transition">← Atpakaļ uz katalogu</Link>
        </div>

        <div className="mb-6 text-center">
          <h1 className="h1">{product.title}</h1>
          <div className="inline-block w-20 h-1 bg-blue-600 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <LightboxGallery images={product.images} title={product.title} />
          </div>

          <div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
            <div className="mt-6" dangerouslySetInnerHTML={{ __html: product.features }} />
          </div>
        </div>
      </div>
    </section>
  )
}
