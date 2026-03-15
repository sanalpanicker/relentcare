import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Otitis Externa (Swimmer\'s Ear) Treatment in Thrissur | RelentCare',
  description: 'Expert diagnosis and treatment of otitis externa (swimmer\'s ear). Pain relief and prevention strategies from RelentCare ENT.',
  keywords: ['otitis externa', 'swimmers ear', 'ear canal infection', 'ear pain', 'otitis'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/otitis-externa-or-swimmers-ear',
  },
  openGraph: {
    title: 'Otitis Externa (Swimmer\'s Ear) Treatment in Thrissur | RelentCare',
    description: 'Expert diagnosis and treatment of otitis externa (swimmer\'s ear).',
    url: 'https://www.relentcarehospitals.com/otitis-externa-or-swimmers-ear',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function OtitisExterna() {
  const contentData = {
    title: 'Otitis Externa (Swimmer\'s Ear)',
    subtitle: 'Effective treatment and pain relief for ear canal infections',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'What is Otitis Externa?',
        body: 'Otitis externa (swimmer\'s ear) is inflammation or infection of the external ear canal. Most commonly caused by bacterial infection (especially Pseudomonas aeruginosa), it can also result from fungal infection. The condition is common in swimmers and those living in humid climates.',
      },
      {
        heading: 'Causes of Otitis Externa',
        body: [
          'Water exposure (swimming, showering)',
          'Aggressive ear cleaning with cotton swabs',
          'Hearing aids or earphones creating moisture',
          'Dermatitis or eczema of ear canal',
          'Bacterial or fungal infection',
          'Foreign body in ear canal',
          'Cerumen impaction',
          'Chlorinated water exposure',
        ],
        list: true,
      },
      {
        heading: 'Symptoms',
        body: [
          'Ear pain (often severe and worse when touching ear)',
          'Itching in the ear canal',
          'Drainage or discharge (clear, yellow, or pus-filled)',
          'Hearing loss',
          'Ear fullness',
          'Redness and swelling of ear canal',
          'In severe cases: jaw pain and lymph node swelling',
        ],
        list: true,
      },
      {
        heading: 'Treatment Approaches',
        body: [
          'Ear Cleaning: Gentle removal of debris and cerumen to allow medication penetration.',
          'Antibiotic Drops: Fluoroquinolone or aminoglycoside drops for bacterial infection.',
          'Antifungal Drops: For fungal otitis externa (otomycosis).',
          'Topical Corticosteroids: To reduce inflammation and itching.',
          'Oral Antibiotics: Reserved for severe infections or immunocompromised patients.',
          'Otic Wick: Placement of medicated wick for severe edema preventing drop penetration.',
          'Pain Management: Analgesics for pain relief.',
        ],
        list: true,
      },
      {
        heading: 'Prevention Strategies',
        body: [
          'Dry ears completely after water exposure using towel and hair dryer on cool setting',
          'Use earplugs while swimming or showering',
          'Avoid inserting objects into ear canal',
          'Use otologic (earwax removal) drops if prone to impaction',
          'Apply acetic acid drops preventively if frequently exposed to water',
          'Avoid aggressive ear cleaning',
          'Keep hearing aids dry',
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
