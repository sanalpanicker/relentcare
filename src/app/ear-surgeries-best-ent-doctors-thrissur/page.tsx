import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Expert EAR Services & Surgeries in Thrissur | RelentCare',
  description: 'Comprehensive ear surgeries including myringoplasty, ossiculoplasty, and mastoidectomy. Expert ENT doctors in Thrissur.',
  keywords: ['ear surgery', 'myringoplasty', 'mastoidectomy', 'ossiculoplasty', 'ENT surgeon'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/ear-surgeries-best-ent-doctors-thrissur',
  },
  openGraph: {
    title: 'Expert EAR Services & Surgeries in Thrissur | RelentCare',
    description: 'Comprehensive ear surgeries including myringoplasty, ossiculoplasty, and mastoidectomy.',
    url: 'https://www.relentcarehospitals.com/ear-surgeries-best-ent-doctors-thrissur',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function EarSurgeriesThrissur() {
  const contentData = {
    title: 'Expert Ear Services & Surgeries',
    subtitle: 'Advanced surgical solutions for complex ear conditions',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'Types of Ear Surgeries Offered',
        body: [
          'Myringoplasty: Repair of eardrum perforation using tissue graft and endoscopic or microscopic techniques.',
          'Ossiculoplasty: Reconstruction of damaged middle ear bones (ossicles) to restore hearing.',
          'Mastoidectomy: Removal of infected mastoid bone tissue to treat chronic ear infections.',
          'Tympanomastoidectomy: Combined approach for complex ear disease with eustachian tube dysfunction.',
          'Endoscopic Ear Surgery: Minimally invasive techniques using endoscopes for better visualization and reduced trauma.',
        ],
        list: true,
      },
      {
        heading: 'Conditions We Treat',
        body: [
          'Chronic suppurative otitis media (CSOM)',
          'Cholesteatoma',
          'Eardrum perforation',
          'Ossicular chain discontinuity',
          'Conductive hearing loss',
          'Chronic mastoiditis',
          'Recurrent ear infections',
        ],
        list: true,
      },
      {
        heading: 'Advanced Technology',
        body: [
          'Surgical Microscopes: High-resolution imaging for precise surgical intervention.',
          'Endoscopes: Minimally invasive visualization allowing smaller incisions and faster recovery.',
          'Powered Instruments: Advanced drills for bone removal with minimal trauma.',
          'Intraoperative Monitoring: Real-time assessment of surgical progress.',
        ],
        list: true,
      },
      {
        heading: 'Recovery and Follow-up',
        body: 'Most ear surgeries have a recovery period of 2-4 weeks. Our team provides comprehensive post-operative care and follow-up consultations to monitor healing and assess hearing improvement.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
