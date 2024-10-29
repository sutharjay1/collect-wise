import Image from "next/image";
import Link from "next/link";
import React from "react";
import Grid from "../global/grid";
import { Motion } from "../global/motion";
import { Button } from "../ui/button";
import { H1, H2, P } from "../ui/typography";

const infoItems = [
  {
    title: "Increase Recovery Rates",
    description:
      "Maximize your collection success rates and increase your profits with our data-driven AI system. We know exactly how to contact your debtors, what channels to target, and when to escalate while still being respectful.",
    highlight: true,
  },
  {
    title: "Decrease Collection Costs",
    description:
      "Avoid paying high contingency fees to outsourced collection agencies or hiring an expensive in-house collections team. CollectWise's fully autonomous AI agents allow us to reduce costs and offer much lower, more transparent rates.",
  },
  {
    title: "Maintain a Positive Brand Image",
    description:
      "Our communications with your debtors are strictly amicable and respectful, allowing you to maintain a positive brand image and even encourage future sales. Our system also operates as a white-label with your own branding and can be trained with any guidelines that you may have.",
  },
] as const;

const Info: React.FC = () => (
  <div className="relative isolate flex flex-col items-center justify-start bg-gradient-to-b from-white to-gray-50 px-6 py-16 lg:px-8">
    <H2 className="mt-8 border-none text-2xl font-semibold">
      Increase recoveries and cut collection costs
    </H2>
    <P className="mb-4 [&:not(:first-child)]:mt-0">
      CollectWise maximizes debt recovery and eliminates the cost of human
      agents
    </P>
    <div className="mx-auto flex w-full max-w-5xl flex-col">
      <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
        {infoItems.map((feature, index) => (
          <>
            <Grid.Border />
            <Motion
              key={feature.title}
              className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 rounded-lg bg-white px-8 lg:grid-cols-2"
            >
              <div
                className={`order-${index % 2 === 0 ? "1" : "2"} flex items-center justify-center`}
              >
                <Image
                  className="h-[20rem] w-auto rounded-lg bg-blend-multiply sm:h-[36rem] lg:h-auto lg:w-full"
                  src="/logo.jpg"
                  alt={`${feature.title} illustration`}
                  width={1000}
                  height={1000}
                />
              </div>
              <Grid.Line showHorizontal={false} showVertical={false} />
              <div className="space-y-4 lg:order-1">
                <H1 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </H1>
                <P className="text-lg text-gray-600">{feature.description}</P>
                <Button
                  asChild
                  className="h-10 rounded-xl bg-base text-zinc-100 hover:opacity-80 dark:text-zinc-900 md:px-5"
                >
                  <Link href="/get-started">Get started</Link>
                </Button>
              </div>
            </Motion>
            <Grid.Border isBottom />
          </>
        ))}
      </div>
    </div>
  </div>
);

export default Info;
