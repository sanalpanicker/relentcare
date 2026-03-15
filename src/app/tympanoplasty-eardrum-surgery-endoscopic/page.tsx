import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Tympanoplasty (Eardrum Repair) in Thrissur | Endoscopic | RelentCare',
  description: 'Endoscopic tympanoplasty and eardrum repair surgery. Myringoplasty and ossiculoplasty to restore hearing.',
  keywords: ['tympanoplasty', 'eardrum repair', 'myringoplasty', 'ossiculoplasty', 'endoscopic surgery'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/tympanoplasty-eardrum-surgery-endoscopic',
  },
  openGraph: {
    title: 'Tympanoplasty (Eardrum Repair) in Thrissur | Endoscopic | RelentCare',
    description: 'Endoscopic tympanoplasty and advanced eardrum repair surgery techniques.',
    url: 'https://www.relentcarehospitals.com/tympanoplasty-eardrum-surgery-endoscopic',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function TympanoplastyPage() {
  const contentData = {
    title: 'Tympanoplasty (Eardrum Repair)',
    subtitle: 'Advanced endoscopic and microscopic eardrum repair techniques',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'What is Tympanoplasty?',
        body: 'Tympanoplasty is surgical repair of a perforated eardrum (tympanic membrane) or reconstruction of the middle ear structures. The procedure aims to restore eardrum integrity, prevent water entry into the middle ear, and improve hearing by reconstructing the ossicular chain.',
      },
      {
        heading: 'Indications for Tympanoplasty',
        body: [
          'Eardrum perforation preventing water exposure',
          'Conductive hearing loss from ossicular damage',
          'Prevention of recurrent ear infections',
          'Persistent drainage from perforation',
          'Preparation for ear surgery in chronic disease',
          'Traumatic perforation repair',
        ],
        list: true,
      },
      {
        heading: 'Endoscopic vs Microscopic Approach',
        body: [
          'Endoscopic Tympanoplasty: Uses high-definition endoscopes for excellent visualization. Smaller incisions, faster healing, better graft take rates (95%+), and ability to assess middle ear disease comprehensively.',
          'Microscopic Tympanoplasty: Traditional approach with operating microscope. Still effective but with larger incisions and longer recovery. Best for simple anterior perforations.',
        ],
      },
      {
        heading: 'Types of Surgery',
        body: [
          'Myringoplasty: Repair of eardrum perforation using fascia graft without ossicular reconstruction. Suitable for isolated perforations.',
          'Ossiculoplasty: Reconstruction of damaged middle ear bones (stapes, incus, malleus) using ossicular prostheses or cartilage. Restores hearing when bones are eroded.',
          'Tympanoplasty with Ossiculoplasty: Combined approach for complex disease with perforation and ossicular damage.',
        ],
      },
      {
        heading: 'Graft Materials',
        body: [
          'Temporal Fascia: Most commonly used, good biocompatibility and take rates.',
          'Tragal Cartilage: For large perforations, provides rigidity.',
          'Perichondrium: Cartilage lining, excellent for difficult cases.',
          'Synthetic Materials: Available as alternatives when biological materials insufficient.',
        ],
        list: true,
      },
      {
        heading: 'Recovery Process',
        body: [
          'Hospital stay: Usually same day or overnight.',
          'Healing timeline: Eardrum typically heals in 4-6 weeks.',
          'Water precautions: Keep ear dry for 2-4 weeks post-op.',
          'Activity restrictions: Avoid strenuous activity for 1-2 weeks.',
          'Follow-up: Audiometry at 6 weeks to assess hearing improvement.',
          'Success rate: 85-95% with endoscopic technique.',
        ],
        list: true,
      },
      {
        heading: 'Post-Operative Care',
        body: 'Use earplugs or cotton with petroleum jelly to protect ear during shower. Avoid water entry at all costs. Take prescribed pain medication and antibiotics as directed. Attend follow-up appointments for progress monitoring.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
