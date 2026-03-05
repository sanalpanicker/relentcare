"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WIXBASE = "https://static.wixstatic.com/media";

const socialLinks = [
  {
    name: "Whatsapp",
    href: "tel:+919746351090",
    img: `${WIXBASE}/11062b_8b3cbae79dcb4a55b4ec2bac32f88d96~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8b3cbae79dcb4a55b4ec2bac32f88d96~mv2.png`,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/relentcare_clinic/",
    img: `${WIXBASE}/8d6893330740455c96d218258a458aa4.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d6893330740455c96d218258a458aa4.png`,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61569166779172",
    img: `${WIXBASE}/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png`,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-salison-salim-panicker-924599142/",
    img: `${WIXBASE}/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/48a2a42b19814efaa824450f23e8a253.png`,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@RelentcareClinic/videos",
    img: `${WIXBASE}/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1b09fe8b7f04378a9fe076748ad4a6a.png`,
  },
];

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Doctors",
    children: [
      { label: "Dr Salison Salim Panicker", href: "/dr-salison-salim-panicker" },
      { label: "Dr Aiswarya Thambi", href: "/dr-aiswarya-thambi" },
      { label: "Dr Vidya Ramdas", href: "/dr-vidya-ramdas" },
    ],
  },
  {
    label: "ENT Services",
    href: "/best-ent-services-thrissur",
    children: [
      { label: "EAR Services", href: "#" },
      { label: "Hearing loss", href: "#" },
      { label: "Tinnitus Treatment", href: "/tinnitus-causes-treatment-thrissur" },
      { label: "Hearing Tests & Hearing Aids", href: "#" },
      { label: "Wax Removal", href: "#" },
      { label: "Vertigo and its treatment", href: "/vertigo-treatment-thrissur" },
      { label: "Chronic otitis media", href: "#" },
      { label: "Rhinology and sinus surgeries", href: "#" },
      { label: "Deviated Nasal Septum", href: "#" },
      { label: "Nasal polyp Treatment", href: "/nasal-polyp-treatment-thrissur-best-ent-centre" },
      { label: "Laryngology services", href: "#" },
      { label: "Adenotonsillectomy In Adult", href: "#" },
    ],
  },
  {
    label: "Pediatric services",
    children: [
      { label: "Hearing loss in children", href: "#" },
      { label: "Adenoids & Tonsils", href: "#" },
      { label: "Foreign body", href: "#" },
    ],
  },
  {
    label: "Pulmonology",
    children: [
      { label: "Migraine – Best centre in Kerala", href: "/migraine-treatment-thrissur-best-in-kerala" },
      { label: "Headache – Cause – Treatment", href: "/headache-cause-treatment" },
      { label: "Asthma", href: "#" },
      { label: "Sleep Apnea / OSA", href: "#" },
      { label: "COPD", href: "#" },
    ],
  },
  {
    label: "Facial Aesthetic and Cosmetic",
    children: [
      { label: "PRP Injections", href: "#" },
      { label: "Botox", href: "#" },
      { label: "Dermal Fillers", href: "#" },
      { label: "Hair Loss Treatment", href: "#" },
    ],
  },
  { label: "Homevisit service", href: "/home-visit-service-thrissur" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[#f5f0e1] border-b border-[#e0d9c8]">
      {/* Top bar */}
      <div className="flex items-center px-6 py-3 gap-4 flex-wrap">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src={`${WIXBASE}/2d3538_ea2c3aa2076248f4be93dc20bbb175a8~mv2.jpg/v1/fill/w_178,h_156,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20240710-WA0006.jpg`}
            alt="Best ENT dr available at relentcare ent centre thrissur kerala"
            width={78}
            height={68}
            className="object-contain"
            unoptimized
          />
        </Link>
        <h1 className="text-base font-semibold tracking-wide text-[#2d2d2d] flex-1 text-center px-4 hidden sm:block">
          RelentCare ENT,CHEST and Facial Aesthetic Centre, Thrissur, Kerala
        </h1>

        {/* Social Icons */}
        <ul className="flex items-center gap-2 list-none ml-auto">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target={s.href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={s.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.name} width={39} height={39} className="rounded" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden ml-2 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-5 h-0.5 bg-[#2d2d2d] mb-1" />
          <span className="block w-5 h-0.5 bg-[#2d2d2d] mb-1" />
          <span className="block w-5 h-0.5 bg-[#2d2d2d]" />
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-[#f5f0e1] border-t border-[#e0d9c8] sticky top-0 z-50 ${
          mobileOpen ? "block" : "hidden sm:block"
        }`}
        aria-label="Site navigation"
      >
        <ul className="flex flex-col sm:flex-row items-start sm:items-center overflow-x-auto list-none px-2">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="nav-item relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="block px-4 py-3.5 text-sm font-medium text-[#2d2d2d] whitespace-nowrap hover:text-[#6b7c5e] transition-colors"
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-xs">▾</span>}
                </Link>
              ) : (
                <button
                  className="block px-4 py-3.5 text-sm font-medium text-[#2d2d2d] whitespace-nowrap hover:text-[#6b7c5e] transition-colors bg-transparent border-0 cursor-pointer font-[inherit]"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label} <span className="text-xs">▾</span>
                </button>
              )}

              {/* Dropdown */}
              {item.children && (
                <div
                  className={`nav-dropdown absolute top-full left-0 bg-white min-w-[220px] shadow-lg border-t-2 border-[#6b7c5e] z-[2000] ${
                    openDropdown === item.label ? "block" : "hidden"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[#333] border-b border-[#f0ede5] hover:bg-[#f5f0e1] hover:text-[#6b7c5e] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
