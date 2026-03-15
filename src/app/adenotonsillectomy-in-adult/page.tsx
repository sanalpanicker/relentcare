import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Adenotonsillectomy in Adults – Thrissur | RelentCare ENT Surgeon",
  description: "Adult adenotonsillectomy surgery in Thrissur for recurrent tonsillitis and sleep apnea. Learn about indications and recovery.",
  keywords: ["adenotonsillectomy", "tonsillectomy", "adult surgery", "sleep apnea", "recurrent tonsillitis", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/adenotonsillectomy-in-adult" },
  openGraph: { 
    title: "Adenotonsillectomy in Adults – Thrissur | RelentCare ENT Surgeon",
    description: "Adult adenotonsillectomy surgery in Thrissur for recurrent tonsillitis and sleep apnea. Learn about indications and recovery.",
    url: "https://www.relentcarehospitals.com/adenotonsillectomy-in-adult",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Adenotonsillectomy in Adults in Thrissur"
        subtitle="Surgical treatment for recurrent tonsillitis and sleep apnea"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Adenotonsillectomy (removal of adenoids and tonsils) in adults is indicated for recurrent bacterial infections, sleep-disordered breathing, and obstructive sleep apnea. While traditionally associated with children, adult adenotonsillectomy is increasingly performed with excellent outcomes in carefully selected patients."
          },
          {
            type: "heading",
            content: "Understanding Adult Adenotonsillectomy"
          },
          {
            type: "text",
            content: "The adenoids and tonsils are lymphoid tissues that play a role in immune defense. In some adults, these tissues become chronically infected, enlarged, or obstructive. Surgical removal can provide significant relief from symptoms and improve quality of life."
          },
          {
            type: "heading",
            content: "Indications for Adult Adenotonsillectomy"
          },
          {
            type: "heading",
            content: "Recurrent Tonsillitis"
          },
          {
            type: "list",
            items: [
              "7+ episodes in one year",
              "5+ episodes per year for 2 years",
              "3+ episodes per year for 3 years",
              "Documented bacterial episodes (by culture)",
              "Disruption of daily activities or work"
            ]
          },
          {
            type: "heading",
            content: "Obstructive Sleep Apnea (OSA)"
          },
          {
            type: "list",
            items: [
              "Significant upper airway obstruction from enlarged tonsils/adenoids",
              "Sleep apnea documented on sleep study",
              "Daytime somnolence and fatigue",
              "Failure of conservative treatments",
              "Snoring and witnessed apneas"
            ]
          },
          {
            type: "heading",
            content: "Other Indications"
          },
          {
            type: "list",
            items: [
              "Chronic tonsillitis with persistent symptoms",
              "Tonsillar hypertrophy with dysphagia",
              "Halitosis from tonsillar debris",
              "Unilateral tonsillar enlargement (rule out malignancy first)",
              "Tonsillar abscess (peritonsillar or retropharyngeal)",
              "Suspected malignancy"
            ]
          },
          {
            type: "heading",
            content: "Pre-operative Evaluation"
          },
          {
            type: "heading",
            content: "Patient Assessment"
          },
          {
            type: "list",
            items: [
              "Detailed history of infections and symptoms",
              "Sleep apnea evaluation and sleep study",
              "Assessment of daytime symptoms",
              "Comorbid conditions evaluation",
              "Medication review and adjustment",
              "Baseline voice and swallowing function"
            ]
          },
          {
            type: "heading",
            content: "Physical Examination"
          },
          {
            type: "list",
            items: [
              "Assessment of tonsil size and appearance",
              "Adenoid visualization via nasal endoscopy",
              "Evaluation for masses or asymmetry",
              "Voice and swallowing assessment",
              "Neck examination for lymph nodes"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Testing"
          },
          {
            type: "list",
            items: [
              "Sleep study if OSA suspected",
              "Throat culture documentation",
              "Imaging (CT) if malignancy suspected",
              "Coagulation studies",
              "Anesthesia medical clearance"
            ]
          },
          {
            type: "heading",
            content: "Pre-operative Preparation"
          },
          {
            type: "list",
            items: [
              "NPO status (6-8 hours before surgery)",
              "Medication management (stop blood thinners)",
              "Anesthesia consultation",
              "Discussion of risks and benefits",
              "Informed consent"
            ]
          },
          {
            type: "heading",
            content: "Adenotonsillectomy Procedure"
          },
          {
            type: "heading",
            content: "Operative Technique"
          },
          {
            type: "list",
            items: [
              "General anesthesia with intubation",
              "Mouth retractor insertion for visualization",
              "Adenoid removal with adenotome or powered instruments",
              "Tonsil removal using various techniques (cold steel, cautery, laser, coblation)",
              "Hemostasis to control bleeding",
              "Careful closure of surgical bed"
            ]
          },
          {
            type: "heading",
            content: "Operative Methods"
          },
          {
            type: "heading",
            content: "Cold Steel Technique"
          },
          {
            type: "list",
            items: [
              "Traditional dissection with instruments",
              "Good hemostasis with sutures",
              "Lower risk of thermal injury",
              "Longer operative time"
            ]
          },
          {
            type: "heading",
            content: "Coblation"
          },
          {
            type: "list",
            items: [
              "Plasma-based energy removal",
              "Lower temperature than electrocautery",
              "Less postoperative pain",
              "Quick hemostasis"
            ]
          },
          {
            type: "heading",
            content: "Laser-Assisted"
          },
          {
            type: "list",
            items: [
              "CO2 or KTP laser energy",
              "Precise tissue removal",
              "Good hemostasis",
              "Risk of thermal injury"
            ]
          },
          {
            type: "heading",
            content: "Recovery Timeline"
          },
          {
            type: "heading",
            content: "Immediate Post-operative (Days 1-3)"
          },
          {
            type: "list",
            items: [
              "Throat pain (usually moderate to severe)",
              "Pain referred to ears",
              "Difficulty swallowing",
              "Some nausea from anesthesia",
              "Rest and pain management",
              "Soft diet and fluids",
              "Hospital discharge usually day 1"
            ]
          },
          {
            type: "heading",
            content: "Early Recovery (Week 1-2)"
          },
          {
            type: "list",
            items: [
              "Peak pain during first 3-5 days",
              "Gradual improvement thereafter",
              "Persistent difficulty swallowing",
              "Sleep disturbance common",
              "Limited voice use",
              "Avoid strenuous activity",
              "Soft, cool foods preferred"
            ]
          },
          {
            type: "heading",
            content: "Intermediate Recovery (Week 2-4)"
          },
          {
            type: "list",
            items: [
              "Significant pain improvement",
              "Return to soft diet",
              "Gradual return to normal foods",
              "Return to light activities",
              "Sleep normalization",
              "Voice recovery"
            ]
          },
          {
            type: "heading",
            content: "Full Recovery (4-6 weeks)"
          },
          {
            type: "list",
            items: [
              "Minimal pain",
              "Return to normal diet",
              "Normal voice",
              "Return to all activities",
              "Resolution of pharyngeal edema",
              "Complete healing of surgical site"
            ]
          },
          {
            type: "heading",
            content: "Post-operative Care Instructions"
          },
          {
            type: "list",
            items: [
              "Pain management with prescribed medication",
              "Adequate hydration (critical for healing)",
              "Cool/cold beverages and ice cream",
              "Soft diet progression",
              "Voice rest (minimal talking)",
              "Avoid aspirin and NSAIDs initially",
              "No strenuous activity for 2-3 weeks",
              "Regular follow-up appointments",
              "Watch for complications"
            ]
          },
          {
            type: "heading",
            content: "Diet Recommendations"
          },
          {
            type: "list",
            items: [
              "Clear liquids initially",
              "Broths and soups (warm or cold)",
              "Pudding and yogurt",
              "Ice cream and popsicles",
              "Applesauce and soft fruits",
              "Mashed potatoes",
              "Eggs and soft proteins",
              "Gradual progression to normal diet"
            ]
          },
          {
            type: "heading",
            content: "Expected Outcomes"
          },
          {
            type: "list",
            items: [
              "Elimination of recurrent infections",
              "Improved sleep quality",
              "Resolution of sleep apnea in most cases",
              "Better daytime energy and function",
              "Return to normal diet and voice",
              "Improved quality of life"
            ]
          },
          {
            type: "heading",
            content: "Potential Complications"
          },
          {
            type: "heading",
            content: "Common (Minor)"
          },
          {
            type: "list",
            items: [
              "Throat pain",
              "Difficulty swallowing",
              "Nausea",
              "Mild fever",
              "Ear pain"
            ]
          },
          {
            type: "heading",
            content: "Uncommon (Serious)"
          },
          {
            type: "list",
            items: [
              "Postoperative hemorrhage (1-2%)",
              "Dehydration",
              "Infection",
              "Velopharyngeal insufficiency (rare)",
              "Dental injury",
              "Aspiration"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Adult Adenotonsillectomy?"
          },
          {
            type: "list",
            items: [
              "Experienced ENT surgeons with adult cases",
              "Multiple surgical technique options",
              "Comprehensive pre-operative evaluation",
              "Advanced anesthesia support",
              "Pain management expertise",
              "Careful post-operative monitoring",
              "Excellent outcomes in selected patients",
              "Compassionate care and support"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
