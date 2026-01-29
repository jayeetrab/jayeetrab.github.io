"use client";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import { AnimatePresence, motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Jayeetra Bhattacharjee – AI/ML Engineer",
  description:
    "AI/ML Engineer delivering LLM, NLP, and analytics solutions for global enterprises.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-neutral-50">
        <HeaderNav />
        <AnimatePresence mode="wait">
          <motion.div
            // key keeps animation on route change
            key={typeof window !== "undefined" ? window.location.pathname : "root"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
