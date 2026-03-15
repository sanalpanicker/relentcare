import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Ear Wax Removal in Thrissur | Safe Microsuction | RelentCare ENT',
  description: 'Professional earwax removal using microsuction and irrigation. Safe, painless ear cleaning by expert ENT doctors.',
  keywords: ['ear wax removal', 'earwax impaction', 'microsuction', 'ear cleaning', 'cerumen'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/wax-removal-thrissur-ent-surgeon',
  },
  openGraph: {
    title: 'Ear Wax Removal in Thrissur | Safe Microsuction | RelentCare ENT',
    description: 'Professional earwax removal using microsuction and irrigation techniques.',
    url: 'https://www.relentcarehospitals.com/wax-removal-thrissur-ent-surgeon',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function WaxRemovalThrissur() {
  const contentData = {
    title: 'Ear Wax Removal',
    subtitle: 'Safe and effective earwax impaction treatment',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'Causes of Earwax Impaction',
        body: [
          'Overproduction of cerumen (earwax)',
          'Narrow ear canal predisposing to impaction',
          'Excessive ear canal hair',
          'Frequent water exposure (swimmers)',
          'Use of hearing aids or earbuds',
          'Aggressive ear cleaning pushing wax deeper',
          'Age-related changes in earwax consistency',
        ],
        list: true,
      },
      {
        heading: 'Symptoms of Earwax Impaction',
        body: [
          'Conductive hearing loss',
          'Ear fullness or pressure sensation',
          'Ear pain or discomfort',
          'Tinnitus (ringing in ears)',
          'Dizziness or vertigo',
          'Discharge from the ear',
        ],
        list: true,
      },
      {
        heading: 'Earwax Removal Methods',
        body: [
          'Microsuction: Gentle vacuum removal under microscopic visualization. Safe, painless, and most effective method. Ideal for sensitive ears and perforated eardrums.',
          'Aural Irrigation: Warm water under controlled pressure to flush out impacted wax. Works well for soft wax but less effective for hard impactions.',
          'Cerumenolytic Drops: Softening agents like triethanolamine or carbamide peroxide used before irrigation or suction.',
          'Manual Removal: Using specula and alligator forceps for visible, accessible wax. Used when suction is unavailable.',
        ],
        list: true,
      },
      {
        heading: 'Post-Removal Aftercare',
        body: [
          'Avoid water in ear for 24-48 hours after irrigation',
          'Use cotton with petroleum jelly to protect ear if needed',
          'Avoid cotton swabs which can damage ear canal',
          'Allow ear canal to dry completely',
          'Avoid sudden pressure changes (diving, flying)',
          'Schedule follow-up if symptoms persist',
        ],
        list: true,
      },
      {
        heading: 'Prevention',
        body: 'Avoid aggressive ear cleaning, limit water exposure, use earplugs when swimming, and get regular professional cleanings if prone to impaction.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
