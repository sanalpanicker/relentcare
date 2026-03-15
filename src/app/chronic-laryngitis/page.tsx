import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Chronic Laryngitis Treatment in Thrissur | RelentCare ENT",
  description: "Expert treatment of chronic laryngitis in Thrissur. Learn about causes including GERD, smoking, voice abuse.",
  keywords: ["chronic laryngitis", "laryngeal inflammation", "GERD", "voice loss", "throat inflammation", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/chronic-laryngitis" },
  openGraph: { 
    title: "Chronic Laryngitis Treatment in Thrissur | RelentCare ENT",
    description: "Expert treatment of chronic laryngitis in Thrissur. Learn about causes including GERD, smoking, voice abuse.",
    url: "https://www.relentcarehospitals.com/chronic-laryngitis",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Chronic Laryngitis Treatment in Thrissur"
        subtitle="Comprehensive management of persistent laryngeal inflammation"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Chronic laryngitis is persistent inflammation of the larynx lasting more than 3 weeks. Unlike acute viral laryngitis, chronic laryngitis requires investigation to identify the underlying cause. Common causes include acid reflux, smoking, voice abuse, and chronic irritation. Effective treatment addresses the cause."
          },
          {
            type: "heading",
            content: "Understanding Chronic Laryngitis"
          },
          {
            type: "text",
            content: "Chronic laryngitis develops when the vocal cords and surrounding laryngeal tissues remain inflamed over extended periods. This inflammation disrupts normal vocal cord function, causing persistent hoarseness. Identifying and treating the underlying cause is essential for resolution."
          },
          {
            type: "heading",
            content: "Common Causes of Chronic Laryngitis"
          },
          {
            type: "heading",
            content: "GERD (Acid Reflux)"
          },
          {
            type: "list",
            items: [
              "Most common cause of chronic laryngitis",
              "Stomach acid damages laryngeal tissues",
              "Laryngopharyngeal reflux (LPRD)",
              "May occur without typical heartburn symptoms"
            ]
          },
          {
            type: "heading",
            content: "Smoking and Tobacco Use"
          },
          {
            type: "list",
            items: [
              "Direct irritant to laryngeal mucosa",
              "Impairs mucosal healing",
              "Increases cancer risk",
              "Dose-dependent effect"
            ]
          },
          {
            type: "heading",
            content: "Voice Abuse"
          },
          {
            type: "list",
            items: [
              "Excessive talking, shouting, yelling",
              "Professional voice users",
              "Hard glottal attacks",
              "Chronic coughing or throat clearing"
            ]
          },
          {
            type: "heading",
            content: "Chronic Cough"
          },
          {
            type: "list",
            items: [
              "Postnasal drip syndrome",
              "Asthma",
              "Chronic obstructive pulmonary disease (COPD)",
              "Smoking-related cough",
              "ACE inhibitor medication side effect"
            ]
          },
          {
            type: "heading",
            content: "Allergies"
          },
          {
            type: "list",
            items: [
              "Environmental allergens",
              "Postnasal drip from allergic rhinitis",
              "Seasonal or perennial allergies",
              "Secondary laryngeal irritation"
            ]
          },
          {
            type: "heading",
            content: "Other Causes"
          },
          {
            type: "list",
            items: [
              "Exposure to occupational irritants",
              "Air pollution and environmental toxins",
              "Inadequate hydration",
              "Laryngeal papillomatosis",
              "Fungal infections (candidiasis)",
              "Hypothyroidism",
              "Radiation therapy effects"
            ]
          },
          {
            type: "heading",
            content: "Symptoms of Chronic Laryngitis"
          },
          {
            type: "list",
            items: [
              "Persistent hoarseness",
              "Rough or breathy voice",
              "Voice fatigue with speaking",
              "Throat pain or discomfort",
              "Persistent cough",
              "Throat clearing difficulty",
              "Sensation of lump in throat",
              "Dry cough"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Evaluation"
          },
          {
            type: "heading",
            content: "Medical History"
          },
          {
            type: "list",
            items: [
              "Duration of symptoms",
              "Associated factors (smoking, voice use)",
              "Reflux symptoms",
              "Cough characteristics",
              "Environmental exposures",
              "Medication use",
              "Smoking and alcohol history"
            ]
          },
          {
            type: "heading",
            content: "Laryngoscopic Examination"
          },
          {
            type: "list",
            items: [
              "Flexible laryngoscopy",
              "Assessment of mucosal edema",
              "Redness and inflammation degree",
              "Presence of nodules or masses",
              "Vocal cord mobility",
              "Videolaryngoscopy documentation"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Testing"
          },
          {
            type: "list",
            items: [
              "24-hour pH monitoring for GERD",
              "Chest X-ray if chronic cough present",
              "Allergy testing if allergic etiology suspected",
              "Thyroid function tests",
              "Imaging if malignancy suspected"
            ]
          },
          {
            type: "heading",
            content: "Management of Chronic Laryngitis"
          },
          {
            type: "heading",
            content: "Treatment of Underlying GERD"
          },
          {
            type: "list",
            items: [
              "Proton pump inhibitors (PPIs)",
              "H2 receptor antagonists",
              "Dietary modifications (avoid triggers)",
              "Elevate head of bed",
              "No eating 3 hours before sleep",
              "Weight loss if overweight",
              "Continuation of therapy for 3+ months"
            ]
          },
          {
            type: "heading",
            content: "Voice Modification"
          },
          {
            type: "list",
            items: [
              "Voice therapy with speech pathologist",
              "Voice rest during acute exacerbations",
              "Elimination of voice abuse behaviors",
              "Proper voice technique training",
              "Avoidance of loud environments"
            ]
          },
          {
            type: "heading",
            content: "Environmental and Behavioral Changes"
          },
          {
            type: "list",
            items: [
              "Smoking cessation",
              "Avoidance of secondhand smoke",
              "Environmental irritant avoidance",
              "Adequate hydration",
              "Environmental humidity control",
              "Air humidifier use"
            ]
          },
          {
            type: "heading",
            content: "Cough Management"
          },
          {
            type: "list",
            items: [
              "Treatment of underlying asthma or COPD",
              "Postnasal drip treatment",
              "ACE inhibitor change if causative",
              "Cough suppressants for symptom relief",
              "Control of allergies"
            ]
          },
          {
            type: "heading",
            content: "Supportive Care"
          },
          {
            type: "list",
            items: [
              "Lozenges for symptomatic relief",
              "Honey for cough suppression",
              "Warm liquid intake",
              "Herbal teas",
              "Topical steroid sprays (short-term)"
            ]
          },
          {
            type: "heading",
            content: "Allergy Management"
          },
          {
            type: "list",
            items: [
              "Antihistamines",
              "Decongestants",
              "Allergy avoidance",
              "Immunotherapy if indicated",
              "Postnasal drip treatment"
            ]
          },
          {
            type: "heading",
            content: "Recovery Timeline"
          },
          {
            type: "list",
            items: [
              "2-4 weeks: Symptomatic improvement with treatment",
              "1-2 months: Significant voice improvement",
              "3-6 months: Complete resolution in most cases",
              "Ongoing management: Prevention of recurrence"
            ]
          },
          {
            type: "heading",
            content: "Prevention of Recurrence"
          },
          {
            type: "list",
            items: [
              "Continued GERD management",
              "Smoking avoidance",
              "Voice care practices",
              "Adequate hydration",
              "Allergy management",
              "Regular follow-up with ENT"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Chronic Laryngitis?"
          },
          {
            type: "list",
            items: [
              "Comprehensive diagnostic evaluation",
              "Identification of underlying causes",
              "Multidisciplinary treatment approach",
              "Voice therapy services",
              "Ongoing management and support",
              "Excellent outcomes with proper treatment"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
