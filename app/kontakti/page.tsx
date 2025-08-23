import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Kontakti' }

export default function Page(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="h1 mb-4">Sazinies ar mums</h1>
          <ContactForm />
        </div>
        <div>
          <div className="card p-6 mb-6">
            <div><strong>Adrese:</strong> Demo iela 1, Rīga</div>
            <div><strong>Tālrunis:</strong> +371 20000000</div>
            <div><strong>E-pasts:</strong> info@demo.lv</div>
          </div>
          <iframe title="Karte" className="w-full h-64 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17492.99316133427!2d24.097!3d56.949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedf3c8f5f9f1f%3A0x400cfcd68f2fe50!2sR%C4%ABga!5e0!3m2!1slv!2slv!4v1700000000000" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}
