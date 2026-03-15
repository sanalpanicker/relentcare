import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Leukoplakia Causes & Treatment in Thrissur | RelentCare ENT",
  description: "Expert evaluation and treatment of oral and laryngeal leukoplakia in Thrissur. Learn about risk factors and management.",
  keywords: ["leukoplakia", "white patches", "oral cancer", "laryngeal lesions", "biopsy", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/leukoplakia-causes-treatment-ent-doctor" },
  openGraph: { 
    title: "Leukoplakia Causes & Treatment in Thrissur | RelentCare ENT",
    description: "Expert evaluation and treatment of oral and laryngeal leukoplakia in Thrissur. Learn about risk factors and management.",
    url: "https://www.relentcarehospitals.com/leukoplakia-causes-treatment-ent-doctor",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Leukoplakia: Causes & Treatment in Thrissur"
        subtitle="Expert diagnosis and management of oral and laryngeal white patches"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Leukoplakia refers to white patches or plaques that appear in the mouth, throat, or larynx. These lesions cannot be scraped off and cannot be characterized as any other disease. While many leukoplakias are benign, some can be precancerous or cancerous, making proper evaluation and management essential."
          },
          {
            type: "heading",
            content: "Understanding Leukoplakia"
          },
          {
            type: "text",
            content: "Oral and laryngeal leukoplakia is considered a potentially malignant disorder. The World Health Organization defines it as 'a white patch or plaque that cannot be scraped off and cannot be characterized clinically or pathologically as any other disease.' About 10-15% of oral leukoplakias become malignant, making early detection critical."
          },
          {
            type: "heading",
            content: "Common Sites of Leukoplakia"
          },
          {
            type: "list",
            items: [
              "Oral cavity (mouth floor, ventral/lateral tongue, soft palate)",
              "Larynx (vocal cords, aryepiglottic folds)",
              "Pharynx",
              "Hard palate",
              "Buccal mucosa (cheek lining)"
            ]
          },
          {
            type: "heading",
            content: "Risk Factors for Leukoplakia"
          },
          {
            type: "heading",
            content: "Tobacco and Smoking"
          },
          {
            type: "list",
            items: [
              "Cigarette, cigar, and pipe smoking",
              "Chewing tobacco",
              "Snuff use",
              "Betel quid with tobacco",
              "Increased risk with duration and quantity"
            ]
          },
          {
            type: "heading",
            content: "Alcohol Consumption"
          },
          {
            type: "list",
            items: [
              "Heavy alcohol use",
              "Combined tobacco and alcohol use (synergistic risk)",
              "Poor nutrition associated with heavy drinking"
            ]
          },
          {
            type: "heading",
            content: "Other Risk Factors"
          },
          {
            type: "list",
            items: [
              "Human papillomavirus (HPV) infection",
              "Poor oral hygiene",
              "Chronic irritation from sharp teeth or dentures",
              "Candida infection",
              "Nutritional deficiencies (iron, B vitamins)",
              "Genetic predisposition",
              "Immunosuppression"
            ]
          },
          {
            type: "heading",
            content: "Clinical Features"
          },
          {
            type: "heading",
            content: "Appearance and Characteristics"
          },
          {
            type: "list",
            items: [
              "White patches or plaques",
              "Red patches (erythroplakia - higher risk)",
              "Mixed red and white patches (speckled leukoplakia)",
              "Cannot be scraped off (unlike oral candida)",
              "Smooth, verrucous, or nodular surface",
              "Usually painless, but may cause discomfort"
            ]
          },
          {
            type: "heading",
            content: "Associated Symptoms"
          },
          {
            type: "list",
            items: [
              "Mouth pain or burning",
              "Difficulty swallowing",
              "Voice changes (if laryngeal)",
              "Sensation of lump or thickness",
              "Taste changes"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Approach"
          },
          {
            type: "heading",
            content: "Clinical Examination"
          },
          {
            type: "list",
            items: [
              "Detailed history of lesion duration and symptoms",
              "Visual inspection of oral cavity and pharynx",
              "Palpation to assess consistency and extent",
              "Assessment of lesion characteristics",
              "Evaluation of surrounding tissues",
              "Cervical lymph node examination"
            ]
          },
          {
            type: "heading",
            content: "Laryngeal Examination"
          },
          {
            type: "list",
            items: [
              "Flexible laryngoscopy to visualize larynx",
              "Videolaryngoscopy with digital documentation",
              "Assessment of lesion mobility",
              "Evaluation for vocal cord involvement"
            ]
          },
          {
            type: "heading",
            content: "Tissue Biopsy"
          },
          {
            type: "text",
            content: "Biopsy is essential for definitive diagnosis and to determine the degree of dysplasia or malignancy. It should be performed on any suspicious lesion."
          },
          {
            type: "list",
            items: [
              "Small tissue samples obtained with forceps or needle",
              "Office procedure under local anesthesia",
              "Histopathologic examination for dysplasia grading",
              "Assessment of cellular atypia",
              "Determination of malignant potential"
            ]
          },
          {
            type: "heading",
            content: "Imaging Studies"
          },
          {
            type: "list",
            items: [
              "CT or MRI for extent assessment",
              "Imaging for cervical lymph node evaluation",
              "Staging if malignancy confirmed"
            ]
          },
          {
            type: "heading",
            content: "Management Approach"
          },
          {
            type: "heading",
            content: "Non-dysplastic Leukoplakia"
          },
          {
            type: "list",
            items: [
              "Elimination of risk factors (smoking cessation, alcohol reduction)",
              "Oral hygiene improvement",
              "Correction of dental irritants",
              "Regular clinical follow-up every 3-6 months",
              "Photographic documentation"
            ]
          },
          {
            type: "heading",
            content: "Dysplastic Leukoplakia"
          },
          {
            type: "list",
            items: [
              "Surgical excision recommended",
              "Microlaryngoscopic resection for laryngeal lesions",
              "Oral cavity laser excision",
              "Complete margin assessment",
              "Regular post-operative surveillance",
              "Possible repeat biopsies"
            ]
          },
          {
            type: "heading",
            content: "Invasive Carcinoma"
          },
          {
            type: "list",
            items: [
              "Multidisciplinary team evaluation",
              "Staging studies (CT, PET scan)",
              "Surgical resection vs radiation therapy",
              "Chemotherapy considerations",
              "Comprehensive cancer management"
            ]
          },
          {
            type: "heading",
            content: "Prevention and Risk Reduction"
          },
          {
            type: "list",
            items: [
              "Tobacco cessation programs",
              "Alcohol reduction counseling",
              "Good oral hygiene practices",
              "Balanced nutrition",
              "Regular oral examinations",
              "Early reporting of suspicious lesions",
              "HPV vaccination (preventive)"
            ]
          },
          {
            type: "heading",
            content: "Follow-up and Surveillance"
          },
          {
            type: "list",
            items: [
              "Regular clinical follow-up every 3-6 months",
              "Photographic documentation of lesions",
              "Repeat biopsy if changes noted",
              "Long-term surveillance (years)",
              "Education on warning signs",
              "Support for smoking cessation"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Leukoplakia Management?"
          },
          {
            type: "list",
            items: [
              "Experienced ENT oncologists",
              "Advanced diagnostic capabilities",
              "Comprehensive biopsy and pathology services",
              "Multidisciplinary team approach",
              "Specialized laryngeal and oral surgery",
              "Close follow-up and surveillance protocols",
              "Counseling for risk factor reduction"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
