"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

export const description = "An area chart with gradient fill";

const chartData = {
  year: [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 250, mobile: 160 },
    { month: "August", desktop: 270, mobile: 150 },
    { month: "September", desktop: 300, mobile: 170 },
    { month: "October", desktop: 280, mobile: 180 },
    { month: "November", desktop: 260, mobile: 200 },
    { month: "December", desktop: 290, mobile: 210 },
  ],
  month: [
    { month: "Week 1", desktop: 215, mobile: 145 },
    { month: "Week 2", desktop: 220, mobile: 150 },
    { month: "Week 3", desktop: 210, mobile: 155 },
    { month: "Week 4", desktop: 225, mobile: 160 },
  ],
  week: [
    { month: "Day 1", desktop: 212, mobile: 140 },
    { month: "Day 2", desktop: 215, mobile: 145 },
    { month: "Day 3", desktop: 218, mobile: 142 },
    { month: "Day 4", desktop: 220, mobile: 150 },
    { month: "Day 5", desktop: 225, mobile: 155 },
    { month: "Day 6", desktop: 230, mobile: 158 },
    { month: "Day 7", desktop: 235, mobile: 160 },
  ],
  today: [
    { month: "8 AM", desktop: 50, mobile: 20 },
    { month: "10 AM", desktop: 55, mobile: 25 },
    { month: "12 PM", desktop: 60, mobile: 30 },
    { month: "2 PM", desktop: 65, mobile: 35 },
    { month: "4 PM", desktop: 70, mobile: 40 },
    { month: "6 PM", desktop: 75, mobile: 45 },
    { month: "8 PM", desktop: 80, mobile: 50 },
  ],
} satisfies Record<
  string,
  { month: string; desktop: number; mobile: number }[]
>;

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export type ChartProps = {
  time: "today" | "week" | "month" | "year";
};

const Chart = ({ time }: ChartProps) => {
  return (
    <Card>
      <CardContent className="border-none">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData[time]}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by {Math.round(Math.random() * 100)}% this {time}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Chart;
