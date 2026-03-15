import type { Metadata } from "next";
import DoctorPage from "@/components/DoctorPage";

export const metadata: Metadata = {
  title: "Dr Vidya Ramdas | Consultant ENT Surgeon Thrissur | RelentCare",
  description:
    "Dr Vidya Ramdas – Consultant ENT Surgeon & neuro-otologist at RelentCare, Thrissur. Expert in FESS, tympanoplasty, vertigo, hearing loss & rhinoplasty.",
  alternates: { canonical: "https://www.relentcarehospitals.com/dr-vidya-ramdas-ent-surgeon-thrissur-top" },
  openGraph: {
    title: "Dr Vidya Ramdas | Consultant ENT Surgeon Thrissur",
    description: "Consultant ENT Surgeon at RelentCare Thrissur. Expert in FESS, tympanoplasty, vertigo & balance disorders.",
    url: "https://www.relentcarehospitals.com/dr-vidya-ramdas-ent-surgeon-thrissur-top",
    images: [{ url: "/images/dr-vidya.jpg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Vidya Ramdas",
  description: "Consultant ENT Surgeon and neuro-otologist at RelentCare ENT Clinic Thrissur",
  medicalSpecialty: "Otolaryngology",
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

export default function DrVidyaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DoctorPage
        name="Dr Vidya Ramdas"
        role="Consultant ENT Surgeon"
        photo="/images/dr-vidya.jpg"
        photoAlt="Dr Vidya Ramdas – Consultant ENT Surgeon Thrissur Kerala"
        intro={[
          "Dr. Vidya Ramdas is a respected ENT specialist and neuro-otologist at RelentCare ENT Clinic, focusing on ear, nose, and throat conditions, especially vertigo and balance disorders.",
          "As a managing partner of RelentCare ENT Clinic, Dr. Vidya Ramdas is committed to providing exceptional ENT care with a patient-centred approach and the latest surgical techniques.",
        ]}
        expertise={[
          {
            heading: "Surgical Expertise",
            items: [
              "Endoscopic Sinus Surgery (FESS)",
              "Tympanoplasty and Ossiculoplasty",
              "Otoplasty and Rhinoplasty",
              "Micro Laryngeal Surgery",
            ],
          },
          {
            heading: "Areas of Focus",
            items: [
              "Vertigo and Balance Disorders: Management of BPPV and Meniere's Disease",
              "Hearing Loss: Audiometry and hearing aids",
              "Tinnitus: Evaluation and treatment",
              "Sinusitis and Allergies: Comprehensive care for infections and allergic reactions",
              "Pediatric ENT: Specialised care for children's conditions",
            ],
          },
        ]}
        consultationHours={[
          { place: "RelentCare ENT Clinic", hours: "Monday – Saturday, 9:00 AM – 1:00 PM" },
          { place: "Aswini Hospital", hours: "Monday – Friday, 3:00 PM – 5:00 PM" },
        ]}
        education={[
          {
            years: "2022 – 2024",
            institution: "Deen Dayal Upadhyaya Hospital, New Delhi",
            description: "Completed a two-year senior residency programme in ENT.",
          },
          {
            years: "Earlier",
            institution: "Medical Training",
            description: "MBBS followed by post-graduate specialisation in ENT and Head & Neck Surgery.",
          },
        ]}
        phone="+91 97463 51090"
        email="relentcarehospitals@gmail.com"
      />
    </>
  );
}
