export const metadata = { title: 'Projekti' }

const series = ['103. sērija','104. sērija','119. sērija','467. sērija','602. sērija','Jaunais LT','Vecais LT','Mazģimeņu','Hruščova ķieģ.','Hruščova paneļi']

export default function Page(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Logu projektu sadaļa</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {series.map(s => <button key={s} className="px-4 py-2 rounded-full bg-brand.light hover:bg-brand.teal hover:text-white transition">{s}</button>)}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({length:9}).map((_,i)=> (
            <div key={i} className="card h-48 bg-cover bg-center" style={{backgroundImage:`url(https://picsum.photos/seed/proj${i}/600/400)`}} />
          ))}
        </div>
      </div>
    </section>
  )
}
