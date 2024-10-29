"use client";

import Chart from "@/components/global/chart";
import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, formatPrice } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface StatType {
  label: string;
  amount: number;
}

const stats: StatType[] = [
  { label: "Daily Amount", amount: 0 },
  { label: "Total Collected", amount: 0 },
  { label: "Payouts", amount: 0 },
];

const timeItems = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "week" },
  { label: "This Month", value: "month" },
  { label: "This Year", value: "year" },
] as const;

const Dashboard = () => {
  type TimeType = "today" | "week" | "month" | "year";

  const [time, setTime] = useState<TimeType>("today");

  return (
    <div className={cn("relative z-20 mx-auto w-full md:px-0")}>
      <div className="mx-auto flex w-full flex-col">
        <div>
          <Grid.Border />
          <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
            <div className="mb-8 w-full rounded-lg bg-background shadow-sm">
              <div className="mb-4 flex flex-col items-start justify-between md:flex-row md:items-center">
                <Select
                  defaultValue="today"
                  onValueChange={(value) => setTime(value as TimeType)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Grid.Line showHorizontal={false} showVertical={false} />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="col-span-3">
                  <Chart time={time} />
                </div>

                <div className="col-span-1 flex flex-col space-y-4">
                  {stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      label={stat.label}
                      amount={stat.amount}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Grid.Border isBottom />
        </div>
        <Grid.Border />
        <div className="-my-1 grid grid-cols-1 gap-6 px-8 md:grid-cols-2">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold">Payments</CardTitle>

              <Button
                variant="link"
                className="px-5 text-base text-zinc-900 dark:text-zinc-200"
                asChild
              >
                <Link href="/payments">View All</Link>
              </Button>
            </CardHeader>
            <Grid.Line showHorizontal={false} />
            <CardContent className="min-h-[300px] border-none">
              <div className="flex h-full items-center justify-center text-gray-500">
                No payments to display
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold">Debtors</CardTitle>

              <Button
                variant="link"
                className="px-5 text-base text-zinc-900 dark:text-zinc-200"
                asChild
              >
                <Link href="/debtors">View All</Link>
              </Button>
            </CardHeader>
            <Grid.Line showHorizontal={false} showVertical={false} />
            <CardContent className="min-h-[300px] border-none">
              <div className="flex h-full items-center justify-center text-gray-500">
                No debtors to display
              </div>
            </CardContent>
          </Card>
        </div>
        <Grid.Border isBottom />
      </div>
    </div>
  );
};

const StatCard = ({ label, amount }: StatType) => {
  return (
    <Card className={cn("w-full transition-all duration-200")}>
      <CardHeader className="py-2">
        <CardTitle className="flex items-center space-x-2">
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
            {label}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="border-none">
        <p className="font-semibold text-zinc-900 dark:text-zinc-200">
          {formatPrice(amount)}
        </p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
