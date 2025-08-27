export const metadata = { title: 'PVC Logi — Katalogs' }

export default function Page(){
  return (
    <>
      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Plastmasas (PVC) Logi</h1>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Mūsdienīgi, energoefektīvi un droši – PVC logi ir populārākā izvēle Latvijā, apvienojot izcilu veiktspēju ar pieejamu cenu.
              Mēs piedāvājam augstākās kvalitātes logus, kas nodrošinās komfortu un klusumu Jūsu mājoklī gadiem ilgi.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-teal shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Siltumizolācija</h3>
                <p className="text-gray-600">Vairāku kameru profili un selektīvās stikla paketes efektīvi saglabā siltumu, samazinot apkures rēķinus.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-teal shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Skaņas izolācija</h3>
                <p className="text-gray-600">Kvalitatīvas stikla paketes un blīvējums nodrošina mieru un klusumu Jūsu mājās.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-teal shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Drošība</h3>
                <p className="text-gray-600">Augstas kvalitātes furnitūra ar vairākiem slēgšanas punktiem uzlabo aizsardzību pret ielaušanos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-teal shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Viegla kopšana</h3>
                <p className="text-gray-600">PVC nav jāpārkrāso un to ir viegli kopt ar parastiem līdzekļiem.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-teal shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dizaina daudzveidība</h3>
                <p className="text-gray-600">Plašs krāsu un koka imitācijas klāsts, kā arī dažādas logu formas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-teal shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ilgmūžība</h3>
                <p className="text-gray-600">Kvalitatīvi profili neplaisā, nedzeltē un nedeformējas daudzu gadu garumā.</p>
              </div>
            </div>
          </div>

          {/* Profiles */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Mūsu piedāvātie logu profili</h3>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Strādājam ar pārbaudītiem Eiropas ražotājiem, lai nodrošinātu augstāko kvalitāti.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img src="https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/aluplast-ideal-4000.jpg?updatedAt=1755884035968" alt="Aluplast idel 4000 - 2 stiklu pakete" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Aluplast idel 4000 - 2 stiklu pakete</h4>
                <p className="text-gray-600">Ekonomisks un uzticams profils ar divu stiklu paketi – lieliska izvēle budžeta projektiem.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img src="https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/aluplast-ideal-4000%203%20stikli.jpg?updatedAt=1755884036029" alt="Aluplast idel 4000 - 3 stiklu pakete" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Aluplast idel 4000 - 3 stiklu pakete</h4>
                <p className="text-gray-600">Uzlabota siltumizolācija ar trīs stiklu paketi labākam komfortam.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img src="https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/ideal-7000-3.jpg?updatedAt=1755884035885" alt="Aluplast 7000 - 3 stiklu pakete" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Aluplast 7000 - 3 stiklu pakete</h4>
                <p className="text-gray-600">Augstākas klases profils ar teicamiem siltuma un skaņas rādītājiem.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img src="https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/Wital%20prestige%207000.png?updatedAt=1755884036156" alt="Vital Prestige 7000 - 2 stiklu pakete" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Vital Prestige 7000 - 2 stiklu pakete</h4>
                <p className="text-gray-600">Stabils profils ar divu stiklu paketi un klasisku dizainu.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img src="https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/7000_prestige-1%203333.png?updatedAt=1755884036324" alt="Vital Prestige 7000 - 3 stiklu pakete" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Vital Prestige 7000 - 3 stiklu pakete</h4>
                <p className="text-gray-600">Prestige sērija ar trīs stiklu paketi paaugstinātam komfortam.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img src="https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/Wital-80-1-640x640.jpg?updatedAt=1755884480903" alt="Vital Prestige THERM LIGHT 8000 - 3 stiklu pakete" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Vital Prestige THERM LIGHT 8000 - 3 stiklu pakete</h4>
                <p className="text-gray-600">Īpaši silts profils ar uzlabotām termoizolācijas īpašībām.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <img src="https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/Rehau-SYNEGO-1.jpg?updatedAt=1755884035921" alt="REHAU Synego MD" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">REHAU Synego MD</h4>
                <p className="text-gray-600">Vācu inženierija ar vidusblīvējumu maksimālai aizsardzībai pret aukstumu, troksni un mitrumu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Gatavi jauniem logiem?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">Sazinieties ar mums, lai saņemtu bezmaksas konsultāciju un individuālu cenas piedāvājumu Jūsu projektam.</p>
          <a href="/kontakti" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">Saņemt Piedāvājumu</a>
        </div>
      </section>
    </>
  )
}
