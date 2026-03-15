/**
 * Run once to scrape all blog posts and generate src/data/posts.ts
 *   node scripts/scrape-blog.mjs
 */
import https from "https";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Install jsdom if needed
function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchHtml(res.headers.location).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function extractPost(html, slug) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const ogImg = doc.querySelector('meta[property="og:image"]')?.content || "";
  const ogDesc = doc.querySelector('meta[property="og:description"]')?.content ||
                 doc.querySelector('meta[name="description"]')?.content || "";

  const article = doc.querySelector("article") || doc.querySelector("main");
  if (!article) return null;

  // Extract structured content blocks
  const blocks = [];
  const walker = doc.createTreeWalker(article, 0x1); // NodeFilter.SHOW_ELEMENT
  const processed = new Set();

  article.querySelectorAll("h1,h2,h3,h4,p,ul,ol").forEach(el => {
    if (processed.has(el)) return;
    processed.add(el);
    const text = el.textContent?.trim();
    if (!text || text.length < 3) return;

    if (el.tagName === "H1" || el.tagName === "H2") {
      blocks.push({ type: "h2", text });
    } else if (el.tagName === "H3" || el.tagName === "H4") {
      blocks.push({ type: "h3", text });
    } else if (el.tagName === "UL" || el.tagName === "OL") {
      const items = [...el.querySelectorAll("li")].map(li => li.textContent?.trim()).filter(Boolean);
      if (items.length) blocks.push({ type: "ul", items });
    } else if (el.tagName === "P") {
      // Skip if inside a ul/li
      if (!el.closest("li")) blocks.push({ type: "p", text });
    }
  });

  // Title - first h1 or h2
  const titleEl = article.querySelector("h1") || article.querySelector("h2");
  const title = titleEl?.textContent?.trim() || slug.replace(/-/g, " ");

  // Date / read time from article header
  const headerText = article.textContent || "";
  const dateMatch = headerText.match(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+(?:,?\s*\d{4})?/);
  const readMatch = headerText.match(/(\d+)\s*min\s*read/i);

  // Determine category
  const lower = (title + " " + ogDesc).toLowerCase();
  let category = "GENERAL";
  if (/lung|breath|pulmon|asthma|copd|allerg|sinus\s+test|prick\s+test|immunother/i.test(lower)) category = "Pulmonology";
  else if (/throat|voice|laryn|hoarse|vocal|pharyng/i.test(lower)) category = "Throat disorders";
  else if (/nose|nasal|sinus|septum|turbino|rhinolo|endoscop|polyp/i.test(lower)) category = "Nasal disorders";
  else if (/ear|hearing|eustach|tympan|otitis|mastoid|vertigo|cochle|pierci|lobule/i.test(lower)) category = "Ear";
  else if (/skin|peel|glutathione|prp|hair|aesthetic|bald|chemical|face/i.test(lower)) category = "Facial Aesthetics";

  const excerpt = ogDesc || blocks.find(b => b.type === "p")?.text?.substring(0, 160) || "";

  return {
    slug,
    title,
    date: dateMatch?.[0] || "",
    readTime: readMatch ? readMatch[1] + " min read" : "3 min read",
    author: "salisonsalim",
    category,
    coverImage: ogImg,
    excerpt,
    content: blocks.slice(0, 60), // max 60 blocks
  };
}

const SLUGS = [
  "eustachian-tube-symptoms-guide-understanding-and-managing-discomfort",
  "cost-factors-of-chemical-peels-explained",
  "choosing-the-best-pulmonologist-in-kunnamkulam-insights-from-a-top-pulmonology-specialist",
  "blocked-ear-after-a-cold-what-ent-doctors-actually-see",
  "red-ear-syndrome-burning-ear-pain-relentcare",
  "comprehensive-guide-to-ear-lobule-repair-restoring-form-and-function",
  "best-bugadi-ear-piercing-in-thrissur-painless-safe-at-relentcare-ent-centre-kolazhy",
  "effective-sinusitis-treatment-and-when-to-consult-an-ent-doctor-in-thrissur",
  "best-ent-specialists-for-tympanoplasty-in-india-cost-tympanoplasty-ear-surgery",
  "exploring-the-benefits-and-cost-of-fess-bilateral-surgery-in-thrissur",
  "allergy-skin-prick-test-comprehensive-guide-by-relentcare-ent-centreallergies-can-be-a-persistent-c",
  "allergy-asthma-skin-prick-test-thrissur",
  "glutathione-injections-for-skin-whitening-and-anti-aging-a-complete-guide-cost-of-iv-glutathion",
  "should-you-really-try-glutathione-injection-for-skin-whitening-and-is-it-worth-the-try",
  "how-to-relieve-your-child-s-ear-pain-after-fever-immediate-steps-to-prevent-ear-infections-and-what",
  "best-ent-doctors-nearby-thrissur",
  "top-5-pulmonologists-in-thrissur-kerala",
  "glutathione-injection-skinglow",
  "managing-seasonal-allergies-what-treatment-options-does-relentcare-ent-and-pulmonology-centre-offer",
  "ear-lobe-repair",
  "exploring-the-impact-of-eustachian-tube-defects-causes-symptoms-and-treatment-options",
  "best-5-ent-doctors-in-thrissur",
  "is-reversing-baldness-possible-exploring-the-potential-solutions",
  "prp-treatment-for-hair-loss-thrissur",
  "ear-pain-in-kids-causes-common-issues-and-expert-care-at-relentcare-ent-centre-kolazhy-thrissur",
  "exploring-the-benefits-and-uses-of-laryngoscopy-in-voice-change",
  "why-nasal-endoscopy-is-an-essential-diagnostic-tool-and-why-you-should-consider-it",
  "chemical-peel-for-photodamaged-skin",
];

console.log(`Scraping ${SLUGS.length} blog posts...\n`);
const posts = [];

for (const slug of SLUGS) {
  process.stdout.write(`  /post/${slug.substring(0,50)}... `);
  try {
    const html = await fetchHtml(`https://www.relentcarehospitals.com/post/${slug}`);
    const post = extractPost(html, slug);
    if (post) {
      posts.push(post);
      console.log(`✓ (${post.content.length} blocks)`);
    } else {
      console.log("✗ no article found");
    }
  } catch (e) {
    console.log(`✗ ${e.message}`);
    posts.push({ slug, title: slug.replace(/-/g," "), date:"", readTime:"3 min read", author:"salisonsalim", category:"GENERAL", coverImage:"", excerpt:"", content:[] });
  }
}

// Write posts.ts
const outPath = path.resolve(__dirname, "../src/data/posts.ts");
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const ts = `// AUTO-GENERATED by scripts/scrape-blog.mjs — re-run to refresh
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

export const posts: Post[] = ${JSON.stringify(posts, null, 2)} as Post[];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

export const CATEGORIES: Category[] = ['All', 'Pulmonology', 'Throat disorders', 'Nasal disorders', 'GENERAL', 'Facial Aesthetics', 'Ear'];
`;

fs.writeFileSync(outPath, ts, "utf8");
console.log(`\n✓ Written to src/data/posts.ts (${posts.length} posts)`);
console.log("Note: jsdom is required. If not installed, run: npm install jsdom");
