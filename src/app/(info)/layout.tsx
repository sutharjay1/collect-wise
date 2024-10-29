"use client";
import Navbar from "@/components/global/nav-bar";
import Footer from "@/components/home/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col dark:bg-zinc-900">
        <Navbar />
        {children}
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
