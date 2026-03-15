import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Tinnitus Treatment in Thrissur | Ringing in Ears | RelentCare ENT',
  description: 'Comprehensive tinnitus treatment including TRT, sound therapy, and medication. Expert diagnosis and management in Thrissur.',
  keywords: ['tinnitus', 'ringing in ears', 'tinnitus treatment', 'TRT', 'sound therapy'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/tinnitus-causes-treatment-thrissur',
  },
  openGraph: {
    title: 'Tinnitus Treatment in Thrissur | Ringing in Ears | RelentCare ENT',
    description: 'Comprehensive tinnitus treatment including TRT, sound therapy, and medication.',
    url: 'https://www.relentcarehospitals.com/tinnitus-causes-treatment-thrissur',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function TinnitusTreatment() {
  const contentData = {
    title: 'Tinnitus Treatment',
    subtitle: 'Expert care for ringing in ears and tinnitus management',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'What is Tinnitus?',
        body: 'Tinnitus is the perception of sound in the ear without an external source. Patients typically describe a ringing, buzzing, hissing, or roaring sound. It can be subjective (only heard by the patient) or objective (audible to others). Tinnitus affects approximately 10-15% of the population.',
      },
      {
        heading: 'Causes of Tinnitus',
        body: [
          'Age-related hearing loss (presbycusis)',
          'Loud noise exposure',
          'Earwax impaction',
          'Middle ear infection or fluid',
          'Eardrum perforation',
          'Ototoxic medications (aspirin, aminoglycosides)',
          'Head or neck trauma',
          'Temporomandibular joint (TMJ) disorders',
          'Blood vessel disorders (vascular tinnitus)',
          'Meniere\'s disease',
          'Acoustic neuroma',
          'Tension and stress',
        ],
        list: true,
      },
      {
        heading: 'Diagnosis',
        body: 'Comprehensive evaluation includes audiometric testing, tinnitus pitch matching, loudness measurement, and imaging studies if needed. This helps identify underlying causes and determine the best treatment approach.',
      },
      {
        heading: 'Treatment Options',
        body: [
          'Tinnitus Retraining Therapy (TRT): Combines sound therapy with counseling to help patients habituate to tinnitus and reduce its impact on quality of life.',
          'Sound Therapy: Using white noise machines, hearing aids, or masking devices to cover or redirect attention from tinnitus.',
          'Medications: Certain medications may help manage associated symptoms like anxiety or depression.',
          'Cognitive Behavioral Therapy: Addresses emotional response to tinnitus and develops coping strategies.',
          'Lifestyle Modifications: Stress reduction, sleep improvement, and avoiding tinnitus triggers.',
          'Surgical Treatment: For vascular tinnitus or acoustic neuroma.',
        ],
        list: true,
      },
      {
        heading: 'Our Approach',
        body: 'At RelentCare ENT, we provide comprehensive tinnitus management including identification of underlying causes, multimodal therapy combining TRT, sound therapy, and psychological support to improve quality of life.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
