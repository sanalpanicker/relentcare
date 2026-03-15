import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Nasal Polyp Treatment in Thrissur | FESS | RelentCare ENT",
  description: "Comprehensive nasal polyp treatment in Thrissur using FESS. Learn about causes, medical and surgical management.",
  keywords: ["nasal polyps", "FESS", "polyp removal", "sinusitis", "endoscopic surgery", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/nasal-polyp-treatment-thrissur-best-ent-centre" },
  openGraph: { 
    title: "Nasal Polyp Treatment in Thrissur | FESS | RelentCare ENT",
    description: "Comprehensive nasal polyp treatment in Thrissur using FESS. Learn about causes, medical and surgical management.",
    url: "https://www.relentcarehospitals.com/nasal-polyp-treatment-thrissur-best-ent-centre",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Nasal Polyp Treatment in Thrissur"
        subtitle="Medical and surgical management of nasal polyps"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Nasal polyps are non-cancerous growths that develop in the sinuses or nasal passages. They typically originate from the sinus cavity and extend into the nasal passages. When symptomatic, they cause nasal obstruction, sinus congestion, and sleep disturbance. Treatment ranges from medical management to surgical removal using FESS."
          },
          {
            type: "heading",
            content: "Understanding Nasal Polyps"
          },
          {
            type: "text",
            content: "Nasal polyps usually arise from the mucous lining of the sinuses and can vary in size and number. They are often associated with chronic inflammation, allergies, or specific conditions like cystic fibrosis or aspirin sensitivity. Symptoms depend on the polyp size and location."
          },
          {
            type: "heading",
            content: "Causes of Nasal Polyps"
          },
          {
            type: "list",
            items: [
              "Chronic rhinosinusitis",
              "Allergic rhinitis",
              "Asthma and allergies",
              "Aspirin or NSAID sensitivity (AERD)",
              "Cystic fibrosis",
              "Eosinophilic granulomatosis",
              "Chronic inflammation",
              "Idiopathic (no clear cause)"
            ]
          },
          {
            type: "heading",
            content: "Symptoms of Nasal Polyps"
          },
          {
            type: "list",
            items: [
              "Persistent nasal obstruction",
              "Postnasal drip",
              "Reduced sense of smell and taste",
              "Chronic sinusitis symptoms",
              "Sleep apnea and snoring",
              "Ear fullness or hearing loss",
              "Headaches or facial pressure"
            ]
          },
          {
            type: "heading",
            content: "Diagnosis of Nasal Polyps"
          },
          {
            type: "heading",
            content: "Clinical Evaluation"
          },
          {
            type: "list",
            items: [
              "Detailed symptom history",
              "Nasal endoscopy for visualization",
              "High-resolution CT imaging",
              "Assessment of associated conditions",
              "Evaluation for cystic fibrosis if applicable"
            ]
          },
          {
            type: "heading",
            content: "Medical Management"
          },
          {
            type: "text",
            content: "Conservative medical therapy is the first-line treatment for nasal polyps. It aims to reduce inflammation and control associated symptoms."
          },
          {
            type: "list",
            items: [
              "Topical nasal corticosteroid sprays",
              "Systemic corticosteroids for acute symptoms",
              "Saline nasal irrigations",
              "Antihistamines for allergic components",
              "Treatment of underlying allergies",
              "Leukotriene inhibitors for aspirin sensitivity",
              "Immunotherapy if indicated"
            ]
          },
          {
            type: "heading",
            content: "Surgical Management: FESS"
          },
          {
            type: "text",
            content: "Functional Endoscopic Sinus Surgery (FESS) is indicated when medical therapy fails or polyps cause significant symptoms. The minimally invasive approach offers excellent outcomes with rapid recovery."
          },
          {
            type: "list",
            items: [
              "Endoscopic visualization of polyps",
              "Complete polyp removal including base",
              "Opening of sinus ostia for drainage",
              "Removal of diseased sinus mucosa",
              "Preservation of normal mucosa",
              "Excellent visualization and control",
              "Lower recurrence with complete removal"
            ]
          },
          {
            type: "heading",
            content: "Polyp Recurrence Prevention"
          },
          {
            type: "list",
            items: [
              "Complete surgical removal of polyp base",
              "Treatment of underlying sinus disease",
              "Continued topical steroid use post-operatively",
              "Regular nasal irrigations",
              "Management of allergies and asthma",
              "Avoidance of NSAID triggers if applicable",
              "Regular follow-up and monitoring"
            ]
          },
          {
            type: "heading",
            content: "Recurrence Rates"
          },
          {
            type: "text",
            content: "Recurrence rates vary based on the underlying etiology. With proper surgical technique and post-operative medical management, recurrence rates range from 10-40%. Patients with cystic fibrosis or aspirin sensitivity may have higher recurrence rates."
          },
          {
            type: "heading",
            content: "Recovery After FESS for Polyps"
          },
          {
            type: "list",
            items: [
              "Minimal postoperative pain",
              "Return to normal activities in 1-2 weeks",
              "Full healing in 4-6 weeks",
              "Continued improvement for several months",
              "Regular nasal rinses for healing",
              "Post-operative topical steroids recommended"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Polyp Treatment?"
          },
          {
            type: "list",
            items: [
              "Comprehensive medical and surgical options",
              "Experienced endoscopic surgeons",
              "Advanced FESS techniques",
              "Complete polyp removal with low recurrence",
              "Excellent post-operative care",
              "Long-term follow-up and management"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
