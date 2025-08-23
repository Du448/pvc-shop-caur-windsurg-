export type Product = {
  id: string
  slug: string
  name: string
  short: string
  description: string
  price: number
  category: 'logi'|'zaluzijas'|'piederumi'
  image: string
}

export const products: Product[] = [
  { id:'p1', slug:'pvc-logs-70mm', name:'PVC logs 70mm', short:'Energoefektīvs logs dzīvoklim', description:'Kvalitatīvs PVC logs ar 70mm profilu, trīskāršo stikla paketi un lielisku siltumizolāciju.', price:149.99, category:'logi', image:'https://picsum.photos/seed/logs1/600/400' },
  { id:'p2', slug:'pvc-logs-82mm', name:'PVC logs 82mm', short:'Premium siltumnoturība', description:'82mm profils ar uzlabotu hermētiskumu un trokšņu izolāciju.', price:199.99, category:'logi', image:'https://picsum.photos/seed/logs2/600/400' },
  { id:'p3', slug:'zaluzijas-diena-nakts', name:'Diena/Nakts žalūzijas', short:'Stils un funkcionalitāte', description:'Modernas diena/nakts žalūzijas ar regulējamu gaismas caurlaidību.', price:59.99, category:'zaluzijas', image:'https://picsum.photos/seed/zn1/600/400' },
  { id:'p4', slug:'zaluzijas-rullo', name:'Rullo žalūzijas', short:'Vienkāršas un elegantas', description:'Klasiskas rullo žalūzijas dažādās krāsās.', price:39.99, category:'zaluzijas', image:'https://picsum.photos/seed/zn2/600/400' },
  { id:'p5', slug:'palodzes-pvc', name:'PVC palodze', short:'Izturīga un praktiska', description:'Izturīgas PVC palodzes dažādos platumos.', price:14.99, category:'piederumi', image:'https://picsum.photos/seed/pal1/600/400' },
  { id:'p6', slug:'rokturis-logs', name:'Logu rokturis', short:'Ergonomisks metāla rokturis', description:'Augstas kvalitātes logu rokturis ar slēdzeni.', price:12.99, category:'piederumi', image:'https://picsum.photos/seed/rok1/600/400' },
  { id:'p7', slug:'moskitu-tikls', name:'Moskītu tīkls', short:'Aizsardzība pret kukaiņiem', description:'Moskītu tīkls logiem ar alumīnija rāmi.', price:24.99, category:'piederumi', image:'https://picsum.photos/seed/mos1/600/400' },
  { id:'p8', slug:'zaluzijas-horizontales', name:'Horizontālās žalūzijas', short:'Klasika katram interjeram', description:'Alumīnija un koka horizontālās žalūzijas.', price:49.99, category:'zaluzijas', image:'https://picsum.photos/seed/zn3/600/400' }
]
