import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Acoustic Neuroma Diagnosis & Treatment Thrissur | RelentCare ENT',
  description: 'Expert diagnosis and treatment of acoustic neuromas. MRI imaging, radiosurgery, and surgical removal options available.',
  keywords: ['acoustic neuroma', 'vestibular schwannoma', 'benign tumor', 'hearing loss', 'MRI diagnosis'],
  alternates: {
    canonical: 'https://www.relentcarehospitals.com/acoustic-neuroma-diagnosis-and-treatment',
  },
  openGraph: {
    title: 'Acoustic Neuroma Diagnosis & Treatment Thrissur | RelentCare ENT',
    description: 'Expert diagnosis and treatment of acoustic neuromas and vestibular schwannomas.',
    url: 'https://www.relentcarehospitals.com/acoustic-neuroma-diagnosis-and-treatment',
    images: [{ url: '/images/service-ent.jpg' }],
  },
};

export default function AcousticNeuroomaDiagnosis() {
  const contentData = {
    title: 'Acoustic Neuroma Diagnosis & Treatment',
    subtitle: 'Expert management of vestibular schwannoma',
    heroTag: 'ENT Services',
    breadcrumbs: [{ label: 'ENT Services', href: '/best-ent-services-thrissur' }],
    sections: [
      {
        heading: 'What is Acoustic Neuroma?',
        body: 'Acoustic neuroma (also called vestibular schwannoma) is a benign tumor arising from the vestibular nerve in the internal auditory canal. It grows slowly in most cases but can cause progressive neurological symptoms. Associated with neurofibromatosis type 2 in some cases.',
      },
      {
        heading: 'Common Symptoms',
        body: [
          'One-sided hearing loss: Gradual, progressive loss of hearing, especially at high frequencies.',
          'Unilateral tinnitus: Ringing in the affected ear.',
          'Imbalance and dizziness: Due to vestibular nerve compression.',
          'Facial numbness: Trigeminal nerve irritation.',
          'Facial weakness: In advanced cases with facial nerve compression.',
          'Headache: From increased intracranial pressure if large.',
        ],
        list: true,
      },
      {
        heading: 'Diagnosis',
        body: [
          'Clinical Presentation: Asymmetric hearing loss and unilateral tinnitus raise suspicion.',
          'Audiometry: Shows sensorineural hearing loss on affected side.',
          'MRI with Gadolinium: Gold standard for diagnosis. Shows enhanced tumor in internal auditory canal and cerebellopontine angle.',
          'Caloric Testing: May show vestibular asymmetry.',
          'Speech Discrimination: Often disproportionately reduced compared to pure tone loss.',
        ],
        list: true,
      },
      {
        heading: 'Treatment Options',
        body: [
          'Observation (Wait and Watch): Many tumors grow slowly. Serial MRI monitoring (annually or bi-annually) appropriate for small, asymptomatic tumors.',
          'Radiosurgery (Gamma Knife/Cyber Knife): Non-invasive radiation therapy directing focused radiation to tumor. Halts growth in 90-95% of cases. Preserves remaining hearing.',
          'Surgical Removal: Translabyrinthine, retrosigmoid, or middle fossa approach depending on tumor size and location. Provides definitive treatment but carries risks of facial nerve injury and hearing loss.',
        ],
      },
      {
        heading: 'Hearing Preservation',
        body: 'Hearing preservation may be possible with early detection and microsurgical techniques. Radiosurgery is excellent for small tumors where hearing preservation is goal. Larger tumors usually cause permanent hearing loss regardless of treatment.',
      },
      {
        heading: 'Our Comprehensive Approach',
        body: 'At RelentCare ENT, we provide expert diagnosis with advanced imaging, multidisciplinary consultation for treatment planning, coordination with neurosurgery for complex cases, and long-term follow-up care.',
      },
    ],
  };

  return (
    <PageLayout>
      <ContentPage {...contentData} />
    </PageLayout>
  );
}
