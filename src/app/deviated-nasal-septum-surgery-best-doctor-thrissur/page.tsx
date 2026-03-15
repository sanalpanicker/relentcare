import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Deviated Nasal Septum Surgery (Septoplasty) in Thrissur | RelentCare",
  description: "Expert septoplasty surgery for deviated nasal septum in Thrissur. Learn about symptoms, procedure, and recovery.",
  keywords: ["deviated nasal septum", "DNS", "septoplasty", "nasal obstruction", "surgery", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/deviated-nasal-septum-surgery-best-doctor-thrissur" },
  openGraph: { 
    title: "Deviated Nasal Septum Surgery (Septoplasty) in Thrissur | RelentCare",
    description: "Expert septoplasty surgery for deviated nasal septum in Thrissur. Learn about symptoms, procedure, and recovery.",
    url: "https://www.relentcarehospitals.com/deviated-nasal-septum-surgery-best-doctor-thrissur",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Deviated Nasal Septum Surgery in Thrissur"
        subtitle="Septoplasty to correct nasal obstruction and improve breathing"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "A deviated nasal septum (DNS) occurs when the cartilage and bone that divides the nasal cavity is off-center. This common condition can cause nasal obstruction, breathing difficulties, and sleep disturbances. Septoplasty is a surgical procedure that corrects the deviation and improves nasal airflow."
          },
          {
            type: "heading",
            content: "Understanding Deviated Nasal Septum"
          },
          {
            type: "text",
            content: "The nasal septum is the wall dividing the left and right nasal passages. A deviated septum can result from birth, growth, trauma, or previous nasal surgery. The deviation can range from mild to severe, causing varying degrees of obstruction."
          },
          {
            type: "heading",
            content: "Causes of Deviated Nasal Septum"
          },
          {
            type: "list",
            items: [
              "Congenital deviation (present at birth)",
              "Trauma or nasal injury",
              "Previous nasal surgery",
              "Growth and development abnormalities",
              "Nasal infections",
              "Bone resorption with age"
            ]
          },
          {
            type: "heading",
            content: "Symptoms of DNS"
          },
          {
            type: "list",
            items: [
              "Persistent nasal obstruction",
              "Difficulty breathing through the nose",
              "Chronic sinusitis",
              "Sleep apnea or snoring",
              "Recurrent sinus infections",
              "Headaches or facial pain",
              "Sleep disturbance"
            ]
          },
          {
            type: "heading",
            content: "Septoplasty Procedure"
          },
          {
            type: "heading",
            content: "Pre-operative Assessment"
          },
          {
            type: "list",
            items: [
              "Comprehensive nasal examination",
              "Nasal endoscopy to assess deviation",
              "CT imaging if complex anatomy suspected",
              "Discussion of expectations and outcomes",
              "Anesthesia evaluation"
            ]
          },
          {
            type: "heading",
            content: "Operative Technique"
          },
          {
            type: "list",
            items: [
              "General anesthesia",
              "Incision inside the nose (no external scars)",
              "Elevation of mucous membrane",
              "Straightening or removal of deviated cartilage and bone",
              "Preservation of structural support",
              "Careful repositioning of septum",
              "Suturing of mucous membrane"
            ]
          },
          {
            type: "heading",
            content: "Variations in Technique"
          },
          {
            type: "list",
            items: [
              "Endoscopic-assisted septoplasty for better visualization",
              "Combination with sinus surgery if needed",
              "Simultaneous turbinate reduction",
              "Endonasal versus external approach depending on severity",
              "Preservation techniques to maintain nasal support"
            ]
          },
          {
            type: "heading",
            content: "Recovery After Septoplasty"
          },
          {
            type: "heading",
            content: "Immediate Post-operative Period"
          },
          {
            type: "list",
            items: [
              "Nasal packing for 24-48 hours (absorbable material preferred)",
              "Some discomfort and nasal congestion expected",
              "Mild to moderate pain manageable with medication",
              "Possible drainage and crusting",
              "Rest and limited activity for first few days"
            ]
          },
          {
            type: "heading",
            content: "Gradual Recovery Timeline"
          },
          {
            type: "list",
            items: [
              "1-2 weeks: Initial healing, return to light activities",
              "3-4 weeks: Return to normal activities",
              "6-8 weeks: Significant improvement in breathing",
              "3-6 months: Full healing and optimal results"
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
              "Avoid strenuous exercise for 2-3 weeks",
              "No nose blowing for several weeks",
              "Avoid hot foods and beverages",
              "Sleep with head elevated",
              "Regular follow-up appointments",
              "Avoid environmental irritants"
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
              "Better breathing through the nose",
              "Reduced sinus infections",
              "Improved sleep quality",
              "Relief from associated headaches",
              "Success rate: 80-90%"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Septoplasty?"
          },
          {
            type: "list",
            items: [
              "Experienced nasal surgeons",
              "Advanced surgical techniques",
              "Personalized surgical planning",
              "Comprehensive post-operative support",
              "Excellent results with minimal complications",
              "Follow-up care to ensure optimal outcomes"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
