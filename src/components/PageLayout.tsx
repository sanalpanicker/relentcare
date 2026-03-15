import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-[#f5f0e1] min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
