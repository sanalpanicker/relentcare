import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Best Facial Aesthetic Services in Thrissur | RelentCare",
  description: "Comprehensive facial aesthetic & cosmetic services in Thrissur. Acne treatment, laser, PRP, subcision, and more. Expert care by Dr Vidya Ramdas.",
  alternates: { canonical: "https://www.relentcarehospitals.com/best-facial-aesthetic-services" },
  openGraph: {
    title: "Best Facial Aesthetic Services in Thrissur | RelentCare",
    description: "Advanced facial aesthetic treatments including acne care, laser therapy, PRP, and cosmetic procedures",
    url: "https://www.relentcarehospitals.com/best-facial-aesthetic-services",
  },
};

export default function FacialAestheticServices() {
  return (
    <PageLayout>
      <ContentPage
        title="Facial Aesthetic & Cosmetic Services in Thrissur"
        subtitle="Advanced treatments for skin rejuvenation and cosmetic concerns"
        heroTag="Facial Aesthetics"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facial Aesthetic Services", href: "/best-facial-aesthetic-services" },
        ]}
        sections={[
          {
            heading: "Welcome to RelentCare's Aesthetic Centre",
            body: "At RelentCare ENT, CHEST & Facial Aesthetic Centre in Thrissur, we offer a comprehensive range of facial aesthetic and cosmetic services designed to enhance your natural beauty and address common skin concerns. Under the expert guidance of Dr Vidya Ramdas, our aesthetic team provides personalized treatment plans using the latest technology and evidence-based approaches. Whether you're dealing with acne, scars, pigmentation issues, or seeking skin rejuvenation, we have the expertise and state-of-the-art equipment to deliver exceptional results.",
          },
          {
            heading: "Our Facial Aesthetic Services",
            body: [
              "Acne Treatment - Comprehensive management of comedonal, inflammatory, cystic, and nodular acne using topical treatments, oral medications, chemical peels, laser therapy, and PRP",
              "Advanced Laser Treatments - CO2 laser, Nd:YAG laser, and fractional laser for acne scars, pigmentation, skin rejuvenation, and hair removal",
              "Acne Scar Subcision - Minimally invasive procedure for deep rolling and boxcar scars with combined PRP and laser therapy",
              "Glutathione IV Therapy - Advanced skin brightening and antioxidant treatment for enhanced skin tone and radiance",
              "PRP (Platelet-Rich Plasma) Therapy - Natural biological treatment for hair loss, skin rejuvenation, and acne scar improvement",
              "Lipoma Removal - Surgical excision of benign fatty tumours with minimal scarring",
              "Medical Piercings - Safe nose and ear piercing performed by medical professionals using sterile technique",
              "Ear Lobule Repair - Surgical restoration of torn or split earlobes due to heavy jewellery or trauma",
              "Wart Removal - Specialized treatment for common, plantar, flat, and other wart types using cryotherapy, electrocautery, and laser",
            ],
            list: true,
          },
          {
            heading: "Why Choose RelentCare for Aesthetic Care?",
            body: [
              "Expert Team - Led by Dr Vidya Ramdas with specialized training in facial aesthetics and cosmetic procedures",
              "Advanced Technology - State-of-the-art equipment including laser systems, PRP technology, and surgical facilities",
              "Personalized Approach - Each patient receives a customized treatment plan tailored to their skin type and concerns",
              "Safe & Sterile - Strict adherence to hygiene protocols and infection control measures",
              "Minimal Downtime - Most procedures require minimal recovery time, allowing you to return to daily activities",
              "Comprehensive Care - From diagnosis to follow-up, we provide complete management of your aesthetic concerns",
              "Affordable Solutions - Flexible payment options and transparent pricing for all treatments",
            ],
            list: true,
          },
          {
            heading: "Advanced Treatment Technologies",
            body: "Our aesthetic centre is equipped with cutting-edge technology including fractional CO2 lasers for precision skin resurfacing, Nd:YAG lasers for deeper dermal concerns, advanced PRP extraction and application systems, and sterile surgical facilities for minimally invasive procedures. We combine multiple modalities when needed to achieve optimal results. For example, combining subcision with PRP and fractional laser provides superior outcomes for deep acne scars compared to single-modality treatments.",
          },
          {
            heading: "Patient-Centric Care Philosophy",
            body: "We believe in transparent communication, realistic expectations, and evidence-based treatment selection. During your initial consultation, Dr Vidya Ramdas will thoroughly assess your skin condition, discuss your goals, and recommend the most suitable treatment approach. We prioritize your comfort and safety throughout the entire treatment journey, from pre-procedure preparation to post-procedure care and follow-up.",
          },
          {
            heading: "Schedule Your Aesthetic Consultation",
            body: "Ready to address your aesthetic concerns and achieve your best skin? Contact RelentCare today to schedule a personalized consultation with Dr Vidya Ramdas. We're located in Thrissur, Kerala, and serve patients from across the region. Our friendly team is ready to answer your questions and help you begin your aesthetic transformation.",
          },
        ]}
        ctaText="Book Your Consultation"
        ctaHref="tel:+919746351090"
      />
    </PageLayout>
  );
}
