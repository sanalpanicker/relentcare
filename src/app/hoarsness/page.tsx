import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Hoarseness Treatment in Thrissur | Voice Problems | RelentCare ENT",
  description: "Expert diagnosis and treatment of hoarseness in Thrissur. Learn about causes, laryngoscopy, and treatment options.",
  keywords: ["hoarseness", "voice problems", "hoarse voice", "laryngoscopy", "voice loss", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/hoarsness" },
  openGraph: { 
    title: "Hoarseness Treatment in Thrissur | Voice Problems | RelentCare ENT",
    description: "Expert diagnosis and treatment of hoarseness in Thrissur. Learn about causes, laryngoscopy, and treatment options.",
    url: "https://www.relentcarehospitals.com/hoarsness",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Hoarseness Treatment in Thrissur"
        subtitle="Comprehensive evaluation and management of voice changes"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Hoarseness is a change in voice quality, characterized by a rough, breathy, or strained sound. While often temporary and benign, persistent hoarseness can indicate underlying laryngeal conditions requiring evaluation and treatment. Our laryngologists provide comprehensive assessment and management of hoarseness."
          },
          {
            type: "heading",
            content: "Understanding Hoarseness"
          },
          {
            type: "text",
            content: "Hoarseness results from problems with vocal cord vibration or closure. The severity can range from mild changes in voice quality to complete voice loss (aphonia). Duration is important: acute hoarseness (less than 3 weeks) is often viral, while chronic hoarseness (more than 3 weeks) requires investigation."
          },
          {
            type: "heading",
            content: "Common Causes of Hoarseness"
          },
          {
            type: "heading",
            content: "Infectious Causes"
          },
          {
            type: "list",
            items: [
              "Viral laryngitis (most common acute cause)",
              "Bacterial laryngitis",
              "Fungal infection (candidiasis)",
              "Tuberculosis of larynx"
            ]
          },
          {
            type: "heading",
            content: "Inflammatory/Irritative Conditions"
          },
          {
            type: "list",
            items: [
              "Laryngopharyngeal reflux (LPRD/GERD)",
              "Allergic laryngitis",
              "Smoking and tobacco use",
              "Chronic cough",
              "Environmental irritants",
              "Voice abuse and strain"
            ]
          },
          {
            type: "heading",
            content: "Vocal Cord Pathology"
          },
          {
            type: "list",
            items: [
              "Vocal nodules (singer's nodules)",
              "Vocal polyps",
              "Vocal cord cyst",
              "Vocal sulcus",
              "Laryngeal papillomatosis"
            ]
          },
          {
            type: "heading",
            content: "Vocal Cord Dysfunction"
          },
          {
            type: "list",
            items: [
              "Vocal cord paralysis",
              "Vocal cord paresis",
              "Presbylarynx (age-related vocal cord atrophy)",
              "Muscle tension dysphonia",
              "Spasmodic dysphonia"
            ]
          },
          {
            type: "heading",
            content: "Neurological Conditions"
          },
          {
            type: "list",
            items: [
              "Recurrent laryngeal nerve damage",
              "Superior laryngeal nerve injury",
              "Stroke affecting voice control",
              "Parkinson's disease",
              "Multiple sclerosis"
            ]
          },
          {
            type: "heading",
            content: "Systemic Conditions"
          },
          {
            type: "list",
            items: [
              "Hypothyroidism",
              "Connective tissue disorders (Scleroderma, Lupus)",
              "Hormonal changes (menopause, pregnancy)",
              "Sarcoidosis",
              "Amyloidosis"
            ]
          },
          {
            type: "heading",
            content: "Other Causes"
          },
          {
            type: "list",
            items: [
              "Laryngeal cancer (see hoarseness persisting >3 weeks)",
              "Postoperative voice changes",
              "Trauma to larynx"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Evaluation"
          },
          {
            type: "heading",
            content: "Patient History"
          },
          {
            type: "list",
            items: [
              "Duration of hoarseness (acute vs chronic)",
              "Associated symptoms (pain, cough, dysphagia)",
              "Voice use patterns (professional voice user?)",
              "Recent upper respiratory infection",
              "Smoking and alcohol history",
              "GERD symptoms",
              "Medication history (ACE inhibitors, steroids)",
              "Recent surgery or intubation"
            ]
          },
          {
            type: "heading",
            content: "Physical Examination"
          },
          {
            type: "list",
            items: [
              "Listening to voice quality",
              "Assessment of voice strength and fatigue",
              "Palpation of neck and larynx",
              "General physical examination"
            ]
          },
          {
            type: "heading",
            content: "Laryngoscopic Examination"
          },
          {
            type: "text",
            content: "Direct visualization of the vocal cords is essential for accurate diagnosis of hoarseness."
          },
          {
            type: "list",
            items: [
              "Flexible fiberoptic laryngoscopy",
              "Rigid laryngoscopy for better visualization",
              "Videolaryngoscopy with digital documentation",
              "Stroboscopy to assess vocal cord vibration",
              "Assessment for lesions, inflammation, paralysis"
            ]
          },
          {
            type: "heading",
            content: "Additional Testing"
          },
          {
            type: "list",
            items: [
              "Laryngeal electromyography (EMG) for paralysis",
              "Acoustic voice analysis",
              "Imaging (CT/MRI) if tumor suspected",
              "Thyroid function tests",
              "Allergy testing if indicated"
            ]
          },
          {
            type: "heading",
            content: "Treatment Options"
          },
          {
            type: "heading",
            content: "Conservative Management"
          },
          {
            type: "list",
            items: [
              "Voice rest for acute laryngitis",
              "Hydration and humidification",
              "Avoidance of voice abuse",
              "Smoking cessation",
              "Management of GERD with medication",
              "Treatment of underlying allergies",
              "Throat lozenges and cough drops"
            ]
          },
          {
            type: "heading",
            content: "Voice Therapy"
          },
          {
            type: "list",
            items: [
              "Vocal hygiene education",
              "Voice exercises and techniques",
              "Speech-language pathology intervention",
              "Especially effective for vocal abuse-related hoarseness",
              "Treatment of muscle tension dysphonia"
            ]
          },
          {
            type: "heading",
            content: "Medical Management"
          },
          {
            type: "list",
            items: [
              "Antibiotics for bacterial infection",
              "Antifungals for candidiasis",
              "Anti-reflux medications for GERD/LPRD",
              "Antihistamines for allergic conditions",
              "Corticosteroids for severe inflammation"
            ]
          },
          {
            type: "heading",
            content: "Surgical Treatment"
          },
          {
            type: "list",
            items: [
              "Microlaryngoscopy for vocal cord pathology removal",
              "Vocal nodule or polyp removal",
              "Vocal cord injection for paralysis",
              "Vocal cord medialization for paresis",
              "Laryngeal papilloma removal",
              "Laser-assisted voice surgery"
            ]
          },
          {
            type: "heading",
            content: "When to Seek Medical Attention"
          },
          {
            type: "list",
            items: [
              "Hoarseness lasting more than 3 weeks",
              "Complete voice loss",
              "Severe pain with voice",
              "Difficulty swallowing",
              "Breathing difficulty",
              "Hoarseness with weight loss or systemic symptoms",
              "Hoarseness after laryngeal trauma"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Hoarseness Treatment?"
          },
          {
            type: "list",
            items: [
              "Expert laryngologists with extensive experience",
              "Comprehensive diagnostic capabilities",
              "Advanced laryngoscopy equipment",
              "Voice therapy services",
              "Surgical expertise when needed",
              "Personalized treatment plans",
              "Excellent outcomes with compassionate care"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
