import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Sleep Apnoea & Snoring Treatment in Thrissur | RelentCare",
  description: "Expert diagnosis and treatment of sleep apnoea and snoring including CPAP, oral appliances, and surgery at RelentCare Pulmonology Thrissur.",
  keywords: ["sleep apnoea", "obstructive sleep apnoea", "snoring", "CPAP", "oral appliance", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/sleep-apnoea-snoring-best-doctor-india-thrissur" },
  openGraph: {
    title: "Sleep Apnoea & Snoring Treatment in Thrissur | RelentCare",
    description: "Expert diagnosis and treatment of sleep apnoea and snoring including CPAP, oral appliances, and surgery at RelentCare Pulmonology Thrissur.",
    url: "https://www.relentcarehospitals.com/sleep-apnoea-snoring-best-doctor-india-thrissur",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pulmonology"
        title="Sleep Apnoea & Snoring"
        subtitle="Comprehensive management of sleep-disordered breathing"
        breadcrumbs={[{ label: "Pulmonology", href: "/" }]}
        sections={[
          {
            title: "Obstructive Sleep Apnoea (OSA)",
            content: "OSA occurs when throat muscles relax, obstructing the airway and causing breathing pauses (apnoeas). Each episode lasts 10-60+ seconds, repeated dozens to hundreds of times nightly. Risk factors include obesity, male gender, age 40+, large neck circumference, and anatomical airway narrowing. Untreated OSA causes hypertension, heart disease, stroke, and sudden death."
          },
          {
            title: "Central Sleep Apnoea",
            content: "Central sleep apnoea occurs when the brain fails to send breathing signals during sleep. Unlike OSA, there's no airway obstruction. It's associated with heart failure, stroke history, high altitude, and opioid use. Symptoms include insomnia, frequent awakenings, and daytime sleepiness. Diagnosis requires polysomnography. Treatment addresses the underlying cause and may include medications or adaptive ventilation."
          },
          {
            title: "CPAP Therapy",
            content: "Continuous positive airway pressure (CPAP) is the gold-standard treatment for OSA. The device delivers pressurized air through a mask, keeping the airway open during sleep. Efficacy is 95%+ when properly used. Initial CPAP titration determines optimal pressure. Successful CPAP use improves blood pressure, reduces cardiovascular events, and enhances quality of life. Our respiratory team provides comprehensive CPAP education and ongoing support."
          },
          {
            title: "Alternative Devices and Oral Appliances",
            content: "For CPAP-intolerant patients, alternatives include BIPAP (bilevel) devices providing different pressures for inhalation/exhalation, auto-CPAP adjusting pressure automatically, and oral appliances (mandibular advancement devices) repositioning the lower jaw to open the airway. Efficacy varies; mild to moderate OSA responds well to oral appliances, while severe OSA typically requires CPAP."
          },
          {
            title: "Lifestyle Changes and Surgical Options",
            content: "Weight loss (even 10% reduction improves symptoms), positional therapy (side sleeping), sleep schedule optimization, and avoiding alcohol/sedatives help manage OSA. Surgical options include adenotonsillectomy, uvulopalatopharyngoplasty, and tongue base surgery. Our multidisciplinary team develops individualized treatment plans combining medical, behavioral, and surgical approaches."
          }
        ]}
      />
    </PageLayout>
  );
}
