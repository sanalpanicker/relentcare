import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Allergy Test & Skin Prick Test in Thrissur (75 Allergens) | RelentCare",
  description: "Comprehensive skin prick testing for 75 allergens in Thrissur. Identify allergies quickly and accurately at RelentCare Allergy Clinic.",
  keywords: ["allergy test", "skin prick test", "75 allergens", "allergy testing", "Thrissur", "allergen testing"],
  alternates: { canonical: "https://www.relentcarehospitals.com/allergy-test-skin-prick-test" },
  openGraph: {
    title: "Allergy Test & Skin Prick Test in Thrissur (75 Allergens) | RelentCare",
    description: "Comprehensive skin prick testing for 75 allergens in Thrissur. Identify allergies quickly and accurately at RelentCare Allergy Clinic.",
    url: "https://www.relentcarehospitals.com/allergy-test-skin-prick-test",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Allergy Test & Skin Prick Test"
        subtitle="Comprehensive allergen testing with 75-allergen panel"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "What is Skin Prick Testing?",
            content: "Skin prick test (SPT) is a quick, safe, and cost-effective method to identify allergens causing allergic reactions. Small amounts of allergen extracts are placed on the skin and pricked with a needle. If the patient is allergic, histamine release causes localized itching, redness, and swelling (wheal and flare reaction) within 15-20 minutes. Larger reactions indicate stronger allergic sensitivity."
          },
          {
            title: "75-Allergen Panel Coverage",
            content: "Our comprehensive 75-allergen panel tests for common environmental and food allergens including pollens (grasses, trees, weeds), dust mites, molds, pet dander, cockroach, food allergens (peanuts, tree nuts, shellfish, eggs, milk, wheat), latex, and venom. This broad panel identifies multiple triggers, providing complete picture of patient's allergic profile for targeted avoidance and treatment."
          },
          {
            title: "How the Test is Performed",
            content: "The test is conducted in our allergy clinic in 30-45 minutes. The forearm is cleaned with alcohol; allergen extracts are placed in rows and pricked with a lancet. Control solutions (histamine positive, saline negative) ensure test validity. Patients rate reactions on a scale. Results are immediate. The procedure is painless with minimal discomfort. No downtime; patients resume normal activities immediately."
          },
          {
            title: "Interpreting Results",
            content: "Wheal size determines allergen sensitivity: <3mm (negative), 3-5mm (mild allergy), 5-10mm (moderate allergy), >10mm (severe allergy). Larger wheals indicate greater allergic sensitivity. Clinical correlation is essential; positive tests indicate sensitization, but symptoms depend on allergen exposure and individual susceptibility. Our allergists correlate test results with symptoms to guide avoidance and treatment."
          },
          {
            title: "Clinical Applications",
            content: "SPT results guide allergen avoidance, therapeutic decisions, and immunotherapy candidacy. Patients learn trigger avoidance strategies, environmental controls, medication selection, and immunotherapy benefits. Testing is valuable before starting immunotherapy to identify specific allergens for treatment. Regular retesting monitors changes in sensitization pattern and treatment response effectiveness."
          }
        ]}
      />
    </PageLayout>
  );
}
