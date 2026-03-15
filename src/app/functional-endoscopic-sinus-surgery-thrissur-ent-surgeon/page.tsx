import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Functional Endoscopic Sinus Surgery (FESS) in Thrissur | RelentCare",
  description: "Expert FESS surgery for chronic sinusitis and nasal polyps in Thrissur. Learn about the minimally invasive procedure and recovery.",
  keywords: ["FESS", "functional endoscopic sinus surgery", "chronic sinusitis", "nasal polyps", "endoscopic surgery", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/functional-endoscopic-sinus-surgery-thrissur-ent-surgeon" },
  openGraph: { 
    title: "Functional Endoscopic Sinus Surgery (FESS) in Thrissur | RelentCare",
    description: "Expert FESS surgery for chronic sinusitis and nasal polyps in Thrissur. Learn about the minimally invasive procedure and recovery.",
    url: "https://www.relentcarehospitals.com/functional-endoscopic-sinus-surgery-thrissur-ent-surgeon",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Functional Endoscopic Sinus Surgery (FESS) in Thrissur"
        subtitle="Advanced minimally invasive treatment for chronic sinusitis"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive surgical technique used to treat chronic sinusitis and other sinus conditions. The procedure involves using an endoscope (a thin, flexible tube with a camera) to visualize and remove diseased tissue, clear blocked sinuses, and restore normal sinus function."
          },
          {
            type: "heading",
            content: "What is FESS?"
          },
          {
            type: "text",
            content: "FESS is based on the principle of restoring normal physiologic drainage and ventilation of the paranasal sinuses. Rather than removing large amounts of tissue, the procedure focuses on removing only the disease and creating adequate drainage pathways. This approach preserves normal sinus mucosa and ciliary function."
          },
          {
            type: "heading",
            content: "Indications for FESS"
          },
          {
            type: "heading",
            content: "Chronic Sinusitis"
          },
          {
            type: "list",
            items: [
              "Symptoms lasting more than 12 weeks",
              "Failed medical management",
              "Recurrent acute sinusitis",
              "Polyp-associated sinusitis",
              "Aspirin-exacerbated respiratory disease"
            ]
          },
          {
            type: "heading",
            content: "Nasal Polyps"
          },
          {
            type: "list",
            items: [
              "Symptomatic nasal polyps",
              "Obstructive polyps",
              "Antrochoanal polyps",
              "Polyps with allergic fungal sinusitis"
            ]
          },
          {
            type: "heading",
            content: "Other Indications"
          },
          {
            type: "list",
            items: [
              "Fungal sinusitis",
              "Mucocele drainage",
              "CSF leak repair",
              "Pituitary tumor access",
              "Skull base lesion biopsy",
              "Orbital decompression"
            ]
          },
          {
            type: "heading",
            content: "The FESS Procedure"
          },
          {
            type: "heading",
            content: "Pre-operative Evaluation"
          },
          {
            type: "list",
            items: [
              "High-resolution CT imaging of sinuses",
              "Nasal endoscopy to assess disease extent",
              "Allergy testing if indicated",
              "Discussion of risks and benefits",
              "Anesthesia consultation"
            ]
          },
          {
            type: "heading",
            content: "Operative Steps"
          },
          {
            type: "list",
            items: [
              "General anesthesia with or without local anesthesia",
              "Insertion of endoscope into nasal cavity",
              "Visualization of sinus anatomy and disease",
              "Removal of polyps, diseased mucosa, and obstructions",
              "Enlargement of sinus opening (ostium) as needed",
              "Careful preservation of healthy tissue",
              "Assessment of drainage and ventilation"
            ]
          },
          {
            type: "heading",
            content: "Recovery After FESS"
          },
          {
            type: "list",
            items: [
              "Typically outpatient procedure",
              "Short hospital stay in select cases",
              "Nasal packing may be used (dissolvable or absorbable)",
              "Mild pain and congestion expected",
              "Gradual improvement over 2-4 weeks",
              "Return to light activities in 1-2 weeks",
              "Full recovery in 4-6 weeks",
              "Regular nasal rinses for healing"
            ]
          },
          {
            type: "heading",
            content: "Post-operative Care"
          },
          {
            type: "list",
            items: [
              "Saline nasal spray and rinses",
              "Topical nasal steroids",
              "Pain management as needed",
              "Avoid strenuous activity",
              "Avoid hot foods and beverages initially",
              "Regular follow-up with surgeon",
              "Endoscopic cleaning in office as needed"
            ]
          },
          {
            type: "heading",
            content: "Benefits of FESS"
          },
          {
            type: "list",
            items: [
              "Minimal invasiveness with excellent visualization",
              "Shorter hospital stay and faster recovery",
              "Preservation of normal sinus mucosa",
              "Lower morbidity compared to open surgery",
              "High success rate (80-90%)",
              "Reversible if needed",
              "Tissue preservation for future procedures"
            ]
          },
          {
            type: "heading",
            content: "Risks and Complications"
          },
          {
            type: "list",
            items: [
              "Bleeding (minor)",
              "Infection",
              "Synechiae (scar tissue formation)",
              "Recurrent sinusitis (requires revision)",
              "Orbital complications (rare)",
              "Cerebrospinal fluid leak (rare)",
              "Vision changes (very rare)"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for FESS?"
          },
          {
            type: "list",
            items: [
              "Experienced endoscopic surgeons",
              "Advanced surgical equipment and techniques",
              "Comprehensive pre- and post-operative management",
              "Excellent safety record",
              "Personalized treatment planning",
              "Dedicated follow-up care"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
