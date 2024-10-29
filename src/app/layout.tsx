import { TooltipProvider } from "@/components/ui/tooltip";
import { geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collect Wise",
  description: "Automate debt collection with generative AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background antialiased",
          geistSans.className,
        )}
      >
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />

            {children}
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
