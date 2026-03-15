import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Preauricular Sinus Surgery in Thrissur | RelentCare ENT",
  description: "Expert preauricular sinus surgery treatment in Thrissur. Learn about congenital pits, infection management, and minimally invasive excision procedures.",
  keywords: ["preauricular sinus", "congenital pit", "sinus surgery", "preauricular sinus excision", "Thrissur ENT"],
  alternates: { canonical: "https://www.relentcarehospitals.com/preauricular-sinus-surgery" },
  openGraph: { 
    title: "Preauricular Sinus Surgery in Thrissur | RelentCare ENT",
    description: "Expert preauricular sinus surgery treatment in Thrissur. Learn about congenital pits, infection management, and minimally invasive excision procedures.",
    url: "https://www.relentcarehospitals.com/preauricular-sinus-surgery",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Preauricular Sinus Surgery in Thrissur"
        subtitle="Expert surgical treatment for congenital preauricular pits and infections"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "A preauricular sinus is a congenital pit or opening located in front of the ear. Also known as a congenital preauricular pit, this condition occurs when tissue doesn't develop completely during fetal formation. While many individuals have these pits without issues, they can become problematic when infected or when they drain constantly."
          },
          {
            type: "heading",
            content: "Understanding Preauricular Sinus"
          },
          {
            type: "text",
            content: "Preauricular sinuses are present at birth and occur in about 1 in 500 to 1 in 1000 births worldwide. The sinus tract can be simple or complex, and it may contain hair and sweat glands. When bacteria colonize the tract, recurrent infections occur, leading to swelling, drainage, and discomfort."
          },
          {
            type: "heading",
            content: "Symptoms of Infected Preauricular Sinus"
          },
          {
            type: "list",
            items: [
              "Recurrent swelling and inflammation",
              "Pus drainage from the pit opening",
              "Pain or tenderness in front of the ear",
              "Persistent discharge with foul odor",
              "Formation of abscess"
            ]
          },
          {
            type: "heading",
            content: "Surgical Treatment Options"
          },
          {
            type: "text",
            content: "Surgical excision is the definitive treatment for symptomatic preauricular sinuses. At RelentCare, our experienced surgeons use minimally invasive endoscopic techniques combined with complete tract removal to ensure the best outcomes."
          },
          {
            type: "heading",
            content: "Preauricular Sinus Excision Procedure"
          },
          {
            type: "list",
            items: [
              "Complete removal of the sinus tract and associated tissues",
              "Endoscopic guidance for precise tract visualization",
              "Meticulous closure to prevent recurrence",
              "Minimal scarring with cosmetic considerations",
              "Typically performed under local or general anesthesia"
            ]
          },
          {
            type: "heading",
            content: "Recurrence Prevention"
          },
          {
            type: "text",
            content: "Incomplete excision is the primary cause of recurrence. Our surgeons ensure complete removal of the entire sinus tract, including all branching pathways. Proper surgical technique and careful closure significantly reduce recurrence rates to less than 5%."
          },
          {
            type: "heading",
            content: "Recovery and Aftercare"
          },
          {
            type: "list",
            items: [
              "Minimal pain with proper wound care",
              "Sutures typically removed in 7-10 days",
              "Return to normal activities within 2-3 weeks",
              "Avoid excessive ear manipulation during healing",
              "Keep the surgical site clean and dry"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Preauricular Sinus Surgery?"
          },
          {
            type: "list",
            items: [
              "Expert ENT surgeons with extensive experience",
              "Advanced endoscopic surgical techniques",
              "Comprehensive pre- and post-operative care",
              "Low recurrence rates with meticulous surgical technique",
              "Cosmetically conscious surgical approach"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
