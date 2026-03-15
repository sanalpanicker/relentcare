import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Hearing Tests & Hearing Aids in Thrissur | RelentCare ENT',
  description: 'Professional hearing tests, audiometry, and hearing aid fitting. Latest hearing aid brands and auditory rehabilitation services.',
  keywords: ['hearing test', 'hearing aids', 'audiometry', 'audiology', 'hearing aid brands'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/hearing-tests-hearing-aids-thrissur',
  },
  openGraph: {
    title: 'Hearing Tests & Hearing Aids in Thrissur | RelentCare ENT',
    description: 'Professional hearing tests, audiometry, and hearing aid fitting services.',
    url: 'https://www.relentcarehospitals.com/hearing-tests-hearing-aids-thrissur',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function HearingTestsAndAids() {
  const contentData = {
    title: 'Hearing Tests & Hearing Aids',
    subtitle: 'Professional audiometry and advanced hearing aid solutions',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'Audiometry Services',
        body: [
          'Pure Tone Audiometry: Tests hearing sensitivity across various frequencies.',
          'Speech Discrimination Testing: Evaluates ability to understand speech at different volumes.',
          'Impedance Audiometry (Tympanometry): Assesses middle ear function and eardrum mobility.',
          'Play Audiometry: For children who cannot comply with standard testing.',
          'Speech Audiometry: Measures threshold and discrimination for spoken words.',
        ],
        list: true,
      },
      {
        heading: 'Types of Hearing Aids',
        body: [
          'Behind-the-Ear (BTE): Powerful, versatile, and suitable for all hearing loss levels.',
          'In-the-Ear (ITE): Custom-molded, discrete, and user-friendly.',
          'In-the-Canal (ITC): Smaller and less visible, good for mild to moderate loss.',
          'Completely-in-the-Canal (CIC): Most discreet option for mild to moderate hearing loss.',
          'Receiver-in-the-Canal (RIC): Modern design combining discretion with power.',
          'Open Fit: Lightweight with natural sound for high-frequency loss.',
        ],
        list: true,
      },
      {
        heading: 'Hearing Aid Fitting Process',
        body: [
          'Step 1: Comprehensive hearing assessment to determine needs.',
          'Step 2: Selection of appropriate hearing aid style and technology level.',
          'Step 3: Ear impression taking or device programming for custom fit.',
          'Step 4: Device fitting, programming, and adjustment for comfort and sound quality.',
          'Step 5: User training on device operation, maintenance, and battery care.',
          'Step 6: Follow-up appointments to fine-tune settings and address concerns.',
        ],
        list: true,
      },
      {
        heading: 'Premium Hearing Aid Brands',
        body: [
          'Phonak: Swiss technology with excellent speech clarity and wireless connectivity.',
          'Signia (Siemens): German engineering known for reliable, high-quality amplification.',
          'ReSound: Danish brand with cloud connectivity and smartphone app control.',
          'Oticon: Focus on user comfort and natural sound perception.',
          'Starkey: American manufacturer with rechargeable options and artificial intelligence.',
        ],
        list: true,
      },
      {
        heading: 'Auditory Rehabilitation',
        body: 'Our specialized auditory rehabilitation program helps patients adjust to hearing aids and maximize their benefits through counseling, communication strategies, and progressive adaptation techniques.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
