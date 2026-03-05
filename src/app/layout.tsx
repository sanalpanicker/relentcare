import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "the best ent clinic thrissur – The Best Ent Clinic in Thrissur & Wadakkanchery",
  description:
    "RelentCare ENT, CHEST and Facial Aesthetic Centre, Thrissur, Kerala. Best ENT and Pulmonology Doctor in Thrissur. Committed to delivering exceptional ENT diagnostic and outpatient services.",
  keywords:
    "ENT clinic Thrissur, best ENT doctor Thrissur, pulmonology Thrissur, facial aesthetics Thrissur, RelentCare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
