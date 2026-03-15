import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Bronchoscopy in Thrissur | Diagnostic & Therapeutic | RelentCare",
  description: "Diagnostic and therapeutic bronchoscopy including flexible bronchoscopy, BAL, and biopsy at RelentCare Pulmonology Thrissur.",
  keywords: ["bronchoscopy", "flexible bronchoscopy", "BAL", "biopsy", "bronchoscopy procedure", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/bronchoscopy" },
  openGraph: {
    title: "Bronchoscopy in Thrissur | Diagnostic & Therapeutic | RelentCare",
    description: "Diagnostic and therapeutic bronchoscopy including flexible bronchoscopy, BAL, and biopsy at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/bronchoscopy",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Bronchoscopy"
        subtitle="Visualization and diagnosis of lung pathology"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Flexible vs. Rigid Bronchoscopy",
            content: "Flexible bronchoscopy uses a thin, flexible tube with camera for airway visualization. It's performed under topical anesthesia with sedation, allowing visualization of distal airways and biopsies. Procedure is minimally invasive with quick recovery. Rigid bronchoscopy uses a straight metal tube, allowing better control, ventilation, and therapeutic procedures. It requires general anesthesia but enables removal of foreign bodies and treatment of major bleeding. Rigid bronchoscopy is used for therapeutic interventions."
          },
          {
            title: "Diagnostic Indications",
            content: "Bronchoscopy diagnoses hemoptysis etiology, evaluates abnormal chest imaging findings, assesses persistent cough, and investigates suspected endobronchial lesions or infections. It allows direct visualization of airway abnormalities, suspicious lesions, and inflammatory changes. Tissue samples (biopsies, brushings) confirm diagnoses. Bronchoscopy helps differentiate infectious, malignant, inflammatory, and obstructive causes of respiratory symptoms."
          },
          {
            title: "Bronchoalveolar Lavage (BAL)",
            content: "BAL involves instilling and withdrawing sterile saline from distal airways to collect respiratory secretions. Fluid analysis identifies infections (bacterial, fungal, viral, TB) through culture and stains. Cell counts and differentials diagnose inflammation patterns (neutrophilic, eosinophilic, lymphocytic). BAL specimens help diagnose infections in immunocompromised patients, fever of unknown origin, and pneumonia. BAL is invaluable for infectious disease diagnosis."
          },
          {
            title: "Tissue Biopsy and Sampling",
            content: "Bronchial biopsies obtain tissue for histological diagnosis of suspected malignancy, infections, or inflammatory conditions. Transbronchial biopsies sample peripheral lung tissue for interstitial lung disease or infection diagnosis. Brushings collect epithelial cells for cytological evaluation. Forceps biopsies provide tissue for specific diagnoses. Multiple samples increase diagnostic yield. Biopsy results guide specific treatment decisions."
          },
          {
            title: "Patient Experience and Preparation",
            content: "Procedures are performed under mild to moderate sedation for patient comfort. Topical anesthesia numbs airways, minimizing discomfort. Most patients tolerate the procedure well with minimal anxiety. Recovery is typically 30-60 minutes with brief observation. Common side effects are minor sore throat and mild hoarseness resolving within hours. Our experienced team ensures safe, comfortable procedures with comprehensive pre- and post-procedure care."
          }
        ]}
      />
    </PageLayout>
  );
}
