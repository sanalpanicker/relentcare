import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Respiratory Disease Treatment in Thrissur | RelentCare Pulmonology",
  description: "Comprehensive respiratory disease treatment at RelentCare Pulmonology Thrissur. Expert care for lung and breathing conditions.",
  keywords: ["respiratory disease", "lung disease", "breathing problems", "pulmonology", "Thrissur", "respiratory health"],
  alternates: { canonical: "https://www.relentcarehospitals.com/respiratory-disease" },
  openGraph: {
    title: "Respiratory Disease Treatment in Thrissur | RelentCare Pulmonology",
    description: "Comprehensive respiratory disease treatment at RelentCare Pulmonology Thrissur. Expert care for lung and breathing conditions.",
    url: "https://www.relentcarehospitals.com/respiratory-disease",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Respiratory Disease"
        subtitle="Expert diagnosis and management of all respiratory conditions"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Airway Diseases",
            content: "We treat obstructive airway diseases including asthma, chronic obstructive pulmonary disease (COPD), bronchiectasis, and cystic fibrosis. These conditions involve airway inflammation and obstruction, causing airflow limitation. Symptoms include dyspnea, cough, wheezing, and exercise limitation. Management combines medications (bronchodilators, corticosteroids), smoking cessation, pulmonary rehabilitation, and oxygen therapy when needed."
          },
          {
            title: "Sleep-Related Respiratory Disorders",
            content: "Sleep apnoea and hypoventilation syndromes disrupt breathing during sleep, causing oxygen desaturation and sleep fragmentation. Diagnosis requires polysomnography. Treatment options include CPAP, bilevel devices, oral appliances, or surgery depending on type and severity. Early recognition and treatment prevent cardiovascular complications and improve sleep quality."
          },
          {
            title: "Interstitial Lung Diseases",
            content: "Interstitial lung disease includes idiopathic pulmonary fibrosis, hypersensitivity pneumonitis, sarcoidosis, and occupational lung diseases. Progressive fibrosis leads to dyspnea and reduced exercise capacity. Diagnosis requires clinical presentation, imaging (HRCT), and sometimes biopsy. Treatment aims to slow progression and manage symptoms. Early intervention improves outcomes."
          },
          {
            title: "Allergic and Immunological Disorders",
            content: "We manage allergic asthma, allergic bronchopulmonary aspergillosis, and hypersensitivity pneumonitis. Immunotherapy, allergen avoidance, and immunosuppressive therapy are tailored to disease type. Comprehensive allergy evaluation guides management. Regular monitoring ensures response to therapy and adjustment of treatment as needed."
          },
          {
            title: "Infectious and Chronic Lung Diseases",
            content: "We provide expert care for tuberculosis, recurrent pneumonia, bronchiectasis, and post-infectious complications. Multidisciplinary approach includes medical therapy, bronchoscopy, rehabilitation, and surgical consultation when indicated. Our team manages acute exacerbations and chronic disease maintenance to optimize respiratory function and quality of life."
          }
        ]}
      />
    </PageLayout>
  );
}
