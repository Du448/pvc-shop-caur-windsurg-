import Link from 'next/link'
import { series } from '@/lib/series'
import SeriesConfigurator from '@/components/SeriesConfigurator'

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  return series.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = series.find(s => s.slug === params.slug)
  const title = item ? `${item.title} – Projekti` : 'Projekts'
  return { title }
}

export default function Page({ params }: { params: { slug: string } }){
  const item = series.find(s => s.slug === params.slug)
  if (!item) return null

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 text-sm">
          <Link href="/projekti" className="text-brand-teal hover:underline">← Atpakaļ uz projektiem</Link>
        </div>
        <h1 className="h1 mb-4">{item.title}</h1>
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-8">
          <div
            className="h-72 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.slug === 'pvc-logi-103-serija'
                ? 'https://ik.imagekit.io/vbvwdejj5/dzivoklis-1024x601.jpg?updatedAt=1756230772951'
                : item.image})`,
            }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              {item.description ? (
                <p>{item.description}</p>
              ) : (
                <p>
                  Šī ir {item.title} lapas demonstrācija. Šeit var ielikt aprakstu, attēlus un tehnisko informāciju,
                  kā arī formas vai saites ar papildu informāciju.
                </p>
              )}
            </div>

            {item.gallery && item.gallery.length > 0 && (
              <div className="mt-8">
                <h2 className="h2 mb-4">Galerija</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {item.gallery.map((src, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden border border-gray-100 h-40 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                  ))}
                </div>
              </div>
            )}

            {item.slug === 'pvc-logi-103-serija' && (
              <div className="mt-8">
                <h2 className="h2 mb-4">Konfiguratori</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i}>
                      <SeriesConfigurator
                        seriesSlug={item.slug}
                        title={item.title}
                        image={'https://ik.imagekit.io/vbvwdejj5/103-51-300x214.jpg?updatedAt=1756227149154'}
                        basePrice={293}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside>
            {item.specs && item.specs.length > 0 && (
              <div className="card p-4 mb-6">
                <h2 className="h3 mb-3">Specifikācija</h2>
                <dl className="divide-y divide-gray-100">
                  {item.specs.map((s, i) => (
                    <div key={i} className="py-2 grid grid-cols-3 gap-2 text-sm">
                      <dt className="text-gray-600 col-span-1">{s.label}</dt>
                      <dd className="col-span-2">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <Link href="/kontakti" className="btn w-full text-center">
              {item.ctaText ?? 'Sazināties'}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
