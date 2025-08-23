import Link from 'next/link'

export default function Hero(){
  return (
    <section className="section bg-[var(--muted)]">
      <div className="container grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="h1 mb-4">PVC logi, žalūzijas un piederumi</h1>
          <p className="text-lg text-gray-600 mb-6">Augstas kvalitātes risinājumi</p>
          <Link href="#katalogs" className="btn">Skatīt produktus</Link>
        </div>
        <div className="h-64 md:h-80 bg-cover bg-center rounded-lg shadow-md" style={{backgroundImage:"url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop')"}} />
      </div>
    </section>
  )
}
