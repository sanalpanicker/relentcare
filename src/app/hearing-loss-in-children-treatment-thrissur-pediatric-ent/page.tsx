import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Hearing Loss in Children – Treatment in Thrissur | RelentCare Paediatric ENT",
  description: "Comprehensive hearing loss treatment in children including congenital and acquired hearing loss. ABR and OAE testing, hearing aids for children at RelentCare ENT Thrissur.",
  keywords: ["hearing loss children", "pediatric hearing", "ABR test", "OAE test", "hearing aids", "Thrissur", "early intervention"],
  alternates: { canonical: "https://www.relentcarehospitals.com/hearing-loss-in-children-treatment-thrissur-pediatric-ent" },
  openGraph: {
    title: "Hearing Loss in Children – Treatment in Thrissur | RelentCare Paediatric ENT",
    description: "Comprehensive hearing loss treatment in children including congenital and acquired hearing loss. ABR and OAE testing, hearing aids for children at RelentCare ENT Thrissur.",
    url: "https://www.relentcarehospitals.com/hearing-loss-in-children-treatment-thrissur-pediatric-ent",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Hearing Loss in Children"
        subtitle="Early detection and management for better speech and language development"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "Types of Hearing Loss",
            content: "Congenital hearing loss is present from birth due to genetic factors, intrauterine infections, or birth complications. Acquired hearing loss develops after birth due to infections (meningitis, otitis media), trauma, ototoxic medications, or chronic ear disease. Both types require early identification and intervention to ensure normal speech and cognitive development."
          },
          {
            title: "ABR (Auditory Brainstem Response) Testing",
            content: "ABR is a non-invasive test measuring electrical brain responses to sound. It's the gold standard for newborn hearing screening and can be performed without behavioral responses. The test detects the pathway from the ear to the brainstem, helping identify the type and severity of hearing loss. Results guide treatment decisions."
          },
          {
            title: "OAE (Otoacoustic Emissions) Testing",
            content: "OAE testing measures sound waves produced by the inner ear (cochlea) in response to clicks or tones. It's non-invasive, quick, and excellent for newborn screening. OAE identifies outer and middle ear problems. Combined with ABR, it provides comprehensive hearing assessment for children of all ages."
          },
          {
            title: "Hearing Aids for Children",
            content: "Modern pediatric hearing aids are digital, programmable, and designed specifically for children. We offer various styles including behind-the-ear (BTE) and receiver-in-ear (RIE) aids. Our audiologists customize settings to match each child's hearing loss profile, ensuring optimal speech development and educational success."
          },
          {
            title: "Importance of Early Intervention",
            content: "The first three years of life are critical for language development. Early identification and treatment of hearing loss prevent speech and language delays, improve educational outcomes, and enhance social-emotional development. Our pediatric team provides comprehensive auditory rehabilitation, family counseling, and ongoing support."
          }
        ]}
      />
    </PageLayout>
  );
}
