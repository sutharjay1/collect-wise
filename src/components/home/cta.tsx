import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { P } from "../ui/typography";
import Grid from "../global/grid";

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-[1440px] py-[60px] md:px-16 lg:px-6 lg:pb-[120px] lg:pt-[90px] xl:px-0">
      <Grid.Border />
      <div className="relative grid auto-rows-fr grid-cols-4 place-items-center justify-items-stretch gap-0 px-5 lg:grid-cols-12 lg:gap-6">
        <Grid.Line  />
        <ContentSection />
        <BadgesSection />
      </div>
      <Grid.Border isBottom />
    </section>
  );
}

function ContentSection() {
  return (
    <div className="relative col-span-4 p-[30px_24px_50px] lg:col-start-2 lg:col-end-7 lg:p-[6px_24px] xl:p-[6px_52px]">
      <h2 className="font-display max-w-prose text-center text-[32px] font-bold leading-[120%] tracking-[-0.5px] text-[#1D1E20] lg:text-left lg:text-[40px] lg:font-bold lg:leading-[110%] lg:tracking-[-0.8px]">
        Start collecting your unpaid{" "}
        <span className="text-[#727B84]">debts</span> now
      </h2>
      <P className="mx-auto mt-[6px] max-w-[438px] text-center leading-[150%] tracking-[-0.2px] text-[#31373D] lg:mx-0 lg:text-left lg:text-[20px] lg:leading-[140%]">
        Attio is audited and certified by industry leading Third Party
        standards.
      </P>
      <div className="mt-5 flex flex-col justify-center gap-3 md:flex-row lg:mt-6 lg:justify-start">
        <div className="flex w-full items-start justify-center gap-2.5 md:w-auto">
          <Button className="w-fit bg-base" asChild>
            <Link href="https://app.attio.com/welcome/sign-in">
              Start for free
            </Link>
          </Button>
          <Button variant="outline" className="w-fit">
            Talk to sales
          </Button>
        </div>
        <EmailForm />
      </div>
    </div>
  );
}

function EmailForm() {
  return (
    <form className="flex w-full flex-col gap-2.5 md:hidden md:w-auto">
      <div className="relative flex flex-col gap-y-2 md:flex-row md:gap-x-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          id="email-input"
          name="email"
          aria-label="Email address"
          className="bg-surface-subtle peer h-10 w-full rounded-xl border border-[#048060] border-opacity-0 pb-4 pr-4 pt-4 transition-all duration-300 ease-out placeholder:text-gray-400 hover:border-opacity-100 hover:ring-2 hover:ring-[#048060] hover:ring-opacity-30 focus:border-opacity-100 focus:ring-2 focus:ring-[#048060] focus:ring-opacity-30 active:border-opacity-100 active:ring-2 active:ring-[#048060] active:ring-opacity-30"
        />
        <Button
          type="submit"
          className="absolute right-0 mb-2 mr-2 mt-2 w-fit bg-base"
        >
          Send me a demo
        </Button>
      </div>
    </form>
  );
}

function BadgesSection() {
  return (
    <div className="relative col-span-4 flex flex-wrap items-center justify-center gap-8 p-[40px_32px_30px] lg:col-start-7 lg:col-end-12 lg:p-[0_12px]">
      <div className="flex items-center gap-8">
        <div className="h-12 lg:h-[52px]">
          <Image
            src="/_next/static/media/gdpr-ready-badge.b917e854.webp"
            alt="GDPR Ready"
            width={380}
            height={162}
            className="h-full w-fit object-contain"
          />
        </div>
        <div className="h-12 lg:h-[52px]">
          <Image
            src="/_next/static/media/ccpa-ready-badge.44f4f257.webp"
            alt="CCPA Ready"
            width={380}
            height={162}
            className="h-full w-fit object-contain"
          />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="h-20 lg:h-[92px]">
          <Image
            src="/_next/static/media/iso-27001-badge.d9c500cc.webp"
            alt="ISO 27001 Certified"
            width={276}
            height={276}
            className="h-full w-fit object-contain"
          />
        </div>
      </div>
    </div>
  );
}
