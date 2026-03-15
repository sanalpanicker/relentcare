import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Antrochoanal Polyp Treatment in Thrissur, Kerala | RelentCare ENT",
  description: "Expert antrochoanal polyp removal in Thrissur. Learn about this special type of polyp originating from maxillary sinus.",
  keywords: ["antrochoanal polyp", "maxillary sinus", "polyp removal", "endoscopic surgery", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/antrochoanal-polyp-kerala-thrissur-nose" },
  openGraph: { 
    title: "Antrochoanal Polyp Treatment in Thrissur, Kerala | RelentCare ENT",
    description: "Expert antrochoanal polyp removal in Thrissur. Learn about this special type of polyp originating from maxillary sinus.",
    url: "https://www.relentcarehospitals.com/antrochoanal-polyp-kerala-thrissur-nose",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Antrochoanal Polyp Treatment in Thrissur"
        subtitle="Specialized surgical management of antrochoanal polyps"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "An antrochoanal polyp is a benign growth that originates in the maxillary sinus and extends through the sinus ostium into the nasal cavity and nasopharynx. Also known as a Killian polyp, this special type of polyp accounts for 4-6% of all nasal polyps and requires specific surgical management."
          },
          {
            type: "heading",
            content: "Understanding Antrochoanal Polyps"
          },
          {
            type: "text",
            content: "Unlike typical nasal polyps that often arise from multiple sites in the sinuses, antrochoanal polyps originate from a single base, usually near the maxillary ostium. They have a long stalk that extends through the nasal cavity into the nasopharynx. These polyps are more common in young adults and rarely cause recurrence when properly removed."
          },
          {
            type: "heading",
            content: "Origin and Pathophysiology"
          },
          {
            type: "list",
            items: [
              "Originates from maxillary sinus mucosa",
              "Single point of attachment",
              "Grows through maxillary ostium",
              "Extends into nasal cavity and nasopharynx",
              "Long stalk characteristic",
              "Benign but can grow large"
            ]
          },
          {
            type: "heading",
            content: "Clinical Presentation"
          },
          {
            type: "heading",
            content: "Symptoms"
          },
          {
            type: "list",
            items: [
              "Unilateral nasal obstruction",
              "Postnasal drip",
              "Nasopharyngeal mass sensation",
              "Voice changes or nasality",
              "Obstructive sleep apnea symptoms",
              "Throat irritation",
              "Possible epistaxis (nosebleeds)"
            ]
          },
          {
            type: "heading",
            content: "Distinguishing Features"
          },
          {
            type: "list",
            items: [
              "Usually unilateral presentation",
              "Smooth, grayish-white appearance",
              "Visible in nasopharynx on examination",
              "Single pedicle attachement",
              "No significant sinus disease usually",
              "CT shows origin from maxillary sinus"
            ]
          },
          {
            type: "heading",
            content: "Diagnosis"
          },
          {
            type: "heading",
            content: "Diagnostic Methods"
          },
          {
            type: "list",
            items: [
              "Nasal endoscopy to visualize the polyp",
              "Visualization of nasopharyngeal mass",
              "High-resolution CT imaging",
              "MRI for complex cases",
              "Assessment of pedicle origin",
              "Evaluation of maxillary sinus involvement"
            ]
          },
          {
            type: "heading",
            content: "Endoscopic Removal Technique"
          },
          {
            type: "text",
            content: "Complete endoscopic removal of the antrochoanal polyp, including its base in the maxillary sinus, is the gold standard treatment. This ensures elimination of the growth potential and minimizes recurrence risk."
          },
          {
            type: "heading",
            content: "Surgical Approach"
          },
          {
            type: "list",
            items: [
              "Nasal endoscopy for visualization and removal of nasopharyngeal component",
              "Removal of the polyp stalk",
              "Identification of the attachment point in maxillary sinus",
              "Enlargement of maxillary ostium if needed",
              "Complete removal of pedicle base",
              "Cauterization of attachment site to prevent regrowth",
              "Careful preservation of adjacent structures"
            ]
          },
          {
            type: "heading",
            content: "Advantages of Endoscopic Approach"
          },
          {
            type: "list",
            items: [
              "Excellent visualization of pedicle",
              "Complete removal of base",
              "No external incisions or scarring",
              "Minimal tissue trauma",
              "Quick recovery",
              "Low recurrence rates (1-5%)",
              "Outpatient procedure"
            ]
          },
          {
            type: "heading",
            content: "Alternative Approach"
          },
          {
            type: "text",
            content: "A Caldwell-Luc approach (transantral) may be considered in select cases with difficult anatomy, but endoscopic removal is preferred when feasible due to better visualization and lower morbidity."
          },
          {
            type: "heading",
            content: "Recovery After Endoscopic Removal"
          },
          {
            type: "list",
            items: [
              "Minimal postoperative pain",
              "Possible nasal packing for 24-48 hours",
              "Return to normal activities in 1-2 weeks",
              "Full healing in 3-4 weeks",
              "Regular nasal rinses for healing",
              "Follow-up endoscopy at 2-3 weeks"
            ]
          },
          {
            type: "heading",
            content: "Post-operative Care"
          },
          {
            type: "list",
            items: [
              "Saline nasal spray and irrigations",
              "Avoid nose blowing for several days",
              "Avoid strenuous activity",
              "Monitor for complications",
              "Regular follow-up appointments",
              "Annual endoscopic surveillance for first 2-3 years"
            ]
          },
          {
            type: "heading",
            content: "Recurrence and Long-term Outcomes"
          },
          {
            type: "text",
            content: "Antrochoanal polyps have excellent prognosis after complete endoscopic removal. Recurrence rates are very low (1-5% with proper technique) because complete removal of the pedicle is usually achievable. Most patients achieve complete symptom relief with no recurrence."
          },
          {
            type: "heading",
            content: "Potential Complications"
          },
          {
            type: "list",
            items: [
              "Bleeding (minor)",
              "Infection (rare)",
              "Incomplete removal with recurrence",
              "Maxillary sinus complications (rare)",
              "Temporary sinus drainage changes"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Antrochoanal Polyp Removal?"
          },
          {
            type: "list",
            items: [
              "Specialized experience with antrochoanal polyps",
              "Advanced endoscopic surgical techniques",
              "Complete pedicle removal for low recurrence",
              "Excellent visualization and outcomes",
              "Comprehensive pre- and post-operative care",
              "Long-term follow-up management"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
