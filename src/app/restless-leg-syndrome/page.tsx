import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Restless Leg Syndrome Treatment in Thrissur | RelentCare",
  description: "Comprehensive treatment for restless leg syndrome including iron therapy and medications at RelentCare Pulmonology Thrissur.",
  keywords: ["restless leg syndrome", "RLS", "Willis-Ekbom disease", "iron deficiency", "dopamine agonists", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/restless-leg-syndrome" },
  openGraph: {
    title: "Restless Leg Syndrome Treatment in Thrissur | RelentCare",
    description: "Comprehensive treatment for restless leg syndrome including iron therapy and medications at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/restless-leg-syndrome",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Restless Leg Syndrome"
        subtitle="Relief from uncomfortable leg sensations affecting sleep quality"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "RLS Symptoms and Features",
            content: "Restless leg syndrome (RLS) is characterized by an irresistible urge to move the legs, especially at night. Patients describe uncomfortable sensations like tingling, crawling, aching, or burning in the legs. Symptoms worsen in the evening and night, often relieved by movement. RLS disrupts sleep initiation and maintenance, causing insomnia and daytime fatigue. Prevalence increases with age and is more common in women."
          },
          {
            title: "Iron Deficiency Link",
            content: "Iron deficiency is a major modifiable cause of RLS. Low iron impairs dopamine function, worsening RLS symptoms. Iron supplementation benefits patients with low serum iron or ferritin levels. Checking iron studies (serum iron, ferritin, TIBC) is essential in all RLS patients. Iron replacement improves symptoms in 50-70% of iron-deficient patients. Sources include oral supplements, dietary changes, or IV iron in severe deficiency."
          },
          {
            title: "Associated Conditions",
            content: "RLS is associated with pregnancy, kidney disease (uremia worsens RLS despite renal replacement therapy), anemia, neuropathy, and Parkinson's disease. Certain medications (antipsychotics, antidepressants, antihistamines) worsen RLS. Caffeine, alcohol, and smoking exacerbate symptoms. Comprehensive history identifies contributing factors for targeted management."
          },
          {
            title: "Medication Management",
            content: "First-line pharmacotherapy includes dopamine agonists (pramipexole, ropinirole) and alpha-2-delta ligands (gabapentin, pregabalin). Levodopa is useful for occasional symptoms. Long-acting formulations provide sustained symptom relief. Opioids are reserved for refractory cases. Low doses prevent augmentation (symptom worsening with prolonged use). Regular monitoring ensures efficacy and tolerability."
          },
          {
            title: "Comprehensive Treatment Plan",
            content: "Management combines iron repletion when deficient, medication optimization, lifestyle modifications (regular exercise, sleep hygiene, avoiding triggers), and treatment of associated conditions. Our sleep specialists provide individualized treatment, monitor response, and adjust therapy as needed. Most patients achieve significant symptom improvement with appropriate diagnosis and tailored management."
          }
        ]}
      />
    </PageLayout>
  );
}
