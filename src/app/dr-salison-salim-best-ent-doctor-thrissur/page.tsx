import type { Metadata } from "next";
import DoctorPage from "@/components/DoctorPage";

export const metadata: Metadata = {
  title: "Dr Salison Salim Panicker | Best ENT Doctor Thrissur | RelentCare",
  description:
    "Dr Salison Salim Panicker – MBBS, DLO, DNB, PGDCC. ENT Surgeon & Director at RelentCare ENT Centre Thrissur. Expert in ear surgeries, nasal disorders & neuro-otology.",
  alternates: { canonical: "https://www.relentcarehospitals.com/dr-salison-salim-best-ent-doctor-thrissur" },
  openGraph: {
    title: "Dr Salison Salim Panicker | Best ENT Doctor Thrissur",
    description: "ENT Surgeon & Director at RelentCare ENT Centre. Expert in mastoidectomy, nasal disorders & neuro-otology.",
    url: "https://www.relentcarehospitals.com/dr-salison-salim-best-ent-doctor-thrissur",
    images: [{ url: "/images/dr-salison.jpg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Salison Salim Panicker",
  description: "ENT Surgeon and Director at RelentCare ENT Centre Thrissur, Kerala",
  medicalSpecialty: "Otolaryngology",
  telephone: "+918281030619",
  email: "salisonsalim@gmail.com",
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

export default function DrSalisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DoctorPage
        name="Dr Salison Salim Panicker"
        qualifications="MBBS, DLO, DNB, PGDCC"
        role="ENT Surgeon and Director at RelentCare ENT clinic"
        photo="/images/dr-salison.jpg"
        photoAlt="Dr Salison Salim Panicker – Best ENT Doctor Thrissur Kerala"
        tagline="professional career and dream"
        intro={[
          "Welcome to RelentCare ENT Centre! Meet Dr. Salison Salim Panicker, a remarkable ENT specialist and neuro-otologist based in Thrissur, Kerala. As the visionary director of RelentCare ENT Centre, he is dedicated to creating a top-notch ENT facility in India, where patients receive unparalleled medical care and supportive atmosphere.",
          "His specialties include nasal disorders, advanced ear surgeries, and neuro-otology, where he skillfully manages complex conditions and crafts personalized treatment plans for each patient. Known for his exceptional ear surgeries, including mastoidectomy, he combines technical prowess with a compassionate approach to achieve outstanding results.",
          "At RelentCare ENT Centre, Dr. Panicker envisions a state-of-the-art facility that redefines ENT care in Thrissur, Kerala. With a focus on patient comfort, advanced technology, and a passionate team of professionals, he aims to revolutionize the ENT treatment landscape in the region. Whether you need treatment for a specific condition or a thorough evaluation, Dr. Salison Salim Panicker and his dedicated team are here to guide you on your journey to better health.",
        ]}
        education={[
          {
            years: "2022 – 2024",
            institution: "Deen Dayal Upadyaya Hospital, New Delhi",
            description:
              "Completed a two-year senior residency as a Medical Officer. Achieved DNB in ENT, strengthening clinical knowledge and surgical proficiency.",
          },
          {
            years: "2021 – 2022",
            institution: "Government Medical College, Idukki",
            description:
              "Six-month senior residency with extensive training in ear and nose surgeries and assistance in head and neck procedures.",
          },
          {
            years: "2020 – 2021",
            institution: "Government Medical College, Kottayam",
            description:
              "One-year senior residency with extensive training in ear and nose surgeries and head and neck procedures.",
          },
          {
            years: "2018 – 2020",
            institution: "Government Medical College, Kottayam",
            description:
              "Postgraduate training in ENT and Head & Neck Surgery under the mentorship of Dr. Shibu George, gaining extensive knowledge of surgical techniques and patient care.",
          },
          {
            years: "2016 – 2017",
            institution: "Government Medical College, Alappuzha",
            description:
              "One-year residency after MBBS with comprehensive training in emergency medicine and various specialties.",
          },
          {
            years: "2010 – 2015",
            institution: "Government Medical College, Alappuzha",
            description: "MBBS under Kerala University of Health and Sciences (KUHS).",
          },
        ]}
        phone="+91 82810 30619"
        email="salisonsalim@gmail.com"
      />
    </>
  );
}
