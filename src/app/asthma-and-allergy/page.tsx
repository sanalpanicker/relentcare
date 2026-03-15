import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Asthma & Allergy Treatment in Thrissur | RelentCare Pulmonology",
  description: "Comprehensive asthma and allergy treatment including spirometry, allergy testing, inhalers, and immunotherapy at RelentCare Pulmonology Thrissur.",
  keywords: ["asthma treatment", "allergic asthma", "asthma diagnosis", "inhalers", "immunotherapy", "Thrissur", "pulmonology"],
  alternates: { canonical: "https://www.relentcarehospitals.com/asthma-and-allergy" },
  openGraph: {
    title: "Asthma & Allergy Treatment in Thrissur | RelentCare Pulmonology",
    description: "Comprehensive asthma and allergy treatment including spirometry, allergy testing, inhalers, and immunotherapy at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/asthma-and-allergy",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Asthma & Allergy"
        subtitle="Integrated management of allergic asthma for better breathing"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Allergic Asthma Triggers",
            content: "Allergic asthma is triggered by inhalation of allergens (pollens, dust mites, pet dander, molds). Exposure causes airway inflammation, bronchoconstriction, and mucus production, leading to wheezing, shortness of breath, cough, and chest tightness. Seasonal patterns suggest pollen allergy; year-round symptoms indicate perennial allergens. Identifying specific triggers is crucial for effective management and prevention."
          },
          {
            title: "Diagnosis: Spirometry and Allergy Testing",
            content: "Spirometry measures lung function, showing obstructive pattern in asthma with reduced FEV1 and FEV1/FVC ratio. Reversibility testing confirms asthma (improvement after bronchodilators). Allergy testing (skin prick test or RAST) identifies specific allergens. Combination of clinical presentation, spirometry results, and allergy testing confirms allergic asthma diagnosis and guides targeted treatment."
          },
          {
            title: "Inhaler Therapy",
            content: "Inhalers deliver medications directly to airways for rapid action and minimal side effects. Rescue inhalers (short-acting beta-2 agonists) provide quick relief during acute symptoms. Maintenance inhalers (corticosteroids, long-acting bronchodilators) prevent symptoms with daily use. Combination inhalers simplify therapy. Proper inhaler technique is essential for efficacy; our team provides comprehensive training and technique verification."
          },
          {
            title: "Allergen Avoidance Strategies",
            content: "Avoidance of identified allergens reduces exacerbations and medication needs. Strategies include using HEPA filters, air purifiers, mattress covers, washing bedding frequently, removing carpets, maintaining humidity <50%, avoiding pet exposure, and staying indoors during high pollen counts. Allergen avoidance combined with medications controls symptoms effectively."
          },
          {
            title: "Immunotherapy and Comprehensive Management",
            content: "For inadequately controlled asthma or multiple allergen triggers, subcutaneous immunotherapy (SCIT) or sublingual immunotherapy (SLIT) modifies immune response to allergens, providing long-term symptom relief. Combined with allergen avoidance, pharmacotherapy, and trigger elimination, our comprehensive approach achieves optimal asthma control and quality of life improvement."
          }
        ]}
      />
    </PageLayout>
  );
}
