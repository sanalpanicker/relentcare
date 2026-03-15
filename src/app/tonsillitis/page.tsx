import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Tonsillitis Treatment in Children – Thrissur | RelentCare ENT",
  description: "Comprehensive tonsillitis treatment in children including acute, chronic tonsillitis, and strep throat management at RelentCare ENT Thrissur.",
  keywords: ["tonsillitis", "strep throat", "sore throat children", "tonsillectomy", "Thrissur", "pediatric ENT"],
  alternates: { canonical: "https://www.relentcarehospitals.com/tonsillitis" },
  openGraph: {
    title: "Tonsillitis Treatment in Children – Thrissur | RelentCare ENT",
    description: "Comprehensive tonsillitis treatment in children including acute, chronic tonsillitis, and strep throat management at RelentCare ENT Thrissur.",
    url: "https://www.relentcarehospitals.com/tonsillitis",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Tonsillitis"
        subtitle="Effective treatment of acute and chronic tonsil inflammation"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "Acute vs. Chronic Tonsillitis",
            content: "Acute tonsillitis is sudden inflammation of the tonsils due to viral or bacterial infection, presenting with sore throat, fever, and difficulty swallowing. Chronic tonsillitis involves persistent inflammation with recurrent episodes (7+ per year or 5+ per year for 2 consecutive years). Chronic tonsillitis may lead to obstructive symptoms and affects quality of life."
          },
          {
            title: "Streptococcal Pharyngitis (Strep Throat)",
            content: "Group A Streptococcus causes strep throat, characterized by severe sore throat, fever, headache, and sometimes scarlet rash. Diagnosis is confirmed with rapid strep test or throat culture. Untreated strep throat can lead to serious complications like rheumatic fever or post-streptococcal glomerulonephritis. Prompt antibiotic treatment prevents these complications."
          },
          {
            title: "Antibiotic Management",
            content: "For bacterial tonsillitis, first-line antibiotics include amoxicillin or azithromycin. Treatment duration is typically 10 days. Viral tonsillitis (most common) requires supportive care only. We obtain throat culture to guide specific therapy. Appropriate antibiotic selection and completion prevents complications and reduces antibiotic resistance development."
          },
          {
            title: "Indications for Tonsillectomy",
            content: "Tonsillectomy is considered for: recurrent acute tonsillitis (7+ episodes in a year), chronic tonsillitis with persistent symptoms unresponsive to treatment, obstructive sleep apnoea, asymmetric enlargement suggesting malignancy, or peritonsillar abscess complications. The decision balances benefits against risks including pain, bleeding, and velopharyngeal insufficiency."
          },
          {
            title: "Surgical Approach and Recovery",
            content: "We perform adenotonsillectomy under general anesthesia using modern surgical techniques to minimize bleeding and postoperative pain. Most children recover within 1-2 weeks. Pain management includes acetaminophen and ibuprofen; strong opioids are generally avoided. Soft diet and hydration are essential. Rare complications include primary or secondary hemorrhage, infection, and Voice changes."
          }
        ]}
      />
    </PageLayout>
  );
}
