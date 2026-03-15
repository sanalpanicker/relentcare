import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "OSA Surgery in Thrissur | Obstructive Sleep Apnoea | RelentCare ENT",
  description: "Advanced surgical treatment for obstructive sleep apnoea including UPPP, adenotonsillectomy, and tongue base surgery as CPAP alternatives at RelentCare ENT.",
  keywords: ["OSA surgery", "obstructive sleep apnoea", "UPPP", "adenotonsillectomy", "tongue base surgery", "CPAP alternative", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/osa-surgery" },
  openGraph: {
    title: "OSA Surgery in Thrissur | Obstructive Sleep Apnoea | RelentCare ENT",
    description: "Advanced surgical treatment for obstructive sleep apnoea including UPPP, adenotonsillectomy, and tongue base surgery as CPAP alternatives at RelentCare ENT.",
    url: "https://www.relentcarehospitals.com/osa-surgery",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="OSA Surgery"
        subtitle="Advanced surgical options for obstructive sleep apnoea"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "Understanding Obstructive Sleep Apnoea",
            content: "Obstructive sleep apnoea (OSA) occurs when upper airway muscles relax during sleep, causing repeated breathing pauses. This leads to oxygen desaturation, sleep fragmentation, and daytime symptoms. OSA affects approximately 2-3% of children and 2-7% of adults. Surgical intervention aims to enlarge the airway and prevent collapse."
          },
          {
            title: "Uvulopalatopharyngoplasty (UPPP)",
            content: "UPPP is a traditional surgical procedure removing excess soft palate tissue, uvula, and sometimes tonsils to enlarge the oropharynx. The procedure reduces airway obstruction at the level of the soft palate and pharynx. Success rate is approximately 40-50% in carefully selected patients. Common side effects include throat pain and altered voice quality. Recovery takes 2-3 weeks."
          },
          {
            title: "Adenotonsillectomy",
            content: "Adenotonsillectomy is the primary surgical treatment for pediatric OSA and first-line for adenoid/tonsillar obstruction in adults. It widens the airway by removing obstructive lymphoid tissue. Success rates are 80-90% in children with adenotonsillar hypertrophy. It's minimally invasive compared to other surgical options and has favorable outcomes."
          },
          {
            title: "Tongue Base Surgery",
            content: "Tongue base surgery (genioglossus advancement, hyoid suspension, radiofrequency ablation) repositions or reduces tongue base tissue that obstructs the airway during sleep. It's effective for patients with retrolingual obstruction. Techniques vary from skeletal advancement to minimally invasive radiofrequency. These procedures can be combined with other surgeries for improved outcomes."
          },
          {
            title: "CPAP Alternative Surgical Approach",
            content: "For patients intolerant to CPAP therapy, surgical options provide alternative solutions. The choice depends on obstruction site (palatal, lingual, or both), severity, and patient factors. Our multidisciplinary team uses sleep endoscopy to identify obstruction levels and personalize surgical planning. Success is achieved through appropriate patient selection and tailored surgical strategies."
          }
        ]}
      />
    </PageLayout>
  );
}
