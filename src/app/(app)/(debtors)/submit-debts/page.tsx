"use client";

import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Check, Download } from "lucide-react";
import { UploadDropZone } from "../debtor-details/page";

const debtorSubmissionOptions = [
  {
    value: "upload", // added value for each option
    title: "Upload CSV or Excel",
    description:
      "Bulk upload a list of your debtors with their information in a CSV or Excel file.",
  },
  {
    value: "manual", // added value for each option
    title: "Enter Information via Web Portal",
    description:
      "Add individual debtors by entering their information directly within the CollectWise portal.",
  },
];

const SubmitDebts = () => {
  const [selectedTool, setSelectedTool] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const router = useRouter();

  const handleToolChange = (value: string) => {
    setSelectedTool(value);
  };

  const handleSubmit = () => {
    if (selectedTool === "upload") {
      setIsDialogOpen(true);
    } else if (selectedTool === "manual") {
      router.push("/debtor-details");
    }
  };

  return (
    <div className={cn("relative z-20 mx-auto w-full md:px-3")}>
      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>How do you want to submit your debtors?</CardTitle>
            </CardHeader>
          </Card>

          <Grid.Line showHorizontal={false} showVertical={false} />
          <CardContent className="border-none px-1 pb-4 pt-2">
            <RadioGroup onValueChange={handleToolChange} value={selectedTool}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {debtorSubmissionOptions.map((tool) => (
                  <Card
                    key={tool.value}
                    className={cn(
                      "cursor-pointer transition-all duration-200",
                      selectedTool === tool.value ? "ring-2 ring-primary" : "",
                    )}
                  >
                    <CardHeader
                      badgeClassName={cn(
                        selectedTool === tool.value && "bg-base/60",
                      )}
                    >
                      <CardTitle className="flex items-center space-x-2">
                        <RadioGroupItem value={tool.value} id={tool.value} />
                        <Label htmlFor={tool.value} className="font-semibold">
                          {tool.title}
                        </Label>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="border-none">
                      <p className="text-text/90 hover:text-textSecondary">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>
        <Grid.Border isBottom />
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl">
          <FileUploadMapper />
        </DialogContent>
      </Dialog>

      <div className="flex w-full items-center justify-center">
        <Button variant="default" className="px-5" onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  );
};

const FileUploadMapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const requiredColumns = [
    { name: "Debtor Name", required: true },
    { name: "Total Amount of Unpaid Debt", required: true },
    { name: "Delinquency Date", required: true },
    { name: "Phone Number", required: true },
    { name: "Email", required: true },
    { name: "Name of product/service delivered to the debtor", required: true },
    { name: "Creditor Name", required: true },
    { name: "Account Number", required: false },
    { name: "Address", required: false },
    { name: "City", required: false },
    { name: "State", required: false },
  ];

  const steps = [
    { number: 1, label: "Upload" },
    { number: 2, label: "Select Header" },
    { number: 3, label: "Map Columns" },
    { number: 4, label: "Review" },
  ];

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop here
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-6">
      <div className="mb-8 flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= step.number ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              {step.number}
            </div>
            <span className="mx-2 text-sm">{step.label}</span>
            {index < steps.length - 1 && (
              <div className="mx-2 h-px w-20 bg-gray-300" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="flex items-center justify-center p-2 py-0">
          <UploadDropZone className="h-[calc(100%-1rem)] py-2" />
        </Card>

        <Card className="p-0">
          <CardContent>
            <div className="mb-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">Expected Column</h3>
                <h3 className="font-medium">Required</h3>
              </div>
              <div className="space-y-3">
                {requiredColumns.map((column) => (
                  <div
                    key={column.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{column.name}</span>
                    {column.required && (
                      <Check className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-4 flex w-full items-center justify-center space-x-2 rounded-lg"
            >
              <Download className="h-4 w-4" />
              <span>Download Template</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitDebts;
