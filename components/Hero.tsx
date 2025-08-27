import Link from 'next/link'

export default function Hero(){
  return (
    <section className="relative h-[70vh] md:h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/PVC%20logi%201.jpg?updatedAt=1756312238304')" }}
      />
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://ik.imagekit.io/vbvwdejj5/Morning_Sunlight_Bedroom_Video.mp4?updatedAt=1756315486415"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="metadata"
      />
      {/* Overlay removed to keep original video colors */}

      <div className="relative container">
        <div className="max-w-2xl">
          <h1 className="h1 mb-4 text-blue-300">Alumīnija logi, žalūzijas un piederumi</h1>
          <p className="text-lg mb-6 text-blue-300">Augstas kvalitātes risinājumi</p>
          <Link
            href="#katalogs"
            className="btn !bg-blue-600 hover:!bg-blue-700 focus:!ring-2 focus:!ring-blue-300"
          >
            Skatīt produktus
          </Link>
        </div>
      </div>
    </section>
  )
}
