import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Adenotonsillectomy (Tonsil & Adenoid Removal) Thrissur | RelentCare",
  description: "Expert adenotonsillectomy surgery in Thrissur. Learn about tonsil and adenoid removal indications, procedures, and pediatric care at RelentCare ENT.",
  keywords: ["adenotonsillectomy", "tonsil removal", "adenoid removal", "Thrissur", "pediatric ENT", "surgery"],
  alternates: { canonical: "https://www.relentcarehospitals.com/adenotonsillectomy" },
  openGraph: {
    title: "Adenotonsillectomy (Tonsil & Adenoid Removal) Thrissur | RelentCare",
    description: "Expert adenotonsillectomy surgery in Thrissur. Learn about tonsil and adenoid removal indications, procedures, and pediatric care at RelentCare ENT.",
    url: "https://www.relentcarehospitals.com/adenotonsillectomy",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Adenotonsillectomy (Tonsil & Adenoid Removal)"
        subtitle="Safe and effective removal of tonsils and adenoids for better health"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "What are Adenoids and Tonsils?",
            content: "Adenoids and tonsils are lymphoid tissues that help fight infections. Adenoids are located in the nasopharynx (back of the nasal cavity), while tonsils are in the oropharynx (back of the throat). In children, these tissues can become enlarged due to repeated infections or allergies, leading to breathing difficulties, sleep disturbances, and other complications."
          },
          {
            title: "Indications for Removal",
            content: "Adenotonsillectomy is recommended when enlarged adenoids or tonsils cause: recurrent acute tonsillitis (7+ episodes in a year), chronic tonsillitis with persistent symptoms, obstructive sleep apnoea, nasal obstruction affecting quality of life, or chronic ear infections with effusion. The decision is made after careful evaluation by our pediatric ENT specialists."
          },
          {
            title: "The Surgical Procedure",
            content: "Adenotonsillectomy is performed under general anesthesia. The surgeon removes the tonsils using cold steel instruments, electrocautery, or harmonic scalpel technique. Adenoids are curetted from the nasopharynx. The procedure typically takes 20-45 minutes. We use the latest techniques to minimize bleeding and postoperative pain."
          },
          {
            title: "Pediatric Care and Safety",
            content: "At RelentCare, we prioritize pediatric safety with specialized anesthetic protocols, age-appropriate pain management, and close monitoring. Children are admitted early for pre-operative assessment, and our team ensures a comfortable experience with family presence during recovery."
          },
          {
            title: "Recovery and Aftercare",
            content: "Most children go home the same day or after overnight observation. Recovery typically takes 1-2 weeks. Patients should consume soft foods, avoid strenuous activities, and stay hydrated. Pain management with mild analgesics is provided. Rare complications include bleeding, infection, or velopharyngeal insufficiency. Contact us immediately if you notice heavy bleeding or persistent fever."
          }
        ]}
      />
    </PageLayout>
  );
}
