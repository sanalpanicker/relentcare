import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Paediatric Nasal Obstruction Treatment Thrissur | RelentCare ENT",
  description: "Treatment for pediatric nasal obstruction including enlarged adenoids, deviated septum, choanal atresia. Expert diagnosis and surgical management at RelentCare ENT.",
  keywords: ["nasal obstruction children", "adenoid enlargement", "deviated septum", "choanal atresia", "Thrissur", "pediatric ENT"],
  alternates: { canonical: "https://www.relentcarehospitals.com/pediatric-nasal-obstruction" },
  openGraph: {
    title: "Paediatric Nasal Obstruction Treatment Thrissur | RelentCare ENT",
    description: "Treatment for pediatric nasal obstruction including enlarged adenoids, deviated septum, choanal atresia. Expert diagnosis and surgical management at RelentCare ENT.",
    url: "https://www.relentcarehospitals.com/pediatric-nasal-obstruction",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Paediatric Nasal Obstruction"
        subtitle="Comprehensive diagnosis and treatment of nasal airway obstruction in children"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "Enlarged Adenoids",
            content: "Adenoids naturally enlarge in early childhood as part of immune development. However, when they become too large, they obstruct the nasopharynx, causing nasal congestion, mouth breathing, snoring, and sleep disturbances. Adenoid enlargement is common in children aged 4-8 years. Diagnosis is through clinical examination and endoscopy. Treatment ranges from watchful waiting to adenoidectomy."
          },
          {
            title: "Deviated Septum",
            content: "Deviated nasal septum can be congenital or result from trauma. It causes obstruction to nasal airflow, leading to chronic congestion, sleep disturbances, and ear infections. In children, we initially try conservative management with nasal steroids and saline irrigation. Septoplasty is considered only when symptoms significantly impact quality of life and growth."
          },
          {
            title: "Choanal Atresia",
            content: "Choanal atresia is a rare congenital condition where the back of the nasal passage is blocked by abnormal bony or membranous tissue. It presents with nasal obstruction shortly after birth. Diagnosis is confirmed with CT scan. Surgical correction (choanal atresia repair) creates a patent nasal airway. Early intervention is crucial for normal development."
          },
          {
            title: "Other Causes",
            content: "Nasal polyps (often associated with cystic fibrosis or allergy), nasal masses, bilateral choanal atresia, and turbinate hypertrophy can also cause obstruction. Thorough history, clinical examination, nasal endoscopy, and imaging help identify the specific cause in each child."
          },
          {
            title: "Treatment Options",
            content: "Treatment depends on the cause and severity. Conservative measures include nasal steroids, antihistamines, and saline irrigation for allergic causes. Surgical interventions include adenoidectomy, septoplasty, turbinate reduction, or repair of structural abnormalities. Our pediatric team personalizes treatment to minimize complications while maximizing airway patency and quality of life."
          }
        ]}
      />
    </PageLayout>
  );
}
