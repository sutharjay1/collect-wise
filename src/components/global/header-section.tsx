import { cn } from "@/lib/utils";

import { P } from "../ui/typography";
import { FadeText } from "../ui/fade-text";
import BlurFade from "../ui/blur-fade";
import { geistSans } from "@/lib/fonts";

export interface HeaderSectionProps {
  label?: string;
  title: string;
  heading?: string;
  subtitle?: string;
}

export function HeaderSection({
  label,
  title,
  heading,
  subtitle,
}: HeaderSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {label ? (
        <FadeText
          className="max-w-[600px] bg-gradient-to-br from-green-600 to-blue-600 bg-clip-text text-xl font-semibold text-transparent sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
          useInViewProp={true}
          text={label}
        />
      ) : null}
      <BlurFade delay={0.25} inView className="pb-4 pt-2 sm:pb-0">
        <div className="flex w-full flex-col items-center gap-1 md:gap-0">
          <h1
            className={cn(
              "mx-auto mb-1 max-w-5xl font-polySansMedian text-3xl font-light leading-tight tracking-tight text-zinc-900 dark:text-zinc-200 sm:mb-2 lg:text-5xl xl:text-6xl 2xl:text-7xl",
              "sm:text-center",
            )}
          >
            <span className={cn(geistSans.className)}>{title}</span>
          </h1>
        </div>
      </BlurFade>
      {subtitle ? (
        <BlurFade delay={0.5} inView>
          <P
            className={cn(
              geistSans.className,
              "mx-auto flex w-full max-w-xl items-center pt-2 text-center font-polySansMedian text-base font-light text-zinc-700 dark:text-zinc-400 md:text-lg lg:text-xl xl:max-w-2xl 2xl:max-w-3xl",
            )}
          >
            {subtitle}
          </P>
        </BlurFade>
      ) : null}
    </div>
  );
}
