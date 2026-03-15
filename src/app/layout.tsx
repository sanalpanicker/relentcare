import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.relentcarehospitals.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Best ENT Clinic in Thrissur | RelentCare ENT, CHEST & Facial Aesthetic Centre",
    template: "%s | RelentCare ENT Thrissur",
  },
  description:
    "RelentCare is the best ENT, Pulmonology and Facial Aesthetic clinic in Thrissur, Kerala. Expert care from Dr Salison Salim Panicker, Dr Aiswarya Thambi & Dr Vidya Ramdas. Book your appointment today.",
  keywords: [
    "best ENT clinic Thrissur",
    "ENT doctor Thrissur",
    "pulmonology Thrissur",
    "facial aesthetics Thrissur",
    "RelentCare",
    "ENT specialist Kolazhy",
    "ear nose throat Kerala",
    "Dr Salison Salim Panicker",
  ],
  authors: [{ name: "RelentCare ENT Clinic" }],
  creator: "RelentCare ENT Clinic",
  publisher: "RelentCare ENT Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "RelentCare ENT, CHEST and Facial Aesthetic Centre",
    title: "Best ENT Clinic in Thrissur | RelentCare",
    description:
      "Expert ENT, Pulmonology and Facial Aesthetic care in Thrissur, Kerala. State-of-the-art facilities. Book now.",
    images: [{ url: "/images/logo.jpg", width: 178, height: 156, alt: "RelentCare ENT Clinic Thrissur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best ENT Clinic in Thrissur | RelentCare",
    description: "Expert ENT, Pulmonology and Facial Aesthetic care in Thrissur, Kerala.",
    images: ["/images/logo.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "RelentCare ENT, CHEST and Facial Aesthetic Centre",
              url: BASE_URL,
              logo: `${BASE_URL}/images/logo.jpg`,
              image: `${BASE_URL}/images/hero-bg.jpg`,
              description: "Best ENT, Pulmonology and Facial Aesthetic clinic in Thrissur, Kerala.",
              telephone: "+91-9746351090",
              email: "relentcarehospitals@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Poovany Junction",
                addressLocality: "Kolazhy, Thrissur",
                addressRegion: "Kerala",
                postalCode: "680010",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "18:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "09:00", closes: "13:00" },
              ],
              aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "119" },
              medicalSpecialty: ["Otolaryngology", "Pulmonary", "Cosmetology"],
              priceRange: "₹₹",
              sameAs: [
                "https://www.instagram.com/relentcare_clinic/",
                "https://www.facebook.com/profile.php?id=61569166779172",
                "https://www.linkedin.com/in/dr-salison-salim-panicker-924599142/",
                "https://www.youtube.com/@RelentcareClinic/videos",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
