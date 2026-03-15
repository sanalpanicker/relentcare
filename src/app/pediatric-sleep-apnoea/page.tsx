import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Paediatric Sleep Apnoea Treatment in Thrissur | RelentCare ENT",
  description: "Expert treatment for pediatric sleep apnoea in Thrissur. Learn about symptoms, overnight oximetry testing, and adenotonsillectomy at RelentCare ENT.",
  keywords: ["pediatric sleep apnoea", "sleep apnoea children", "snoring", "oximetry", "adenotonsillectomy", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/pediatric-sleep-apnoea" },
  openGraph: {
    title: "Paediatric Sleep Apnoea Treatment in Thrissur | RelentCare ENT",
    description: "Expert treatment for pediatric sleep apnoea in Thrissur. Learn about symptoms, overnight oximetry testing, and adenotonsillectomy at RelentCare ENT.",
    url: "https://www.relentcarehospitals.com/pediatric-sleep-apnoea",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Paediatric Sleep Apnoea"
        subtitle="Recognizing and treating sleep-disordered breathing in children"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "Recognizing Symptoms",
            content: "Key symptoms of pediatric sleep apnoea include loud snoring, pauses in breathing during sleep, restless sleep with frequent arousals, and daytime sleepiness. Children may experience bedwetting, morning headaches, and behavioral issues like hyperactivity or poor school performance. Sleep apnoea in children can affect growth and development. Parents should seek evaluation if these symptoms are present."
          },
          {
            title: "Behavioral and Developmental Effects",
            content: "Unlike adults, children with sleep apnoea often present with hyperactivity, inattention, and aggression rather than daytime somnolence. Untreated sleep apnoea leads to poor academic performance, behavioral problems, and impaired growth. School teachers may note increased inattentiveness. Early diagnosis and treatment prevent these long-term complications."
          },
          {
            title: "Overnight Oximetry Testing",
            content: "Overnight oximetry is a non-invasive screening test measuring blood oxygen levels and heart rate during sleep. It detects oxygen desaturation events indicating apnoea episodes. This home-based test helps identify children who need further evaluation with sleep study (polysomnography) or treatment. Results guide clinical decision-making for surgical or medical interventions."
          },
          {
            title: "Sleep Study (Polysomnography)",
            content: "Overnight polysomnography provides comprehensive assessment of sleep architecture, breathing patterns, oxygen levels, and cardiac rhythm. It definitively diagnoses sleep apnoea and assesses severity (mild, moderate, severe). Results help determine if adenotonsillectomy alone is sufficient or if additional treatment like CPAP is needed."
          },
          {
            title: "Adenotonsillectomy",
            content: "Adenotonsillectomy is the first-line surgical treatment for pediatric sleep apnoea caused by adenoid/tonsillar enlargement. Success rate is 80-90% in appropriately selected children. It's performed under general anesthesia as a day-care procedure. Post-operative recovery typically takes 1-2 weeks. Our pediatric team carefully selects candidates and provides comprehensive perioperative care."
          }
        ]}
      />
    </PageLayout>
  );
}
