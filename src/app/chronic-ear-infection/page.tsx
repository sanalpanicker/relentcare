import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Chronic Ear Infection Treatment in Thrissur | RelentCare Paediatric ENT",
  description: "Comprehensive treatment for chronic ear infections including otitis media with effusion, glue ear, grommets, and ventilation tubes at RelentCare ENT Thrissur.",
  keywords: ["chronic ear infection", "otitis media with effusion", "glue ear", "grommets", "ventilation tubes", "Thrissur", "pediatric"],
  alternates: { canonical: "https://www.relentcarehospitals.com/chronic-ear-infection" },
  openGraph: {
    title: "Chronic Ear Infection Treatment in Thrissur | RelentCare Paediatric ENT",
    description: "Comprehensive treatment for chronic ear infections including otitis media with effusion, glue ear, grommets, and ventilation tubes at RelentCare ENT Thrissur.",
    url: "https://www.relentcarehospitals.com/chronic-ear-infection",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Chronic Ear Infection"
        subtitle="Expert management of persistent ear infections and fluid in the middle ear"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "Otitis Media with Effusion (OME)",
            content: "Otitis media with effusion, commonly called 'glue ear,' is the accumulation of fluid in the middle ear without acute infection. It's particularly common in children aged 2-6 years. The fluid causes conductive hearing loss, affecting speech and language development. Most cases resolve spontaneously within 3 months, but some persist for months or years, requiring intervention."
          },
          {
            title: "Causes and Risk Factors",
            content: "OME often follows acute otitis media or upper respiratory infections. Risk factors include adenoid enlargement, Eustachian tube dysfunction, allergies, smoking exposure, and daycare attendance. Recurrent episodes indicate need for comprehensive evaluation to identify underlying causes and plan appropriate management."
          },
          {
            title: "Grommets and Ventilation Tubes",
            content: "Tympanostomy tubes (grommets) are small tubes inserted through the tympanum to allow middle ear ventilation and drainage. The procedure is performed under brief general anesthesia. Grommets typically remain for 6-12 months before naturally exuding. This restores hearing, improves speech development, and reduces ear infections. Most children tolerate grommets well with minimal complications."
          },
          {
            title: "Adenoidectomy",
            content: "When OME persists and is associated with adenoid enlargement, adenoidectomy may be recommended. Removing enlarged adenoids improves Eustachian tube function and reduces middle ear effusion. Adenoidectomy is often combined with grommet insertion for optimal outcomes in appropriately selected cases."
          },
          {
            title: "Antibiotic Management",
            content: "Acute bacterial infections are treated with age-appropriate antibiotics based on culture results and resistance patterns. We avoid unnecessary antibiotics to reduce resistance development. For chronic recurrent infections, topical treatments like quinolone ear drops are preferred. Our team provides personalized antibiotic stewardship while ensuring effective infection control and prevention of complications."
          }
        ]}
      />
    </PageLayout>
  );
}
