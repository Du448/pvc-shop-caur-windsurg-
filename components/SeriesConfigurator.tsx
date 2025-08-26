"use client"
import { useMemo, useState } from 'react'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/data'

type Profile = { key: string; label: string }
type Extra = { key: string; label: string; add: number }

export default function SeriesConfigurator({
  seriesSlug,
  title,
  image,
  basePrice = 293,
}: {
  seriesSlug: string
  title: string
  image: string
  basePrice?: number
}){
  const profiles: Profile[] = [
    { key: 'aluplast4000-2', label: 'Aluplast 4000 - 2 stikli' },
    { key: 'aluplast4000-3', label: 'Aluplast 4000 - 3 stikli' },
    { key: 'aluplast7000-3', label: 'Aluplast 7000 - 3 stikli' },
    { key: 'wital7000-2', label: 'Wital 7000 prestige - 2 stikli' },
    { key: 'wital7000-3', label: 'Wital 7000 prestige - 3 stikli' },
    { key: 'wital-therm-3', label: 'Wital prestige therm light - 3 stikli' },
    { key: 'rehau-synego-3', label: 'Rehau SYNEGO MD - 3 stikli' },
  ]

  const extras: Extra[] = [
    { key: 'extra-leaf', label: 'Papildus vērtne', add: 5 },
    { key: 'jambs-trim', label: 'Logu aiļu apdare', add: 5 },
    { key: 'debris', label: 'Būvgružu un atkritumu izvešana', add: 5 },
  ]

  const [qty, setQty] = useState(1)
  const [selectedProfileIdx, setSelectedProfileIdx] = useState(0)
  const [selectedExtras, setSelectedExtras] = useState<Record<string, boolean>>({})

  const price = useMemo(()=>{
    const profileAdd = selectedProfileIdx === 0 ? 0 : 1 // any non-default profile +1€
    const extrasAdd = Object.values(selectedExtras).filter(Boolean).length * 5
    return basePrice + profileAdd + extrasAdd
  },[basePrice, selectedProfileIdx, selectedExtras])

  const { add } = useCart()

  function toggleExtra(key: string){
    setSelectedExtras(prev => ({...prev, [key]: !prev[key]}))
  }

  function onAddToCart(){
    const prof = profiles[selectedProfileIdx]
    const extrasChosen = extras.filter(e=>selectedExtras[e.key])
    // Create a unique id per configuration so items stack by exact config
    const id = `proj-103-${prof.key}-${extrasChosen.map(e=>e.key).join('_')||'none'}`
    const product: Product = {
      id,
      slug: seriesSlug,
      name: `${title} – ${prof.label}`,
      short: 'Konfigurēts PVC logs',
      description: `Profils: ${prof.label}. Papildus: ${extrasChosen.map(e=>e.label).join(', ')||'nav'}.`,
      price: price,
      category: 'logi',
      image,
    }
    for(let i=0;i<qty;i++) add(product)
  }

  return (
    <div className="card p-4">
      <div className="mb-4">
        <div className="h-40 md:h-48 w-full bg-cover bg-center rounded border border-gray-200" style={{backgroundImage:`url(${image})`}} />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-xl font-semibold">{price.toFixed(2)} €</div>
        <input
          type="number"
          className="input w-20"
          min={1}
          value={qty}
          onChange={e=>setQty(Math.max(1, Number(e.target.value)||1))}
        />
      </div>

      <div className="mb-4">
        <div className="font-medium mb-2">PVC logi</div>
        <div className="space-y-2">
          {profiles.map((p, idx)=> (
            <label key={p.key} className="flex items-start cursor-pointer">
              <span className="w-6 shrink-0 flex items-start justify-center pt-0.5">
                <input
                  type="radio"
                  name="profile"
                  className="radio"
                  checked={selectedProfileIdx===idx}
                  onChange={()=>setSelectedProfileIdx(idx)}
                />
              </span>
              <span className="ml-2 leading-snug">{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="font-medium mb-2">Papildus pakalpojumi</div>
        <div className="space-y-2">
          {extras.map(e=> (
            <label key={e.key} className="flex items-start cursor-pointer">
              <span className="w-6 shrink-0 flex items-start justify-center pt-0.5">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={!!selectedExtras[e.key]}
                  onChange={()=>toggleExtra(e.key)}
                />
              </span>
              <span className="ml-2 leading-snug">{e.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="btn w-full" onClick={onAddToCart}>
        Pievienot grozam
      </button>
    </div>
  )
}
