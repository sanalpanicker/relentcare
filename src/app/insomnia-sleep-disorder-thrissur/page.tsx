import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Insomnia & Sleep Disorder Treatment in Thrissur | RelentCare",
  description: "Expert treatment for insomnia and sleep disorders including CBT-I, sleep hygiene, and medication at RelentCare Pulmonology Thrissur.",
  keywords: ["insomnia", "sleep disorder", "CBT-I", "sleep hygiene", "insomnia treatment", "Thrissur", "sleep medicine"],
  alternates: { canonical: "https://www.relentcarehospitals.com/insomnia-sleep-disorder-thrissur" },
  openGraph: {
    title: "Insomnia & Sleep Disorder Treatment in Thrissur | RelentCare",
    description: "Expert treatment for insomnia and sleep disorders including CBT-I, sleep hygiene, and medication at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/insomnia-sleep-disorder-thrissur",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Insomnia & Sleep Disorder"
        subtitle="Comprehensive evaluation and treatment of insomnia"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Types of Insomnia",
            content: "Insomnia manifests as difficulty initiating sleep, maintaining sleep, or early morning awakening. Acute insomnia lasts less than 3 months, often triggered by stress or life events. Chronic insomnia persists for 3+ months, occurring at least 3 nights weekly. Primary insomnia has no identifiable cause, while secondary insomnia results from medical conditions, medications, or psychiatric disorders."
          },
          {
            title: "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
            content: "CBT-I is the gold-standard non-pharmacological treatment for chronic insomnia. It includes cognitive restructuring (addressing unhelpful sleep beliefs), stimulus control (using bed only for sleep), sleep restriction therapy, and relaxation techniques. CBT-I has success rates of 70-80% and provides long-term benefit without medication side effects. Our sleep specialists provide structured CBT-I programmes."
          },
          {
            title: "Sleep Hygiene Optimization",
            content: "Good sleep hygiene includes maintaining regular sleep-wake schedules, creating a dark, quiet, cool bedroom, avoiding caffeine after 2 PM, limiting alcohol, exercising regularly, and avoiding screens 1 hour before bed. Relaxation techniques like progressive muscle relaxation and mindfulness meditation improve sleep onset. These behavioral interventions are the foundation of insomnia treatment."
          },
          {
            title: "Medication Management",
            content: "When behavioral interventions are insufficient, medications may be considered. Options include benzodiazepines, non-benzodiazepine hypnotics (Z-drugs), melatonin agonists, and sedating antidepressants. We use the lowest effective dose for the shortest duration to minimize dependence and side effects. Medication is combined with CBT-I for optimal outcomes."
          },
          {
            title: "Comprehensive Sleep Evaluation",
            content: "We perform thorough history, assess sleep patterns with sleep diaries, and conduct polysomnography if sleep apnoea or other sleep disorders are suspected. Identification of underlying causes guides specific treatment. Our multidisciplinary team addresses medical, psychiatric, and lifestyle factors contributing to insomnia for holistic management."
          }
        ]}
      />
    </PageLayout>
  );
}
