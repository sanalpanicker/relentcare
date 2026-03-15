import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Acne Treatment in Thrissur, Kerala | RelentCare Aesthetic Centre",
  description: "Expert acne treatment in Thrissur. Personalized therapy for comedonal, inflammatory, cystic & nodular acne. Chemical peels, laser, PRP available.",
  alternates: { canonical: "https://www.relentcarehospitals.com/acne-treatment-thrissur-kerala" },
  openGraph: {
    title: "Acne Treatment in Thrissur | RelentCare Aesthetic Centre",
    description: "Comprehensive acne treatment solutions from topical therapy to advanced laser and PRP treatments",
    url: "https://www.relentcarehospitals.com/acne-treatment-thrissur-kerala",
  },
};

export default function AcneTreatment() {
  return (
    <PageLayout>
      <ContentPage
        title="Expert Acne Treatment in Thrissur"
        subtitle="Personalized solutions for clear, healthy skin"
        heroTag="Acne Care"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facial Aesthetic Services", href: "/best-facial-aesthetic-services" },
          { label: "Acne Treatment", href: "/acne-treatment-thrissur-kerala" },
        ]}
        sections={[
          {
            heading: "Understanding Acne: Types and Causes",
            body: "Acne is one of the most common skin conditions, affecting millions globally. It develops when hair follicles become clogged with dead skin cells and sebum (oil), creating an environment for bacterial growth. At RelentCare ENT, CHEST & Facial Aesthetic Centre, we classify acne into several types for targeted treatment: Comedonal acne (blackheads and whiteheads), Inflammatory acne (papules and pustules with redness), Cystic acne (large, painful nodules deep within the skin), and Nodular acne (severe, interconnected lesions). Understanding your acne type is crucial for selecting the most effective treatment approach.",
          },
          {
            heading: "Root Causes of Acne",
            body: [
              "Hormonal Factors - Hormonal fluctuations during puberty, menstrual cycles, and hormonal imbalances increase sebum production",
              "Bacterial Infection - Cutibacterium acnes bacteria thrive in sebum-rich, oxygen-poor follicles, triggering inflammation",
              "Excess Sebum Production - Overactive sebaceous glands produce excessive oil, clogging pores and promoting bacterial growth",
              "Follicular Hyperkeratinization - Abnormal shedding of skin cells within follicles creates blockages",
              "Genetics - Family history of acne significantly increases your susceptibility",
              "Dietary Factors - High glycemic index foods and dairy products may exacerbate acne in susceptible individuals",
              "Stress - Elevated cortisol levels during stress can trigger acne flare-ups",
              "Environmental Factors - Pollution, humidity, and cosmetics can worsen acne",
              "Medications - Certain medications including corticosteroids and lithium can trigger acne",
            ],
            list: true,
          },
          {
            heading: "Comprehensive Acne Treatment Options",
            body: "At RelentCare, we offer a multi-modal approach to acne treatment. For mild to moderate acne, topical treatments including benzoyl peroxide, salicylic acid, retinoids, and antibiotics are prescribed based on your skin type. Oral medications such as antibiotics (for bacterial control), hormonal agents (for hormonal acne), and isotretinoin (for severe cystic acne) are recommended when needed. Chemical peels remove dead skin cells and unclog pores while promoting skin renewal. Laser therapy (especially blue light and fractional lasers) reduces bacterial load and minimizes post-inflammatory hyperpigmentation. PRP therapy harnesses your body's natural healing factors to reduce inflammation and promote skin repair. Our dermatologists work with Dr Vidya Ramdas to develop personalized treatment protocols that may combine multiple modalities for optimal results.",
          },
          {
            heading: "Advanced Acne Management at RelentCare",
            body: "Chemical Peels - Glycolic acid, salicylic acid, and TCA peels remove superficial acne lesions and improve skin texture. Laser Therapy - Fractional lasers target acne-prone areas, reducing sebaceous gland activity and improving appearance. PRP Treatment - Platelet-rich plasma stimulates healing and reduces acne-related inflammation. Microneedling - Controlled micro-injuries promote collagen remodeling and improve acne scars. Extraction & Comedone Removal - Professional extraction under sterile conditions prevents scarring. We customize your treatment plan based on acne severity, skin type, and your response to initial therapy.",
          },
          {
            heading: "Acne Prevention and Lifestyle Measures",
            body: [
              "Gentle Cleansing - Wash face twice daily with mild, non-comedogenic cleanser to remove excess oil without stripping skin",
              "Non-Comedogenic Products - Use only products labeled non-comedogenic to prevent pore clogging",
              "Avoid Touching Your Face - Hands transfer bacteria to facial skin; resist the urge to pick or squeeze acne",
              "Dietary Modifications - Reduce high glycemic index foods, limit dairy, and increase antioxidant-rich fruits and vegetables",
              "Stress Management - Practice yoga, meditation, or regular exercise to manage stress-related acne",
              "Sun Protection - Use non-comedogenic sunscreen daily; UV exposure can worsen acne scarring and post-inflammatory hyperpigmentation",
              "Hydration - Drink adequate water to maintain skin hydration and support natural detoxification",
              "Sleep Quality - Aim for 7-9 hours of quality sleep to support skin healing and hormonal balance",
              "Regular Monitoring - Track acne patterns to identify triggers and adjust your skincare routine accordingly",
            ],
            list: true,
          },
          {
            heading: "When to Seek Professional Acne Treatment",
            body: "If over-the-counter products haven't improved your acne after 6-8 weeks, or if you experience persistent inflammatory acne, deep cystic lesions, acne affecting your self-confidence, or significant acne scarring, it's time to consult a professional. Early intervention prevents severe scarring and psychological impact. At RelentCare, we assess your individual case and recommend evidence-based treatments. Dr Vidya Ramdas and our aesthetic specialists will guide you through the most effective options for your specific acne type, skin condition, and goals. We believe in treating not just the acne, but also any residual scars, ensuring you achieve clear, healthy skin.",
          },
        ]}
        ctaText="Book Your Acne Consultation"
        ctaHref="tel:+919746351090"
      />
    </PageLayout>
  );
}
