"use client";

import Grid from "@/components/global/grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type InvoiceData = {
  invoice: string;
  status: string;
  method: string;
  amount: number;
  date: string;
};

const mockInvoiceData: InvoiceData[] = Array.from({ length: 10 }, (_, i) => ({
  invoice: `INV00${i + 1}`,
  status: ["Paid", "Pending", "Overdue"][Math.floor(Math.random() * 3)],
  method: ["Credit Card", "Bank Transfer", "PayPal"][
    Math.floor(Math.random() * 3)
  ],
  amount: parseFloat((Math.random() * 500 + 50).toFixed(2)),
  date: new Date(
    Date.now() - Math.floor(Math.random() * 10000000000),
  ).toLocaleDateString(),
}));

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<keyof InvoiceData | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredInvoices = mockInvoiceData.filter((invoice) => {
    const term = searchTerm.toLowerCase();
    return (
      invoice.invoice.toLowerCase().includes(term) ||
      invoice.status.toLowerCase().includes(term) ||
      invoice.method.toLowerCase().includes(term)
    );
  });

  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    if (!sortKey) return 0;
    const order = sortOrder === "asc" ? 1 : -1;
    if (sortKey === "amount") return order * (a[sortKey] - b[sortKey]);
    if (sortKey === "date")
      return order * (new Date(a.date).getTime() - new Date(b.date).getTime());
    return order * a[sortKey].localeCompare(b[sortKey]);
  });

  const handleSort = (key: keyof InvoiceData) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const renderSortIcons = (key: keyof InvoiceData) => (
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
              <CardTitle>Payments</CardTitle>
              <Input
                placeholder="Search by Invoice, Status, or Method"
                className="w-[200px] md:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CardHeader>
          </Card>

          <CardContent>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  {["invoice", "status", "method", "amount", "date"].map(
                    (key) => (
                      <TableHead
                        key={key}
                        className="cursor-pointer p-2 transition-colors hover:bg-gray-100"
                        onClick={() => handleSort(key as keyof InvoiceData)}
                      >
                        <div className="flex items-center justify-start">
                          {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                          {renderSortIcons(key as keyof InvoiceData)}
                        </div>
                      </TableHead>
                    ),
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedInvoices.length > 0 ? (
                  sortedInvoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.status}</TableCell>
                      <TableCell>{invoice.method}</TableCell>
                      <TableCell className="">
                        ${invoice.amount.toFixed(2)}
                      </TableCell>
                      <TableCell>{invoice.date}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
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

export default Payments;
