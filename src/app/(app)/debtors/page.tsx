"use client";

import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type TDebtorData = {
  name: string;
  contact: string;
  createdAt: string;
};

const mockDebtorData: TDebtorData[] = Array.from({ length: 10 }, (_, i) => ({
  name: `Debtor ${i + 1}`,
  contact: `Contact ${i + 1}`,
  createdAt: new Date(2024, 0, 1).toLocaleDateString(),
}));

const Debtors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<keyof TDebtorData | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredDebtors = mockDebtorData.filter((data) => {
    const term = searchTerm.toLowerCase();
    return (
      data.name.toLowerCase().includes(term) ||
      data.contact.toLowerCase().includes(term) ||
      data.createdAt.toLowerCase().includes(term)
    );
  });

  const sortedDebtors = [...filteredDebtors].sort((a, b) => {
    if (!sortKey) return 0;
    const order = sortOrder === "asc" ? 1 : -1;
    if (sortKey === "createdAt")
      return (
        order *
        (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      );
    return order * a[sortKey].localeCompare(b[sortKey]);
  });

  const handleSort = (key: keyof TDebtorData) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const renderSortIcons = (key: keyof TDebtorData) => (
    <span className="ml-2 flex flex-col text-sm">
      {sortOrder === "asc" ? (
        <ChevronUp
          className={cn(
            "h-4 w-4",
            sortKey === key && sortOrder === "asc"
              ? "font-bold text-black"
              : "text-gray-400",
          )}
        />
      ) : (
        <ChevronDown
          className={cn(
            "h-4 w-4",
            sortKey === key && sortOrder === "desc"
              ? "font-bold text-black"
              : "text-gray-400",
          )}
        />
      )}
    </span>
  );

  return (
    <div className={cn("relative z-20 mx-auto w-full md:px-3")}>
      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Debtors</CardTitle>
              <div className="flex flex-row items-center justify-between">
                <Button variant="default" asChild>
                  <Link href="/submit-debts">Add Debt</Link>
                </Button>
                <Input
                  placeholder="Search debtors"
                  className="max-w-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
          </Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {(["name", "contact", "createdAt"] as const).map((key) => (
                    <TableHead
                      key={key}
                      className="cursor-pointer"
                      onClick={() => handleSort(key)}
                    >
                      <div className="flex items-center">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                        {renderSortIcons(key)}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedDebtors.length > 0 ? (
                  sortedDebtors.map((debtor, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {debtor.name}
                      </TableCell>
                      <TableCell>{debtor.contact}</TableCell>
                      <TableCell>{debtor.createdAt}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>

          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>
        <Grid.Border isBottom />
      </div>
    </div>
  );
};

export default Debtors;
