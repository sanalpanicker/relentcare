import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "ENT & Health Blog | RelentCare ENT Clinic Thrissur",
  description:
    "Read expert articles on ENT health, pulmonology, sleep disorders, facial aesthetics, and wellness. Written by Dr Salison Salim Panicker and the RelentCare team.",
  alternates: { canonical: "https://www.relentcarehospitals.com/blog" },
  openGraph: {
    title: "ENT & Health Blog | RelentCare Thrissur",
    description:
      "Articles on ear health, sinusitis, sleep apnoea, asthma, skin care, voice disorders and more.",
    url: "https://www.relentcarehospitals.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e1]">
      <Header />

      {/* Page heading */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-2 inline-block mb-2">
          Blog
        </h1>
        <p className="text-sm text-[#555] mt-2">
          Expert insights on ENT health, pulmonology & aesthetics
        </p>
      </div>

      <BlogListing />

      <Footer />
    </div>
  );
}
