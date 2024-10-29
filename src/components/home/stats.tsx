import { statisticsContent } from "@/lib/content";
import React from "react";
import Grid from "../global/grid";

const Stats = () => {
  return (
    <section className="relative mx-auto w-full px-0 py-12 md:w-fit md:px-4 md:py-12">
      <div className="relative grid w-full grid-cols-1 gap-8 px-8 sm:grid-cols-3 md:gap-16 lg:gap-24">
        {statisticsContent.map((stat) => (
          <React.Fragment key={stat.label}>
            <Grid.Border />

            <div className="relative flex flex-col items-center justify-center text-center">
              <div className="mb-2 font-gilroy text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                {stat.value}
              </div>
              <div className="font-inter text-base font-medium text-foreground">
                {stat.label}
              </div>
            </div>
          </React.Fragment>
        ))}
        <Grid.Border isBottom />
      </div>
    </section>
  );
};

export default Stats;
