// Run `node scripts/scrape-blog.mjs` to populate full content.
// This file contains metadata; content arrays will be filled by the scraper.

export type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type Category = 'All' | 'Pulmonology' | 'Throat disorders' | 'Nasal disorders' | 'GENERAL' | 'Facial Aesthetics' | 'Ear';

export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  category: Category;
  coverImage: string;
  excerpt: string;
  content: ContentBlock[];
}

// Local images mapped by category
const IMG: Record<Category, string> = {
  'All':              '/images/service-ent.jpg',
  'Ear':              '/images/service-ent.jpg',
  'Throat disorders': '/images/service-ent.jpg',
  'Nasal disorders':  '/images/service-ent.jpg',
  'GENERAL':          '/images/service-ent.jpg',
  'Pulmonology':      '/images/service-pulmonology.jpg',
  'Facial Aesthetics':'/images/service-aesthetics.jpg',
};

export const posts: Post[] = [
  { slug: 'eustachian-tube-symptoms-guide-understanding-and-managing-discomfort', title: 'Eustachian Tube Symptoms Guide: Understanding and Managing Discomfort', date: 'Mar 8, 2025', readTime: '4 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'The Eustachian tube plays a crucial role in maintaining ear health by regulating pressure and draining fluid from the middle ear.', content: [] },
  { slug: 'cost-factors-of-chemical-peels-explained', title: 'Cost Factors of Chemical Peels Explained', date: 'Mar 6, 2025', readTime: '4 min read', author: 'salisonsalim', category: 'Facial Aesthetics', coverImage: IMG['Facial Aesthetics'], excerpt: 'Chemical peels have become a popular choice for individuals seeking to improve their skin\'s appearance and texture.', content: [] },
  { slug: 'choosing-the-best-pulmonologist-in-kunnamkulam-insights-from-a-top-pulmonology-specialist', title: 'Choosing the Best Pulmonologist in Kunnamkulam: Insights from a Top Pulmonology Specialist', date: 'Feb 9, 2025', readTime: '4 min read', author: 'salisonsalim', category: 'Pulmonology', coverImage: IMG['Pulmonology'], excerpt: 'Selecting the right pulmonologist is a critical decision for anyone facing respiratory health challenges.', content: [] },
  { slug: 'blocked-ear-after-a-cold-what-ent-doctors-actually-see', title: 'Blocked Ear After a Cold: What ENT Doctors Actually See', date: 'Feb 5, 2025', readTime: '3 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Blocked ears following a cold are not just a sensation — in many cases, there is real fluid inside the middle ear.', content: [] },
  { slug: 'red-ear-syndrome-burning-ear-pain-relentcare', title: 'Red Ear Syndrome (RES): Why your ear turns red, burns and yet tests are normal', date: 'Feb 4, 2025', readTime: '2 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Have you ever had one ear suddenly turn red, feel hot and burn — yet the ENT exam and scans are normal?', content: [] },
  { slug: 'comprehensive-guide-to-ear-lobule-repair-restoring-form-and-function', title: 'Comprehensive Guide to Ear Lobule Repair: Restoring Form and Function', date: 'Feb 2, 2025', readTime: '3 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Ear lobule repair is a specialised procedure that addresses damage or deformities of the earlobe.', content: [] },
  { slug: 'best-bugadi-ear-piercing-in-thrissur-painless-safe-at-relentcare-ent-centre-kolazhy', title: 'Best Bugadi Ear Piercing in Thrissur – Painless & Safe at RelentCare ENT Centre Kolazhy', date: 'Oct 5, 2024', readTime: '1 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Looking for safe and painless bugadi ear piercing in Thrissur? RelentCare ENT Centre offers medically supervised ear piercing.', content: [] },
  { slug: 'effective-sinusitis-treatment-and-when-to-consult-an-ent-doctor-in-thrissur', title: 'Effective Sinusitis Treatment and When to Consult an ENT Doctor in Thrissur', date: 'Sep 20, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Nasal disorders', coverImage: IMG['Nasal disorders'], excerpt: 'Sinusitis is one of the most common reasons patients visit an ENT clinic in Thrissur.', content: [] },
  { slug: 'best-ent-specialists-for-tympanoplasty-in-india-cost-tympanoplasty-ear-surgery', title: 'Best ENT Specialists for Tympanoplasty in India – Cost & Ear Surgery Guide', date: 'Sep 10, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Tympanoplasty is a surgical procedure to repair a perforated eardrum and restore hearing.', content: [] },
  { slug: 'exploring-the-benefits-and-cost-of-fess-bilateral-surgery-in-thrissur', title: 'Exploring the Benefits and Cost of FESS Bilateral Surgery in Thrissur', date: 'Aug 25, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Nasal disorders', coverImage: IMG['Nasal disorders'], excerpt: 'Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive procedure to treat chronic sinusitis and nasal polyps.', content: [] },
  { slug: 'allergy-skin-prick-test-comprehensive-guide-by-relentcare-ent-centreallergies-can-be-a-persistent-c', title: 'Allergy Skin Prick Test: A Comprehensive Guide by RelentCare ENT Centre', date: 'Aug 10, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Pulmonology', coverImage: IMG['Pulmonology'], excerpt: 'Allergies can be a persistent challenge, affecting millions worldwide. The skin prick test is the gold standard for allergy diagnosis.', content: [] },
  { slug: 'allergy-asthma-skin-prick-test-thrissur', title: 'Allergy & Asthma Skin Prick Test in Thrissur', date: 'Jul 28, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'Pulmonology', coverImage: IMG['Pulmonology'], excerpt: 'Get accurate allergy and asthma diagnosis with skin prick testing at RelentCare ENT & Pulmonology Centre in Thrissur.', content: [] },
  { slug: 'glutathione-injections-for-skin-whitening-and-anti-aging-a-complete-guide-cost-of-iv-glutathion', title: 'Glutathione Injections for Skin Whitening and Anti-Aging: A Complete Guide', date: 'Jul 15, 2024', readTime: '5 min read', author: 'salisonsalim', category: 'Facial Aesthetics', coverImage: IMG['Facial Aesthetics'], excerpt: 'Glutathione IV therapy is gaining popularity for skin brightening, anti-aging and overall wellness benefits.', content: [] },
  { slug: 'should-you-really-try-glutathione-injection-for-skin-whitening-and-is-it-worth-the-try', title: 'Should You Really Try Glutathione Injection for Skin Whitening?', date: 'Jul 5, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Facial Aesthetics', coverImage: IMG['Facial Aesthetics'], excerpt: 'Glutathione injections are widely sought for skin whitening. But are they safe and worth it?', content: [] },
  { slug: 'how-to-relieve-your-child-s-ear-pain-after-fever-immediate-steps-to-prevent-ear-infections-and-what', title: "How to Relieve Your Child's Ear Pain After Fever", date: 'Jun 20, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: "Children frequently develop ear pain after a fever. Here's what to do immediately and when to see an ENT doctor.", content: [] },
  { slug: 'best-ent-doctors-nearby-thrissur', title: 'Best ENT Doctors Nearby Thrissur', date: 'Jun 10, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'GENERAL', coverImage: IMG['GENERAL'], excerpt: 'Looking for the best ENT doctor near Thrissur? RelentCare ENT Centre offers expert ear, nose and throat care.', content: [] },
  { slug: 'top-5-pulmonologists-in-thrissur-kerala', title: 'Top 5 Pulmonologists in Thrissur, Kerala', date: 'May 25, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'Pulmonology', coverImage: IMG['Pulmonology'], excerpt: 'Find the top pulmonologists in Thrissur, Kerala for expert respiratory care and lung disease management.', content: [] },
  { slug: 'glutathione-injection-skinglow', title: 'Glutathione Injection for Skin Glow: Everything You Need to Know', date: 'May 10, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'Facial Aesthetics', coverImage: IMG['Facial Aesthetics'], excerpt: 'Glutathione is the body\'s master antioxidant and is widely used in IV therapy for skin glow and brightening.', content: [] },
  { slug: 'managing-seasonal-allergies-what-treatment-options-does-relentcare-ent-and-pulmonology-centre-offer', title: 'Managing Seasonal Allergies: Treatment Options at RelentCare ENT & Pulmonology Centre', date: 'Apr 20, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Pulmonology', coverImage: IMG['Pulmonology'], excerpt: 'Seasonal allergies affect millions. Learn about the comprehensive allergy treatment options available at RelentCare.', content: [] },
  { slug: 'ear-lobe-repair', title: 'Ear Lobe Repair: Procedure, Recovery & Results', date: 'Apr 5, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Torn or split earlobes can be repaired surgically with excellent results. Learn about the ear lobe repair procedure.', content: [] },
  { slug: 'exploring-the-impact-of-eustachian-tube-defects-causes-symptoms-and-treatment-options', title: 'Exploring the Impact of Eustachian Tube Defects: Causes, Symptoms and Treatment', date: 'Mar 18, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Eustachian tube dysfunction can cause ear pressure, pain and hearing difficulties. Learn about causes and treatment options.', content: [] },
  { slug: 'best-5-ent-doctors-in-thrissur', title: 'Best 5 ENT Doctors in Thrissur', date: 'Mar 5, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'GENERAL', coverImage: IMG['GENERAL'], excerpt: 'Thrissur has some excellent ENT specialists. Here is our guide to the best 5 ENT doctors in Thrissur for ear, nose and throat care.', content: [] },
  { slug: 'is-reversing-baldness-possible-exploring-the-potential-solutions', title: 'Is Reversing Baldness Possible? Exploring the Potential Solutions', date: 'Feb 15, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Facial Aesthetics', coverImage: IMG['Facial Aesthetics'], excerpt: 'Hair loss affects millions. Explore the latest treatments and whether reversing baldness is truly possible.', content: [] },
  { slug: 'prp-treatment-for-hair-loss-thrissur', title: 'PRP Treatment for Hair Loss in Thrissur', date: 'Feb 1, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'Facial Aesthetics', coverImage: IMG['Facial Aesthetics'], excerpt: 'PRP therapy for hair loss uses your own platelet-rich plasma to stimulate hair growth naturally.', content: [] },
  { slug: 'ear-pain-in-kids-causes-common-issues-and-expert-care-at-relentcare-ent-centre-kolazhy-thrissur', title: 'Ear Pain in Kids: Causes, Common Issues & Expert Care at RelentCare ENT Centre', date: 'Jan 20, 2024', readTime: '4 min read', author: 'salisonsalim', category: 'Ear', coverImage: IMG['Ear'], excerpt: 'Ear pain in children is one of the most common reasons parents visit an ENT clinic. Learn about causes and treatment.', content: [] },
  { slug: 'exploring-the-benefits-and-uses-of-laryngoscopy-in-voice-change', title: 'Exploring the Benefits and Uses of Laryngoscopy in Voice Change', date: 'Jan 5, 2024', readTime: '3 min read', author: 'salisonsalim', category: 'Throat disorders', coverImage: IMG['Throat disorders'], excerpt: 'Laryngoscopy is a key diagnostic tool for evaluating voice changes, hoarseness and throat conditions.', content: [] },
  { slug: 'why-nasal-endoscopy-is-an-essential-diagnostic-tool-and-why-you-should-consider-it', title: 'Why Nasal Endoscopy is an Essential Diagnostic Tool', date: 'Dec 15, 2023', readTime: '3 min read', author: 'salisonsalim', category: 'Nasal disorders', coverImage: IMG['Nasal disorders'], excerpt: 'Nasal endoscopy provides a direct view of the nasal passages and sinuses, essential for accurate ENT diagnosis.', content: [] },
  { slug: 'chemical-peel-for-photodamaged-skin', title: 'Chemical Peel for Photodamaged Skin: What to Expect', date: 'Dec 1, 2023', readTime: '3 min read', author: 'salisonsalim', category: 'Facial Aesthetics', coverImage: IMG['Facial Aesthetics'], excerpt: 'Chemical peels are an effective treatment for sun-damaged skin, reducing pigmentation and improving texture.', content: [] },
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

export const CATEGORIES: Category[] = ['All', 'Pulmonology', 'Throat disorders', 'Nasal disorders', 'GENERAL', 'Facial Aesthetics', 'Ear'];
