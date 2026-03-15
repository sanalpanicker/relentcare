import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Allergy & Immunotherapy in Thrissur | RelentCare Pulmonology",
  description: "Allergy immunotherapy treatment in Thrissur including SCIT, SLIT for allergic rhinitis, asthma, and food allergies at RelentCare Pulmonology.",
  keywords: ["immunotherapy", "allergy shots", "SCIT", "SLIT", "desensitization", "Thrissur", "allergy treatment"],
  alternates: { canonical: "https://www.relentcarehospitals.com/allergy-and-immunotherapy" },
  openGraph: {
    title: "Allergy & Immunotherapy in Thrissur | RelentCare Pulmonology",
    description: "Allergy immunotherapy treatment in Thrissur including SCIT, SLIT for allergic rhinitis, asthma, and food allergies at RelentCare Pulmonology.",
    url: "https://www.relentcarehospitals.com/allergy-and-immunotherapy",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Allergy & Immunotherapy"
        subtitle="Disease-modifying treatment for allergic diseases"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Subcutaneous Immunotherapy (SCIT)",
            content: "SCIT, also called allergy shots, involves regular subcutaneous injections of gradually increasing allergen doses. Therapy typically lasts 3-5 years with 2-4 weekly injections during the build-up phase, then monthly maintenance injections. SCIT modifies immune response, reducing allergic reactions to natural allergen exposure. Success rate is 70-90% for appropriately selected patients with clear allergen sensitization."
          },
          {
            title: "Sublingual Immunotherapy (SLIT)",
            content: "SLIT involves dissolving allergen tablets or liquid under the tongue daily. Onset of treatment is less rapid than SCIT, but effectiveness is comparable for mild-to-moderate disease. SLIT is convenient for patients avoiding injections and can be self-administered at home after initial supervision. Tablet and liquid formulations available for different allergens. Compliance is often better due to ease of administration."
          },
          {
            title: "Mechanism and Immune Changes",
            content: "Immunotherapy increases regulatory T cells and IL-10 production, reducing Th2-mediated allergic responses. It increases IgG-blocking antibodies and decreases IgE levels over time. These immune modifications lead to tolerance development. Reduced reactivity to natural allergen exposure follows these immunological changes. Long-term benefit persists even after therapy discontinuation due to immune memory changes."
          },
          {
            title: "Conditions Treated",
            content: "Immunotherapy is effective for allergic rhinitis (seasonal or perennial), allergic asthma, and allergic eye disease. Hymenoptera venom immunotherapy is highly effective for bee/wasp sting allergies with 95%+ success preventing systemic reactions. Sublingual immunotherapy for food allergies (peanut, tree nuts, shellfish) shows promise in recent trials. Patient selection based on allergy testing and symptom severity ensures optimal outcomes."
          },
          {
            title: "Safety and Efficacy",
            content: "Immunotherapy is safe with minimal systemic side effects when properly administered. Local injection site reactions (mild swelling) are common but resolve within hours. Systemic reactions (rare, <1%) are managed immediately. Thorough allergy testing before initiating therapy ensures appropriate allergen selection. Our immunotherapy programme includes comprehensive patient education, regular monitoring, and dose adjustment to maximize efficacy and safety."
          }
        ]}
      />
    </PageLayout>
  );
}
