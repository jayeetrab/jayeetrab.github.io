import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

export const metadata: Metadata = {
  title: "Jayeetra Bhattacharjee – AI/ML Engineer",
  description:
    "AI/ML Engineer delivering LLM, NLP, and analytics solutions for global enterprises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-50">
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
