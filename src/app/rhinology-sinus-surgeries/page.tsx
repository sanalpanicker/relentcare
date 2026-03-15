import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Rhinology & Sinus Surgeries in Thrissur | RelentCare ENT",
  description: "Comprehensive rhinology and sinus surgery services in Thrissur including FESS, septoplasty, and polyp removal.",
  keywords: ["rhinology", "sinus surgery", "FESS", "nasal surgery", "sinusitis treatment", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/rhinology-sinus-surgeries" },
  openGraph: { 
    title: "Rhinology & Sinus Surgeries in Thrissur | RelentCare ENT",
    description: "Comprehensive rhinology and sinus surgery services in Thrissur including FESS, septoplasty, and polyp removal.",
    url: "https://www.relentcarehospitals.com/rhinology-sinus-surgeries",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Rhinology & Sinus Surgeries in Thrissur"
        subtitle="Comprehensive nasal and sinus treatment services"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "At RelentCare, we offer comprehensive rhinology and sinus surgery services to treat a wide range of nasal and sinus conditions. Our experienced rhinologists use advanced endoscopic techniques to provide minimally invasive solutions for chronic sinusitis, nasal obstruction, and other nasal disorders."
          },
          {
            type: "heading",
            content: "Our Rhinology Services"
          },
          {
            type: "heading",
            content: "Medical Management"
          },
          {
            type: "list",
            items: [
              "Allergy assessment and management",
              "Nasal saline irrigation protocols",
              "Topical and systemic medication therapy",
              "Immunotherapy for chronic conditions",
              "Patient education on nasal health"
            ]
          },
          {
            type: "heading",
            content: "Surgical Services"
          },
          {
            type: "list",
            items: [
              "Functional Endoscopic Sinus Surgery (FESS)",
              "Septoplasty for deviated nasal septum",
              "Endoscopic turbinoplasty",
              "Nasal polyp removal",
              "Endoscopic skull base surgery",
              "Sinus balloon dilation",
              "Foreign body removal"
            ]
          },
          {
            type: "heading",
            content: "Advanced Diagnostic Capabilities"
          },
          {
            type: "list",
            items: [
              "High-resolution CT scanning",
              "Nasal endoscopy with digital documentation",
              "Allergy testing",
              "Sleep studies for sleep-related breathing disorders",
              "Olfactory function testing"
            ]
          },
          {
            type: "heading",
            content: "Conditions We Treat"
          },
          {
            type: "list",
            items: [
              "Chronic sinusitis",
              "Recurrent acute sinusitis",
              "Nasal polyps",
              "Deviated nasal septum",
              "Turbinate hypertrophy",
              "Nasal obstruction",
              "Sleep apnea with nasal contribution",
              "Sinonasal tumors (initial evaluation and endoscopic management)",
              "CSF rhinorrhea",
              "Antrochoanal polyps"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare Rhinology?"
          },
          {
            type: "list",
            items: [
              "Experienced rhinologists with specialized training",
              "State-of-the-art endoscopic equipment",
              "Minimally invasive surgical techniques",
              "Comprehensive pre- and post-operative care",
              "Personalized treatment plans",
              "Excellent success rates with low complications"
            ]
          },
          {
            type: "heading",
            content: "The Endoscopic Advantage"
          },
          {
            type: "text",
            content: "Endoscopic sinus surgery offers patients several advantages over traditional open approaches: smaller incisions, faster recovery, less tissue trauma, excellent visualization, and reduced postoperative pain. Our surgeons are skilled in both basic and complex endoscopic procedures."
          }
        ]}
      />
    </PageLayout>
  );
}
