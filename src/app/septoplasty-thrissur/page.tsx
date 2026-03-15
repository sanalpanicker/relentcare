import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Septoplasty in Thrissur | Deviated Septum Surgery | RelentCare ENT",
  description: "Septoplasty surgery for deviated nasal septum in Thrissur. Learn about procedure, before and after care.",
  keywords: ["septoplasty", "deviated septum", "nasal obstruction", "surgery", "before after", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/septoplasty-thrissur" },
  openGraph: { 
    title: "Septoplasty in Thrissur | Deviated Septum Surgery | RelentCare ENT",
    description: "Septoplasty surgery for deviated nasal septum in Thrissur. Learn about procedure, before and after care.",
    url: "https://www.relentcarehospitals.com/septoplasty-thrissur",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Septoplasty in Thrissur"
        subtitle="Surgical correction of deviated nasal septum for improved breathing"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Septoplasty is a surgical procedure to correct a deviated nasal septum that obstructs airflow. Unlike rhinoplasty, which focuses on aesthetic changes, septoplasty is purely functional and aims to improve breathing by straightening the septum."
          },
          {
            type: "heading",
            content: "Septoplasty vs Rhinoplasty"
          },
          {
            type: "list",
            items: [
              "Septoplasty: Functional improvement, straightens internal septum",
              "Rhinoplasty: Aesthetic changes to nasal shape and appearance",
              "Septoplasty: Internal incisions, no external visible scarring",
              "Rhinoplasty: May involve external incisions for reshaping",
              "Septorhinoplasty: Combines both functional and aesthetic goals",
              "Septoplasty requires functional obstruction, rhinoplasty is elective"
            ]
          },
          {
            type: "heading",
            content: "Indication for Septoplasty"
          },
          {
            type: "list",
            items: [
              "Symptomatic nasal obstruction",
              "Failed medical management",
              "Sleep-disordered breathing",
              "Facilitating access for sinus surgery",
              "Access for skull base procedures",
              "Combined with turbinate reduction"
            ]
          },
          {
            type: "heading",
            content: "Pre-operative Assessment"
          },
          {
            type: "heading",
            content: "Clinical Evaluation"
          },
          {
            type: "list",
            items: [
              "Detailed history of nasal symptoms",
              "Documentation of symptom duration and severity",
              "Nasal endoscopy to assess deviation",
              "Allergy history and testing if needed",
              "Sleep study if sleep apnea suspected",
              "CT imaging for complex cases"
            ]
          },
          {
            type: "heading",
            content: "Pre-operative Preparation"
          },
          {
            type: "list",
            items: [
              "Medical clearance for surgery",
              "Medication adjustment (stop blood thinners)",
              "Pre-operative fasting",
              "Anesthesia consultation",
              "Discussion of realistic expectations",
              "Questions about procedure and recovery"
            ]
          },
          {
            type: "heading",
            content: "Septoplasty Procedure Steps"
          },
          {
            type: "heading",
            content: "Anesthesia and Incision"
          },
          {
            type: "list",
            items: [
              "General anesthesia or local with sedation",
              "Incision inside the nose (endonasal approach)",
              "No external incisions or facial scarring",
              "Elevation of mucous membrane from septum"
            ]
          },
          {
            type: "heading",
            content: "Septal Correction"
          },
          {
            type: "list",
            items: [
              "Assessment of deviation extent and location",
              "Removal of obstructing cartilage",
              "Removal of obstructing bone",
              "Straightening and repositioning of septum",
              "Preservation of structural support",
              "Careful technique to avoid perforation"
            ]
          },
          {
            type: "heading",
            content: "Closure"
          },
          {
            type: "list",
            items: [
              "Suturing of mucous membrane",
              "Possible placement of absorbable spacers",
              "Nasal packing (dissolvable or removable)",
              "Careful hemostasis to prevent bleeding"
            ]
          },
          {
            type: "heading",
            content: "Before Surgery Care"
          },
          {
            type: "list",
            items: [
              "Follow pre-operative instructions carefully",
              "Discontinue aspirin and NSAIDs 1-2 weeks prior",
              "Stop blood thinning medications as directed",
              "Arrange for someone to drive you home",
              "Clear liquid diet before surgery",
              "NPO (nothing to eat or drink) 6-8 hours before"
            ]
          },
          {
            type: "heading",
            content: "After Surgery Recovery"
          },
          {
            type: "heading",
            content: "Immediate Post-operative (First 24-48 hours)"
          },
          {
            type: "list",
            items: [
              "Nasal packing in place for drainage control",
              "Mild to moderate discomfort expected",
              "Pain managed with prescribed medication",
              "Possible nausea from anesthesia",
              "Rest and limited activity recommended",
              "Head elevated while resting",
              "Packing removal at follow-up appointment"
            ]
          },
          {
            type: "heading",
            content: "Early Recovery (1-2 weeks)"
          },
          {
            type: "list",
            items: [
              "Gradual return to light activities",
              "Continue pain management as needed",
              "Saline nasal sprays and rinses begin",
              "Nasal congestion and crusting expected",
              "Sleep with head elevated",
              "Avoid strenuous exercise",
              "Follow-up office visit for pack removal"
            ]
          },
          {
            type: "heading",
            content: "Intermediate Recovery (3-6 weeks)"
          },
          {
            type: "list",
            items: [
              "Return to normal daily activities",
              "Continued nasal rinses for healing",
              "Gradual improvement in breathing",
              "Possible continued mild drainage",
              "Avoid contact sports and heavy lifting",
              "Breathing improvement becomes noticeable"
            ]
          },
          {
            type: "heading",
            content: "Long-term Healing (3-6 months)"
          },
          {
            type: "list",
            items: [
              "Full mucosal healing",
              "Optimal breathing improvement achieved",
              "Complete resolution of symptoms",
              "Return to all physical activities",
              "Scarring minimized by 6 months"
            ]
          },
          {
            type: "heading",
            content: "Post-operative Care Instructions"
          },
          {
            type: "list",
            items: [
              "Saline irrigation 3-4 times daily",
              "Topical antibiotic ointment as directed",
              "Avoid nose blowing for 3-4 weeks",
              "No smoking or secondhand smoke",
              "Avoid environmental irritants",
              "Sleep elevated on 2-3 pillows",
              "Avoid hot foods and beverages initially",
              "Regular follow-up appointments"
            ]
          },
          {
            type: "heading",
            content: "Expected Outcomes"
          },
          {
            type: "list",
            items: [
              "Improved nasal airflow",
              "Better breathing through nose",
              "Improved sleep quality",
              "Reduced snoring",
              "Enhanced quality of life",
              "Success rate: 80-90%"
            ]
          },
          {
            type: "heading",
            content: "Possible Complications"
          },
          {
            type: "list",
            items: [
              "Bleeding (minor, usually controlled)",
              "Infection",
              "Septal perforation (rare with modern technique)",
              "Synechiae (scar tissue between nasal surfaces)",
              "Persistent obstruction requiring revision",
              "Temporary crusting and drainage"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Septoplasty?"
          },
          {
            type: "list",
            items: [
              "Experienced nasal and sinus surgeons",
              "Advanced surgical techniques and technology",
              "Personalized treatment planning",
              "Comprehensive pre- and post-operative care",
              "Excellent success rates",
              "Low complication rates",
              "Dedicated patient support throughout recovery"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
