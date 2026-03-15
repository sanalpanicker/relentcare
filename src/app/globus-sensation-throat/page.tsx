import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Globus Sensation (Lump in Throat) Treatment Thrissur | RelentCare",
  description: "Expert treatment of globus sensation and lump in throat feeling in Thrissur. Learn about LPRD, anxiety, and thyroid causes.",
  keywords: ["globus sensation", "lump in throat", "globus pharyngeus", "throat sensation", "LPRD", "Thrissur"],
  alternates: { canonical: "https://www.relentcarehospitals.com/globus-sensation-throat" },
  openGraph: { 
    title: "Globus Sensation (Lump in Throat) Treatment Thrissur | RelentCare",
    description: "Expert treatment of globus sensation and lump in throat feeling in Thrissur. Learn about LPRD, anxiety, and thyroid causes.",
    url: "https://www.relentcarehospitals.com/globus-sensation-throat",
    images: [{url: "/images/service-ent.jpg"}]
  },
};

export default function Page() {
  return (
    <PageLayout>
      <ContentPage
        heroTag="ENT Services"
        title="Globus Sensation (Lump in Throat) Treatment in Thrissur"
        subtitle="Comprehensive evaluation and management of throat sensation"
        breadcrumbs={[{label: "ENT Services", href: "/best-ent-services-thrissur"}]}
        sections={[
          {
            type: "text",
            content: "Globus sensation refers to the feeling of a lump, tightness, or fullness in the throat without an actual mass. Also called globus pharyngeus, this common condition affects many people and can be associated with acid reflux, anxiety, thyroid dysfunction, and neck muscle tension. Proper diagnosis and treatment address the underlying cause."
          },
          {
            type: "heading",
            content: "Understanding Globus Sensation"
          },
          {
            type: "text",
            content: "Globus sensation is a functional disorder characterized by the persistent sensation of a lump in the throat in the absence of structural pathology. Endoscopic examination reveals no objective findings. The sensation is real to the patient but results from functional dysfunction rather than disease."
          },
          {
            type: "heading",
            content: "Characteristics of Globus Sensation"
          },
          {
            type: "list",
            items: [
              "Sensation of lump or fullness",
              "Non-anatomic location (doesn't correspond to swallowing pain)",
              "Present when not swallowing",
              "May improve with swallowing",
              "Worse with stress or anxiety",
              "No difficulty swallowing food",
              "Variable intensity throughout day"
            ]
          },
          {
            type: "heading",
            content: "Common Causes of Globus Sensation"
          },
          {
            type: "heading",
            content: "LPRD/GERD (Laryngopharyngeal Reflux)"
          },
          {
            type: "list",
            items: [
              "Most common cause in ENT population",
              "Acid irritation of throat tissues",
              "Inflammation and edema",
              "Associated with hoarseness and cough",
              "Often without typical heartburn"
            ]
          },
          {
            type: "heading",
            content: "Anxiety and Stress"
          },
          {
            type: "list",
            items: [
              "Significant psychological component",
              "Muscle tension in neck and pharynx",
              "Hyperventilation and breathing changes",
              "Functional disorder triggering sensation",
              "Often worsens with stress"
            ]
          },
          {
            type: "heading",
            content: "Thyroid Dysfunction"
          },
          {
            type: "list",
            items: [
              "Hypothyroidism and thyroid enlargement",
              "Thyroid nodules",
              "Post-thyroid surgery changes",
              "Thyroiditis",
              "Direct or mass effect on throat"
            ]
          },
          {
            type: "heading",
            content: "Muscle Tension Disorders"
          },
          {
            type: "list",
            items: [
              "Cricopharyngeal spasm",
              "Neck muscle tension",
              "Poor posture",
              "Tension myositis",
              "Related to stress and anxiety"
            ]
          },
          {
            type: "heading",
            content: "Other Causes"
          },
          {
            type: "list",
            items: [
              "Postnasal drip",
              "Allergies",
              "Chronic cough",
              "Smoking",
              "Recent infection or pharyngitis",
              "Medication side effects",
              "Dehydration"
            ]
          },
          {
            type: "heading",
            content: "Symptoms Associated with Globus"
          },
          {
            type: "list",
            items: [
              "Sensation of lump in throat",
              "Tightness or fullness feeling",
              "Difficulty swallowing sensation (though swallowing works)",
              "Throat pain or soreness",
              "Postnasal drip",
              "Hoarseness",
              "Chronic cough",
              "Anxiety about condition"
            ]
          },
          {
            type: "heading",
            content: "Diagnostic Evaluation"
          },
          {
            type: "heading",
            content: "Medical History"
          },
          {
            type: "list",
            items: [
              "Symptom onset and duration",
              "Associated factors (stress, meals)",
              "GERD or reflux symptoms",
              "Anxiety or depression history",
              "Thyroid disorder history",
              "Medication review",
              "Stress and emotional factors"
            ]
          },
          {
            type: "heading",
            content: "Physical Examination"
          },
          {
            type: "list",
            items: [
              "General throat and neck examination",
              "Palpation for masses or thyroid",
              "Assessment of anxiety or distress",
              "Laryngoscopy visualization"
            ]
          },
          {
            type: "heading",
            content: "Laryngoscopic Examination"
          },
          {
            type: "text",
            content: "This is essential to rule out structural pathology causing the sensation."
          },
          {
            type: "list",
            items: [
              "Flexible laryngoscopy",
              "Assessment of larynx, pharynx, and esophagus",
              "Evaluation for masses, inflammation, or pathology",
              "Observation of vocal cord function"
            ]
          },
          {
            type: "heading",
            content: "Additional Testing"
          },
          {
            type: "list",
            items: [
              "Thyroid function tests (TSH, T4)",
              "Thyroid ultrasound if indicated",
              "pH monitoring if GERD suspected",
              "Manometry if swallowing disorder suspected",
              "Imaging (ultrasound, CT) if masses suspected"
            ]
          },
          {
            type: "heading",
            content: "Management of Globus Sensation"
          },
          {
            type: "heading",
            content: "LPRD Treatment"
          },
          {
            type: "list",
            items: [
              "Proton pump inhibitors (PPIs)",
              "Dietary modifications",
              "Elevation of head during sleep",
              "Avoidance of trigger foods",
              "Lifestyle changes"
            ]
          },
          {
            type: "heading",
            content: "Anxiety and Stress Management"
          },
          {
            type: "list",
            items: [
              "Cognitive behavioral therapy (CBT)",
              "Anxiety counseling",
              "Stress reduction techniques",
              "Regular exercise",
              "Meditation and mindfulness",
              "Psychiatric consultation if needed"
            ]
          },
          {
            type: "heading",
            content: "Voice and Muscle Therapy"
          },
          {
            type: "list",
            items: [
              "Speech-language pathology evaluation",
              "Voice and breathing exercises",
              "Laryngeal massage",
              "Physical therapy for neck tension",
              "Posture correction"
            ]
          },
          {
            type: "heading",
            content: "Thyroid Management"
          },
          {
            type: "list",
            items: [
              "Thyroid hormone replacement if hypothyroid",
              "Thyroid surgery if indicated",
              "Endocrinology referral if needed"
            ]
          },
          {
            type: "heading",
            content: "Medication Support"
          },
          {
            type: "list",
            items: [
              "Anti-anxiety medications if indicated",
              "Muscle relaxants for tension",
              "Antidepressants for mood support",
              "Psychiatric evaluation and management"
            ]
          },
          {
            type: "heading",
            content: "Reassurance and Counseling"
          },
          {
            type: "list",
            items: [
              "Reassurance after negative findings",
              "Education about benign nature",
              "Explanation of functional etiology",
              "Support for anxiety component",
              "Regular follow-up for monitoring"
            ]
          },
          {
            type: "heading",
            content: "Recovery and Prognosis"
          },
          {
            type: "list",
            items: [
              "Improvement with multidisciplinary approach",
              "Most patients respond to treatment",
              "Timeline varies (weeks to months)",
              "Ongoing stress management important",
              "Regular follow-up monitoring"
            ]
          },
          {
            type: "heading",
            content: "Why Choose RelentCare for Globus Sensation Management?"
          },
          {
            type: "list",
            items: [
              "Comprehensive diagnostic evaluation",
              "Ruling out serious pathology",
              "Multidisciplinary treatment approach",
              "LPRD and reflux expertise",
              "Voice therapy services",
              "Mental health collaboration",
              "Reassuring and supportive care",
              "Long-term management and follow-up"
            ]
          }
        ]}
      />
    </PageLayout>
  );
}
