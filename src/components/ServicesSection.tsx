import Image from "next/image";
import Link from "next/link";

const WIXBASE = "https://static.wixstatic.com/media";

const services = [
  {
    label: "Pulmonology",
    href: "#",
    img: `${WIXBASE}/2d3538_009b7add4e2941749ea4a5ebceaf55ac~mv2.png/v1/fill/w_340,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d3538_009b7add4e2941749ea4a5ebceaf55ac~mv2.png`,
    alt: "Pulmonology services – chest X-ray",
  },
  {
    label: "ENT",
    href: "/best-ent-services-thrissur",
    img: `${WIXBASE}/2d3538_9871d82f81cf4e119ffa278f4ae32b12~mv2.png/v1/fill/w_340,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d3538_9871d82f81cf4e119ffa278f4ae32b12~mv2.png`,
    alt: "Person ear is being checked by a ENT specialist",
  },
  {
    label: "Aesthetics",
    href: "#",
    img: `${WIXBASE}/2d3538_d661dc7981be45f398527175d5bc5341~mv2.png/v1/fill/w_340,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d3538_d661dc7981be45f398527175d5bc5341~mv2.png`,
    alt: "PRP injection over face of a patient",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#7a8570] px-10 pb-14 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.label}
            className="bg-white overflow-hidden hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
          >
            <Image
              src={service.img}
              alt={service.alt}
              width={340}
              height={300}
              className="w-full h-[285px] object-cover"
              unoptimized
            />
            <div className="bg-[#f5f0e1] px-4 py-3.5">
              <Link
                href={service.href}
                className="text-base font-semibold text-[#2d2d2d] underline hover:text-[#6b7c5e] transition-colors"
              >
                {service.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
