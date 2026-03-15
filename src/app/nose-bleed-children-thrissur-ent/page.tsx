import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Nosebleed in Children – Treatment in Thrissur | RelentCare ENT",
  description: "Effective nosebleed treatment in children. Learn about causes, first aid, cauterisation, and when to seek medical help at RelentCare ENT Thrissur.",
  keywords: ["nosebleed children", "epistaxis", "nose bleeding", "cauterisation", "Thrissur", "pediatric ENT"],
  alternates: { canonical: "https://www.relentcarehospitals.com/nose-bleed-children-thrissur-ent" },
  openGraph: {
    title: "Nosebleed in Children – Treatment in Thrissur | RelentCare ENT",
    description: "Effective nosebleed treatment in children. Learn about causes, first aid, cauterisation, and when to seek medical help at RelentCare ENT Thrissur.",
    url: "https://www.relentcarehospitals.com/nose-bleed-children-thrissur-ent",
    images: [{ url: "/images/service-ent.jpg" }]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="Pediatric Services"
        title="Nosebleed in Children"
        subtitle="Safe and effective management of epistaxis in pediatric patients"
        breadcrumbs={[{ label: "Pediatric Services", href: "/" }]}
        sections={[
          {
            title: "Causes of Nosebleeds",
            content: "Dry air is the most common cause, especially in winters or air-conditioned environments. Nose picking is another frequent culprit in children due to natural curiosity. Trauma from falls or sports injuries can cause bleeding. Other causes include nasal infections, allergies, coagulation disorders, and occasionally nasal tumors. Anterior nosebleeds (from Little's area) are most common in children."
          },
          {
            title: "First Aid Management",
            content: "Keep the child upright and calm. Have them pinch the nose firmly at the soft part for 10-15 minutes continuously. Apply ice packs on the bridge of the nose. Avoid lying back, as blood may enter the airway. Do not pack with tissue as it may cause more bleeding when removed. Most childhood nosebleeds stop within 15-20 minutes with proper pressure."
          },
          {
            title: "Cauterisation Treatment",
            content: "If nosebleeds are recurrent or severe, cauterisation of the bleeding vessel may be necessary. We use chemical cautery (silver nitrate) or thermal cautery (electrocautery) under visualization. The procedure is quick, minimally invasive, and effective in preventing recurrent episodes. It's performed in the outpatient clinic with topical anesthesia."
          },
          {
            title: "When to See a Doctor",
            content: "Seek medical attention if bleeding doesn't stop after 20 minutes of pressure, if nosebleeds are very frequent (more than once weekly), if they occur after trauma, or if accompanied by other symptoms like bruising or bleeding from other sites. Recurrent nosebleeds may indicate underlying conditions requiring evaluation."
          },
          {
            title: "Prevention and Care",
            content: "Keep nasal passages moist using saline sprays or humidifiers. Avoid dry environments. Teach children not to pick their nose. Use gentle nasal cleaning techniques. Keep fingernails short. Treat allergies and nasal infections promptly. Our pediatric team provides comprehensive evaluation and personalized prevention strategies for each child."
          }
        ]}
      />
    </PageLayout>
  );
}
