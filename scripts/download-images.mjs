/**
 * Run once to download all site images into public/images/
 *   node scripts/download-images.mjs
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEST = path.resolve(__dirname, "../public/images");
fs.mkdirSync(DEST, { recursive: true });

const WIXBASE = "https://static.wixstatic.com/media";

const images = [
  {
    name: "logo.jpg",
    url: `${WIXBASE}/2d3538_ea2c3aa2076248f4be93dc20bbb175a8~mv2.jpg/v1/fill/w_178,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20240710-WA0006.jpg`,
  },
  {
    name: "social-whatsapp.png",
    url: `${WIXBASE}/11062b_8b3cbae79dcb4a55b4ec2bac32f88d96~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8b3cbae79dcb4a55b4ec2bac32f88d96~mv2.png`,
  },
  {
    name: "social-instagram.png",
    url: `${WIXBASE}/8d6893330740455c96d218258a458aa4.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d6893330740455c96d218258a458aa4.png`,
  },
  {
    name: "social-facebook.png",
    url: `${WIXBASE}/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png`,
  },
  {
    name: "social-linkedin.png",
    url: `${WIXBASE}/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/48a2a42b19814efaa824450f23e8a253.png`,
  },
  {
    name: "social-youtube.png",
    url: `${WIXBASE}/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1b09fe8b7f04378a9fe076748ad4a6a.png`,
  },
  {
    name: "hero-bg.jpg",
    url: `${WIXBASE}/11062b_f1b344e2affc49809d02261fe478f934f000.jpg/v1/fill/w_1440,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f1b344e2affc49809d02261fe478f934f000.jpg`,
  },
  {
    name: "service-pulmonology.jpg",
    url: `${WIXBASE}/2d3538_009b7add4e2941749ea4a5ebceaf55ac~mv2.png/v1/fill/w_680,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d3538_009b7add4e2941749ea4a5ebceaf55ac~mv2.png`,
  },
  {
    name: "service-ent.jpg",
    url: `${WIXBASE}/2d3538_9871d82f81cf4e119ffa278f4ae32b12~mv2.png/v1/fill/w_680,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d3538_9871d82f81cf4e119ffa278f4ae32b12~mv2.png`,
  },
  {
    name: "service-aesthetics.jpg",
    url: `${WIXBASE}/2d3538_d661dc7981be45f398527175d5bc5341~mv2.png/v1/fill/w_680,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d3538_d661dc7981be45f398527175d5bc5341~mv2.png`,
  },
  {
    name: "contact-bg.jpg",
    url: `${WIXBASE}/bbc559_408f2473a6e9478c938a4167cb1f200a~mv2.jpg/v1/fill/w_1440,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbc559_408f2473a6e9478c938a4167cb1f200a~mv2.jpg`,
  },
  // Doctor photos
  {
    name: "dr-salison.jpg",
    url: `${WIXBASE}/bbc559_7a0c86c01b10477a8b769c85614bc08a~mv2.jpg/v1/fill/w_600,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbc559_7a0c86c01b10477a8b769c85614bc08a~mv2.jpg`,
  },
  {
    name: "dr-aiswarya.jpg",
    url: `${WIXBASE}/bbc559_2991e2a06339419899e360cf4ee11710~mv2.jpg/v1/fill/w_600,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbc559_2991e2a06339419899e360cf4ee11710~mv2.jpg`,
  },
  {
    name: "dr-vidya.jpg",
    url: `${WIXBASE}/bbc559_f0a17a20aceb4c4bb5e629c7711d2ab9~mv2.jpg/v1/fill/w_600,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbc559_f0a17a20aceb4c4bb5e629c7711d2ab9~mv2.jpg`,
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          const size = fs.statSync(dest).size;
          resolve(size);
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

console.log(`Downloading ${images.length} images to public/images/ ...\n`);

for (const img of images) {
  const dest = path.join(DEST, img.name);
  try {
    process.stdout.write(`  ${img.name} ... `);
    const bytes = await download(img.url, dest);
    console.log(`✓  (${(bytes / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.log(`✗  FAILED: ${err.message}`);
  }
}

console.log("\nDone! All images saved to public/images/");
