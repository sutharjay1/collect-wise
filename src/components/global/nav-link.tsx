import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Update this import based on where your `cn` utility is located
import { Button } from "@/components/ui/button"; // Update this import based on where your `Button` component is located

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  ghost?: boolean;
}

export const NavLink = ({
  href,
  children,
  external = false,
  className = "",
  ghost = false,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const externalProps = external ? { target: "_blank", rel: "noreferrer" } : {};

  return ghost ? (
    external ? (
      <a
        href={href}
        {...externalProps}
        className={cn(
          "w-fit rounded-3xl font-inter transition-opacity hover:opacity-90",
          isActive ? "text-primary" : "text-foreground",
          className,
        )}
      >
        <Button variant="ghost" className="gap-0 rounded-xl px-4">
          {children}
        </Button>
      </a>
    ) : (
      <Link
        href={href}
        className={cn(
          "w-fit rounded-3xl font-inter transition-opacity hover:opacity-90",
          isActive ? "text-primary" : "text-foreground",
          className,
        )}
      >
        <Button variant="ghost" className="gap-0 rounded-xl px-4">
          {children}
        </Button>
      </Link>
    )
  ) : external ? (
    <a
      href={href}
      {...externalProps}
      className={cn(
        "w-fit rounded-3xl font-inter transition-opacity hover:opacity-90",
        isActive ? "text-primary" : "text-foreground",
        className,
      )}
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      className={cn(
        "w-fit rounded-3xl font-inter transition-opacity hover:opacity-90",
        isActive ? "text-primary" : "text-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
};
