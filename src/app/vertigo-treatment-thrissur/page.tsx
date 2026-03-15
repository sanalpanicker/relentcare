import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Vertigo Treatment in Thrissur | BPPV & Balance Disorders | RelentCare',
  description: 'Expert vertigo and balance disorder treatment including BPPV, vestibular neuritis. Epley manoeuvre and medication therapy available.',
  keywords: ['vertigo', 'BPPV', 'benign paroxysmal positional vertigo', 'balance disorders', 'dizziness'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/vertigo-treatment-thrissur',
  },
  openGraph: {
    title: 'Vertigo Treatment in Thrissur | BPPV & Balance Disorders | RelentCare',
    description: 'Expert vertigo and balance disorder treatment including BPPV and vestibular conditions.',
    url: 'https://www.relentcarehospitals.com/vertigo-treatment-thrissur',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function VertigoTreatment() {
  const contentData = {
    title: 'Vertigo Treatment',
    subtitle: 'Comprehensive management of balance disorders and dizziness',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'Types of Vertigo',
        body: [
          'Benign Paroxysmal Positional Vertigo (BPPV): Most common cause of vertigo. Triggered by specific head positions due to loose calcium carbonate crystals in semicircular canals.',
          'Vestibular Neuritis: Inflammation of vestibular nerve causing sudden onset vertigo and imbalance. Usually self-limited over days to weeks.',
          'Meniere\'s Disease: Classic triad of vertigo, hearing loss, and tinnitus. May have fluctuating symptoms.',
          'Central Vertigo: Due to brain or brainstem lesions. Often associated with other neurological symptoms.',
          'Chronic Subjective Dizziness (CSD): Persistent dizziness without clear vestibular cause. Often post-BPPV or post-vestibulitis.',
        ],
      },
      {
        heading: 'Diagnosis',
        body: 'Comprehensive evaluation includes history, Dix-Hallpike and roll test, nystagmus assessment, audiometry, caloric testing, and videonystagmography. Brain imaging (MRI) may be indicated for central causes.',
      },
      {
        heading: 'Epley Manoeuvre',
        body: 'The Epley manoeuvre is a head positioning treatment that moves calcium carbonate crystals out of the semicircular canals. Highly effective for BPPV, with success rates exceeding 90% when properly performed. May require repetition if symptoms recur.',
      },
      {
        heading: 'Other Treatment Options',
        body: [
          'Vestibular Rehabilitation Therapy (VRT): Exercises to improve balance and reduce dizziness through neural adaptation.',
          'Medication: Vestibular suppressants, anti-emetics, and anxiolytics for symptom management during acute episodes.',
          'Canalith Repositioning: Modified Epley and Semont manoeuvres for repositioning of ear crystals.',
          'Lifestyle Modifications: Head movement precautions, activity gradation, and anxiety management.',
          'Surgical Treatment: Reserved for refractory BPPV or specific vestibular conditions.',
        ],
        list: true,
      },
      {
        heading: 'Our Approach',
        body: 'At RelentCare ENT, we provide comprehensive vertigo management with precise diagnosis, evidence-based treatment including canalith repositioning manoeuvres, vestibular rehabilitation, and follow-up care to restore balance and improve quality of life.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
