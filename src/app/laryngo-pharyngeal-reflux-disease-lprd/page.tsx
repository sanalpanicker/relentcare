import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Laryngopharyngeal Reflux (LPR) Treatment in Thrissur | RelentCare",
  description: "Expert LPR and silent reflux treatment in Thrissur. Learn about symptoms, dietary changes, and medication management.",
  keywords: ["LPR", "laryngopharyngeal reflux", "GERD", "silent reflux", "acid reflux", "hoarseness", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/laryngo-pharyngeal-reflux-disease-lprd" },
  openGraph: { 
    title: "Laryngopharyngeal Reflux (LPR) Treatment in Thrissur | RelentCare",
    description: "Expert LPR and silent reflux treatment in Thrissur. Learn about symptoms, dietary changes, and medication management.",
    url: "https://www.relentcarehospitals.com/laryngo-pharyngeal-reflux-disease-lprd",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Laryngopharyngeal Reflux (LPR) Treatment in Thrissur"
        subtitle="Expert management of silent reflux and acid-related laryngeal symptoms"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Laryngopharyngeal reflux (LPR), also called silent reflux, occurs when stomach acid reaches the larynx and pharynx. Unlike gastroesophageal reflux disease (GERD), LPR may occur without heartburn. It causes hoarseness, throat clearing, cough, and globus sensation. Comprehensive management includes lifestyle changes and medication."
          },
          {
            type: "heading",
            content: "Understanding LPR vs GERD"
          },
          {
            type: "heading",
            content: "LPR (Laryngopharyngeal Reflux)"
          },
          {
            type: "list",
            items: [
              "Stomach acid reaches larynx and pharynx",
              "Often without heartburn symptoms",
              "ENT-specific symptoms (hoarseness, cough)",
              "More common than previously recognized",
              "May occur during sleep"
            ]
          },
          {
            type: "heading",
            content: "GERD (Gastroesophageal Reflux)"
          },
          {
            type: "list",
            items: [
              "Stomach acid reaches esophagus",
              "Heartburn and indigestion typical",
              "Gastroenterology focus",
              "More common in supine position",
              "May have esophageal complications"
            ]
          },
          {
            type: "heading",
            content: "Causes of LPR"
          },
          {
            type: "heading",
            content: "Mechanical Factors"
          },
          {
            type: "list",
            items: [
              "Lower esophageal sphincter (LES) dysfunction",
              "Upper esophageal sphincter (UES) weakness",
              "Hiatal hernia",
              "Delayed gastric emptying",
              "Increased intra-abdominal pressure"
            ]
          },
          {
            type: "heading",
            content: "Dietary and Lifestyle Factors"
          },
          {
            type: "list",
            items: [
              "High-fat foods",
              "Spicy foods",
              "Citrus fruits and juices",
              "Tomato products",
              "Caffeine and carbonated drinks",
              "Chocolate",
              "Alcohol",
              "Large meals",
              "Eating before bed"
            ]
          },
          {
            type: "heading",
            content: "Other Contributing Factors"
          },
          {
            type: "list",
            items: [
              "Smoking",
              "Obesity and excess weight",
              "Pregnancy",
              "Certain medications",
              "Stress",
              "Sleep disturbances"
            ]
          },
          {
            type: "heading",
            content: "Symptoms of LPR"
          },
          {
            type: "heading",
            content: "Laryngeal and Throat Symptoms"
          },
          {
            type: "list",
            items: [
              "Hoarseness",
              "Throat clearing (especially morning)",
              "Persistent cough",
              "Laryngeal pain",
              "Sensation of lump in throat (globus)",
              "Postnasal drip",
              "Difficulty swallowing"
            ]
          },
          {
            type: "heading",
            content: "Associated Symptoms"
          },
          {
            type: "list",
            items: [
              "Mild heartburn (may be absent)",
              "Bad taste in mouth",
              "Morning voice hoarseness",
              "Voice fatigue",
              "Vocal breaks"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Evaluation"
          },
          {
            type: "heading",
            content: "Clinical Assessment"
          },
          {
            type: "list",
            items: [
              "Symptom history and timing",
              "Associated dietary triggers",
              "Sleep position and eating habits",
              "Medication review"
            ]
          },
          {
            type: "heading",
            content: "Laryngoscopic Examination"
          },
          {
            type: "list",
            items: [
              "Flexible laryngoscopy findings",
              "Edema and erythema of larynx",
              "Posterior laryngeal changes",
              "Vocal cord appearance",
              "Interarytenoid region involvement"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Tests"
          },
          {
            type: "list",
            items: [
              "24-hour pH monitoring (gold standard)",
              "Impedance-pH monitoring",
              "Upper endoscopy to assess esophagus",
              "Laryngeal stroboscopy"
            ]
          },
          {
            type: "heading",
            content: "Management of LPR"
          },
          {
            type: "heading",
            content: "Lifestyle and Dietary Modifications"
          },
          {
            type: "text",
            content: "Lifestyle changes are the first-line treatment and should be implemented for all LPR patients."
          },
          {
            type: "list",
            items: [
              "Elevate head of bed 30-45 degrees",
              "No eating 3-4 hours before bed",
              "Avoid trigger foods and beverages",
              "Reduce portion sizes",
              "Eat slowly and chew thoroughly",
              "Weight loss if overweight",
              "Smoking cessation",
              "Alcohol reduction",
              "Stress management"
            ]
          },
          {
            type: "heading",
            content: "Foods to Avoid"
          },
          {
            type: "list",
            items: [
              "Spicy foods and hot peppers",
              "Citrus fruits and juices",
              "Tomato and tomato products",
              "Fried and fatty foods",
              "Chocolate",
              "Coffee and caffeine",
              "Alcohol",
              "Carbonated beverages",
              "Mint (can weaken LES)"
            ]
          },
          {
            type: "heading",
            content: "Recommended Foods"
          },
          {
            type: "list",
            items: [
              "Lean proteins (chicken, fish, turkey)",
              "Whole grains and oatmeal",
              "Vegetables (non-acidic)",
              "Bananas and apples",
              "Low-fat dairy",
              "Ginger and honey",
              "Water and herbal teas"
            ]
          },
          {
            type: "heading",
            content: "Pharmacological Treatment"
          },
          {
            type: "heading",
            content: "Proton Pump Inhibitors (PPIs)"
          },
          {
            type: "list",
            items: [
              "Most effective for acid suppression",
              "Omeprazole, lansoprazole, pantoprazole",
              "Twice-daily dosing often needed for LPR",
              "Take 30-60 minutes before meals",
              "Requires 3-6 months for full benefit",
              "Long-term use may need monitoring"
            ]
          },
          {
            type: "heading",
            content: "H2 Receptor Antagonists"
          },
          {
            type: "list",
            items: [
              "Less effective than PPIs",
              "Famotidine, ranitidine",
              "Faster onset than PPIs",
              "May be used with PPIs"
            ]
          },
          {
            type: "heading",
            content: "Antacids and Alginates"
          },
          {
            type: "list",
            items: [
              "Immediate symptom relief",
              "Calcium carbonate, magnesium hydroxide",
              "Alginates form protective barrier",
              "Useful for occasional symptoms"
            ]
          },
          {
            type: "heading",
            content: "Prokinetic Agents"
          },
          {
            type: "list",
            items: [
              "Enhance stomach emptying",
              "Metoclopramide",
              "Domperidone",
              "Useful for delayed gastric emptying"
            ]
          },
          {
            type: "heading",
            content: "Voice Therapy"
          },
          {
            type: "list",
            items: [
              "Support voice during acid exposure",
              "Vocal hygiene education",
              "Voice rest during symptoms",
              "Gentle voice use techniques"
            ]
          },
          {
            type: "heading",
            content: "Surgical Treatment"
          },
          {
            type: "text",
            content: "Surgery is rarely needed for LPR but may be considered for refractory cases with failed medical management."
          },
          {
            type: "list",
            items: [
              "Laparoscopic fundoplication",
              "For severe GERD/LPR",
              "LES reinforcement procedure",
              "Reserved for select patients"
            ]
          },
          {
            type: "heading",
            content: "Treatment Duration and Monitoring"
          },
          {
            type: "list",
            items: [
              "Minimum 3-6 months of treatment",
              "Voice improvement gradually over weeks",
              "Full resolution may take months",
              "Regular follow-up at 4-6 weeks initially",
              "Long-term management often needed",
              "Continued lifestyle modifications essential"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for LPR Treatment?"
          },
          {
            type: "list",
            items: [
              "Experienced laryngologists with GERD expertise",
              "Comprehensive diagnostic evaluation",
              "Multidisciplinary treatment approach",
              "Voice therapy services",
              "Dietary counseling and support",
              "Long-term management and follow-up",
              "Excellent outcomes with proper treatment"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
