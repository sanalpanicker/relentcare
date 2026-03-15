import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Mumps – Symptoms & Treatment in Thrissur, Kerala | RelentCare",
  description: "Comprehensive information on mumps symptoms, treatment, MMR vaccine, and prevention at RelentCare ENT Thrissur, Kerala.",
  keywords: ["mumps", "MMR vaccine", "parotitis", "mumps symptoms", "mumps treatment", "Thrissur", "Kerala"],
  alternates: { canonical: "https://www.relentcarehospitals.com/mumps-symptoms-and-treatment-thrissur-kerala-india" },
  openGraph: {
    title: "Mumps – Symptoms & Treatment in Thrissur, Kerala | RelentCare",
    description: "Comprehensive information on mumps symptoms, treatment, MMR vaccine, and prevention at RelentCare ENT Thrissur, Kerala.",
    url: "https://www.relentcarehospitals.com/mumps-symptoms-and-treatment-thrissur-kerala-india",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Mumps – Symptoms & Treatment"
        subtitle="Understanding prevention and management of mumps infection"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "MMR Vaccine Protection",
            content: "The MMR (measles, mumps, rubella) vaccine is the most effective prevention against mumps. Two doses provide approximately 97% immunity. The vaccine is given at 12-15 months and 4-6 years of age. Countries with high MMR vaccination rates have dramatically reduced mumps incidence. Vaccination is safe with minimal side effects and protects both the individual and the community."
          },
          {
            title: "Mumps Symptoms",
            content: "Mumps typically presents with bilateral parotid (salivary gland) swelling, fever, headache, malaise, and difficulty eating. Onset is gradual over 1-3 days. Pain increases when eating, especially acidic foods. The characteristic 'chipmunk cheeks' appearance is diagnostic. Patients are infectious 2-3 days before and 5 days after symptom onset."
          },
          {
            title: "Complications of Mumps",
            content: "Serious complications include meningitis (10-15% of cases), encephalitis, orchitis (testicular inflammation causing potential infertility), pancreatitis, mastitis, and hearing loss. Meningitis presents with neck stiffness, photophobia, and severe headache. Most complications are self-limiting but require careful monitoring. Hospitalization may be needed for severe cases."
          },
          {
            title: "Supportive Care Management",
            content: "No specific antiviral treatment exists for mumps. Management focuses on supportive care: fever reduction with acetaminophen or ibuprofen, maintaining hydration, consuming soft foods, and bed rest. Patients should isolate for 5 days after symptom onset to prevent transmission. Symptoms typically resolve within 7-10 days."
          },
          {
            title: "Prevention and Public Health",
            content: "Universal MMR vaccination is the primary prevention strategy. Ensure children receive both vaccine doses on schedule. Outbreak control requires identifying suspected cases, confirming diagnosis, isolating patients, and checking vaccination status of contacts. Healthcare workers should have documented immunity. Our team provides counseling on vaccine schedule and timing for unvaccinated individuals."
          }
        ]}
      />
    </PageLayout>
  );
}
