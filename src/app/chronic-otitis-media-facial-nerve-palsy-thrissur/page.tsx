import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Chronic Otitis Media & Facial Nerve Treatment Thrissur | RelentCare',
  description: 'Expert treatment for chronic otitis media, cholesteatoma, and facial nerve palsy. Advanced surgical solutions in Thrissur.',
  keywords: ['chronic otitis media', 'cholesteatoma', 'facial nerve palsy', 'ear surgery', 'mastoidectomy'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/chronic-otitis-media-facial-nerve-palsy-thrissur',
  },
  openGraph: {
    title: 'Chronic Otitis Media & Facial Nerve Treatment Thrissur | RelentCare',
    description: 'Expert treatment for chronic otitis media, cholesteatoma, and facial nerve palsy.',
    url: 'https://www.relentcarehospitals.com/chronic-otitis-media-facial-nerve-palsy-thrissur',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function ChronicOtitisMediaAndFacialNerve() {
  const contentData = {
    title: 'Chronic Otitis Media & Facial Nerve Conditions',
    subtitle: 'Advanced surgical treatment for complex ear diseases',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'Types of Chronic Otitis Media',
        body: [
          'Tubotympanic (CSOM Safe): Non-foul-smelling discharge from anterior middle ear. Safe type with benign course and low risk of complications.',
          'Atticoantral (CSOM Unsafe): Foul-smelling discharge with bone erosion. Associated with cholesteatoma, matrix migration into mastoid, and higher complication risk.',
        ],
      },
      {
        heading: 'Cholesteatoma',
        body: 'Cholesteatoma is abnormal skin growth in the middle ear, causing bone erosion and risk of serious complications including hearing loss, facial nerve paralysis, meningitis, and brain abscess. Requires surgical removal (mastoidectomy with ossiculoplasty).',
      },
      {
        heading: 'Facial Nerve Palsy',
        body: [
          'Can result from chronic ear disease, cholesteatoma, or trauma',
          'Causes sudden facial weakness affecting smile, eye closure, and speech',
          'May be partial or complete',
          'Treatment depends on etiology and severity',
          'Options include medical therapy (steroids), surgical decompression, or nerve grafting',
        ],
        list: true,
      },
      {
        heading: 'Surgical Options',
        body: [
          'Cortical Mastoidectomy: Bone removal to drain infected mastoid air cells.',
          'Canal Wall Down (CWD) Mastoidectomy: Removal of ear canal wall for disease control in atticoantral CSOM. Requires lifelong precautions against water entry.',
          'Canal Wall Up (CWU) Mastoidectomy: Ossiculoplasty with ossicular chain reconstruction to preserve ear canal anatomy and achieve water safety.',
          'Endoscopic Assisted Surgery: Improves visualization and disease eradication rates.',
          'Ossiculoplasty: Reconstruction of damaged middle ear bones to restore hearing function.',
        ],
        list: true,
      },
      {
        heading: 'Complications We Treat',
        body: 'Facial nerve erosion, semicircular canal fistula, sinus thrombosis, and intracranial extension require specialized surgical expertise for safe management and complication prevention.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
