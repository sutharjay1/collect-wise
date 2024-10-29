"use client";
import Navbar from "@/components/global/nav-bar";
import Footer from "@/components/home/footer";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col dark:bg-zinc-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
