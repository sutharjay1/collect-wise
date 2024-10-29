import { statisticsContent } from "@/lib/content";
import React from "react";
import Grid from "../global/grid";

const Stats = () => {
  return (
    <section className="relative mx-auto w-full px-0 py-12 md:w-fit md:px-4 md:py-12">
      <div className="relative grid w-full grid-cols-1 gap-8 px-8 sm:grid-cols-3 md:gap-16">
        {statisticsContent.map((stat) => (
          <React.Fragment key={stat.label}>
            <div className="relative mx-8 flex w-full flex-col items-center justify-center text-center">
              <Grid.Border />
              <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
                <div className="mb-2 font-gilroy text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  {stat.value}
                </div>{" "}
                <Grid.Line showHorizontal={false} showVertical={false} />
                <div className="font-inter text-base font-medium text-foreground">
                  {stat.label}
                </div>
              </div>
              <Grid.Border isBottom />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
