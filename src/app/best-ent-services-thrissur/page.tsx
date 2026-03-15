import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Best ENT Services in Thrissur | RelentCare ENT Clinic',
  description: 'Comprehensive ear, nose, throat and laryngology services at Kolazhy, Thrissur. Expert ENT doctors for hearing loss, tinnitus, and more.',
  keywords: ['ENT services', 'ear doctor', 'throat specialist', 'Thrissur', 'RelentCare'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/best-ent-services-thrissur',
  },
  openGraph: {
    title: 'Best ENT Services in Thrissur | RelentCare ENT Clinic',
    description: 'Comprehensive ear, nose, throat and laryngology services at Kolazhy, Thrissur.',
    url: 'https://www.relentcarehospitals.com/best-ent-services-thrissur',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function BestENTServicesThrissur() {
  const contentData = {
    title: 'Best ENT Services in Thrissur',
    subtitle: 'Comprehensive ear, nose, throat and laryngology services at Kolazhy, Thrissur',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'Overview of ENT Services',
        body: [
          'At RelentCare ENT Clinic in Thrissur, we provide comprehensive ear, nose, and throat services with state-of-the-art diagnostic and treatment facilities.',
          'Our expert ENT specialists diagnose and treat conditions ranging from simple ear infections to complex surgical procedures. We offer personalized care tailored to each patient\'s unique needs.',
          'With advanced equipment including endoscopes, audiometry systems, and surgical microscopes, we ensure the highest quality of care.',
        ],
      },
      {
        heading: 'Our Services Include',
        body: [
          'Hearing loss evaluation and management',
          'Tinnitus treatment and management',
          'Ear surgeries (myringoplasty, mastoidectomy, ossiculoplasty)',
          'Hearing aids and auditory rehabilitation',
          'Wax removal and ear cleaning',
          'Chronic ear disease treatment',
          'Vertigo and balance disorder management',
          'Acoustic neuroma diagnosis and treatment',
        ],
        list: true,
      },
      {
        heading: 'Why Choose RelentCare ENT Clinic?',
        body: [
          'Expert team of experienced ENT surgeons with specialized training',
          'Latest diagnostic equipment and surgical technology',
          'Comprehensive approach to treatment combining medical and surgical options',
          'Patient-centric care with personalized treatment plans',
          'Convenient location at Kolazhy with easy accessibility',
          'Competitive pricing with transparent billing',
        ],
        list: true,
      },
      {
        heading: 'Book Your Appointment',
        body: 'Schedule a consultation with our ENT specialists today. Call us or visit our clinic at Kolazhy, Thrissur to experience world-class ENT care.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
