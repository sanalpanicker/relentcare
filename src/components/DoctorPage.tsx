import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface EducationEntry {
  years: string;
  institution: string;
  description: string;
}

export interface ExpertiseGroup {
  heading: string;
  items: string[];
}

export interface DoctorPageProps {
  name: string;
  qualifications?: string;
  role: string;
  photo: string;
  photoAlt: string;
  intro: string[];                  // paragraphs above education
  tagline?: string;                 // italic subheading e.g. "professional career and dream"
  education: EducationEntry[];
  expertise?: ExpertiseGroup[];
  consultationHours?: { place: string; hours: string }[];
  phone?: string;
  email?: string;
}

export default function DoctorPage({
  name,
  qualifications,
  role,
  photo,
  photoAlt,
  intro,
  tagline,
  education,
  expertise,
  consultationHours,
  phone,
  email,
}: DoctorPageProps) {
  return (
    <div className="min-h-screen bg-[#f5f0e1]">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* ── Top: name + photo ── */}
        <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-12 items-start mb-10">
          {/* Left: name, qualifications, role */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-serif text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-2 inline-block mb-4">
              {name}
            </h1>
            {qualifications && (
              <p className="text-sm font-semibold tracking-wide text-[#2d2d2d] mb-1">
                {qualifications}
              </p>
            )}
            <p className="text-sm font-semibold tracking-wide text-[#2d2d2d]">{role}</p>
          </div>

          {/* Right: photo */}
          <div className="flex-shrink-0 w-full sm:w-[280px]">
            <Image
              src={photo}
              alt={photoAlt}
              width={280}
              height={320}
              className="w-full sm:w-[280px] object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* ── Tagline ── */}
        {tagline && (
          <p className="italic text-[#2d2d2d] text-lg mb-5">{tagline}</p>
        )}

        {/* ── Intro paragraphs ── */}
        <div className="space-y-4 mb-12 max-w-3xl">
          {intro.map((para, i) => (
            <p key={i} className="text-[#2d2d2d] leading-relaxed">{para}</p>
          ))}
        </div>

        {/* ── Expertise ── */}
        {expertise && expertise.length > 0 && (
          <section className="mb-12">
            {expertise.map((group) => (
              <div key={group.heading} className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] mb-3">{group.heading}</h2>
                <ul className="list-disc list-inside space-y-1.5">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-[#2d2d2d] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* ── Consultation Hours ── */}
        {consultationHours && consultationHours.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] mb-4">Consultation Hours</h2>
            <ul className="space-y-2">
              {consultationHours.map((c, i) => (
                <li key={i} className="text-[#2d2d2d]">
                  <span className="font-semibold">{c.place}:</span> {c.hours}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Education timeline ── */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] mb-6 border-b border-[#ccc7b8] pb-2">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((entry, i) => (
              <div key={i} className="flex gap-6">
                {/* Year */}
                <div className="w-28 flex-shrink-0">
                  <span className="text-sm font-semibold text-[#6b7c5e]">{entry.years}</span>
                </div>
                {/* Content */}
                <div className="border-l-2 border-[#ccc7b8] pl-6 pb-4">
                  <p className="font-semibold text-[#1a1a1a] mb-1">{entry.institution}</p>
                  <p className="text-sm text-[#555] leading-relaxed">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="border-t border-[#ccc7b8] pt-8 flex flex-wrap gap-6">
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-[#6b7c5e] text-white px-6 py-3 text-sm font-medium hover:bg-[#5a6b4e] transition-colors"
            >
              📞 Call {phone}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 border border-[#6b7c5e] text-[#6b7c5e] px-6 py-3 text-sm font-medium hover:bg-[#6b7c5e] hover:text-white transition-colors"
            >
              ✉ {email}
            </a>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-[#ccc7b8] text-[#2d2d2d] px-6 py-3 text-sm font-medium hover:border-[#6b7c5e] transition-colors"
          >
            ← Back to Home
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
