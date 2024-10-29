import type { Metadata } from "next";

import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "sonner";
import { geistSans } from "@/lib/fonts";

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
