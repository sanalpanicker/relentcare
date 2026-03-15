import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Snoring with OSA – Treatment in Thrissur | RelentCare",
  description: "Treatment for snoring and obstructive sleep apnoea including surgical and non-surgical options at RelentCare ENT & Pulmonology Thrissur.",
  keywords: ["snoring treatment", "snoring with OSA", "sleep apnoea surgery", "snoring grades", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/snoring-with-osa-and-its-treatement" },
  openGraph: {
    title: "Snoring with OSA – Treatment in Thrissur | RelentCare",
    description: "Treatment for snoring and obstructive sleep apnoea including surgical and non-surgical options at RelentCare ENT & Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/snoring-with-osa-and-its-treatement",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Snoring with OSA"
        subtitle="Understanding the relationship between snoring and obstructive sleep apnoea"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Relationship Between Snoring and OSA",
            content: "Snoring indicates turbulent airflow in a narrowed upper airway. While not all snorers have OSA, most OSA patients snore. Snoring alone may progress to OSA if underlying airway obstruction worsens. Loud snoring with witnessed breathing pauses strongly suggests OSA requiring evaluation. Snoring is a warning sign prompting sleep study to rule out dangerous breathing pauses."
          },
          {
            title: "Snoring Classification and Severity",
            content: "Snoring can be graded by loudness and frequency. Primary snoring is simple vibration without apnoeas, generally benign. Snoring with periodic breathing suggests transitional sleep apnoea requiring treatment. Snoring with frank apnoeas indicates OSA needing urgent intervention. Polysomnography definitively diagnoses OSA severity (mild, moderate, severe) based on apnoea-hypopnea index (AHI), guiding treatment urgency."
          },
          {
            title: "Non-Surgical Treatment Options",
            content: "CPAP is the gold-standard non-surgical treatment for snoring with OSA. Consistent use eliminates snoring and prevents apnoea events. Weight loss, positional therapy (side sleeping), sleep schedule optimization, and avoiding alcohol/sedatives reduce snoring. Nasal obstruction treatment (intranasal steroids, decongestants) reduces snoring when nasal causes contribute. Oral appliances reposition the jaw to enlarge the airway."
          },
          {
            title: "Surgical Treatment Approaches",
            content: "Surgical options include adenotonsillectomy for obstructive adenotonsillar tissue, uvulopalatopharyngoplasty (UPPP) for palatal obstruction, tongue base surgery for lingual obstruction, and skeletal advancement for retrognathia. Multilevel obstruction may require combined procedures. Success rates vary by procedure and patient selection. Postoperative pain and recovery duration guide patient counseling."
          },
          {
            title: "Integrated Treatment Strategy",
            content: "Optimal management combines medical and surgical approaches tailored to patient factors. Sleep endoscopy identifies obstruction sites guiding surgical selection. CPAP remains gold-standard; surgery offers alternative for CPAP-intolerant patients. Our multidisciplinary team evaluates each patient comprehensively, discusses all options, and implements personalized treatment plans maximizing outcome and quality of life improvement."
          }
        ]}
      />
    </PageLayout>
  );
}
