import Grid from "@/components/global/grid";
import Navbar from "@/components/global/nav-bar";
import Oval from "@/components/global/oval";
import Badge from "@/components/home/badge";
import CTA from "@/components/home/cta";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Stats from "@/components/home/stats";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { P } from "@/components/ui/typography";
import { heroContent } from "@/lib/content";
import { geistSans, inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Root = () => {
  return (
    <>
      <Navbar />

      <main
        className={cn(
          "relative z-10 min-h-screen bg-background",
          geistSans.className,
        )}
      >
        <div className="relative isolate flex flex-col items-center justify-start px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#048060] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <section className="relative flex h-[calc(100vh-20rem)] flex-col items-center justify-center pt-20 md:pt-24">
            <Badge />
            <div className="absolute inset-0 h-screen [background:radial-gradient(125%_125%_at_50%_10%,transparent_35%,fff8f4_500%)]"></div>
            <div className="relative w-full">
              <div className="flex w-full flex-col items-center text-center">
                <h1
                  className={cn(
                    "mb-4 px-8 font-gilroy text-[44px] font-semibold leading-[42px] text-foreground md:text-[72px] md:leading-[72px]",
                    // gilroy.className
                  )}
                >
                  {heroContent.title}
                </h1>

                <P
                  className={cn(
                    "mb-6 max-w-[380px] px-6 text-base leading-snug text-foreground md:max-w-[640px] md:text-xl lg:max-w-[670px] lg:text-2xl",
                    inter.className,
                  )}
                >
                  {heroContent.description}
                </P>
              </div>

              <div className="mt-2 flex w-full items-center justify-center gap-1 md:gap-4">
                {heroContent.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex w-full flex-col items-center text-center sm:w-1/2 lg:w-auto"
                  >
                    <p className="text-base font-bold text-foreground md:text-xl lg:text-2xl">
                      {point}.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <section className="relative mx-auto w-full px-0 py-12 md:w-fit md:px-4 md:py-8">
              <Grid.Border />
              <div className="relative grid w-full grid-cols-1 gap-6 px-8 sm:grid-cols-2 sm:gap-8">
                <Button
                  asChild
                  className="h-10 rounded-xl bg-base text-zinc-100 hover:opacity-80 dark:text-zinc-900 md:px-5"
                >
                  <Link href="/login">Get started</Link>
                </Button>

                <Grid.Line showHorizontal={false} showVertical />

                <Button asChild variant="outline" className="z-10 w-full px-5">
                  <Link href={heroContent.ctaPrimary.href}>
                    {heroContent.ctaPrimary.label} →
                  </Link>
                </Button>
              </div>
              <Grid.Border isBottom />
            </section>
          </section>
        </div>

        <Stats />

        <Oval backgroundColor="bg-base/30">
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg md:p-20">
            <div className="z-20 mx-auto max-w-6xl p-2 lg:px-8">
              <div className="-m-2 rounded-xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:-m-4 lg:rounded-2xl lg:p-2.5">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="product preview"
                  width={1200}
                  height={766}
                  className="rounded-xl bg-background/5 shadow-2xl ring-1 ring-zinc-900/10"
                  draggable="false"
                  quality={100}
                  priority
                />
              </div>
            </div>
            <GridPattern
              width={90}
              height={30}
              x={-1}
              y={10}
              strokeDasharray={"4 2"}
              className={cn(
                "z-0",
                "fill-gray-700/30 stroke-gray-700/30",
                "[mask-image:radial-gradient(880px_circle_at_center,white,transparent)]",
              )}
            />
          </div>
        </Oval>

        {/* <Features /> */}

        <CTA />

        <Footer />
      </main>
    </>
  );
};

export default Root;
