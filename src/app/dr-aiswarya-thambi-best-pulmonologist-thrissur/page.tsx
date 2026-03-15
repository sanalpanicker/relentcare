import type { Metadata } from "next";
import DoctorPage from "@/components/DoctorPage";

export const metadata: Metadata = {
  title: "Dr Aiswarya Thambi | Best Pulmonologist Thrissur | RelentCare",
  description:
    "Dr Aiswarya Thambi – Consultant Pulmonologist & Pediatric Pulmonologist at RelentCare, Thrissur. Expert in allergy, asthma, bronchoscopy, EBUS & interventional pulmonology.",
  alternates: { canonical: "https://www.relentcarehospitals.com/dr-aiswarya-thambi-best-pulmonologist-thrissur" },
  openGraph: {
    title: "Dr Aiswarya Thambi | Best Pulmonologist Thrissur",
    description: "Consultant Pulmonologist & Allergy specialist at RelentCare, Thrissur. Expert in asthma, COPD, pediatric pulmonology & immunotherapy.",
    url: "https://www.relentcarehospitals.com/dr-aiswarya-thambi-best-pulmonologist-thrissur",
    images: [{ url: "/images/dr-aiswarya.jpg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Aiswarya Thambi",
  description: "Consultant Pulmonologist and Allergy Specialist at RelentCare ENT Centre Thrissur",
  medicalSpecialty: "Pulmonology",
  telephone: "+919746351090",
  email: "relentcarehospitals@gmail.com",
  worksFor: {
    "@type": "MedicalClinic",
    name: "RelentCare ENT, CHEST and Facial Aesthetic Centre",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Poovany Junction, Kolazhy",
      addressLocality: "Thrissur",
      postalCode: "680010",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  },
};

export default function DrAiswaryaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DoctorPage
        name="Dr Aiswarya Thambi"
        role="Consultant Pulmonologist | Allergy Specialist Thrissur | Pediatric Pulmonologist"
        photo="/images/dr-aiswarya.jpg"
        photoAlt="Dr Aiswarya Thambi – Best Pulmonologist Thrissur Kerala"
        intro={[
          "Dr. Aiswarya Thambi is a highly qualified pulmonologist with expertise in Allergy, Asthma, Immunotherapy, and Interventional Pulmonology. She has undergone extensive training in Bronchoscopy, EBUS, Thoracoscopy, and Critical Care, reflecting her strong commitment to providing exceptional care for patients with a wide range of respiratory conditions.",
          "Dr. Thambi completed her MBBS from Government T.D. Medical College (2016), followed by an MD in Pulmonology from Government Medical College, Thrissur (2021), and later achieved her DNB in Pulmonology. She has also completed a Diploma in Pediatric Pulmonology, enabling her to offer specialised care for respiratory and allergy problems in children.",
          "She currently serves as a Senior Consultant Pulmonologist at Daya General Hospital and has recently joined our RelentCare Centre as a Visiting Consultant, available daily from 5:00 PM to 6:30 PM.",
        ]}
        expertise={[
          {
            heading: "Respiratory Conditions",
            items: [
              "Asthma",
              "Chronic Obstructive Pulmonary Disease (COPD)",
              "Pneumonia",
              "Tuberculosis (TB)",
              "Pleural Effusion",
              "Acute Respiratory Distress Syndrome (ARDS)",
              "Pneumothorax",
              "Lung Malignancy",
              "Allergies",
              "Interstitial Lung Disease (ILD)",
            ],
          },
          {
            heading: "Pediatric Pulmonology",
            items: [
              "Pediatric asthma treatment",
              "Childhood allergies & allergic rhinitis",
              "Recurrent cough and cold in children",
              "Wheezing and noisy breathing",
              "Recurrent chest infections",
              "Chronic cough in children",
              "Allergy testing and immunotherapy for kids",
              "Snoring & sleep breathing issues",
              "Bronchitis and pneumonia in children",
            ],
          },
          {
            heading: "Interventional Pulmonology",
            items: [
              "Bronchoscopy",
              "Thoracoscopy",
              "Endobronchial Ultrasound (EBUS)",
              "Management of sleep-disordered breathing",
              "Post-COVID sequelae",
              "Critical care",
            ],
          },
        ]}
        consultationHours={[
          { place: "RelentCare ENT Centre", hours: "Daily, 5:00 PM – 6:30 PM" },
          { place: "Daya General Hospital", hours: "Senior Consultant (ongoing)" },
        ]}
        education={[
          {
            years: "2025",
            institution: "Pediatric Pulmonology",
            description: "Diploma in Pediatric Pulmonology – specialised training in respiratory and allergy conditions in children.",
          },
          {
            years: "2022",
            institution: "DNB in Pulmonology",
            description: "Diplomate of National Board in Pulmonology.",
          },
          {
            years: "2021",
            institution: "Government Medical College, Thrissur",
            description: "MD in Pulmonology.",
          },
          {
            years: "2016",
            institution: "Government T.D. Medical College",
            description: "MBBS.",
          },
        ]}
        phone="+91 97463 51090"
        email="relentcarehospitals@gmail.com"
      />
    </>
  );
}
