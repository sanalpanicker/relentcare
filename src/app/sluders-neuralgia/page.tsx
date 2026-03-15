import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Sluder's Neuralgia Treatment in Thrissur | RelentCare ENT",
  description: "Expert treatment of Sluder's neuralgia (sphenopalatine ganglion neuralgia) in Thrissur with nerve block procedures.",
  keywords: ["Sluder's neuralgia", "sphenopalatine ganglion", "facial neuralgia", "nerve block", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/sluders-neuralgia" },
  openGraph: { 
    title: "Sluder's Neuralgia Treatment in Thrissur | RelentCare ENT",
    description: "Expert treatment of Sluder's neuralgia (sphenopalatine ganglion neuralgia) in Thrissur with nerve block procedures.",
    url: "https://www.relentcarehospitals.com/sluders-neuralgia",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Sluder's Neuralgia Treatment in Thrissur"
        subtitle="Specialized treatment for sphenopalatine ganglion neuralgia"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Sluder's neuralgia, also known as sphenopalatine ganglion neuralgia, is a rare facial pain syndrome originating from the sphenopalatine ganglion nerve cluster. The condition causes unilateral facial and head pain, often radiating from the back of the nose and hard palate."
          },
          {
            type: "heading",
            content: "Understanding Sluder's Neuralgia"
          },
          {
            type: "text",
            content: "The sphenopalatine ganglion is a parasympathetic nerve cluster located in the pterygopalatine fossa. Irritation or inflammation of this ganglion causes characteristic facial pain. While rare, the condition is important to recognize for proper management."
          },
          {
            type: "heading",
            content: "Anatomy of Sphenopalatine Ganglion"
          },
          {
            type: "list",
            items: [
              "Located in the pterygopalatine fossa",
              "Deep to the maxilla and pterygoid plates",
              "Just posterior to the posterior nasal cavity",
              "Carries parasympathetic and sympathetic fibers",
              "Innervates nasal mucosa, palate, and meninges",
              "Accessible endoscopically"
            ]
          },
          {
            type: "heading",
            content: "Clinical Presentation"
          },
          {
            type: "heading",
            content: "Symptoms of Sluder's Neuralgia"
          },
          {
            type: "list",
            items: [
              "Unilateral facial pain (one side)",
              "Pain originating from nasal cavity region",
              "Pain radiating to hard palate and upper teeth",
              "Pain extending to temple and eye region",
              "Associated nasal congestion",
              "Postnasal drip",
              "Lacrimation (tearing)",
              "Facial flushing"
            ]
          },
          {
            type: "heading",
            content: "Trigger Points and Aggravating Factors"
          },
          {
            type: "list",
            items: [
              "Cold air exposure",
              "Spicy foods",
              "Alcohol consumption",
              "Stress and fatigue",
              "Weather changes",
              "Touching lateral nasal wall",
              "Sinusitis episodes"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Approach"
          },
          {
            type: "heading",
            content: "Clinical Diagnosis"
          },
          {
            type: "list",
            items: [
              "Detailed pain history and characteristics",
              "Nasal endoscopy to assess trigger points",
              "Assessment of nasal anatomy",
              "Evaluation for associated sinus disease",
              "Imaging to rule out other pathology"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Testing"
          },
          {
            type: "list",
            items: [
              "Topical anesthetic testing on nasal mucosa",
              "Relief of pain with local anesthetic confirms diagnosis",
              "CT imaging to evaluate sinus anatomy",
              "MRI if other pathology suspected"
            ]
          },
          {
            type: "heading",
            content: "Conservative Treatment"
          },
          {
            type: "list",
            items: [
              "Intranasal topical anesthetics",
              "Topical nasal steroids to reduce inflammation",
              "Systemic analgesics for pain management",
              "Tricyclic antidepressants (neuropathic pain)",
              "Gabapentin or pregabalin",
              "Avoidance of trigger factors",
              "Stress management techniques"
            ]
          },
          {
            type: "heading",
            content: "Sphenopalatine Ganglion Nerve Block"
          },
          {
            type: "text",
            content: "When conservative measures fail, sphenopalatine ganglion nerve block provides effective pain relief by blocking the nerve signals from the ganglion."
          },
          {
            type: "heading",
            content: "Nerve Block Techniques"
          },
          {
            type: "heading",
            content: "Transnasal Approach"
          },
          {
            type: "list",
            items: [
              "Cotton pledgets soaked with local anesthetic",
              "Placement in nasopharynx near ganglion location",
              "Application for 10-15 minutes",
              "Quick onset of pain relief",
              "Can be repeated as needed",
              "Office procedure with minimal discomfort"
            ]
          },
          {
            type: "heading",
            content: "Transantral Approach"
          },
          {
            type: "list",
            items: [
              "Injection through the maxillary sinus wall",
              "Direct anesthetic infiltration",
              "More invasive but longer-lasting effect",
              "Performed in operating room under visualization"
            ]
          },
          {
            type: "heading",
            content: "Infrasphenoidal Approach"
          },
          {
            type: "list",
            items: [
              "Less commonly used",
              "Injection below the sphenoid sinus",
              "Requires specialized expertise"
            ]
          },
          {
            type: "heading",
            content: "Surgical Options"
          },
          {
            type: "heading",
            content: "Radiofrequency Ablation"
          },
          {
            type: "list",
            items: [
              "Thermal destruction of ganglion nerve fibers",
              "More permanent pain relief",
              "Endoscopic-guided procedure",
              "Success rates: 50-80%",
              "May provide relief for months to years"
            ]
          },
          {
            type: "heading",
            content: "Cryosurgery"
          },
          {
            type: "list",
            items: [
              "Freezing of nerve fibers",
              "Destruction of pain-carrying nerves",
              "Endoscopic approach",
              "Regeneration possible over time"
            ]
          },
          {
            type: "heading",
            content: "Sphenopalatine Ganglion Resection"
          },
          {
            type: "list",
            items: [
              "Complete surgical removal of ganglion",
              "Most definitive treatment",
              "Risks of complications with vital structures nearby",
              "Reserved for severe refractory cases",
              "Success rate: 70-90%"
            ]
          },
          {
            type: "heading",
            content: "Recovery After Nerve Block"
          },
          {
            type: "list",
            items: [
              "Immediate pain relief in most cases",
              "Temporary anesthetic effect (several hours to days)",
              "Repeat blocks for sustained relief",
              "Minimal downtime with topical approach",
              "Gradual return of pain if repetitive blocks used"
            ]
          },
          {
            type: "heading",
            content: "Recovery After Surgical Procedures"
          },
          {
            type: "list",
            items: [
              "Minimal postoperative discomfort",
              "Return to normal activities in 1-2 weeks",
              "Pain relief may be immediate or gradual",
              "Regular follow-up to assess effectiveness",
              "Possible repeat procedures if recurrence"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Sluder's Neuralgia?"
          },
          {
            type: "list",
            items: [
              "Specialized experience with facial pain syndromes",
              "Multiple treatment options available",
              "Skilled in nerve block procedures",
              "Endoscopic visualization for accuracy",
              "Comprehensive pain management approach",
              "Excellent patient outcomes"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
