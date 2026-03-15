import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Foreign Body – Throat & Oesophagus Removal in Thrissur | RelentCare",
  description: "Emergency foreign body removal from throat and esophagus in Thrissur. Expert endoscopic removal of fish bones and other objects.",
  keywords: ["foreign body removal", "esophageal foreign body", "fish bone removal", "endoscopy", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/foreign-body-throat-and-oesophagus" },
  openGraph: { 
    title: "Foreign Body – Throat & Oesophagus Removal in Thrissur | RelentCare",
    description: "Emergency foreign body removal from throat and esophagus in Thrissur. Expert endoscopic removal of fish bones and other objects.",
    url: "https://www.relentcarehospitals.com/foreign-body-throat-and-oesophagus",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Foreign Body Removal – Throat & Oesophagus in Thrissur"
        subtitle="Emergency endoscopic removal of throat and esophageal foreign bodies"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Foreign body ingestion in the throat and esophagus is a common medical emergency requiring prompt evaluation and removal. Objects like fish bones, coins, food particles, and other items can lodge in the pharynx or esophagus, causing discomfort or serious complications. Endoscopic removal is the gold standard treatment."
          },
          {
            type: "heading",
            content: "Common Throat and Esophageal Foreign Bodies"
          },
          {
            type: "heading",
            content: "Food-Related Objects"
          },
          {
            type: "list",
            items: [
              "Fish bones (most common)",
              "Meat bones and fragments",
              "Chicken bones",
              "Seed and nut fragments",
              "Food bolus (poorly chewed food)",
              "Bread and food particles"
            ]
          },
          {
            type: "heading",
            content: "Non-Food Objects"
          },
          {
            type: "list",
            items: [
              "Coins",
              "Button batteries (emergency)",
              "Metallic objects",
              "Dentures or dental crowns",
              "Small toys or toy parts",
              "Pill containers",
              "Medication blisters"
            ]
          },
          {
            type: "heading",
            content: "Symptoms of Throat/Esophageal Foreign Body"
          },
          {
            type: "heading",
            content: "Acute Presentation"
          },
          {
            type: "list",
            items: [
              "Sudden sensation of choking",
              "Severe throat pain",
              "Difficulty swallowing (dysphagia)",
              "Refusal to eat or drink",
              "Drooling and salivation",
              "Anxiety and distress",
              "Sensation of object stuck in throat"
            ]
          },
          {
            type: "heading",
            content: "Associated Symptoms"
          },
          {
            type: "list",
            items: [
              "Neck or chest pain",
              "Vomiting",
              "Respiratory distress if high obstruction",
              "Weight loss with prolonged impaction",
              "Fever if perforation occurs"
            ]
          },
          {
            type: "heading",
            content: "Complications of Foreign Bodies"
          },
          {
            type: "heading",
            content: "Early Complications"
          },
          {
            type: "list",
            items: [
              "Esophageal obstruction",
              "Airway compromise (if large)",
              "Acute aspiration risk"
            ]
          },
          {
            type: "heading",
            content: "Late Complications"
          },
          {
            type: "list",
            items: [
              "Esophageal perforation",
              "Mediastinitis (infection of chest tissue)",
              "Sepsis",
              "Fistula formation",
              "Stricture formation",
              "Esophageal erosion"
            ]
          },
          {
            type: "heading",
            content: "Emergency Assessment"
          },
          {
            type: "heading",
            content: "Immediate Actions"
          },
          {
            type: "list",
            items: [
              "Assess airway and breathing",
              "Determine object type and size",
              "Document time of ingestion",
              "Keep patient NPO (nothing by mouth)",
              "Reassure patient",
              "Arrange emergency imaging"
            ]
          },
          {
            type: "heading",
            content: "DO NOT"
          },
          {
            type: "list",
            items: [
              "Force removal of object",
              "Use abdominal pressure or Heimlich maneuver",
              "Attempt to induce vomiting",
              "Give excessive food or liquids",
              "Delay medical attention"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Imaging"
          },
          {
            type: "heading",
            content: "Imaging Studies"
          },
          {
            type: "list",
            items: [
              "Neck and chest X-rays (soft tissue and skeletal)",
              "Lateral neck film to assess impaction",
              "CT if perforation suspected",
              "Barium swallow (rarely, as it complicates endoscopy)",
              "Assessment for free air (perforation)"
            ]
          },
          {
            type: "heading",
            content: "Endoscopic Removal Procedure"
          },
          {
            type: "heading",
            content: "Preparation"
          },
          {
            type: "list",
            items: [
              "NPO status (6-8 hours if possible)",
              "IV access for emergency medications",
              "Consent discussion",
              "Anesthesia consultation",
              "Setup of emergency equipment"
            ]
          },
          {
            type: "heading",
            content: "Procedure"
          },
          {
            type: "list",
            items: [
              "General anesthesia or conscious sedation",
              "Rigid esophagoscopy (preferred for safety)",
              "Flexible esophagoscopy (alternative)",
              "Direct visualization of foreign body",
              "Assessment of esophageal mucosa",
              "Careful object retrieval",
              "Prevention of object loss or aspiration",
              "Inspection for mucosal injury"
            ]
          },
          {
            type: "heading",
            content: "Retrieval Techniques"
          },
          {
            type: "list",
            items: [
              "Endoscopic forceps for bone and hard objects",
              "Snare loops for coins and small objects",
              "Basket retrieval for multiple items",
              "Gentle manipulation to avoid pushing deeper",
              "Specimen preservation for examination"
            ]
          },
          {
            type: "heading",
            content: "Special Considerations"
          },
          {
            type: "heading",
            content: "Button Battery Emergency"
          },
          {
            type: "list",
            items: [
              "Requires emergency removal",
              "Chemical burn risk within 2 hours",
              "Severe mucosal damage possible",
              "Can cause esophageal perforation",
              "Must be removed immediately upon diagnosis"
            ]
          },
          {
            type: "heading",
            content: "Food Bolus Impaction"
          },
          {
            type: "list",
            items: [
              "May be treated with enzymatic dissolution",
              "Meat tenderizer can help soften meat",
              "Carbonated beverages may help",
              "Endoscopic removal if conservative measures fail"
            ]
          },
          {
            type: "heading",
            content: "Sharp Objects"
          },
          {
            type: "list",
            items: [
              "Higher perforation risk",
              "Careful removal technique essential",
              "Close follow-up for complications",
              "Aggressive removal not recommended"
            ]
          },
          {
            type: "heading",
            content: "Post-removal Management"
          },
          {
            type: "heading",
            content: "Immediate Post-operative"
          },
          {
            type: "list",
            items: [
              "NPO for 6-24 hours",
              "IV hydration",
              "Observation for complications",
              "Liquid diet progression",
              "Pain management"
            ]
          },
          {
            type: "heading",
            content: "Monitoring for Complications"
          },
          {
            type: "list",
            items: [
              "Watch for signs of perforation",
              "Fever, severe chest pain, subcutaneous emphysema",
              "Vomiting or difficulty swallowing persistence",
              "Chest X-ray post-removal if perforation suspected",
              "Urgent consultation if complications develop"
            ]
          },
          {
            type: "heading",
            content: "Follow-up Care"
          },
          {
            type: "list",
            items: [
              "Post-operative examination at 24 hours",
              "Gradual diet progression",
              "Evaluation for esophageal injury",
              "Endoscopy repeat if deep injury suspected",
              "Long-term follow-up if complications"
            ]
          },
          {
            type: "heading",
            content: "Prevention Measures"
          },
          {
            type: "list",
            items: [
              "Careful eating, especially with bones",
              "Thorough mastication of food",
              "Awareness in young children",
              "Safe storage of small objects",
              "Denture care and secure fit",
              "Avoidance of distracted eating"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Foreign Body Removal?"
          },
          {
            type: "list",
            items: [
              "24/7 emergency services",
              "Experienced emergency ENT surgeons",
              "Advanced endoscopic equipment",
              "Rapid evaluation and treatment",
              "Immediate button battery management",
              "Skilled retrieval techniques",
              "Excellent safety record",
              "Comprehensive post-removal care"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
