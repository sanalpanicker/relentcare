import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Migraine Treatment in Thrissur – Best Centre in Kerala | RelentCare",
  description: "Expert migraine treatment in Thrissur including preventive therapy, triptans, and ENT-related migraine management at RelentCare.",
  keywords: ["migraine treatment", "migraine headache", "preventive therapy", "triptans", "tension headache", "Thrissur", "Kerala"],
  alternates: { canonical: "https://www.relentcarehospitals.com/migraine-treatment-thrissur-best-in-kerala" },
  openGraph: {
    title: "Migraine Treatment in Thrissur – Best Centre in Kerala | RelentCare",
    description: "Expert migraine treatment in Thrissur including preventive therapy, triptans, and ENT-related migraine management at RelentCare.",
    url: "https://www.relentcarehospitals.com/migraine-treatment-thrissur-best-in-kerala",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Migraine Treatment"
        subtitle="Comprehensive management of migraines and tension headaches"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Migraine vs. Tension Headache",
            content: "Migraines are neurovascular headaches characterized by unilateral, pulsatile pain lasting 4-72 hours, often with photophobia, phonophobia, nausea, and vomiting. Aura (visual, sensory, motor phenomena) precedes pain in classic migraine. Tension headaches are bilateral, pressure-like, non-pulsatile, and lack associated symptoms. Migraine etiology involves neurochemical and vascular changes; tension headaches involve muscle contraction. Accurate diagnosis guides appropriate treatment selection."
          },
          {
            title: "Migraine Triggers",
            content: "Common triggers include hormonal changes (menses, oral contraceptives), dietary factors (caffeine, alcohol, aged cheese, chocolate), environmental factors (light, sound, weather changes), stress and stress relief, sleep changes, and physical triggers (neck pain, muscle tension). Identifying personal triggers through headache diaries enables avoidance strategies reducing migraine frequency. Some patients have multiple triggers requiring comprehensive trigger management."
          },
          {
            title: "Preventive Therapy",
            content: "Preventive medications reduce migraine frequency and severity. First-line options include beta-blockers (propranolol, timolol), tricyclic antidepressants (amitriptyline), and anticonvulsants (topiramate, valproate). Newer options include monoclonal antibodies against CGRP (calcitonin gene-related peptide) with high efficacy and low side effects. Preventive therapy is considered with 4+ migraines monthly or significant functional impairment. Dose titration and monitoring optimize efficacy and tolerability."
          },
          {
            title: "Acute Migraine Treatment",
            content: "Triptans (sumatriptan, zolmitriptan, naratriptan) are serotonin agonists providing rapid pain relief by 50-60% when taken early. Ergot derivatives and NSAIDs provide alternative acute relief. Antiemetics address nausea. Migraine attack cessation usually occurs within 2 hours of triptan use. Some patients need preventive therapy combined with acute agents. Medication overuse prevention (limiting acute medication use to <10 days monthly) avoids medication-overuse headache development."
          },
          {
            title: "ENT-Related Migraine Management",
            content: "Sinonasal disease, rhinitis, and temporomandibular joint dysfunction can trigger or worsen migraines through referred pain mechanisms and trigeminal nerve irritation. Our integrated ENT and pulmonology approach identifies and treats contributing ENT conditions. Nasal obstruction correction, sinusitis treatment, and rhinitis management may reduce migraine burden. Neck muscle tension from cervical spine involvement is addressed with physiotherapy. Comprehensive evaluation optimizes outcomes."
          }
        ]}
      />
    </PageLayout>
  );
}
