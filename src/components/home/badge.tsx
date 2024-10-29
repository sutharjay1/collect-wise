import Link from "next/link";
import { cn } from "@/lib/utils";
import { P } from "../ui/typography";

const labelContent = {
  title: "Our new feature is live! 🎉",
  label: "New",
};

type Props = {
  className?: string;
  variant?: "default" | "destructive";
  [key: string]: string | number | boolean | undefined;
};

const Badge = ({ className, variant = "default" }: Props) => {
  return (
    <div
      className={cn(
        "z-20 mb-8 rounded-3xl bg-zinc-200 p-0.5 delay-1000 duration-1000 animate-in fade-in fill-mode-both",
        className,
      )}
    >
      <Link href="/blog/introducing-attio-ai-research-agent">
        <div
          className={`bg-surface-subtle group block rounded-3xl border border-[#048060] border-opacity-0 p-1 outline-none ring-0 ring-[#048060] ring-opacity-0 transition-all duration-500 ease-out hover:border-opacity-100 hover:ring-[3px] hover:ring-opacity-30 focus:ring-[3px] focus:ring-opacity-30 active:border-opacity-100 active:ring-[1px] active:ring-opacity-30 ${
            variant === "destructive"
              ? "bg-red-500 text-zinc-100 dark:text-zinc-100"
              : ""
          }`}
        >
          <div className="flex items-center gap-[6px] p-[2px_7px_2px_2px] text-sm text-secondary">
            <span className="h-[26px] rounded-3xl bg-zinc-900 p-[3px_9px_3px_10px] align-middle font-inter text-zinc-100 dark:text-zinc-900">
              {labelContent.label}
            </span>

            <div className="flex items-center">
              <P className="pt-0 font-inter leading-4">{labelContent.title}</P>
              <svg
                className="transition-transform duration-500 ease-out group-hover:translate-x-[3px] group-focus:translate-x-[3px]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.125 5.25L10.875 9L7.125 12.75"
                  stroke="#2E3238"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Badge;
