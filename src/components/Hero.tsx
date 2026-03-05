const HERO_IMG =
  "https://static.wixstatic.com/media/11062b_f1b344e2affc49809d02261fe478f934f000.jpg/v1/fill/w_1440,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f1b344e2affc49809d02261fe478f934f000.jpg";

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
