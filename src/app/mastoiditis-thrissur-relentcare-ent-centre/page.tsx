import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Mastoiditis Treatment in Thrissur | Mastoidectomy | RelentCare ENT',
  description: 'Expert diagnosis and surgical treatment of mastoiditis. Mastoidectomy and complication management in Thrissur.',
  keywords: ['mastoiditis', 'mastoid infection', 'mastoidectomy', 'ear infection complications'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/mastoiditis-thrissur-relentcare-ent-centre',
  },
  openGraph: {
    title: 'Mastoiditis Treatment in Thrissur | Mastoidectomy | RelentCare ENT',
    description: 'Expert diagnosis and surgical treatment of mastoiditis and complications.',
    url: 'https://www.relentcarehospitals.com/mastoiditis-thrissur-relentcare-ent-centre',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function MastoiditisTreatment() {
  const contentData = {
    title: 'Mastoiditis Treatment',
    subtitle: 'Advanced surgical management of mastoid bone infection',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'What is Mastoiditis?',
        body: 'Mastoiditis is infection of the mastoid bone, the bony prominence behind the ear. It occurs when acute or chronic middle ear infection (otitis media) extends into the mastoid air cells. In the antibiotic era, acute mastoiditis is less common but still occurs when infection is not adequately treated.',
      },
      {
        heading: 'Types of Mastoiditis',
        body: [
          'Acute Mastoiditis: Develops rapidly following untreated or inadequately treated acute otitis media. Presents with severe symptoms requiring urgent treatment.',
          'Chronic Mastoiditis: Associated with chronic suppurative otitis media, often with cholesteatoma. May have smoldering course with intermittent drainage.',
          'Masked Mastoiditis: Subacute presentation with subtle symptoms due to partial response to antibiotics.',
        ],
      },
      {
        heading: 'Symptoms',
        body: [
          'Post-auricular pain and tenderness',
          'Swelling and redness behind the ear',
          'Ear discharge',
          'Fever and malaise',
          'Hearing loss',
          'Possible ear canal displacement downward and forward',
          'In severe cases: headache, meningeal signs, altered mental status',
        ],
        list: true,
      },
      {
        heading: 'Complications',
        body: [
          'Facial nerve paralysis',
          'Labyrinthitis and vertigo',
          'Sigmoid sinus thrombosis',
          'Meningitis',
          'Brain abscess',
          'Subperiosteal abscess',
          'Subdural empyema',
        ],
        list: true,
      },
      {
        heading: 'Surgical Treatment',
        body: 'Mastoidectomy involves removal of infected and diseased mastoid air cells. Cortical mastoidectomy addresses acute disease, while canal wall down or canal wall up techniques are used for chronic disease with ossiculoplasty to restore hearing.',
      },
      {
        heading: 'Our Expertise',
        body: 'At RelentCare ENT, we provide comprehensive management including timely diagnosis with imaging, aggressive antibiotic therapy, and advanced surgical techniques with intraoperative monitoring to ensure complete disease eradication and complication prevention.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
