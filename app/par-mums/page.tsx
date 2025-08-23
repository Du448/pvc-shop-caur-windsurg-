export const metadata = { title: 'Par mums' }

export default function Page(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="h1 mb-4">Par mums</h1>
          <p className="mb-4">Mēs esam uzņēmums ar vairāk nekā 10 gadu pieredzi PVC logu, žalūziju un to piederumu tirdzniecībā un uzstādīšanā. Mūsu prioritāte ir augsta kvalitāte, uzticamība un individuāla pieeja katram klientam.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Pieredze un profesionalitāte.</li>
            <li>Garantija visiem produktiem.</li>
            <li>Draudzīga klientu apkalpošana.</li>
            <li>Ātra piegāde un uzstādīšana.</li>
          </ul>
        </div>
        <div className="h-72 bg-cover bg-center rounded-lg" style={{backgroundImage:`url(https://picsum.photos/seed/team/800/600)`}} />
      </div>
    </section>
  )
}
