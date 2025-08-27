export type CatalogItem = { id: string; title: string }
export type Product = {
  id: string
  title: string
  description: string // HTML
  features: string // HTML
  images: string[]
  thumbnail: string
}

export const catalogItems: CatalogItem[] = [
  { id: 'rullo-kasetu', title: 'Rullo kasešu žalūzijas' },
  { id: 'rullo', title: 'Rullo žalūzijas' },
  { id: 'kasetu-diena-nakts', title: 'Kasešu žalūzijas "Diena-nakts"' },
  { id: 'rullo-diena-nakts', title: 'Rullo žalūzijas "Diena-nakts"' },
  { id: 'aizkaru', title: '"Aizkaru" žalūzijas' },
  { id: 'plisetas', title: 'Plisētās žalūzijas' },
  { id: 'vertikalas', title: 'Vertikālās žalūzijas' },
  { id: 'romiesu', title: 'Romiešu žalūzijas' },
  { id: 'aluminija', title: 'Alumīnija žalūzijas' },
  { id: 'screen', title: 'Žalūzijas "SCREEN"' },
  { id: 'koka', title: 'Koka žalūzijas' },
  { id: 'mansarda', title: 'Mansarda logu žalūzijas' },
  { id: 'foto', title: 'Foto žalūzijas' },
  { id: 'dienas-aizkari', title: 'Dienas aizkari' },
  { id: 'nakts-aizkari', title: 'Nakts aizkari' },
  { id: 'arejas-vertikalas', title: 'Ārējās vertikālās žalūzijas' },
  { id: 'refleksoli', title: 'Refleksoli' },
  { id: 'rullo-slegi', title: 'Rullo slēģi' },
  { id: 'markizes', title: 'Markīzes' },
  { id: 'pergola', title: 'Pergola' },
  { id: 'arejie-slegi', title: 'Ārējie logu slēģi' },
  { id: 'moskitu', title: 'Moskītu tīkls' },
  { id: 'mikstie-logi', title: 'Mīkstie logi' },
  { id: 'automatiskas', title: 'Automātiskās žalūzijas' },
]

const placeholderThumb = 'https://placehold.co/800x600/3b82f6/ffffff?text=Dr%C4%ABzum%C4%81'
const genericDesc = (title: string) =>
  `<p>Šis ir vispārīgs produkta apraksts priekš "${title}". Šeit Jūs varat ievietot detalizētu informāciju par šo produktu, tā priekšrocībām, materiāliem un pielietojumu.</p>`
const genericFeatures =
  "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Augstas kvalitātes materiāli</li><li>Plašs krāsu un faktūru klāsts</li><li>Individuāli izmēri</li><li>Vienkārša uzstādīšana un kopšana</li></ul>"

// A subset of detailed products ported from public/zaluzijas.html
const productsBase: Record<string, Omit<Product, 'id'>> = {
  'rullo-kasetu': {
    title: 'Rullo kasešu žalūzijas',
    description:
      "<p>Rullo kasešu žalūzijas ir ārkārtīgi praktisks žalūziju veids, kas tiek piestiprināts pie loga rāmja. Papildus vadulas ļauj atvērt logu vēdināšanas režīmā vai pilnībā, nemainot žalūziju augstuma pozīciju. Funkcionalitāte, mūsdienīgs dizains un plašā audumu izvēle var būt teicams risinājums ikvienā telpas interjerā.</p><p class='mt-4'>Ņemot vērā jūsu vēlmes un logu īpašības mēs piedāvājam atšķirīgus sistēmu profilus:</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li><strong>Vario 13</strong> - mini kasete</li><li><strong>Vario 17</strong> - klasiskā kasete</li><li><strong>Vario 25</strong> - U-veida profils (piemērots dalītiem logiem, 3 kameru PVC logiem u.c.)</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Vivi%20Glow%20Multi%20Coloured%20_%20Yellow%20_%20Grey%20Light_.jpg?updatedAt=1755706507263',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/What%20a%20pleasure%20to%20finish%20off%20our%20clients_.jpg?updatedAt=1755706507214',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Tailor%20your%20Light-Filtering%20Roller%20Blinds%20to%20your_.jpg?updatedAt=1755706507014',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Soma%20Steel%20Grey%20Blackout%20Cassette%20Roller_.jpg?updatedAt=1755706506952',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Upgrade%20your%20Light-Filtering%20Roller%20Blinds%20into%20a_.jpg?updatedAt=1755706507060',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/_ad%20Smartblinds_com%20HomeKit%20Compatible%20Smart_.jpg?updatedAt=1755706504047',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Bella%20Vine%20Green%20Blackout%20Cassette%20Motorised_.jpg?updatedAt=1755706504074',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20mājaslapai/Our%20classic%20Blackout%20Roller%20Blinds%20get%20a%20stylish_%20(1).jpg?updatedAt=1755706504078',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Elevate%20the%20elegance%20of%20our%20classic%20Blackout_.jpg?updatedAt=1755706504098',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Our%20classic%20Blackout%20Roller%20Blinds%20get%20a%20stylish_.jpg?updatedAt=1755706504102',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Screen%203_%20Roller%20Shades%20with%20Cassette%20Track.jpg?updatedAt=1755706504115',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Ducato%20Night%20Black%20Light%20Filtering%20Cassette%20Roller_.jpg?updatedAt=1755706504121',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/East%20Hampton%20Somfy%20Roller%20Shades%20with%20Black%20Fascia.jpg?updatedAt=1755706504132',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/5c3f7f99-c4e4-4be1-9094-81e572c6f6f1.jpg?updatedAt=1755706504156',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Senses%20slow%20rise%20roller%20blinds%20No%20cords%20or%20chains_.jpg?updatedAt=1755706506553',
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Voile%20roller%20blinds%20are%20the%20perfect%20blind%20for_.jpg?updatedAt=1755706507141'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Jaunas%20bildes%20m%C4%81jaslapai/Vivi%20Glow%20Multi%20Coloured%20_%20Yellow%20_%20Grey%20Light_.jpg?updatedAt=1755706507263',
  },
  rullo: {
    title: 'Rullo žalūzijas',
    description:
      "<p>Rullo žalūzijas ir viens no populārākajiem un daudzpusīgākajiem logu noformējuma veidiem. Tās ir viegli lietojamas, nodrošina efektīvu aizsardzību no saules un nevēlamiem skatieniem. Pieejamas plašā audumu, krāsu un rakstu klāstā, tās iederēsies jebkurā interjerā – no klasiska līdz modernam.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Vienkāršs un uzticams mehānisms</li><li>Plašs audumu klāsts (aptumšojoši, daļēji caurspīdīgi, ar rakstiem)</li><li>Viegli uzstādāmas pie sienas, griestiem vai loga rāmī</li><li>Lieliska cenas un kvalitātes attiecība</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/ab8945fc-e0c0-417c-93e5-b8de74d3baef.jpg?updatedAt=1755705772775',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/Add%20effortless%20elegance%20to%20your%20windows%20with%20this_.jpg?updatedAt=1755705772754',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/PRICES%20MAY%20VARY_%20_Excellent%20Material__Made%20of%20100__.jpg?updatedAt=1755705772751',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/PRICES%20MAY%20VARY_%20_Product%20Detail__The%20total%20size_.jpg?updatedAt=1755705772738',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/bfbec9a5-a67c-4786-bbc6-a0eb3ebdf2e6.jpg?updatedAt=1755705772730',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/Give%20your%20interior%20a%20luxurious%20look%20with%20this_.jpg?updatedAt=1755705772695',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/36615b23-5bba-4a27-898a-1ceaa574dcbc.jpg?updatedAt=1755705772667',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/29ae0229-2aaf-4521-b195-da40c29dcfc5.jpg?updatedAt=1755705772684'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas/ab8945fc-e0c0-417c-93e5-b8de74d3baef.jpg?updatedAt=1755705772775',
  },
  vertikalas: {
    title: 'Vertikālās žalūzijas',
    description:
      "<p>Vertikālās žalūzijas ir klasisks un funkcionāls risinājums, kas ideāli piemērots gan birojiem, gan mājokļiem. Tās ļauj efektīvi regulēt gaismas plūsmu telpā un nodrošina privātumu. Pieejamas plašā materiālu un krāsu klāstā, tās viegli pielāgot jebkuram interjeram.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Lieliski piemērotas lieliem logiem un bīdāmām durvīm</li><li>Vienkārša gaismas plūsmas kontrole</li><li>Plašs audumu, PVC un alumīnija lameļu klāsts</li><li>Izturīgas un viegli kopjamas</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Vertical.jpg?updatedAt=1755593262996',
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Close%20up%20of%20Classic%20Scroll%20Black.jpg?updatedAt=1755593261443",
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Levolor%C2%AE%EF%B8%8F%EF%B8%8F%20Perceptions%C2%AE%EF%B8%8F%EF%B8%8F%20Soft%20Vertical%20Shades_.jpg?updatedAt=1755593261410",
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/9e02feed0e49202d40fa2d9f94fef792.jpg?updatedAt=1755593261407",
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Bali%20Americana%20Vinyl%20Vertical%20Blinds%20_boldcolors_.jpg?updatedAt=1755593261401",
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/229031c7-e1cb-4809-baae-cef78692c04a.jpg?updatedAt=1755593261405",
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Bali%C2%AE%EF%B8%8F%EF%B8%8F%20Vinyl%20Vertical%20Blind_%20Premium%20Faux%20Wood.jpg?updatedAt=1755593261400",
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Blindsgalore%C2%AE%EF%B8%8F%EF%B8%8F%20Vinyl%20Vertical%20Blinds%20shown%20in_.jpg?updatedAt=1755593261396",
      "https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Vertical%20Blinds%20Solid%20Textured%20S-Curved%20Tactics_.jpg?updatedAt=1755593261394"
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Vertical.jpg?updatedAt=1755593262996',
  },
  'rullo-diena-nakts': {
    title: 'Rullo žalūzijas "Diena-nakts"',
    description:
      "<p>'Diena-nakts' rullo žalūzijas ir inovatīvs risinājums, kas apvieno divu veidu auduma joslas – caurspīdīgas un necaurspīdīgas. Pārbīdot šīs joslas vienu pret otru, Jūs varat viegli regulēt gaismas daudzumu telpā, radot gan pilnīgu privātumu, gan maigu, izkliedētu apgaismojumu. Tās ir lieliska alternatīva tradicionālajiem aizkariem un žalūzijām.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Unikāls divu audumu dizains</li><li>Precīza gaismas un privātuma kontrole</li><li>Moderns un elegants izskats</li><li>Piemērotas jebkurai telpai</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/With%20the%20filtered%20light%20option,%20you%20can%20roll%20up_.jpg?updatedAt=1755708082524',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/When%20you%20go%20for%20filtered%20light,%20the%20blind%20can%20be_.jpg?updatedAt=1755708082515',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/PRICES%20MAY%20VARY_%20Material%20and%20Design_%20My%20home_.jpg?updatedAt=1755708082490',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/Transform%20your%20living%20space%20with%20our%20Zebra%20Roller_.jpg?updatedAt=1755708082469',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/81a4e13b-93a4-4b0b-aaf3-489b7a86e24d.jpg?updatedAt=1755708080243',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/cd1819c5-f7b8-4f4a-bd81-d69b55e102e1.jpg?updatedAt=1755708080235',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/Cordless%20_%20Zebra%20Roller%20Shades%20_%20Basic%20Slate%20__.jpg?updatedAt=1755708080229',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/e7d96123-ff6e-482b-8272-7efaed4aa6e0.jpg?updatedAt=1755708080229',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/340c2ed7-f35f-4151-86d4-8a097f3acd2b.jpg?updatedAt=1755708080215',
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/PRICES%20MAY%20VARY_%20DOUBLE%20ZEBRA%20ROLLER%20BLINDS_Made_.jpg?updatedAt=1755708080198'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/With%20the%20filtered%20light%20option,%20you%20can%20roll%20up_.jpg?updatedAt=1755708082524',
  },
  'kasetu-diena-nakts': {
    title: 'Kasešu žalūzijas "Diena-nakts"',
    description:
      "<p>Kasešu žalūzijas 'Diena-nakts' ir inovatīvs un elegants risinājums, kas apvieno divu veidu audumus – caurspīdīgu un necaurspīdīgu. Tas ļauj Jums viegli mainīt gaismas intensitāti telpā, radot gan gaišu un atvērtu atmosfēru, gan pilnīgu privātumu. Kasetes mehānisms nodrošina estētisku izskatu un pasargā audumu no putekļiem.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Divi audumi vienā žalūzijā maksimālai funkcionalitātei</li><li>Precīza gaismas kontrole</li><li>Elegants kasetes dizains</li><li>Ideāli piemērotas guļamistabām un viesistabām</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/_As%20the%20sun%20rises,%20these%20blinds%20unfurl%20like_.jpg?updatedAt=1755970561222',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/PRICES%20MAY%20VARY_%20Material_%20polyester+linen_.jpg?updatedAt=1755970560261',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/c4e4cf54-02ab-4d00-b019-dd37c60ac2b0.jpg?updatedAt=1755970558717',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/8d73ce6f-2fc7-4f3a-86a2-a281fba5496a.jpg?updatedAt=1755970558720',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/PRICES%20MAY%20VARY_%20Custom%20Size_%20We%20could%20customize_%20(1).jpg?updatedAt=1755970558708',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/2057cb2b-3777-4828-94f7-318f8d05def5.jpg?updatedAt=1755970558699',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Buy%20MING%20CHEN%20Motorized%20Blinds%20with%20Remote%20Control_.jpg?updatedAt=1755970558708',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Hunter%20Douglas%20Silhouette%20Window%20Shadings%20in%20an_.jpg?updatedAt=1755970558703',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Day%20and%20Night%20Zebra%20Vision%20Window%20Roller%20Blind_.jpg?updatedAt=1755970558703',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/(Promoted)%20MYshade%20Zebra%20Blinds%20for%20Windows_.jpg?updatedAt=1755970558683',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/PRICES%20MAY%20VARY_%20Custom%20Size_%20We%20could%20customize_.jpg?updatedAt=1755970558665',
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Amazon_com_%20Changshade%20Custom%20Size%20Zebra%20Roller_.jpg?updatedAt=1755970558678'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/PRICES%20MAY%20VARY_%20Custom%20Size_%20We%20could%20customize_.jpg?updatedAt=1755970558665',
  },
  plisetas: {
    title: 'Plisētās žalūzijas',
    description:
      "<p>Plisētās žalūzijas ir moderns un daudzpusīgs logu noformējuma veids, kas piemērots jebkuras formas un izmēra logiem. To unikālā struktūra nodrošina lielisku siltumizolāciju un gaismas filtrāciju. Tās var atvērt gan no augšas, gan no apakšas, sniedzot Jums pilnīgu kontroli pār privātumu un gaismas daudzumu telpā.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Piemērotas nestandarta formas logiem</li><li>Vadība no augšas un apakšas</li><li>Uzlabo telpas energoefektivitāti</li><li>Plašs audumu klāsts, ieskaitot aptumšojošus un gaismu atstarojošus materiālus</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/0512c52e-a481-448a-9af3-c9de0394c104.jpg?updatedAt=1755611634334',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Modern%20Roman%20Blinds.jpg?updatedAt=1755611634332',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/0edcf2f4-8211-42d7-8ee2-8455bb3af809.jpg?updatedAt=1755611634331',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/74320e47-00ac-42d8-bae2-53ebc89f68da.jpg?updatedAt=1755611634307',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Hunter%20Douglas%20Contemporary%20Window%20Treatments_.jpg?updatedAt=1755611634292',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Blinds.jpg?updatedAt=1755611634291',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/The%20Hive%20Blockout%20Colours%20Collection%20of%20Perfect_.jpg?updatedAt=1755611634268',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/The%20Best%20Window%20Treatments%20for%20Every%20Room%20of%20the_.jpg?updatedAt=1755611634262',
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Shopping%20for%20cellular%20window%20shades,%20but%20feeling%20a_.jpg?updatedAt=1755611634265'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/0512c52e-a481-448a-9af3-c9de0394c104.jpg?updatedAt=1755611634334',
  },
  romiesu: {
    title: 'Romiešu žalūzijas',
    description:
      "<p>Romiešu žalūzijas ir izsmalcināts un mājīgs logu noformējuma veids, kas apvieno aizkaru eleganci ar žalūziju funkcionalitāti. Paceļoties, tās veido glītas horizontālas krokas, piešķirot telpai siltu un aicinošu noskaņu. Tās ir lieliska alternatīva tradicionālajiem aizkariem.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Elegants un mājīgs dizains</li><li>Plašs audumu, rakstu un krāsu klāsts</li><li>Viegli paceļamas un nolaižamas ar ķēdītes vai auklas mehānismu</li><li>Audums ir viegli noņemams tīrīšanai</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Keeping%20it%20neutral%20and%20calm%20in%20the%20bedroom_%20Roman_.jpg?updatedAt=1755612228969',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Introduce%20contemporary%20style%20to%20any%20window%20in%20your_.jpg?updatedAt=1755612228938',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/84a37158-da5e-4338-8160-828268abe981.jpg?updatedAt=1755612226535',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/ab27cbbb-abe5-41f9-9841-14c213fb3336.jpg?updatedAt=1755612226536',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Eternity%20Linen%20Blue%20&%20Henley%20Trimmed%20Roman%20Blind.jpg?updatedAt=1755612226527',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Double%20Roman%20blinds%20can%20be%20operated%20using%20various_.jpg?updatedAt=1755612226521',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Bordered%20blinds%20are%20the%20perfect%20way%20to%20create%20a_.jpg?updatedAt=1755612226508',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/bd5cfcb0-0b16-4f12-b983-a4ca8b0602d1.jpg?updatedAt=1755612226487',
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/77a65c86-d179-495d-8ee2-c8c41abbd59b.jpg?updatedAt=1755612226369'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Keeping%20it%20neutral%20and%20calm%20in%20the%20bedroom_%20Roman_.jpg?updatedAt=1755612228969',
  },
  koka: {
    title: 'Koka žalūzijas',
    description:
      "<p>Koka žalūzijas ienes telpā dabīgu siltumu un eleganci. Izgatavotas no augstas kvalitātes koksnes, tās ir ne tikai skaistas, bet arī izturīgas un funkcionālas. Tās lieliski papildina gan klasisku, gan modernu interjeru, radot mājīgu un dabisku atmosfēru.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Dabīgs un ekoloģisks materiāls</li><li>Pievieno interjeram siltumu un greznību</li><li>Efektīva saules gaismas kontrole</li><li>Pieejamas dažādos koka toņos un lameļu platumos</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/Rich%20Walnut%20Wooden%20Blind%20-%2050mm%20Slat.jpg?updatedAt=1755612557120',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/Wood%20Blinds%20_WintopiaPhilKo%20_Combi%20_WindowBlinds_.jpg?updatedAt=1755612557119',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/3130e29c-30dc-4779-8030-65b12b9eb65c.jpg?updatedAt=1755612554912',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/nature-deco,%20wooden%20blind%20oak%20wood.jpg?updatedAt=1755612554833',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/Capture%20a%20sophisticated%20style%20with%20this%20Premier_.jpg?updatedAt=1755612554808',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/PRICES%20MAY%20VARY_%20Tailor-Made%20Elegance%20for%20Your_.jpg?updatedAt=1755612554825',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/Beautiful%20wooden%20venetians%20by%20Blinds%20Online%20Ltd_.jpg?updatedAt=1755612554806',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/bamboo%20blinds%20in%20the%20kitchen%20interior%20_kitchen_.jpg?updatedAt=1755612554804',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/29342065-2385-47e6-b571-92b9bd6e87b3.jpg?updatedAt=1755612554705',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/9e6ef7ce-64f0-4d2d-9a4f-9a70d3ef1edb.jpg?updatedAt=1755612554696',
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/3130e29c-30dc-4779-8030-65b12b9eb65c.jpg?updatedAt=1755612554912'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Koka%20%C5%BEal%C5%ABzijas/Rich%20Walnut%20Wooden%20Blind%20-%2050mm%20Slat.jpg?updatedAt=1755612557120',
  },
  foto: {
    title: 'Foto žalūzijas',
    description:
      "<p>Pārveidojiet savu telpu ar unikālām foto žalūzijām! Izvēlieties jebkuru attēlu – vai tā būtu iemīļota ainava, ģimenes fotogrāfija vai uzņēmuma logo – un mēs to pārvērtīsim par iespaidīgu logu noformējumu. Tā ir lieliska iespēja personalizēt interjeru un radīt neatkārtojamu atmosfēru.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Neierobežotas dizaina iespējas</li><li>Augstas kvalitātes druka, kas neizbalē</li><li>Efektīva aizsardzība no saules</li><li>Ideāli piemērotas gan mājoklim, gan kā reklāmas elements birojā</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_.jpg?updatedAt=1755613968460',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/From%20our%20exclusive%201X%20curated%20collection%20Photo%20by_.jpg?updatedAt=1755613968539',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/Gorgeuos%20Hummingbird%20by%20Louise%20Tiler_%20Available%20in_.jpg?updatedAt=1755613968509',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/From%20our%20exclusive%201X%20curated%20collection%20Photo%20by_%20(1).jpg?updatedAt=1755613968454',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/Printed%20photo%20roller%20blinds%20featuring%20stunning_.jpg?updatedAt=1755613968444',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_%20(1).jpg?updatedAt=1755613968435',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_%20(3).jpg?updatedAt=1755613968456',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/Get%20lost%20in%20the%20breathtaking%20view%20of%20_Night%20falls_.jpg?updatedAt=1755613968450',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20žalūzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_%20(2).jpg?updatedAt=1755613968451',
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/Children%20and%20Nursery%20Bedroom%20Roller%20Blinds%20_%20UC_.jpg?updatedAt=1755613968345'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_.jpg?updatedAt=1755613968460',
  },
  mansarda: {
    title: 'Mansarda logu žalūzijas',
    description:
      "<p>Speciāli izstrādātas žalūzijas jumta (mansarda) logiem, kas nodrošina perfektu piegulšanu un efektīvu gaismas kontroli slīpās plaknēs. Tās ir ideāls risinājums bēniņu istabām, guļamistabām un birojiem, pasargājot no pārmērīgas saules gaismas un karstuma.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Saderīgas ar populārākajiem jumta logu ražotājiem (Velux, Fakro, Roto)</li><li>Nodrošina pilnīgu vai daļēju aptumšošanu</li><li>Vienkārša un ērta lietošana</li><li>Sānu vadotnes notur audumu vietā jebkurā loga slīpumā</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/b_ZF_s_zf_bbroletyvelux.jpg?updatedAt=1755694063803',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/2396-17766727.jpg?updatedAt=1755694063801',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/loft-perfectly-pitched.jpg?updatedAt=1755694063778',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Skylight%20blinds%20give%20you%20control%20over%20the%20amount_.jpg?updatedAt=1755694063747',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Skylight%20Blind.jpg?updatedAt=1755694063734',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/7b2d6797-d592-4ff3-80d3-e36c81420870.jpg?updatedAt=1755694063736',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Velux%20windows%20and%20blinds%20perfect%20for%20the%20bedroom_.jpg?updatedAt=1755694063734',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Chez%20Larsson_%20Troubleshooting%20for%20Juliette.jpg?updatedAt=1755694063715',
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/cbbbb6_71dc0f3aae3a4ffbb596e567b4cb0c8f~mv2.avif?updatedAt=1755694063845'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Mansarda%20logu%20%C5%BEal%C5%ABzijas/b_ZF_s_zf_bbroletyvelux.jpg?updatedAt=1755694063803',
  },
  aluminija: {
    title: 'Alumīnija žalūzijas',
    description:
      "<p>Alumīnija žalūzijas ir praktisks, izturīgs un universāls risinājums logu noformēšanai. Tās ir viegli kopjamas, noturīgas pret mitrumu un saules stariem, tāpēc lieliski iederas gan virtuvēs un vannasistabās, gan biroja telpās. Plašā krāsu izvēle ļauj tās viegli pieskaņot jebkuram interjeram.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Izturīgas pret mitrumu un temperatūras svārstībām</li><li>Viegli tīrāmas un neuzkrāj putekļus</li><li>Efektīva gaismas plūsmas regulēšana</li><li>Pieejamas dažādos platumos (16mm, 25mm, 50mm) un plašā krāsu paletē</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/b5ff7e44-ab4e-4514-969b-c60b44d2235c.jpg?updatedAt=1755694878507',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Wood%20venetian%20blinds%20with%20existing%20curtains%20_%20Pure_.jpg?updatedAt=1755694878491',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Venetian%20blinds%20are%20a%20popular%20window%20treatment_.jpg?updatedAt=1755694878465',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Aluminum%2050mm%20Aluminum%20Venetian%20Blinds%20Make%20an_.jpg?updatedAt=1755694878462',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/The%20Project%20Source%202%20Inch%20Cordless%20Premium%20Blind_.jpg?updatedAt=1755694878462',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/We%20just%20wrapped%20up%20an%20aluminum%20blind%20installation_.jpg?updatedAt=1755694878429',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Invite%20a%20stylish%20pop%20of%20colour%20into%20your%20home%20with_.jpg?updatedAt=1755694878397',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Give%20your%20doors%20and%20windows%20a%20snazzy%20facelift%20with_.jpg?updatedAt=1755694878371',
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Bring%20a%20hint%20of%20modern%20sophistication%20into%20your_.jpg?updatedAt=1755694878375'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/b5ff7e44-ab4e-4514-969b-c60b44d2235c.jpg?updatedAt=1755694878507',
  },
  screen: {
    title: 'Žalūzijas "SCREEN"',
    description:
      "<p>SCREEN tipa auduma žalūzijas ir inovatīvs risinājums, kas nodrošina efektīvu aizsardzību no saules stariem un karstuma, vienlaikus saglabājot redzamību uz āru. Speciālais perforētais audums atstaro līdz pat 90% saules enerģijas, neļaujot telpām pārkarst, bet ļaujot izbaudīt dienasgaismu un ainavu aiz loga.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Efektīva aizsardzība pret karstumu un UV stariem</li><li>Saglabā redzamību no iekšpuses uz ārpusi</li><li>Samazina atspīdumu uz ekrāniem</li><li>Izturīgs un viegli kopjams materiāls, piemērots arī āra apstākļiem</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/b_ZF_screen.png?updatedAt=1755759971006',
      'https://ik.imagekit.io/vbvwdejj5/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/Rolety-Screen-Refreksol-103.jpeg?updatedAt=1755759970987',
      'https://ik.imagekit.io/vbvwdejj5/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/images.jpg?updatedAt=1755759970904',
      'https://ik.imagekit.io/vbvwdejj5/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/rulonnyie-shtoryi-20.jpg?updatedAt=1755759970873',
      'https://ik.imagekit.io/vbvwdejj5/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/14233106_51346078217.jpg?updatedAt=1755759970812'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/b_ZF_screen.png?updatedAt=1755759971006',
  },
  'mikstie-logi': {
    title: 'Mīkstie logi',
    description:
      "<p>Mīkstie logi ir moderns un praktisks risinājums terašu, verandu, nojumju un dārza mājiņu aizsardzībai no vēja, lietus un citiem nelabvēlīgiem laikapstākļiem. Izgatavoti no izturīga un caurspīdīga PVC materiāla, tie ļauj baudīt dabas ainavu, vienlaikus nodrošinot komfortu un aizsardzību.</p>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Pilnīga aizsardzība pret vēju, lietu un sniegu</li><li>Saglabā siltumu un pagarina terases izmantošanas sezonu</li><li>Izturīgs un elastīgs materiāls, kas kalpos gadiem</li><li>Viegli uzstādāmi un noņemami pēc nepieciešamības</li></ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/M%C4%ABkstie%20logi/myagkie-okna-iz-pvh-dlya-besedok-i-terras-preimushchestva-i-nedostatki-1.jpg?updatedAt=1755695665092',
      'https://ik.imagekit.io/vbvwdejj5/M%C4%ABkstie%20logi/IMG_20200117_142706-scaled.jpg?updatedAt=1755695665058',
      'https://ik.imagekit.io/vbvwdejj5/M%C4%ABkstie%20logi/IMG_20191025_160204-scaled-e1682802284679.jpg?updatedAt=1755695665048',
      'https://ik.imagekit.io/vbvwdejj5/M%C4%ABkstie%20logi/M-24.jpg?updatedAt=1755695665047',
      'https://ik.imagekit.io/vbvwdejj5/M%C4%ABkstie%20logi/M-12-1.jpg?updatedAt=1755695665018',
      'https://ik.imagekit.io/vbvwdejj5/M%C4%ABkstie%20logi/20171111_130042.jpg?updatedAt=1755695664900'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/M%C4%ABkstie%20logi/myagkie-okna-iz-pvh-dlya-besedok-i-terras-preimushchestva-i-nedostatki-1.jpg?updatedAt=1755695665092',
  },
}

export function getProduct(id: string): Product {
  const base = productsBase[id]
  const title = catalogItems.find((c) => c.id === id)?.title || id
  if (!base) {
    return {
      id,
      title,
      description: genericDesc(title),
      features: genericFeatures,
      images: Array.from({ length: 8 }).map((_, i) => `https://source.unsplash.com/800x600/?blinds,${id}&sig=${i}`),
      thumbnail: placeholderThumb,
    }
  }
  return { id, ...base }
}

export function getAllIds(): string[] {
  return catalogItems.map((c) => c.id)
}
