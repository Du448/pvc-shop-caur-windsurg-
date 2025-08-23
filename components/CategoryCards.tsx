import Link from 'next/link'

const cats = [
  { href: '/logi', title: 'PVC Logi', cta: 'Apskatīt visus logus' },
  { href: '/zaluzijas', title: 'Žalūzijas', cta: 'Pasūtīt žalūzijas' },
  { href: '/piederumi', title: 'Piederumi', cta: 'Iegādāties piederumus' },
]

export default function CategoryCards(){
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cats.map(c => (
        <div key={c.href} className="card p-6">
          <h3 className="h3 mb-2">{c.title}</h3>
          <p className="text-gray-600 mb-4">Kvalitāte ar garantiju.</p>
          <Link href={c.href} className="btn">{c.cta}</Link>
        </div>
      ))}
    </div>
  )
}
