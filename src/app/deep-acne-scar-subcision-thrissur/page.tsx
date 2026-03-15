import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Deep Acne Scar Subcision Treatment in Thrissur | RelentCare",
  description: "Expert subcision treatment for deep acne scars in Thrissur. Combined with PRP and laser for optimal results. Minimal scarring procedure.",
  alternates: { canonical: "https://www.relentcarehospitals.com/deep-acne-scar-subcision-thrissur" },
  openGraph: {
    title: "Deep Acne Scar Subcision in Thrissur | RelentCare",
    description: "Advanced subcision technique for rolling and boxcar acne scars with superior results",
    url: "https://www.relentcarehospitals.com/deep-acne-scar-subcision-thrissur",
  },
};

export default function SubcisionTreatment() {
  return (
    <PageLayout>
      <ContentPage
        title="Subcision for Deep Acne Scars in Thrissur"
        subtitle="Minimally invasive treatment for severe scarring"
        heroTag="Acne Scars"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facial Aesthetic Services", href: "/best-facial-aesthetic-services" },
          { label: "Acne Scar Subcision", href: "/deep-acne-scar-subcision-thrissur" },
        ]}
        sections={[
          {
            heading: "What is Subcision and How Does It Work?",
            body: "Subcision is a minimally invasive surgical technique specifically designed to treat depressed (atrophic) acne scars. Unlike topical treatments that cannot reach deep dermal damage, subcision works by mechanically separating the fibrous bands that anchor scarred tissue to deeper skin layers. At RelentCare ENT, CHEST & Facial Aesthetic Centre, we perform subcision under local anesthesia using a specialized hypodermic needle inserted through a small puncture wound. As the needle moves beneath the scar, it breaks fibrous adhesions, allowing the depressed scar to elevate toward the skin surface. This mechanical separation stimulates wound healing response and collagen production, providing immediate lifting and progressive improvement over subsequent months.",
          },
          {
            heading: "Types of Acne Scars Treated by Subcision",
            body: [
              "Rolling Scars - Characterized by rounded, undulating depressions with sloping edges that create a rolling appearance across the skin. These scars are caused by extensive fibrous bridging of the dermis.",
              "Boxcar Scars - Angular, well-defined depressions with steep walls resembling ice pick marks but wider and shallower. Common on cheeks and temples, these scars result from loss of dermal support.",
              "Icepick Scars - Narrow, deep punctate scars that penetrate into subcutaneous tissue. While subcision helps, these often require additional treatments like TCA cross or laser.",
              "Atrophic Scars - General term for depressed scars due to loss of subcutaneous tissue and collagen. Subcision is particularly effective for these scars.",
              "Post-Inflammatory Indentation - Scars that develop from severe inflammatory acne with dermal damage.",
            ],
            list: true,
          },
          {
            heading: "The Subcision Procedure Step-by-Step",
            body: "During your subcision procedure at RelentCare, we begin with thorough skin cleansing and application of local anesthetic cream to maximize comfort. The area is then numbed with infiltrative local anesthesia (lidocaine with epinephrine). Using a specialized 18-20 gauge hypodermic needle, Dr Vidya Ramdas carefully inserts it at the scar edge and advances it horizontally beneath the scar, moving back and forth to break fibrous adhesions. Controlled bleeding occurs, which is normal and desirable as it triggers healing response and provides immediate scar elevation. The procedure typically takes 20-45 minutes depending on the number and extent of scars. Post-procedure, slight elevation, redness, and bruising are expected and resolve within 1-2 weeks.",
          },
          {
            heading: "Combined Approach: Subcision with PRP and Laser",
            body: "While subcision alone is effective, we often combine it with PRP (Platelet-Rich Plasma) and fractional laser therapy for superior results. Immediately after subcision, PRP is applied to the treated area, where activated platelets release growth factors that enhance healing and collagen production. One to two weeks later, fractional laser therapy further stimulates collagen remodeling and improves skin texture. This tri-modality approach addresses scars at multiple levels: mechanical separation (subcision), biological enhancement (PRP), and thermal remodeling (laser). Studies demonstrate that combined subcision + PRP + fractional laser provides significantly better scar improvement (60-80% improvement) compared to any single modality (30-50% improvement).",
          },
          {
            heading: "Results Timeline and Expected Outcomes",
            body: [
              "Immediate Results - Visible elevation of depressed scars occurs immediately post-procedure due to mechanical separation and edema",
              "1-2 Weeks - Initial redness, swelling, and bruising resolve; scars remain elevated",
              "4-6 Weeks - Progressive collagen remodeling begins; scars continue improving as new collagen develops",
              "3 Months - Significant improvement visible as collagen matures and remodels; approximately 50-70% improvement typical",
              "6 Months - Maximum results achieved as collagen continues maturing; scars appear softer, less noticeable",
              "Long-term - Results are lasting; occasional touch-up subcisions may be recommended for stubborn scars",
            ],
            list: true,
          },
          {
            heading: "Recovery and Aftercare Following Subcision",
            body: "Subcision has minimal downtime compared to more invasive procedures. You may experience mild discomfort, swelling, and bruising that peak at 2-3 days and resolve within 1-2 weeks. Some oozing and scab formation are normal. We recommend sleeping with head elevated for 2-3 nights to minimize swelling. Avoid strenuous exercise and heavy lifting for one week. Keep the area clean and moisturized; apply sunscreen daily during healing. Most patients return to work and normal activities immediately. We schedule PRP application (if combined treatment) one to two weeks post-subcision. Fractional laser treatment follows 2-3 weeks after subcision when skin has fully recovered.",
          },
          {
            heading: "Why Choose RelentCare for Acne Scar Treatment",
            body: [
              "Specialized Expertise - Dr Vidya Ramdas has extensive experience with subcision and combines it optimally with PRP and laser",
              "Multi-Modal Approach - We don't rely on single treatments; combined therapy provides superior results",
              "Precise Technique - Proper needle insertion, controlled depth, and adequate fibrous band release require significant skill",
              "Safety Focus - Sterile technique, proper anesthesia, and careful handling minimize complications",
              "Realistic Expectations - We discuss realistic outcome timelines; deep scars may require multiple sessions",
              "Comprehensive Aftercare - Detailed instructions and follow-up ensure optimal healing and results",
            ],
            list: true,
          },
        ]}
        ctaText="Book Scar Consultation"
        ctaHref="tel:+919746351090"
      />
    </PageLayout>
  );
}
