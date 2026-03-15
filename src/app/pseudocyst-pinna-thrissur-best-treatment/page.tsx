import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Pseudocyst Pinna Treatment in Thrissur | RelentCare ENT",
  description: "Expert pseudocyst of pinna treatment in Thrissur. Learn about aspiration versus surgical removal and prevention of recurrence.",
  keywords: ["pseudocyst pinna", "pinna cyst", "ear cyst treatment", "aspiration", "Thrissur ENT"],
  alternates: { canonical: "https://www.relentcarehospitals.com/pseudocyst-pinna-thrissur-best-treatment" },
  openGraph: { 
    title: "Pseudocyst Pinna Treatment in Thrissur | RelentCare ENT",
    description: "Expert pseudocyst of pinna treatment in Thrissur. Learn about aspiration versus surgical removal and prevention of recurrence.",
    url: "https://www.relentcarehospitals.com/pseudocyst-pinna-thrissur-best-treatment",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Pseudocyst of Pinna Treatment in Thrissur"
        subtitle="Effective management of ear cysts with aspiration and surgical options"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "A pseudocyst of the pinna is a fluid-filled swelling that occurs in the external ear, typically in the upper portion of the helix. Unlike true cysts, pseudocysts lack a defined epithelial lining and are thought to result from extravasation of lymph or serum following trauma or spontaneously."
          },
          {
            type: "heading",
            content: "What is Pseudocyst of Pinna?"
          },
          {
            type: "text",
            content: "Pseudocysts appear as smooth, fluctuant swellings that may be painless or occasionally tender. They are more common in middle-aged and elderly individuals. The exact cause remains unclear, though trauma, repeated needle puncture, or infection may contribute to their development."
          },
          {
            type: "heading",
            content: "Clinical Presentation"
          },
          {
            type: "list",
            items: [
              "Visible swelling on the ear",
              "Usually painless unless infected",
              "May feel warm or tender",
              "Cosmetic concern for patients",
              "Possible hearing obstruction in large cysts"
            ]
          },
          {
            type: "heading",
            content: "Aspiration vs Surgical Removal"
          },
          {
            type: "heading",
            content: "Needle Aspiration"
          },
          {
            type: "list",
            items: [
              "Simple office procedure with minimal discomfort",
              "Quick drainage of fluid contents",
              "Useful for diagnostic confirmation",
              "High recurrence rate (30-50%)",
              "May require multiple aspirations"
            ]
          },
          {
            type: "heading",
            content: "Surgical Excision"
          },
          {
            type: "list",
            items: [
              "Definitive treatment with low recurrence",
              "Complete removal of cyst wall",
              "Performed under local or general anesthesia",
              "Minimal scarring with proper technique",
              "Prevents future episodes"
            ]
          },
          {
            type: "heading",
            content: "Prevention of Recurrence"
          },
          {
            type: "text",
            content: "To minimize recurrence after aspiration, avoid repetitive needle puncture and trauma to the area. If surgical excision is chosen, complete removal of the cyst wall is essential. Recurrence rates after proper surgical excision are less than 10%."
          },
          {
            type: "heading",
            content: "Treatment Recommendations"
          },
          {
            type: "list",
            items: [
              "Initial aspiration for symptomatic relief",
              "Surgical excision for definitive treatment",
              "Careful suturing to prevent fluid reaccumulation",
              "Pressure dressing post-operatively",
              "Regular follow-up to monitor healing"
            ]
          },
          {
            type: "heading",
            content: "RelentCare Approach to Pseudocyst Treatment"
          },
          {
            type: "list",
            items: [
              "Comprehensive evaluation and imaging",
              "Discussion of aspiration vs surgical options",
              "Expert surgical technique for excision",
              "Minimal scarring with excellent cosmetic results",
              "Follow-up care to ensure successful resolution"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
