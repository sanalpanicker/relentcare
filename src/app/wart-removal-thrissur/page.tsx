import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Wart Removal in Thrissur | RelentCare ENT & Aesthetic Centre",
  description: "Professional wart removal in Thrissur. Cryotherapy, electrocautery, laser treatment. All wart types treated. Expert care prevents recurrence.",
  alternates: { canonical: "https://www.relentcarehospitals.com/wart-removal-thrissur" },
  openGraph: {
    title: "Wart Removal in Thrissur | RelentCare",
    description: "Effective wart removal treatments for common, plantar, flat, and other wart types",
    url: "https://www.relentcarehospitals.com/wart-removal-thrissur",
  },
};

export default function WartRemoval() {
  return (
    <PageLayout>
      <ContentPage
        title="Wart Removal Treatment in Thrissur"
        subtitle="Professional treatment for all wart types"
        heroTag="Dermatology"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facial Aesthetic Services", href: "/best-facial-aesthetic-services" },
          { label: "Wart Removal", href: "/wart-removal-thrissur" },
        ]}
        sections={[
          {
            heading: "Understanding Warts",
            body: "Warts are benign skin growths caused by human papillomavirus (HPV) infection. This common virus infects the outer skin layer, causing abnormal cell proliferation and characteristic warty appearance. At RelentCare ENT, CHEST & Aesthetic Centre, we treat all wart types using evidence-based approaches. Warts are contagious and spread through direct contact or contaminated surfaces; they're more likely in people with compromised immune systems or those who frequent moist environments (pools, showers). While warts are benign and often resolve spontaneously over months or years, most patients prefer professional removal for faster resolution and reduced transmission risk. We offer multiple treatment modalities, selecting the most appropriate based on wart type, location, size, and patient preferences.",
          },
          {
            heading: "Types of Warts",
            body: [
              "Common Warts - Firm, raised bumps with rough, irregular surfaces. Contain visible black dots (thrombosed capillaries). Most commonly found on hands and fingers.",
              "Plantar Warts - Occur on the soles of feet; often painful due to pressure bearing. Can be confused with corns; appear as hard, callused areas with embedded black dots.",
              "Flat Warts - Smaller, smoother warts appearing in clusters. Often found on hands, face, legs. Less raised than common warts.",
              "Filiform Warts - Thin, elongated warts appearing like small fingers. Most common on face, neck, and upper body.",
              "Periungual Warts - Occur around and under fingernails and toenails; can affect nail growth and cause pain if under-nail.",
              "Genital Warts - Caused by specific HPV strains; occur in genital area. Require specialized treatment and medical consultation.",
              "Mosaic Warts - Cluster of plantar warts appearing as one large lesion; usually very difficult to treat.",
            ],
            list: true,
          },
          {
            heading: "Causes and Transmission",
            body: "Warts are caused by human papillomavirus (HPV) infection, with over 100 known HPV types. Different types cause different wart presentations: HPV-1, 2, 4 cause common warts; HPV-1 causes plantar warts; HPV-3, 10 cause flat warts. Transmission occurs through direct contact with infected skin or contaminated surfaces (swimming pools, communal showers, gyms). Skin breaks, cuts, or compromised immune function increase infection risk. Warts are more common in children and young adults but can occur at any age. Not everyone exposed to HPV develops warts; immune system response determines whether infection takes hold. Warts can spread to other body areas through scratching and contact.",
          },
          {
            heading: "Wart Removal Treatment Options",
            body: [
              "Cryotherapy (Freezing) - Liquid nitrogen application freezes wart tissue, killing infected cells. Safe, effective for small to medium warts. May require multiple treatments. Minimal scarring.",
              "Electrocautery (Burning) - Uses electrical energy to burn and destroy wart tissue. Effective for various wart types; may leave slight scarring. Single or multiple sessions depending on wart size.",
              "Laser Treatment - Ablative lasers (CO2, Nd:YAG) vaporize wart tissue precisely. Excellent for stubborn warts; may require multiple sessions. Minimal scarring with proper technique.",
              "Chemical Treatment - Topical medications (salicylic acid, imiquimod, podophyllin) applied to dissolve or kill wart tissue. Slower than other methods but painless; requires patient compliance with application.",
              "Immunotherapy - Intralesional immunotherapy stimulates immune response against HPV. Effective for resistant warts; may require multiple injections.",
              "Surgical Excision - Surgical removal for warts unresponsive to other treatments. Ensures complete removal but may leave scarring.",
              "Combination Therapy - Combining treatments (e.g., cryotherapy + imiquimod) improves clearance rates and prevents recurrence.",
            ],
            list: true,
          },
          {
            heading: "Recommended Treatment Approaches by Wart Type",
            body: "Common warts on hands respond well to cryotherapy or laser treatment. Plantar warts require more aggressive treatment due to thick skin and often need combination therapy (cryotherapy + chemical treatment, or laser + debridement). Flat warts on face require gentler treatment (cryotherapy, laser) to minimize scarring. Filiform warts are best treated with laser or electrocautery for precision and minimal collateral damage. Periungual warts are challenging; we use careful laser treatment or chemical application to avoid damage to healthy nail and surrounding tissue. At RelentCare, Dr Vidya Ramdas assesses your wart type and recommends the most effective approach for your specific situation.",
          },
          {
            heading: "The Wart Removal Procedure",
            body: "Your wart removal at RelentCare begins with assessment and discussion of treatment options. For most treatments, topical anesthetic or numbing cream is applied for comfort. If using cryotherapy, liquid nitrogen is carefully applied to freeze the wart tissue for 10-30 seconds, causing localized freezing and blister formation. If using laser or electrocautery, the wart tissue is precisely targeted and vaporized layer by layer until complete removal. The procedure typically takes 15-30 minutes depending on wart size and number. You'll experience minimal to moderate discomfort depending on treatment type. Post-procedure, mild discomfort, swelling, and redness are expected and resolve within a few days.",
          },
          {
            heading: "Recovery and Post-Treatment Care",
            body: [
              "Immediate Post-Treatment - Mild discomfort and redness; apply ice packs if needed; avoid touching the treated area",
              "First Few Days - Keep area clean and dry; a blister may form (normal with cryotherapy) which will dry and peel",
              "Blister Management - Don't pop blisters; allow them to dry naturally; they protect the healing tissue beneath",
              "Wound Care - Keep area clean and apply antibiotic ointment if there's any open area",
              "Avoid Water Exposure - Don't soak the area in water for 24-48 hours; bathing/showering is acceptable with care",
              "Pain Management - Over-the-counter analgesics manage discomfort if needed",
              "Avoid Irritation - Don't wear tight shoes if plantar wart treated; protect hand if common wart treated",
              "Follow-Up Visits - Return 2-4 weeks later to assess healing and treat any remaining wart tissue",
              "Complete Healing - Usually 2-4 weeks for small warts; larger warts may take longer to completely resolve",
            ],
            list: true,
          },
          {
            heading: "Preventing Wart Recurrence",
            body: [
              "Avoid Reinfection - Don't walk barefoot in public areas (pools, gyms, communal showers); wear protective footwear",
              "Personal Hygiene - Wash hands regularly; avoid touching warts to prevent spread to other areas",
              "Don't Share Items - Don't share razors, nail files, towels, or other personal items that contact the wart",
              "Immune Support - Maintain healthy immune function through adequate sleep, nutrition, and exercise",
              "Skin Care - Keep skin healthy; avoid minor cuts and abrasions that increase HPV infection risk",
              "Smoking Cessation - Smoking impairs immune function and increases wart recurrence risk",
              "Stress Management - Chronic stress suppresses immune function; manage stress through relaxation techniques",
              "Consider HPV Vaccination - Vaccination against specific HPV types may prevent future infection with those types",
            ],
            list: true,
          },
          {
            heading: "Why Choose RelentCare for Wart Removal",
            body: [
              "Multiple Treatment Modalities - We offer various treatment options and select the most appropriate for your wart",
              "Expert Assessment - Dr Vidya Ramdas assesses wart type and provides experienced treatment recommendations",
              "Advanced Equipment - Laser, electrocautery, and cryotherapy equipment provides multiple effective options",
              "Minimal Scarring - Careful technique minimizes scarring; cosmetic results are excellent with proper approach",
              "Professional Aftercare - Detailed instructions ensure optimal healing and prevent complications",
              "Recurrence Prevention - We discuss prevention strategies and may recommend follow-up treatment to ensure complete clearance",
              "Quick Procedures - Most wart treatments are brief, outpatient procedures with minimal downtime",
              "Complication Management - If complications arise, immediate professional care is available",
            ],
            list: true,
          },
        ]}
        ctaText="Book Wart Removal Consultation"
        ctaHref="tel:+919746351090"
      />
    </PageLayout>
  );
}
