"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { geistSans, gilroy } from "@/lib/fonts";
import { heroContent } from "@/lib/content";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface CompanyLink extends NavItem {}

const mainNavItems: NavItem[] = [
  { label: "Download", href: "/download" },
  { label: "Pricing", href: "/pricing" },
  { label: "Help center", href: "https://help.steep.app", external: true },
];

const companyLinks: CompanyLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

const NavLink = ({
  href,
  children,
  external,
  className,
  ghost,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  ghost?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const LinkComponent = external ? "a" : Link;
  const externalProps = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <LinkComponent
      href={href}
      {...externalProps}
      className={cn(
        "w-fit rounded-3xl font-inter",
        isActive ? "text-primary" : "text-foreground",
        className,
      )}
    >
      <Button variant="ghost" className="gap-0 rounded-xl px-4">
        {children}
      </Button>
    </LinkComponent>
  );
};

const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <Image
      src="https://cdn.prod.website-files.com/64d41c822c1ca07c587e55c0/64e43643e6dfc41c4712b72b_Copy%20of%20Untitled%20Design-p-500.png"
      alt="logo"
      width={100}
      height={10}
    />
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
	
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="w-fit">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-4">
                  {mainNavItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      external={item.external}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <Separator />
                  {companyLinks.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex-shrink-0">
            <Logo />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center space-x-2 md:flex">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                external={item.external}
              >
                {item.label}
              </NavLink>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-fit">
                <Button
                  variant="ghost"
                  className={cn("flex items-center space-x-1 font-inter")}
                >
                  <span className="font-inter">Company</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                {companyLinks.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="w-full rounded px-3 py-1.5 font-inter hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Logo */}
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden items-center space-x-2 md:flex">
              <NavLink href="https://web.steep.app" external>
                Log in
              </NavLink>
              <Separator orientation="vertical" className="h-6" />

              <Button
                className="h-10 bg-base px-5 text-white hover:opacity-90"
                asChild
              >
                <Link href={heroContent.ctaPrimary.href}>
                  {heroContent.ctaPrimary.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
