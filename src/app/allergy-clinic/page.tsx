import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Allergy Clinic & Immunotherapy in Thrissur | RelentCare Pulmonology",
  description: "Comprehensive allergy evaluation and immunotherapy programme at RelentCare Allergy Clinic Thrissur. Expert allergy diagnosis and treatment.",
  keywords: ["allergy clinic", "allergy testing", "immunotherapy", "RAST testing", "skin prick test", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/allergy-clinic" },
  openGraph: {
    title: "Allergy Clinic & Immunotherapy in Thrissur | RelentCare Pulmonology",
    description: "Comprehensive allergy evaluation and immunotherapy programme at RelentCare Allergy Clinic Thrissur. Expert allergy diagnosis and treatment.",
    url: "https://www.relentcarehospitals.com/allergy-clinic",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Allergy Clinic & Immunotherapy"
        subtitle="Expert evaluation and personalized immunotherapy programmes"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Comprehensive Allergy Workup",
            content: "Our allergy clinic performs complete evaluation including detailed history of symptoms and triggers, examination, and comprehensive testing. We assess seasonal patterns, environmental exposures, occupational triggers, and food-related symptoms. Associated conditions like asthma, rhinitis, and atopic dermatitis are identified. Comprehensive evaluation guides targeted treatment and immunotherapy candidacy. Patient education about triggers and avoidance strategies is provided."
          },
          {
            title: "Skin Prick Testing",
            content: "Skin prick test (SPT) remains the primary diagnostic tool for IgE-mediated allergies. Our comprehensive 75-allergen panel tests environmental (pollens, dust mites, molds, pets) and food allergens. Results are available within 15-20 minutes. Test sensitivity is 90%+ for environmental allergens. Results directly guide immunotherapy allergen selection and environmental control measures. SPT is cost-effective, safe, and provides immediate actionable results."
          },
          {
            title: "RAST (Radioallergosorbent Testing)",
            content: "RAST measures allergen-specific IgE levels in serum, providing quantitative allergen sensitization data. RAST is useful when skin testing is contraindicated (severe eczema, antihistamine use) or when SPT is equivocal. Specific IgE levels correlate with clinical symptoms and predict immunotherapy response. RAST allows testing for virtually any allergen. Results complement SPT in diagnosis and treatment planning."
          },
          {
            title: "Immunotherapy Programme",
            content: "We design personalized immunotherapy based on allergen testing results and symptom severity. SCIT (allergy shots) involves regular injections with gradual dose increases over 3-5 years. SLIT (sublingual tablets) offers convenient daily treatment. Both modalities modify immune response, providing long-term symptom relief and reducing medication needs. Programme includes dose titration, monitoring for efficacy and adverse reactions, and maintenance therapy optimization."
          },
          {
            title: "Integrated Care and Patient Management",
            content: "Our allergy clinic provides one-stop comprehensive care combining diagnosis, education, medical management, and immunotherapy. We address multiple allergic conditions (rhinitis, asthma, eczema, food allergy) simultaneously. Regular follow-up assesses treatment response, monitors immunotherapy progress, and adjusts interventions. Multidisciplinary consultation with ENT and pulmonology specialists addresses complex cases. Our goal is optimal symptom control and improved quality of life."
          }
        ]}
      />
    </PageLayout>
  );
}
