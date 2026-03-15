import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Laryngology Services in Thrissur | Voice & Throat Care | RelentCare",
  description: "Comprehensive laryngology services in Thrissur including voice therapy, hoarseness, vocal disorders, and throat conditions.",
  keywords: ["laryngology", "voice therapy", "vocal disorders", "throat care", "hoarseness", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/laryngology-services" },
  openGraph: { 
    title: "Laryngology Services in Thrissur | Voice & Throat Care | RelentCare",
    description: "Comprehensive laryngology services in Thrissur including voice therapy, hoarseness, vocal disorders, and throat conditions.",
    url: "https://www.relentcarehospitals.com/laryngology-services",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Laryngology Services in Thrissur"
        subtitle="Expert voice and throat care for all laryngeal conditions"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Laryngology is the medical specialty focusing on the diagnosis and treatment of disorders of the larynx (voice box), pharynx (throat), and related structures. At RelentCare, our laryngologists provide comprehensive care for voice disorders, throat conditions, and swallowing problems using advanced diagnostic and therapeutic techniques."
          },
          {
            type: "heading",
            content: "Laryngology Services Offered"
          },
          {
            type: "heading",
            content: "Voice Disorders"
          },
          {
            type: "list",
            items: [
              "Hoarseness and voice loss",
              "Vocal nodules and polyps",
              "Muscle tension dysphonia",
              "Vocal sulcus",
              "Vocal cord paralysis",
              "Laryngospasm",
              "Voice therapy and rehabilitation"
            ]
          },
          {
            type: "heading",
            content: "Inflammatory Conditions"
          },
          {
            type: "list",
            items: [
              "Chronic laryngitis",
              "Laryngopharyngeal reflux (LPRD)",
              "Acute epiglottitis",
              "Laryngeal papillomatosis",
              "Laryngeal web",
              "Posterior laryngitis"
            ]
          },
          {
            type: "heading",
            content: "Swallowing Disorders"
          },
          {
            type: "list",
            items: [
              "Dysphagia assessment and management",
              "Oropharyngeal dysphagia",
              "Esophageal disorders",
              "Videofluoroscopic swallow study",
              "Endoscopic swallow evaluation"
            ]
          },
          {
            type: "heading",
            content: "Surgical Services"
          },
          {
            type: "list",
            items: [
              "Microlaryngoscopy and phonosurgery",
              "Laser-assisted vocal cord surgery",
              "Vocal cord injection therapy",
              "Foreign body removal",
              "Laryngeal reconstruction",
              "Tracheostomy management"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Capabilities"
          },
          {
            type: "heading",
            content: "Advanced Imaging and Assessment"
          },
          {
            type: "list",
            items: [
              "Rigid and flexible laryngoscopy",
              "Videolaryngoscopy with digital recording",
              "Laryngeal stroboscopy",
              "Videofluoroscopic swallow study",
              "Laryngeal electromyography",
              "Voice analysis and acoustic measurement",
              "High-speed digital imaging"
            ]
          },
          {
            type: "heading",
            content: "Conditions We Treat"
          },
          {
            type: "list",
            items: [
              "Hoarseness",
              "Vocal nodules",
              "Vocal polyps",
              "Muscle tension dysphonia",
              "Vocal sulcus",
              "Chronic laryngitis",
              "Laryngopharyngeal reflux",
              "Vocal cord paralysis",
              "Voice fatigue",
              "Leukoplakia and dysplasia",
              "Laryngeal cancer (referral and care)",
              "Dysphagia and aspiration"
            ]
          },
          {
            type: "heading",
            content: "Voice Therapy Services"
          },
          {
            type: "list",
            items: [
              "Speech-language pathology evaluation",
              "Personalized voice therapy programs",
              "Vocal hygiene education",
              "Voice exercises and techniques",
              "Post-operative voice rehabilitation",
              "Professional voice care for singers and speakers",
              "Group therapy programs"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Laryngology?"
          },
          {
            type: "list",
            items: [
              "Board-certified laryngologists",
              "State-of-the-art diagnostic equipment",
              "Comprehensive voice and throat care",
              "Integrated voice therapy services",
              "Specialized care for professional voice users",
              "Minimally invasive surgical techniques",
              "Excellent outcomes with compassionate care"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
