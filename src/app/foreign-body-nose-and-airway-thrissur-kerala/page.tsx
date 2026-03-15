import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Foreign Body Removal – Nose & Airway in Thrissur | RelentCare ENT",
  description: "Emergency foreign body removal from nose and airway in Thrissur. Expert endoscopic removal procedures.",
  keywords: ["foreign body removal", "nasal foreign body", "airway obstruction", "endoscopic removal", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/foreign-body-nose-and-airway-thrissur-kerala" },
  openGraph: { 
    title: "Foreign Body Removal – Nose & Airway in Thrissur | RelentCare ENT",
    description: "Emergency foreign body removal from nose and airway in Thrissur. Expert endoscopic removal procedures.",
    url: "https://www.relentcarehospitals.com/foreign-body-nose-and-airway-thrissur-kerala",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Foreign Body Removal – Nose & Airway in Thrissur"
        subtitle="Expert emergency removal of nasal and airway foreign bodies"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Foreign body insertion into the nose and airway is a common medical emergency, especially in children but also occurring in adults. Prompt recognition and proper removal are essential to prevent complications like infection, aspiration, or airway obstruction."
          },
          {
            type: "heading",
            content: "Types of Nasal Foreign Bodies"
          },
          {
            type: "heading",
            content: "Common Objects"
          },
          {
            type: "list",
            items: [
              "Beads and small toys",
              "Food particles",
              "Nuts and seeds",
              "Foam pieces",
              "Plastic objects",
              "Button batteries (emergency)",
              "Coins",
              "Insects",
              "Paper and foam"
            ]
          },
          {
            type: "heading",
            content: "Types of Airway Foreign Bodies"
          },
          {
            type: "list",
            items: [
              "Food particles (nuts, seeds, meat)",
              "Small toys or toy parts",
              "Coins or metallic objects",
              "Peanuts and legumes",
              "Popcorn kernels",
              "Dental crowns or restorations"
            ]
          },
          {
            type: "heading",
            content: "Symptoms and Presentation"
          },
          {
            type: "heading",
            content: "Nasal Foreign Body Symptoms"
          },
          {
            type: "list",
            items: [
              "Unilateral nasal obstruction",
              "Foul-smelling nasal discharge",
              "Epistaxis (nosebleed)",
              "Nasal pain or discomfort",
              "Mouth breathing",
              "Sometimes asymptomatic if recent insertion"
            ]
          },
          {
            type: "heading",
            content: "Airway Foreign Body Symptoms"
          },
          {
            type: "list",
            items: [
              "Acute coughing and choking",
              "Wheezing or stridor",
              "Respiratory distress",
              "Cyanosis (bluish discoloration)",
              "Difficulty swallowing",
              "Loss of consciousness (severe cases)",
              "Asymmetric breath sounds"
            ]
          },
          {
            type: "heading",
            content: "Emergency Assessment"
          },
          {
            type: "heading",
            content: "Airway Foreign Body - Immediate Action"
          },
          {
            type: "list",
            items: [
              "Check for adequate airway and breathing",
              "Assess consciousness level",
              "Listen for breath sounds",
              "Attempt dislodging with back blows or Heimlich maneuver",
              "Seek immediate medical attention",
              "Do not delay reaching hospital"
            ]
          },
          {
            type: "heading",
            content: "Nasal Foreign Body - Initial Assessment"
          },
          {
            type: "list",
            items: [
              "Visual inspection of nasal cavity",
              "Attempt to identify object type",
              "Note any nasal discharge or bleeding",
              "Assessment for button battery (emergency)",
              "Consideration of aspiration risk"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Imaging"
          },
          {
            type: "list",
            items: [
              "X-ray to identify radiopaque objects",
              "CT scan for complex cases",
              "Endoscopic visualization for confirmation",
              "Assessment of object location and size",
              "Evaluation for associated complications"
            ]
          },
          {
            type: "heading",
            content: "Endoscopic Removal Procedure"
          },
          {
            type: "heading",
            content: "Nasal Foreign Body Removal"
          },
          {
            type: "list",
            items: [
              "Nasal endoscopy with high-definition visualization",
              "Topical anesthesia and vasoconstriction",
              "Use of various instruments: hooks, forceps, microdebrider",
              "Gentle manipulation to avoid pushing object deeper",
              "Careful removal with specimen preservation",
              "Post-removal nasal examination",
              "Assessment for mucosal injury or complications"
            ]
          },
          {
            type: "heading",
            content: "Airway Foreign Body Removal"
          },
          {
            type: "list",
            items: [
              "Rigid bronchoscopy under general anesthesia",
              "High-resolution visualization of airways",
              "Careful manipulation to avoid complete obstruction",
              "Use of appropriate retrieval instruments",
              "Prevention of distal migration",
              "Complete airway inspection post-removal",
              "Assessment for underlying aspiration risk"
            ]
          },
          {
            type: "heading",
            content: "Special Considerations"
          },
          {
            type: "heading",
            content: "Button Battery Foreign Body"
          },
          {
            type: "list",
            items: [
              "Medical emergency requiring urgent removal",
              "Risk of chemical burn within 2-3 hours",
              "Immediate imaging and endoscopic removal",
              "Can cause severe mucosal damage",
              "Perforation risk in nasal septum",
              "Requires specialized urgent care"
            ]
          },
          {
            type: "heading",
            content: "Live Insects"
          },
          {
            type: "list",
            items: [
              "Oil or anesthetic instillation to immobilize",
              "Careful removal to avoid fragmentation",
              "Post-removal cleaning of nasal cavity",
              "Assessment for infection risk"
            ]
          },
          {
            type: "heading",
            content: "Organic Material"
          },
          {
            type: "list",
            items: [
              "Higher infection risk",
              "May cause tissue reaction",
              "Careful fragmentation prevention",
              "Post-removal antimicrobial therapy"
            ]
          },
          {
            type: "heading",
            content: "Recovery and Post-operative Care"
          },
          {
            type: "list",
            items: [
              "Post-operative nasal packing if mucosal injury",
              "Topical antibiotics and saline irrigations",
              "Pain management as needed",
              "Follow-up examination in 24-48 hours",
              "Observation for infection signs",
              "Counseling on prevention"
            ]
          },
          {
            type: "heading",
            content: "Complications Prevention"
          },
          {
            type: "list",
            items: [
              "Avoid pushing object deeper with unsuitable removal attempts",
              "Gentle manipulation to minimize mucosal trauma",
              "Adequate lighting and visualization during removal",
              "Prevention of airway compromise during procedure",
              "Immediate treatment of button batteries",
              "Antibiotic prophylaxis for high-risk cases"
            ]
          },
          {
            type: "heading",
            content: "Prevention Strategies"
          },
          {
            type: "list",
            items: [
              "Supervision of children during play",
              "Avoidance of small objects for young children",
              "Safe storage of small items and toys",
              "Education on aspiration hazards",
              "Careful chewing of food before swallowing",
              "Caution with dentures and crowns"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Foreign Body Removal?"
          },
          {
            type: "list",
            items: [
              "24/7 emergency services availability",
              "Experienced emergency ENT surgeons",
              "Advanced endoscopic equipment",
              "Rapid evaluation and treatment",
              "Specialized management for button batteries",
              "Comprehensive post-operative care",
              "Expertise in pediatric and adult cases"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
