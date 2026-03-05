const testimonials = [
  {
    name: "Albin thomas",
    text: '"I had been struggling with allergy issues for years until I found Dr. Aiswarya Thambi. Her expertise and personalized approach finally brought me the relief I had been searching for. She is not only knowledgeable but also incredibly kind and attentive. I couldn\'t have asked for a better pulmonologist in Thrissur. Highly recommend Dr. Aiswarya for anyone dealing with allergies or asthma—she\'s simply the best!"',
  },
  {
    name: "Preethi, Kottayam",
    text: '"I recently visited RelentCare for vertigo treatment under Dr. Vidya Ramdas, and I couldn\'t be happier with the results! Dr. Vidya is truly the best in Thrissur for vertigo management."',
  },
  {
    name: "Sathish, Thrissur",
    text: '"I had an amazing experience with Dr. Salison Salim Panicker and the team at RelentCare ENT Centre. I went in for PRP injections for hair growth, and the results have been outstanding! Dr. Salison is an excellent doctor with incredible expertise, and the entire staff was attentive and welcoming."',
  },
];

function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-label="Google">
      <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-[#f5f0e1] flex flex-col md:flex-row">
      {/* Google Rating Panel */}
      <div className="bg-white md:w-56 flex-shrink-0 flex flex-col items-center px-5 py-8 border-r border-[#e0d9c8]">
        <p className="text-5xl font-bold text-[#2d2d2d]">5.0</p>
        <div className="text-[#f5a623] text-2xl my-1">★★★★★</div>
        <p className="text-sm font-bold text-[#2d2d2d] text-center leading-snug mb-5">
          Google Overall Rating
          <br />
          RelentCare ENT clinic and Pulmonary medicine care
          <br />
          119 Reviews
        </p>

        <div className="border-t border-[#e0d9c8] pt-4 w-full">
          <p className="text-[#4285f4] text-sm font-semibold">118 63 Eizaz Iqbal</p>
          <p className="text-xs text-gray-400 mb-1">August 23, 2024 · 09:59 AM</p>
          <div className="text-[#f5a623] text-base mb-1">★★★★★</div>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            118 63 Eizaz Iqbal gives RelentCare ENT clinic and Pulmonary medicine care 5 stars
            rating
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#4285f4] font-semibold"
          >
            <GoogleLogo />
            View on Google
          </a>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center text-center px-7 py-9 border-l border-[#e0d9c8] bg-[#f5f0e1]"
          >
            <span className="text-5xl text-[#2d2d2d] leading-none mb-4 font-serif">&ldquo;</span>
            <p className="text-base font-bold text-[#2d2d2d] mb-3">{t.name}</p>
            <p className="text-sm text-[#444] leading-relaxed italic">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
