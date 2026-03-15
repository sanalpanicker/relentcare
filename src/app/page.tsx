import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best ENT Clinic in Thrissur | RelentCare ENT, CHEST & Facial Aesthetic Centre",
  description:
    "RelentCare ENT Clinic in Kolazhy, Thrissur offers expert ear, nose, throat, pulmonology and facial aesthetic treatments. Rated 5★ on Google with 119+ reviews. Book today: 9746351090.",
  alternates: { canonical: "https://www.relentcarehospitals.com" },
  openGraph: {
    title: "Best ENT Clinic in Thrissur | RelentCare",
    description: "Expert ENT, Pulmonology and Facial Aesthetic care in Thrissur. 5★ rated. Book now.",
    url: "https://www.relentcarehospitals.com",
    images: [{ url: "/images/hero-bg.jpg", alt: "RelentCare ENT Clinic Thrissur" }],
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
