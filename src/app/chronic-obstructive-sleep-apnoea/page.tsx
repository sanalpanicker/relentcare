import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "COPD Treatment in Thrissur | Chronic Obstructive Pulmonary Disease | RelentCare",
  description: "Comprehensive COPD treatment including inhalers, pulmonary rehabilitation, and exacerbation management at RelentCare Pulmonology Thrissur.",
  keywords: ["COPD", "chronic obstructive pulmonary disease", "COPD treatment", "inhalers", "pulmonary rehabilitation", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/chronic-obstructive-sleep-apnoea" },
  openGraph: {
    title: "COPD Treatment in Thrissur | Chronic Obstructive Pulmonary Disease | RelentCare",
    description: "Comprehensive COPD treatment including inhalers, pulmonary rehabilitation, and exacerbation management at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/chronic-obstructive-sleep-apnoea",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="COPD (Chronic Obstructive Pulmonary Disease)"
        subtitle="Comprehensive management of progressive obstructive lung disease"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "COPD Stages and Classification",
            content: "COPD is classified into GOLD stages I-IV based on spirometry FEV1 percentage and symptoms. Stage I (mild) has FEV1 ≥80% predicted with minimal symptoms. Stage II (moderate) has FEV1 50-79% with dyspnea on exertion. Stage III (severe) has FEV1 30-49% with dyspnea and exacerbations. Stage IV (very severe) has FEV1 <30% with severe airflow limitation. Staging guides treatment intensity and interventions."
          },
          {
            title: "Inhaler Therapies (LAMA, LABA, ICS)",
            content: "Treatment uses stepwise approach with combination inhalers optimizing symptom control and reducing exacerbations. Long-acting muscarinic antagonists (LAMA) block acetylcholine-induced bronchoconstriction. Long-acting beta-2 agonists (LABA) cause prolonged bronchodilation. Inhaled corticosteroids (ICS) reduce airway inflammation. LAMA/LABA combinations are preferred initial therapy. Triple therapy (LAMA/LABA/ICS) for frequent exacerbators or asthma-COPD overlap. Proper inhaler technique ensures efficacy."
          },
          {
            title: "Oxygen Therapy",
            content: "Oxygen supplementation is indicated for resting hypoxemia (SpO2 <88% or PaO2 <55 mmHg). Oxygen improves survival, exercise capacity, and quality of life. Supplementation may be continuous, nocturnal, or during exercise depending on desaturation patterns. Long-term oxygen therapy (LTOT) >16 hours daily shows mortality benefit. Our team performs appropriate oximetry assessment to determine oxygen therapy need and titrates flow for optimal hypoxemia correction."
          },
          {
            title: "Pulmonary Rehabilitation",
            content: "Pulmonary rehabilitation combines exercise training, education, nutritional support, and psychosocial intervention. Evidence shows benefits including improved exercise capacity, reduced dyspnea, better quality of life, and fewer hospitalizations. Programs typically last 8-12 weeks with exercises tailored to functional capacity. Maintenance programs prolong benefits. Rehabilitation is beneficial for all COPD stages and should be offered universally."
          },
          {
            title: "Exacerbation Management",
            content: "COPD exacerbations are acute worsening of symptoms requiring treatment escalation. Causes include respiratory infections, air pollution, and medication non-compliance. Management includes systemic corticosteroids, antibiotics (if bacterial infection suspected), bronchodilators, and oxygen therapy. Hospitalization is needed for severe exacerbations with respiratory failure. Exacerbation prevention through vaccination, smoking cessation, and adherence to therapy is essential for disease control."
          }
        ]}
      />
    </PageLayout>
  );
}
