import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Chronic Cough Treatment in Thrissur | RelentCare Pulmonology",
  description: "Expert diagnosis and treatment of chronic cough including LPRD, asthma, and post-nasal drip at RelentCare Pulmonology Thrissur.",
  keywords: ["chronic cough", "cough treatment", "LPRD", "post-nasal drip", "ACE inhibitor cough", "Thrissur", "pulmonology"],
  alternates: { canonical: "https://www.relentcarehospitals.com/chronic-cough" },
  openGraph: {
    title: "Chronic Cough Treatment in Thrissur | RelentCare Pulmonology",
    description: "Expert diagnosis and treatment of chronic cough including LPRD, asthma, and post-nasal drip at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/chronic-cough",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Chronic Cough"
        subtitle="Systematic evaluation and targeted treatment of persistent cough"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Causes of Chronic Cough",
            content: "Chronic cough (persisting >8 weeks) has multiple etiologies. Laryngopharyngeal reflux disease (LPRD) is the most common cause, where gastric acid reaches the throat. Post-nasal drip from rhinosinusitis or allergies triggers cough. Asthma (especially cough-variant asthma) presents with cough as primary symptom. Chronic obstructive pulmonary disease, tuberculosis, interstitial lung disease, and lung malignancy are serious causes. Detailed history and investigations identify the etiology."
          },
          {
            title: "Laryngopharyngeal Reflux Disease (LPRD)",
            content: "LPRD occurs when stomach contents reflux into the pharynx and larynx, causing throat irritation and cough. Unlike typical GERD, patients may lack heartburn. Symptoms include throat clearing, hoarseness, voice fatigue, and globe sensation. Diagnosis combines clinical presentation and pH monitoring. Treatment includes proton pump inhibitors, lifestyle modifications (elevating head, avoiding triggers), and dietary changes. Most patients improve within 3 months of appropriate therapy."
          },
          {
            title: "Post-Nasal Drip",
            content: "Post-nasal drip (rhinosinusitis, allergies) causes chronic cough through irritation of pharyngeal and laryngeal nerves. Patients experience sensation of mucus dripping down throat, especially when lying down. Associated symptoms include nasal congestion, sneezing, and allergic rhinitis. Treatment includes intranasal corticosteroids, antihistamines, decongestants, and allergen avoidance. Saline irrigation helps clear secretions."
          },
          {
            title: "Asthma and ACE Inhibitor-Related Cough",
            content: "Asthma presents as isolated dry cough in cough-variant asthma, often absent wheezing. Spirometry and bronchial challenge testing confirm diagnosis. ACE inhibitor medications cause dry cough in 10% of users due to bradykinin accumulation. Switching to ARBs or other antihypertensives resolves ACE-inhibitor-induced cough. Proper medication history is essential in chronic cough evaluation."
          },
          {
            title: "Diagnostic Approach and Treatment",
            content: "Systematic evaluation includes detailed history, examination, chest X-ray, spirometry, and other investigations based on initial findings. Most cases resolve with specific treatment of identified cause. Empirical LPRD therapy trials are often diagnostic. Treatment duration varies: LPRD requires 6-12 weeks of therapy, allergic causes need desensitization, asthma needs controller medications. Our pulmonologists provide comprehensive diagnostic workup and individualized treatment plans."
          }
        ]}
      />
    </PageLayout>
  );
}
