"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { heroContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// interface NavItem {
//   label: string;
//   href: string;
//   external?: boolean;
// }

// const mainNavItems: NavItem[] = [
//   { label: "Download", href: "/download" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "Help center", href: "https://help.steep.app", external: true },
// ];

// const companyLinks: NavItem[] = [
//   { label: "Blog", href: "/blog" },
//   { label: "About", href: "/about" },
//   { label: "Careers", href: "/careers" },
// ];

// const MobileMenuItem = ({
//   href,
//   children,
//   onClick,
// }: {
//   href: string;
//   children: React.ReactNode;
//   onClick?: () => void;
// }) => (
//   <Link
//     href={href}
//     className="flex items-center justify-between py-2 text-sm"
//     onClick={onClick}
//   >
//     {children}
//     <ChevronRight className="h-4 w-4" />
//   </Link>
// );

const NavLink = ({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
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
      <Button variant="ghost" className="gap-0 rounded-xl px-4 text-center">
        {children}
      </Button>
    </LinkComponent>
  );
};

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] h-screen bg-background">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b p-4">
          <Logo />
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        {/* <div className="flex-1 overflow-y-auto p-4  ">
          <nav className="mt-6 space-y-2">
            {mainNavItems.map((item) => (
              <MobileMenuItem href={item.href} key={item.label}>
                {item.label}
              </MobileMenuItem>
            ))}

            <MobileMenuItem href="/logout">Log Out</MobileMenuItem>
          </nav>
        </div> */}

        <div className="space-y-3 p-4">
          <Button className="w-full" variant="outline" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            className="h-10 w-full bg-base px-5 text-white hover:opacity-90"
            asChild
          >
            <Link href={heroContent.ctaPrimary.href}>
              {heroContent.ctaPrimary.label}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Logo = ({
  className,
  width = 120,
  height = 24,
  src = "/logo.jpg",
}: {
  className?: string;
  width?: number;
  height?: number;
  src?: string;
}) => (
  <Link href="/" className="flex items-center">
    <Image
      src={src}
      alt="CollectWise logo"
      width={width}
      height={height}
      className={cn("h-6 w-auto", className)}
    />
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* <div className="hidden flex-1 items-center justify-center space-x-4 md:flex">
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
          </div> */}

          <div className="flex items-center space-x-4">
            <div className="hidden items-center space-x-2 md:flex">
              <NavLink href="/login">Log in</NavLink>
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

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
