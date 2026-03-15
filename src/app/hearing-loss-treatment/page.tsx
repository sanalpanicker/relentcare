import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Hearing Loss Treatment in Thrissur | Sensorineural & Conductive | RelentCare',
  description: 'Expert treatment for hearing loss including sensorineural and conductive types. Hearing aids and surgical options available.',
  keywords: ['hearing loss', 'sensorineural hearing loss', 'conductive hearing loss', 'hearing treatment', 'Thrissur'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/hearing-loss-treatment',
  },
  openGraph: {
    title: 'Hearing Loss Treatment in Thrissur | Sensorineural & Conductive | RelentCare',
    description: 'Expert treatment for hearing loss including sensorineural and conductive types.',
    url: 'https://www.relentcarehospitals.com/hearing-loss-treatment',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function HearingLossTreatment() {
  const contentData = {
    title: 'Hearing Loss Treatment',
    subtitle: 'Comprehensive solutions for sensorineural and conductive hearing loss',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'Types of Hearing Loss',
        body: [
          'Conductive Hearing Loss: Results from problems in the outer or middle ear preventing sound transmission to the inner ear. Often treatable with surgery or hearing aids.',
          'Sensorineural Hearing Loss: Occurs when there is damage to the inner ear (cochlea) or auditory nerve. This is the most common type and typically permanent.',
          'Mixed Hearing Loss: A combination of both conductive and sensorineural components.',
        ],
      },
      {
        heading: 'Common Causes',
        body: [
          'Age-related hearing loss (presbycusis)',
          'Loud noise exposure',
          'Ear infections and inflammation',
          'Earwax impaction',
          'Eardrum perforation',
          'Ossicular chain damage',
          'Ototoxic medications',
          'Genetic conditions',
          'Head trauma',
        ],
        list: true,
      },
      {
        heading: 'Diagnosis',
        body: 'Comprehensive audiometric testing including pure tone audiometry, speech discrimination testing, and impedance audiometry helps determine the type and severity of hearing loss. Advanced imaging like MRI or CT scan may be recommended for specific cases.',
      },
      {
        heading: 'Treatment Options',
        body: [
          'Hearing Aids: Digital hearing aids amplify sound for comfortable hearing in various environments.',
          'Cochlear Implants: For severe to profound sensorineural hearing loss, cochlear implants provide direct electrical stimulation to the auditory nerve.',
          'Surgical Treatment: Ossiculoplasty, myringoplasty, or stapes surgery may restore hearing in conductive cases.',
          'Auditory Rehabilitation: Training and counseling to maximize benefit from hearing devices.',
        ],
        list: true,
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
