import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-[#ccc] py-12 px-10 text-center">
      <h2 className="text-2xl font-normal text-white mb-8">
        <Link href="/" className="text-white hover:text-[#aaa] transition-colors">
          The ENT Clinic Thrissur [RelentCare]
        </Link>
      </h2>

      <div className="flex flex-col items-center gap-2.5">
        <p className="text-sm text-[#ccc]">Phone No: 9746351090</p>
        <p className="text-sm text-[#ccc]">Poovany Junction</p>
        <p className="text-sm text-[#ccc]">Kolazhy, Thrissur, Kerala, India 680010</p>
        <p className="text-sm">
          <a
            href="mailto:relentcarehospitals@gmail.com"
            className="text-[#ccc] hover:text-white transition-colors"
          >
            Mail Address: relentcarehospitals@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
