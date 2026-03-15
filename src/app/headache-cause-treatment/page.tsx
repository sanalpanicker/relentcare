import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Headache Causes & Treatment in Thrissur | RelentCare ENT & Pulmonology",
  description: "Expert diagnosis and treatment of headaches including tension, migraine, cluster, and sinus headaches at RelentCare Thrissur.",
  keywords: ["headache causes", "headache treatment", "tension headache", "cluster headache", "sinus headache", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/headache-cause-treatment" },
  openGraph: {
    title: "Headache Causes & Treatment in Thrissur | RelentCare ENT & Pulmonology",
    description: "Expert diagnosis and treatment of headaches including tension, migraine, cluster, and sinus headaches at RelentCare Thrissur.",
    url: "https://www.relentcarehospitals.com/headache-cause-treatment",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Headache Causes & Treatment"
        subtitle="Comprehensive evaluation and management of different headache types"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Types of Headaches",
            content: "Primary headaches include tension-type (muscle contraction-related), migraines (neurovascular), and cluster headaches (trigeminal autonomic). Secondary headaches result from underlying conditions like sinusitis, medication side effects, caffeine withdrawal, or serious pathology. Medication-overuse headaches develop with frequent analgesic use. Each type has distinct characteristics guiding diagnosis and treatment. Proper characterization through detailed history is essential."
          },
          {
            title: "Tension-Type Headaches",
            content: "Tension headaches are bilateral, pressing quality, non-pulsatile, lasting 30 minutes to 7 days. Severity is mild to moderate; functional impairment is minimal. Associated symptoms (photophobia, nausea) are absent. Triggers include stress, poor posture, neck muscle tension, and fatigue. Treatment involves stress management, physical therapy, NSAIDs, and muscle relaxants. Preventive therapy (amitriptyline) is used for frequent episodes. Lifestyle modifications address triggering factors."
          },
          {
            title: "Cluster Headaches",
            content: "Cluster headaches are severe, unilateral, orbital pain lasting 15-180 minutes, occurring in series (clusters) over weeks to months separated by remission periods. Autonomic symptoms (ipsilateral tearing, conjunctival injection, rhinorrhea, ptosis) accompany pain. Primarily affects males. Acute treatment uses oxygen inhalation and triptans. Preventive therapy includes corticosteroids, verapamil, and topiramate during cluster periods. Accurate recognition prevents misdiagnosis."
          },
          {
            title: "Sinus Headaches",
            content: "Sinus headaches result from sinusitis causing pain over affected sinuses (frontal, maxillary, ethmoid). Pain worsens with sinus inflammation and improves with successful treatment. Associated symptoms include nasal congestion, rhinorrhea, and post-nasal drip. Diagnosis requires imaging (CT) and clinical correlation. Treatment addresses underlying sinusitis through antibiotics, nasal steroids, and saline irrigation. Our ENT evaluation identifies and treats sinonasal disease contributing to headaches."
          },
          {
            title: "Diagnostic Approach and Treatment",
            content: "Comprehensive history characterizing headache features, triggers, associated symptoms, and medication use guides diagnosis. Neurological examination assesses red flags suggesting serious pathology (sudden onset, progressive worsening, neurological deficits). Imaging (CT, MRI) is obtained when indicated. Treatment is tailored to headache type: tension headaches respond to NSAIDs and lifestyle modification, migraines need triptans and preventive therapy, cluster headaches require acute oxygen and preventive medications. Our multidisciplinary team provides integrated ENT and pulmonology care for optimal headache management."
          }
        ]}
      />
    </PageLayout>
  );
}
