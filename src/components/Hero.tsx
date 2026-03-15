const HERO_IMG = "/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[500px] flex flex-col items-center justify-center text-center px-6 py-16"
      style={{
        backgroundImage: `url('${HERO_IMG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          RelentCare Centre for Ear, Nose,
          <br />
          Throat, Allergy &amp; Facial Aesthetics
        </h2>
        <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
          committed to delivering exceptional ENT diagnostic and outpatient services.
          Additionally, we offer specialized pulmonology and plastic surgery outpatient services.
        </p>
      </div>
    </section>
  );
}
