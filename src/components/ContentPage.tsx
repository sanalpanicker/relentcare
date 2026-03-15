import Link from "next/link";

// Legacy format (used by older pages)
interface LegacySection {
  heading?: string;
  body: string | string[];
  list?: boolean;
}

// New format v1 — type + content/items (used by pages generated later)
type NewSectionV1 =
  | { type: "text"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] };

// New format v2 — title + content (used by another set of pages)
interface NewSectionV2 {
  title: string;
  content: string;
}

export type Section = LegacySection | NewSectionV1 | NewSectionV2;

function isV1Section(sec: Section): sec is NewSectionV1 {
  return "type" in sec;
}

function isV2Section(sec: Section): sec is NewSectionV2 {
  return "title" in sec && !("heading" in sec) && !("type" in sec);
}

export interface ContentPageProps {
  title: string;
  subtitle?: string;
  heroTag?: string;
  sections: Section[];
  ctaText?: string;
  ctaHref?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function ContentPage({
  title,
  subtitle,
  heroTag,
  sections,
  ctaText = "Book an Appointment",
  ctaHref = "tel:+919746351090",
  breadcrumbs,
}: ContentPageProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#888]">
          <ol className="flex flex-wrap gap-1 list-none">
            <li>
              <Link href="/" className="hover:text-[#6b7c5e]">Home</Link>
              <span className="mx-1">/</span>
            </li>
            {breadcrumbs.map((b, i) => (
              <li key={i}>
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <Link href={b.href} className="hover:text-[#6b7c5e]">{b.label}</Link>
                    <span className="mx-1">/</span>
                  </>
                ) : (
                  <span className="text-[#2d2d2d] font-medium">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Hero Tag */}
      {heroTag && (
        <p className="text-xs font-semibold tracking-widest uppercase text-[#6b7c5e] mb-3">
          {heroTag}
        </p>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] leading-tight mb-4">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg text-[#555] leading-relaxed mb-8 border-b border-[#e0d9c8] pb-6">
          {subtitle}
        </p>
      )}

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((sec, i) => {
          if (isV1Section(sec)) {
            /* ── New format v1: type + content/items ── */
            if (sec.type === "heading") {
              return (
                <h2 key={i} className="text-xl md:text-2xl font-semibold text-[#2d2d2d] mt-8 mb-2">
                  {sec.content}
                </h2>
              );
            }
            if (sec.type === "list") {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {sec.items.map((item, j) => (
                    <li key={j} className="text-[0.97rem] text-[#444] leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            // type === "text"
            return (
              <p key={i} className="text-[0.97rem] text-[#444] leading-relaxed">
                {sec.content}
              </p>
            );
          }

          if (isV2Section(sec)) {
            /* ── New format v2: title + content ── */
            return (
              <section key={i}>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d2d2d] mb-3">
                  {sec.title}
                </h2>
                <p className="text-[0.97rem] text-[#444] leading-relaxed">{sec.content}</p>
              </section>
            );
          }

          /* ── Legacy format: heading + body ── */
          return (
            <section key={i}>
              {sec.heading && (
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d2d2d] mb-3">
                  {sec.heading}
                </h2>
              )}
              {sec.list ? (
                <ul className="list-disc pl-6 space-y-2">
                  {(Array.isArray(sec.body) ? sec.body : [sec.body]).map((item, j) => (
                    <li key={j} className="text-[0.97rem] text-[#444] leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4">
                  {(Array.isArray(sec.body) ? sec.body : [sec.body]).map((para, j) => (
                    <p key={j} className="text-[0.97rem] text-[#444] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 p-6 bg-[#7a8570] rounded-sm text-center">
        <p className="text-white text-lg font-semibold mb-4">
          Expert care at RelentCare ENT Clinic, Kolazhy, Thrissur
        </p>
        <a
          href={ctaHref}
          className="inline-block bg-white text-[#6b7c5e] font-semibold px-8 py-3 hover:bg-[#f5f0e1] transition-colors text-sm tracking-wide"
        >
          {ctaText}
        </a>
      </div>
    </article>
  );
}
