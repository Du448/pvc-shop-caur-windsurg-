export type Spec = { label: string; value: string }
export type SeriesItem = {
  slug: string
  title: string
  image: string
  excerpt?: string
  description?: string
  specs?: Spec[]
  gallery?: string[]
  ctaText?: string
}

const placeholderSpecs: Spec[] = [
  { label: 'Profils', value: '6 kameru PVC profils' },
  { label: 'Stiklojums', value: 'Div- vai trīskāršais stiklojums' },
  { label: 'Siltumcaurlaidība', value: 'Līdz 0.9 W/m²K' },
]

const placeholderGallery = (seed: string) => [
  `https://picsum.photos/seed/${seed}a/800/600`,
  `https://picsum.photos/seed/${seed}b/800/600`,
  `https://picsum.photos/seed/${seed}c/800/600`,
]

export const series: SeriesItem[] = [
  { slug: 'pvc-logi-103-serija', title: 'PVC Logi 103. sērija', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop', description: 'Ražojam daudzkameru PVC logus 103. sērijas dzīvokļiem, kas nodrošina drošu siltuma un skaņas izolāciju. Garantējam augstu kvalitāti, profesionālu montāžu un pieejamas cenas.', specs: placeholderSpecs, gallery: placeholderGallery('103'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-104-serija', title: 'PVC Logi 104. sērija', image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1400&auto=format&fit=crop', description: 'Ražojam energoefektīvus PVC logus 104. sērijas, kas piemēroti jebkuram dzīvoklim. Mēs garantējam augstu kvalitāti un uzticamību mūsu produkcijas, kā arī profesionālu uzstādīšanu un ilgu garantiju.', specs: placeholderSpecs, gallery: placeholderGallery('104'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-119-serija', title: 'PVC Logi 119. sērija', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop', description: 'Mūsu PVC logi 119. sērija ir ideāli piemēroti jūsu dzīvoklim. Pateicoties daudzkameru profilam un energoefektīviem stikla paketēm, mūsu plastikāta logi nodrošinās drošu siltuma un skaņas izolāciju, būtiski uzlabojot komfortu Jūsu istabā.', specs: placeholderSpecs, gallery: placeholderGallery('119'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-467-serija', title: 'PVC Logi 467. sērija', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop', description: 'Pateicoties modernajām ražošanas tehnoloģijām, mūsu plastikāta logi 467 sērijas dzīvokļiem ir aprīkoti ar izcilām siltuma un skaņas izolācijas īpašībām. Piedāvājam plašu krāsu izvēli, lai mūsu klients varētu iegādāties sev piemērotus PVC logus.', specs: placeholderSpecs, gallery: placeholderGallery('467'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-602-serija', title: 'PVC Logi 602. sērija', image: 'https://images.unsplash.com/photo-1501877008226-4fca48ee50c1?q=80&w=1400&auto=format&fit=crop', description: 'Mūsu plastikāta logi 602 sērija dzīvokļiem ir ideāls risinājums tiem, kuri vēlas nodrošināt savu māju ar maksimālu komfortu. PVC logi tiek izgatavoti no augstas kvalitātes materiāliem, kas nodrošina izcilas siltumizolācijas un skaņasizolācijas īpašības.', specs: placeholderSpecs, gallery: placeholderGallery('602'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-jaunais-lietuviesu-projekts', title: 'PVC logi Jaunais Lietuviešu projekts', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop', description: 'Mūsu uzņēmums ražo energoefektīvus plastikāta logus Lietuviešu Projekta jaunajām mājām. Pasūtot jaunus PVC logus pie mūms, jūs saņemsiet ideālu kombināciju starp uzticamību un komfortu, kas nodrošinās jums siltumu, klusumu un enerģijas ietaupījumu.', specs: placeholderSpecs, gallery: placeholderGallery('jlt'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-vecais-lietuviesu-projekts', title: 'PVC logi Vecais Lietuviešu projekts', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop', description: 'Mūsu energoefektīvie plastikāta logi ir ideāli piemēroti vecajām Lietuviešu projektu mājām. Logi ir izgatavoti no daudzkameru vācu profiliem, kas uzlabo komfortu un palīdz samazināt enerģijas patēriņu.', specs: placeholderSpecs, gallery: placeholderGallery('vlt'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-mazgimenu-projekts', title: 'PVC logi Mazģimeņu projekts', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop', description: 'Mazģimeņu projekts.', specs: placeholderSpecs, gallery: placeholderGallery('mg'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-hruscova-kiegelu-projekts', title: 'PVC logi Hruščova ķieģeļu projekts', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1400&auto=format&fit=crop', description: 'Uzņēmums “Logi Jums” ražo un uzstāda plastikāta logus Hruščova Projekta ķieģeļu mājām. Mēs piedāvājam plašu logu klāstu, kas ir piemēroti jebkuriem ekspluatācijas apstākļiem un nodrošinās Jums siltumu un klusumu.', specs: placeholderSpecs, gallery: placeholderGallery('hk'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-hruscova-panelu-projekts', title: 'PVC logi Hruščova paneļu projekts', image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1400&auto=format&fit=crop', description: 'Uzņēmums “Logi Jums” ražo un uzstāda plastmasas logus Hruščova Projekta paneļu mājām. Mūsu logiem ir daudzkameru profils un energotaupīgie stikla paketes, kas var būtiski samazināt apkures izmaksas un uzlabot komfortu Jūsu dzīvoklī.', specs: placeholderSpecs, gallery: placeholderGallery('hp'), ctaText: 'Pieteikt konsultāciju' },
]
