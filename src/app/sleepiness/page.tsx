import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Excessive Daytime Sleepiness Treatment in Thrissur | RelentCare",
  description: "Treatment for excessive daytime sleepiness from sleep apnoea, narcolepsy, and medication side effects at RelentCare Pulmonology Thrissur.",
  keywords: ["daytime sleepiness", "excessive daytime somnolence", "narcolepsy", "sleep apnoea", "Epworth scale", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/sleepiness" },
  openGraph: {
    title: "Excessive Daytime Sleepiness Treatment in Thrissur | RelentCare",
    description: "Treatment for excessive daytime sleepiness from sleep apnoea, narcolepsy, and medication side effects at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/sleepiness",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Excessive Daytime Sleepiness"
        subtitle="Diagnosis and management of daytime somnolence"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Causes of Excessive Daytime Sleepiness",
            content: "Multiple conditions cause excessive daytime sleepiness (EDS): obstructive sleep apnoea (most common), narcolepsy, central sleep apnoea, restless leg syndrome, periodic breathing, and circadian rhythm disorders. Medications (antihistamines, sedatives, antidepressants) and medical conditions (hypothyroidism, depression, anemia) contribute. Identification of the underlying cause is essential for appropriate treatment."
          },
          {
            title: "Sleep Apnoea as a Major Cause",
            content: "Sleep apnoea causes fragmented sleep with repeated oxygen desaturations, leading to poor sleep quality and daytime somnolence. Patients may not recall frequent awakenings. Associated symptoms include loud snoring, witnessed breathing pauses, morning headaches, and nocturia. Treatment of sleep apnoea with CPAP or surgery significantly improves daytime alertness."
          },
          {
            title: "Narcolepsy",
            content: "Narcolepsy is a primary sleep disorder characterized by sudden, irresistible sleep attacks during the day. Type 1 narcolepsy includes cataplexy (sudden muscle weakness triggered by emotions). Diagnosis requires polysomnography showing sleep-onset REM periods and low cerebrospinal fluid hypocretin levels. Treatment includes stimulant medications and lifestyle modifications."
          },
          {
            title: "Epworth Sleepiness Scale",
            content: "The Epworth Sleepiness Scale is a validated 8-item questionnaire quantifying daytime somnolence. Scores range from 0-24; scores >10 indicate clinically significant sleepiness. It helps assess severity, monitor treatment response, and guide need for further investigation. Regular scoring tracks changes with therapy and ensures adequate management of underlying conditions."
          },
          {
            title: "Treatment Approaches",
            content: "Treatment depends on the underlying cause. Sleep apnoea management includes CPAP, oral appliances, or surgery. Narcolepsy treatment involves stimulants (modafinil, methylphenidate) and sodium oxybate. Sleep scheduling, light therapy, and lifestyle modifications help circadian disorders. Our sleep specialists provide comprehensive evaluation and personalized treatment plans for sustained improvement."
          }
        ]}
      />
    </PageLayout>
  );
}
