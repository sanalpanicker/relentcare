import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Meniere\'s Disease Treatment in Thrissur | RelentCare ENT Clinic',
  description: 'Comprehensive Meniere\'s disease treatment including low-sodium diet, intratympanic injections, and medication management.',
  keywords: ['Meniere\'s disease', 'endolymphatic hydrops', 'vertigo', 'hearing loss', 'tinnitus'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/menieres-disease',
  },
  openGraph: {
    title: 'Meniere\'s Disease Treatment in Thrissur | RelentCare ENT Clinic',
    description: 'Comprehensive Meniere\'s disease treatment and management strategies.',
    url: 'https://www.relentcarehospitals.com/menieres-disease',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function MeniereDiseasePage() {
  const contentData = {
    title: 'Meniere\'s Disease',
    subtitle: 'Expert treatment for vertigo, hearing loss, and tinnitus',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'What is Meniere\'s Disease?',
        body: 'Meniere\'s disease is a chronic inner ear disorder characterized by excessive fluid (endolymphatic hydrops) buildup in the inner ear. It causes episodes of vertigo, hearing loss, tinnitus, and ear fullness. The condition typically affects one ear (unilateral) but can occasionally affect both ears.',
      },
      {
        heading: 'Classic Triad of Symptoms',
        body: [
          'Vertigo: Sudden, severe spinning sensation lasting 20 minutes to several hours. Accompanied by nausea and vomiting. Can be completely incapacitating during episodes.',
          'Hearing Loss: Fluctuating initially, may become permanent over time. Affects low frequencies more than high frequencies.',
          'Tinnitus: Ringing, roaring, or buzzing in the affected ear. May worsen before or during vertigo attacks.',
          'Aural Fullness: Sensation of pressure or fullness in the affected ear.',
        ],
        list: true,
      },
      {
        heading: 'Low-Sodium Diet',
        body: 'Dietary salt restriction (sodium chloride less than 1500-2000 mg daily) is the cornerstone of Meniere\'s disease management. Low sodium diet reduces fluid retention and inner ear pressure, decreasing vertigo frequency and severity. Strict adherence can control symptoms in 50-60% of patients.',
      },
      {
        heading: 'Medical Management',
        body: [
          'Diuretics: Thiazide and loop diuretics reduce inner ear fluid accumulation.',
          'Vestibular Suppressants: Meclizine, dimenhydrinate for acute symptom relief.',
          'Corticosteroids: Oral or intratympanic for inflammation reduction.',
          'Betahistine: May improve inner ear microcirculation.',
          'Anxiolytics: For anxiety and panic associated with vertigo attacks.',
        ],
        list: true,
      },
      {
        heading: 'Intratympanic Injections',
        body: 'For patients unresponsive to medical therapy, intratympanic (through eardrum) injections of corticosteroids or gentamicin offer good control. Gentamicin is ablative (destroys vestibular function) and effective for severe vertigo. Steroid injections preserve hearing better.',
      },
      {
        heading: 'Surgical Options',
        body: 'For severe, refractory disease: endolymphatic sac decompression, labyrinthectomy, or vestibular nerve section. These are reserved for cases failing conservative treatment.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
