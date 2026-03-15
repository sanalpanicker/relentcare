import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Endoscopic Turbinoplasty Surgery in Thrissur | RelentCare ENT",
  description: "Minimally invasive turbinoplasty for turbinate hypertrophy in Thrissur. Learn about turbinoplasty vs turbinectomy.",
  keywords: ["turbinoplasty", "turbinate reduction", "turbinate hypertrophy", "endoscopic surgery", "nasal obstruction", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/endoscopic-turbinoplasty-surgery-thrissur-kerala" },
  openGraph: { 
    title: "Endoscopic Turbinoplasty Surgery in Thrissur | RelentCare ENT",
    description: "Minimally invasive turbinoplasty for turbinate hypertrophy in Thrissur. Learn about turbinoplasty vs turbinectomy.",
    url: "https://www.relentcarehospitals.com/endoscopic-turbinoplasty-surgery-thrissur-kerala",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Endoscopic Turbinoplasty Surgery in Thrissur"
        subtitle="Minimally invasive treatment for enlarged turbinates"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Turbinoplasty is a minimally invasive surgical procedure used to reduce the size of enlarged nasal turbinates. The turbinates are scroll-shaped structures in the nasal cavity that help humidify, warm, and filter air. When enlarged, they can cause nasal obstruction and breathing difficulties."
          },
          {
            type: "heading",
            content: "Understanding Turbinate Hypertrophy"
          },
          {
            type: "text",
            content: "The inferior turbinate is the largest and most frequently affected. Turbinate hypertrophy can be caused by allergies, chronic inflammation, vasomotor rhinitis, or can be idiopathic. This enlargement leads to persistent nasal obstruction and symptoms like snoring and sleep disturbance."
          },
          {
            type: "heading",
            content: "Causes of Turbinate Enlargement"
          },
          {
            type: "list",
            items: [
              "Allergic rhinitis",
              "Vasomotor rhinitis",
              "Chronic rhinosinusitis",
              "Environmental irritants",
              "Smoking and pollution exposure",
              "Prolonged use of nasal decongestants",
              "Hormonal changes"
            ]
          },
          {
            type: "heading",
            content: "Symptoms of Turbinate Hypertrophy"
          },
          {
            type: "list",
            items: [
              "Persistent nasal obstruction",
              "Difficulty breathing through the nose",
              "Snoring and sleep apnea",
              "Chronic sinus infections",
              "Sleep disturbance",
              "Postnasal drip",
              "Mouth breathing"
            ]
          },
          {
            type: "heading",
            content: "Turbinoplasty vs Turbinectomy"
          },
          {
            type: "heading",
            content: "Turbinoplasty (Tissue-Preserving)"
          },
          {
            type: "list",
            items: [
              "Reduces turbinate volume while preserving tissue",
              "Maintains normal mucosal function",
              "Lower risk of complications",
              "Reduced postoperative crusting",
              "Preferred technique in most cases",
              "Better long-term outcomes"
            ]
          },
          {
            type: "heading",
            content: "Turbinectomy (Complete Removal)"
          },
          {
            type: "list",
            items: [
              "Complete removal of turbinate",
              "More aggressive approach",
              "Higher risk of atrophic rhinitis",
              "Increased postoperative crusting",
              "Reserved for severe cases",
              "More rapid symptom relief"
            ]
          },
          {
            type: "heading",
            content: "Endoscopic Turbinoplasty Techniques"
          },
          {
            type: "heading",
            content: "Radiofrequency (RF) Ablation"
          },
          {
            type: "list",
            items: [
              "Uses thermal energy to shrink turbinate",
              "Outpatient procedure",
              "Minimal bleeding",
              "Quick recovery",
              "Can be repeated if needed"
            ]
          },
          {
            type: "heading",
            content: "Laser-Assisted Turbinoplasty"
          },
          {
            type: "list",
            items: [
              "CO2 or KTP laser energy",
              "Precise tissue reduction",
              "Excellent hemostasis",
              "Minimal scarring"
            ]
          },
          {
            type: "heading",
            content: "Microdebrider Turbinoplasty"
          },
          {
            type: "list",
            items: [
              "Powered instrumentation for tissue removal",
              "Excellent visualization",
              "Controlled reduction",
              "Minimal adjacent tissue trauma"
            ]
          },
          {
            type: "heading",
            content: "Coblation Turbinoplasty"
          },
          {
            type: "list",
            items: [
              "Plasma-based energy delivery",
              "Low-temperature tissue removal",
              "Rapid healing",
              "Minimal postoperative pain"
            ]
          },
          {
            type: "heading",
            content: "Recovery After Turbinoplasty"
          },
          {
            type: "list",
            items: [
              "Minimal postoperative pain",
              "No nasal packing usually needed",
              "Gradual improvement over 2-4 weeks",
              "Full results at 6-8 weeks",
              "Return to normal activities in 1-2 weeks",
              "Regular saline rinses for healing"
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
              "Topical nasal steroids if indicated",
              "Avoid nose blowing for several days",
              "Avoid strenuous activity",
              "Regular follow-up appointments",
              "Monitor for excessive crusting"
            ]
          },
          {
            type: "heading",
            content: "Benefits of Endoscopic Turbinoplasty"
          },
          {
            type: "list",
            items: [
              "Minimally invasive with excellent visualization",
              "Tissue-preserving approach",
              "Maintains normal nasal physiology",
              "Lower complication rates",
              "Quick recovery",
              "Excellent symptom relief",
              "Improved sleep quality"
            ]
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
              "Atrophic rhinitis (rare with turbinoplasty)",
              "Recurrent hypertrophy (requires revision)",
              "Temporary crusting and drainage"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Turbinoplasty?"
          },
          {
            type: "list",
            items: [
              "Experienced endoscopic surgeons",
              "Multiple surgical technique options",
              "Tissue-preserving approach",
              "Advanced equipment and technology",
              "Comprehensive post-operative care",
              "Excellent outcomes with minimal complications"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
