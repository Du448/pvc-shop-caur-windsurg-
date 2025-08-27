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
  { slug: 'pvc-logi-103-serija', title: 'PVC Logi 103. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/dzivoklis-1024x601.jpg?updatedAt=1756230772951', description: 'Ražojam daudzkameru PVC logus 103. sērijas dzīvokļiem, kas nodrošina drošu siltuma un skaņas izolāciju. Garantējam augstu kvalitāti, profesionālu montāžu un pieejamas cenas.', specs: placeholderSpecs, gallery: placeholderGallery('103'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-104-serija', title: 'PVC Logi 104. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/104_serija_maja.jpg?updatedAt=1756310634199', description: 'Ražojam energoefektīvus PVC logus 104. sērijas, kas piemēroti jebkuram dzīvoklim. Mēs garantējam augstu kvalitāti un uzticamību mūsu produkcijas, kā arī profesionālu uzstādīšanu un ilgu garantiju.', specs: placeholderSpecs, gallery: placeholderGallery('104'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-119-serija', title: 'PVC Logi 119. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/119..jpg?updatedAt=1756310633680', description: 'Mūsu PVC logi 119. sērija ir ideāli piemēroti jūsu dzīvoklim. Pateicoties daudzkameru profilam un energoefektīviem stikla paketēm, mūsu plastikāta logi nodrošinās drošu siltuma un skaņas izolāciju, būtiski uzlabojot komfortu Jūsu istabā.', specs: placeholderSpecs, gallery: placeholderGallery('119'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-467-serija', title: 'PVC Logi 467. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/467.jpg?updatedAt=1756310633690', description: 'Pateicoties modernajām ražošanas tehnoloģijām, mūsu plastikāta logi 467 sērijas dzīvokļiem ir aprīkoti ar izcilām siltuma un skaņas izolācijas īpašībām. Piedāvājam plašu krāsu izvēli, lai mūsu klients varētu iegādāties sev piemērotus PVC logus.', specs: placeholderSpecs, gallery: placeholderGallery('467'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-602-serija', title: 'PVC Logi 602. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/602-e1705912710937.jpeg?updatedAt=1756310633922', description: 'Mūsu plastikāta logi 602 sērija dzīvokļiem ir ideāls risinājums tiem, kuri vēlas nodrošināt savu māju ar maksimālu komfortu. PVC logi tiek izgatavoti no augstas kvalitātes materiāliem, kas nodrošina izcilas siltumizolācijas un skaņasizolācijas īpašības.', specs: placeholderSpecs, gallery: placeholderGallery('602'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-jaunais-lietuviesu-projekts', title: 'PVC logi Jaunais Lietuviešu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/J.%20liet..png?updatedAt=1756310634337', description: 'Mūsu uzņēmums ražo energoefektīvus plastikāta logus Lietuviešu Projekta jaunajām mājām. Pasūtot jaunus PVC logus pie mūms, jūs saņemsiet ideālu kombināciju starp uzticamību un komfortu, kas nodrošinās jums siltumu, klusumu un enerģijas ietaupījumu.', specs: placeholderSpecs, gallery: placeholderGallery('jlt'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-vecais-lietuviesu-projekts', title: 'PVC logi Vecais Lietuviešu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/V.%20liet..jpg?updatedAt=1756310633646', description: 'Mūsu energoefektīvie plastikāta logi ir ideāli piemēroti vecajām Lietuviešu projektu mājām. Logi ir izgatavoti no daudzkameru vācu profiliem, kas uzlabo komfortu un palīdz samazināt enerģijas patēriņu.', specs: placeholderSpecs, gallery: placeholderGallery('vlt'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-mazgimenu-projekts', title: 'PVC logi Mazģimeņu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/mazdzime%C5%86u.jpg?updatedAt=1756310634006', description: 'Mazģimeņu projekts.', specs: placeholderSpecs, gallery: placeholderGallery('mg'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-hruscova-kiegelu-projekts', title: 'PVC logi Hruščova ķieģeļu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Hru%C5%A1%C4%8Dovka%20%C4%B7ie%C4%A3e%C4%BCu.jpg?updatedAt=1756310633645', description: 'Uzņēmums “Logi Jums” ražo un uzstāda plastikāta logus Hruščova Projekta ķieģeļu mājām. Mēs piedāvājam plašu logu klāstu, kas ir piemēroti jebkuriem ekspluatācijas apstākļiem un nodrošinās Jums siltumu un klusumu.', specs: placeholderSpecs, gallery: placeholderGallery('hk'), ctaText: 'Pieteikt konsultāciju' },
  { slug: 'pvc-logi-hruscova-panelu-projekts', title: 'PVC logi Hruščova paneļu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Hru%C5%A1%C4%8Dovka%20pane%C4%BCu.jpg?updatedAt=1756310633732', description: 'Uzņēmums “Logi Jums” ražo un uzstāda plastmasas logus Hruščova Projekta paneļu mājām. Mūsu logiem ir daudzkameru profils un energotaupīgie stikla paketes, kas var būtiski samazināt apkures izmaksas un uzlabot komfortu Jūsu dzīvoklī.', specs: placeholderSpecs, gallery: placeholderGallery('hp'), ctaText: 'Pieteikt konsultāciju' },
]
