"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const socialLinks = [
  { name: "Whatsapp",  href: "tel:+919746351090",                                                img: "/images/social-whatsapp.png"  },
  { name: "Instagram", href: "https://www.instagram.com/relentcare_clinic/",                     img: "/images/social-instagram.png" },
  { name: "Facebook",  href: "https://www.facebook.com/profile.php?id=61569166779172",           img: "/images/social-facebook.png"  },
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/dr-salison-salim-panicker-924599142/", img: "/images/social-linkedin.png"  },
  { name: "YouTube",   href: "https://www.youtube.com/@RelentcareClinic/videos",                 img: "/images/social-youtube.png"   },
];

interface NavChild {
  label: string;
  href: string;
}

interface NavGroup {
  groupLabel: string;
  groupHref?: string;
  items: NavChild[];
}

interface NavItem {
  label: string;
  href?: string;
  // flat list (Doctors, Pediatric, Pulmonology, Facial)
  children?: NavChild[];
  // grouped mega menu (ENT Services)
  groups?: NavGroup[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },

  {
    label: "Doctors",
    children: [
      { label: "Dr Salison Salim Panicker", href: "/dr-salison-salim-best-ent-doctor-thrissur" },
      { label: "Dr Aiswarya Thambi",        href: "/dr-aiswarya-thambi-best-pulmonologist-thrissur" },
      { label: "Dr Vidya Ramdas",           href: "/dr-vidya-ramdas-ent-surgeon-thrissur-top" },
    ],
  },

  {
    label: "ENT Services",
    href: "/best-ent-services-thrissur",
    groups: [
      {
        groupLabel: "EAR Services",
        groupHref: "/ear-surgeries-best-ent-doctors-thrissur",
        items: [
          { label: "Hearing Loss",                         href: "/hearing-loss-treatment" },
          { label: "Hearing Tests & Hearing Aids Thrissur",href: "/hearing-tests-hearing-aids-thrissur" },
          { label: "Tinnitus Treatment",                   href: "/tinnitus-causes-treatment-thrissur" },
          { label: "Wax Removal",                          href: "/wax-removal-thrissur-ent-surgeon" },
          { label: "Chronic Otitis Media || Facial Nerve", href: "/chronic-otitis-media-facial-nerve-palsy-thrissur" },
          { label: "Otitis Externa or Swimmer's Ear",      href: "/otitis-externa-or-swimmers-ear" },
          { label: "Mastoiditis",                          href: "/mastoiditis-thrissur-relentcare-ent-centre" },
          { label: "Vertigo and its Treatment",            href: "/vertigo-treatment-thrissur" },
          { label: "Meniere's Disease",                    href: "/menieres-disease" },
          { label: "Acoustic Neuroma Diagnosis and Treatment", href: "/acoustic-neuroma-diagnosis-and-treatment" },
          { label: "Tympanoplasty",                        href: "/tympanoplasty-eardrum-surgery-endoscopic" },
          { label: "Preauricular Sinus Surgery",           href: "/preauricular-sinus-surgery" },
          { label: "Pseudocyst Pinna",                     href: "/pseudocyst-pinna-thrissur-best-treatment" },
        ],
      },
      {
        groupLabel: "Rhinology and Sinus Surgeries",
        groupHref: "/rhinology-sinus-surgeries",
        items: [
          { label: "Functional Endoscopic Sinus Surgery",  href: "/functional-endoscopic-sinus-surgery-thrissur-ent-surgeon" },
          { label: "Deviated Nasal Septum",                href: "/deviated-nasal-septum-surgery-best-doctor-thrissur" },
          { label: "Endoscopic Turbinoplasty Surgery",     href: "/endoscopic-turbinoplasty-surgery-thrissur-kerala" },
          { label: "Nasal Polyp Treatment",                href: "/nasal-polyp-treatment-thrissur-best-ent-centre" },
          { label: "Antrochoanal Polyp",                   href: "/antrochoanal-polyp-kerala-thrissur-nose" },
          { label: "Septoplasty",                          href: "/septoplasty-thrissur" },
          { label: "Sluder's Neuralgia",                   href: "/sluders-neuralgia" },
          { label: "Foreign Body || Nose and Airway",      href: "/foreign-body-nose-and-airway-thrissur-kerala" },
        ],
      },
      {
        groupLabel: "Oral and Laryngology",
        groupHref: "/laryngology-services",
        items: [
          { label: "Laryngology Services",                 href: "/laryngology-services" },
          { label: "Leukoplakia Causes and Treatment",     href: "/leukoplakia-causes-treatment-ent-doctor" },
          { label: "Muscle Tension Dysphonia",             href: "/muscle-tension-dysphonia" },
          { label: "Hoarseness",                           href: "/hoarsness" },
          { label: "Vocal Nodules",                        href: "/vocal-nodules-laryngologist-thrissur" },
          { label: "Vocal Sulcus",                         href: "/vocal-sulcus-thrissur-ent-doctor" },
          { label: "Chronic Laryngitis",                   href: "/chronic-laryngitis" },
          { label: "Laryngo Pharyngeal Reflux Disease | LPRD", href: "/laryngo-pharyngeal-reflux-disease-lprd" },
          { label: "Foreign Body Throat and Oesophagus",   href: "/foreign-body-throat-and-oesophagus" },
          { label: "Globus Sensation Throat",              href: "/globus-sensation-throat" },
          { label: "Adenotonsillectomy In Adult",          href: "/adenotonsillectomy-in-adult" },
          { label: "Headache",                             href: "/headache-cause-treatment" },
          { label: "Migraine || Best Centre in Kerala",    href: "/migraine-treatment-thrissur-best-in-kerala" },
          { label: "Headache || Cause || Treatment",       href: "/headache-cause-treatment" },
        ],
      },
    ],
  },

  {
    label: "Pediatric Services",
    children: [
      { label: "Adenotonsillectomy",                   href: "/adenotonsillectomy" },
      { label: "Hearing Loss in Children || Treatment",href: "/hearing-loss-in-children-treatment-thrissur-pediatric-ent" },
      { label: "Nose Bleed in Children",               href: "/nose-bleed-children-thrissur-ent" },
      { label: "Pediatric Nasal Obstruction",          href: "/pediatric-nasal-obstruction" },
      { label: "Pediatric Sleep Apnoea",               href: "/pediatric-sleep-apnoea" },
      { label: "OSA Surgery",                          href: "/osa-surgery" },
      { label: "Chronic Ear Infection",                href: "/chronic-ear-infection" },
      { label: "Tonsillitis in Children",              href: "/tonsillitis" },
      { label: "Mumps Symptoms and Treatment",         href: "/mumps-symptoms-and-treatment-thrissur-kerala-india" },
    ],
  },

  {
    label: "Pulmonology",
    children: [
      { label: "Insomnia",                       href: "/insomnia-sleep-disorder-thrissur" },
      { label: "Sleepiness",                     href: "/sleepiness" },
      { label: "Sleep Apnoea",                   href: "/sleep-apnoea-snoring-best-doctor-india-thrissur" },
      { label: "Restless Leg Syndrome",          href: "/restless-leg-syndrome" },
      { label: "Skin Prick Test || Allergy Test",href: "/allergy-test-skin-prick-test" },
      { label: "Allergic Asthma",                href: "/asthma-and-allergy" },
      { label: "Allergy and Immunotherapy",      href: "/allergy-and-immunotherapy" },
      { label: "Chronic Cough",                  href: "/chronic-cough" },
      { label: "Respiratory Diseases",           href: "/respiratory-disease" },
      { label: "Snoring with OSA",               href: "/snoring-with-osa-and-its-treatement" },
      { label: "COPD",                           href: "/chronic-obstructive-sleep-apnoea" },
      { label: "Bronchoscopy",                   href: "/bronchoscopy" },
      { label: "Allergy Test and Immunotherapy", href: "/allergy-clinic" },
      { label: "Migraine Treatment",             href: "/migraine-treatment-thrissur-best-in-kerala" },
      { label: "Headache – Cause & Treatment",   href: "/headache-cause-treatment" },
    ],
  },

  {
    label: "Facial Aesthetic and Cosmetic",
    children: [
      { label: "Facial Aesthetic Services",      href: "/best-facial-aesthetic-services" },
      { label: "Acne Treatment",                 href: "/acne-treatment-thrissur-kerala" },
      { label: "Laser Scar Removal",             href: "/best-laser-treatment-thrissur" },
      { label: "Acne Scar - PRP and Subcision",  href: "/deep-acne-scar-subcision-thrissur" },
      { label: "Glutathione IV",                 href: "/best-glutathione-iv-thrissur" },
      { label: "PRP Hair Therapy",               href: "/best-prp-therapy-thrissur" },
      { label: "Lipoma Excision",                href: "/lipoma" },
      { label: "Nose Piercing || Thrissur Doctor",href: "/nose-pierceing-thrissur-doctor" },
      { label: "Ear Piercing Services",          href: "/ear-piercing-services" },
      { label: "Ear Lobule Repair",              href: "/ear-lobule-repair-best-thrissur-doctor" },
      { label: "Wart Removal || Thrissur",       href: "/wart-removal-thrissur" },
    ],
  },

  { label: "Homevisit Service", href: "/home-visit-service-thrissur" },
  { label: "Blog",              href: "/blog" },
];

// ─── Split a flat children array into N columns ───────────────────────────────
function chunkIntoColumns<T>(arr: T[], cols: number): T[][] {
  const perCol = Math.ceil(arr.length / cols);
  const result: T[][] = [];
  for (let i = 0; i < cols; i++) {
    result.push(arr.slice(i * perCol, (i + 1) * perCol));
  }
  return result;
}

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isActive = (item: NavItem) => {
    if (item.href && (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)))) return true;
    if (item.children) return item.children.some((c) => pathname === c.href);
    if (item.groups) return item.groups.some((g) => g.items.some((c) => pathname === c.href));
    return false;
  };

  const hasDropdown = (item: NavItem) => !!(item.children || item.groups);

  return (
    <header className="bg-[#f5f0e1] border-b border-[#e0d9c8]">
      {/* ── Top bar ── */}
      <div className="flex items-center px-6 py-3 gap-4 flex-wrap">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="RelentCare ENT Clinic Thrissur Kerala"
            width={78}
            height={68}
            className="object-contain"
          />
        </Link>
        <p className="text-base font-semibold tracking-wide text-[#2d2d2d] flex-1 text-center px-4 hidden sm:block">
          RelentCare ENT, CHEST and Facial Aesthetic Centre, Thrissur, Kerala
        </p>
        <ul className="flex items-center gap-2 list-none ml-auto">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a href={s.href} target={s.href.startsWith("tel") ? undefined : "_blank"} rel="noopener noreferrer" title={s.name}>
                <Image src={s.img} alt={s.name} width={39} height={39} className="rounded" />
              </a>
            </li>
          ))}
        </ul>
        <button className="sm:hidden ml-2 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          <span className="block w-5 h-0.5 bg-[#2d2d2d] mb-1" />
          <span className="block w-5 h-0.5 bg-[#2d2d2d] mb-1" />
          <span className="block w-5 h-0.5 bg-[#2d2d2d]" />
        </button>
      </div>

      {/* ── Desktop Navigation ── */}
      <nav
        className="bg-[#f5f0e1] border-t border-[#e0d9c8] sticky top-0 z-50 hidden sm:block relative"
        aria-label="Site navigation"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <ul className="flex items-center list-none px-2">
          {navItems.map((item) => {
            const active = isActive(item);
            const hasDrop = hasDropdown(item);

            return (
              <li
                key={item.label}
                onMouseEnter={() => hasDrop ? setOpenDropdown(item.label) : setOpenDropdown(null)}
              >
                {/* Plain link (no dropdown) */}
                {!hasDrop && item.href && (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                      active ? "text-[#2d2d2d] border-[#2d2d2d]" : "text-[#2d2d2d] border-transparent hover:border-[#2d2d2d]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown trigger */}
                {hasDrop && (
                  <div
                    className={`flex items-center gap-0.5 px-4 py-3.5 cursor-pointer border-b-2 whitespace-nowrap ${
                      active || openDropdown === item.label ? "border-[#2d2d2d]" : "border-transparent hover:border-[#2d2d2d]"
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-medium text-[#2d2d2d]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-[#2d2d2d]">{item.label}</span>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* ── Mega Menu Dropdowns ── */}
        {navItems.map((item) => {
          if (!hasDropdown(item) || openDropdown !== item.label) return null;

          return (
            <div
              key={item.label}
              className="absolute left-0 right-0 top-full bg-[#f5f0e1] z-[2000] border-t border-[#e0d9c8]"
              onMouseEnter={() => setOpenDropdown(item.label)}
            >
              {/* ── Grouped mega menu (ENT Services) ── */}
              {item.groups && (
                <div className="grid grid-cols-3">
                  {item.groups.map((group, gi) => (
                    <div
                      key={group.groupLabel}
                      className={`py-3 ${gi < item.groups!.length - 1 ? "border-r border-[#ddd8ca]" : ""}`}
                    >
                      {/* Group header */}
                      {group.groupHref ? (
                        <Link
                          href={group.groupHref}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-6 py-2.5 text-sm font-semibold text-[#2d2d2d] border-b border-[#ccc7b8] mb-1 hover:text-[#6b7c5e]"
                        >
                          {group.groupLabel}
                        </Link>
                      ) : (
                        <div className="px-6 py-2.5 text-sm font-semibold text-[#2d2d2d] border-b border-[#ccc7b8] mb-1">
                          {group.groupLabel}
                        </div>
                      )}
                      {/* Group items */}
                      {group.items.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-6 py-2 text-sm transition-colors ${
                            pathname === child.href
                              ? "text-[#6b7c5e] font-medium"
                              : "text-[#2d2d2d] hover:text-[#6b7c5e]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* ── Flat children → 3-column grid ── */}
              {item.children && (
                <div className="grid grid-cols-3 py-3">
                  {chunkIntoColumns(item.children, 3).map((col, ci) => (
                    <div
                      key={ci}
                      className={ci < 2 ? "border-r border-[#ddd8ca]" : ""}
                    >
                      {col.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-6 py-2.5 text-sm transition-colors ${
                            pathname === child.href
                              ? "text-[#6b7c5e] font-medium"
                              : "text-[#2d2d2d] hover:text-[#6b7c5e]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Mobile Navigation ── */}
      {mobileOpen && (
        <nav className="sm:hidden bg-[#f5f0e1] border-t border-[#e0d9c8]" aria-label="Mobile navigation">
          <ul className="list-none">
            {navItems.map((item) => {
              const hasDrop = hasDropdown(item);
              // Flatten groups into a single list for mobile
              const allChildren: NavChild[] = item.children
                ? item.children
                : item.groups
                ? item.groups.flatMap((g) => [{ label: g.groupLabel, href: g.groupHref ?? "#" }, ...g.items])
                : [];

              return (
                <li key={item.label} className="border-b border-[#e0d9c8]">
                  {!hasDrop && item.href && (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-5 py-3 text-sm font-medium text-[#2d2d2d]"
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasDrop && (
                    <>
                      <div className="flex items-center justify-between">
                        {item.href ? (
                          <Link href={item.href} onClick={() => setMobileOpen(false)} className="flex-1 px-5 py-3 text-sm font-medium text-[#2d2d2d]">
                            {item.label}
                          </Link>
                        ) : (
                          <span className="flex-1 px-5 py-3 text-sm font-medium text-[#2d2d2d]">{item.label}</span>
                        )}
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="px-4 py-3 text-[#6b7c5e]"
                          aria-label={`Toggle ${item.label}`}
                        >
                          <span className={`inline-block transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}>▾</span>
                        </button>
                      </div>

                      {mobileExpanded === item.label && (
                        <ul className="bg-white list-none">
                          {allChildren.map((child) => (
                            <li key={child.href + child.label}>
                              <Link
                                href={child.href}
                                onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                                className="block px-8 py-2.5 text-sm text-[#555] border-b border-[#f0ede5] hover:bg-[#f5f0e1] hover:text-[#6b7c5e]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
