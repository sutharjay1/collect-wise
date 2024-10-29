"use client";

import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { StateKeys, States } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Cloud, File, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const debtorsInfoSchema = z.object({
  name: z.string().min(2, "Name is required"),
  amount: z.number().min(1, "Amount is required"),
  originalDueDate: z.date(),
  serviceOrProductName: z
    .string()
    .min(2, "Service or Product Name is required"),
  creditorName: z.string().min(2, "Creditor Name is required"),
  debtorAddress: z.object({
    addressLine1: z.string().min(2, "Address Line 1 is required"),
    city: z.string().min(2, "City is required"),
    state: z.enum(Object.values(States) as [StateKeys], {
      errorMap: () => ({ message: "State is required" }),
    }),
    zipCode: z.string().min(5, "Zip Code must be at least 5 digits"),
  }),
  description: z.string().min(2, "Description is required"),
});

const debtorsContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
});

type DebtorsInfoFormData = z.infer<typeof debtorsInfoSchema>;
type DebtorsContactFormData = z.infer<typeof debtorsContactSchema>;

const DebtorDetails = () => {
  const mutation = useMutation({
    mutationFn: async (data: DebtorsInfoFormData) => {
      console.table(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Bank details updated successfully", {
        duration: 2000,
        richColors: true,
        style: {
          backgroundColor: "rgba(0, 255, 0, 0.15)",
          border: "0.1px solid rgba(0, 255, 0, 0.2)",
          color: "#fff",
        },
      });
    },
    onError: (error) => {
      // Optionally handle error state here
    },
  });

  const debtorsContactMutation = useMutation({
    mutationFn: async (data: DebtorsContactFormData) => {
      console.table(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Bank details updated successfully", {
        duration: 2000,
        richColors: true,
        style: {
          backgroundColor: "rgba(0, 255, 0, 0.15)",
          border: "0.1px solid rgba(0, 255, 0, 0.2)",
          color: "#fff",
        },
      });
    },
    onError: (error) => {
      // Optionally handle error state here
    },
  });

  const form = useForm<DebtorsInfoFormData>({
    resolver: zodResolver(debtorsInfoSchema),
    defaultValues: {
      name: "",
      amount: 0,
      originalDueDate: new Date(),
      serviceOrProductName: "",
      creditorName: "",
      debtorAddress: {
        addressLine1: "",
        city: "",
        state: "Alabama",
        zipCode: "",
      },
      description: "",
    },
  });

  const debtorContactForm = useForm<DebtorsContactFormData>({
    resolver: zodResolver(debtorsContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: DebtorsInfoFormData) => mutation.mutate(data);

  const onSubmitContact = (data: DebtorsContactFormData) => {
    debtorsContactMutation.mutate(data);
  };

  const handleSubmit = () => {
    if (form.formState.isValid) {
      onSubmit(form.getValues());
    }
    if (debtorContactForm.formState.isValid) {
      onSubmitContact(debtorContactForm.getValues());
    }
  };

  return (
    <div className={cn("relative z-20 mx-auto w-full md:px-3")}>
      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-col items-start justify-between">
              <CardTitle>Debt Information</CardTitle>
              <CardDescription className="pt-1 text-base leading-5">
                Add as much information as you can about the outstanding payment
                that you want to collect
              </CardDescription>
            </CardHeader>
          </Card>

          <Grid.Line showHorizontal={false} showVertical={false} />
          <CardContent className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Debtor Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="amount"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount of unpaid debt</FormLabel>
                      <FormControl>
                        <Input placeholder="$ amount" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="originalDueDate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex w-fit justify-start">
                      <FormLabel>
                        Delinquency Date (when your customer&apos;s payment was
                        originally due)
                      </FormLabel>
                      <FormControl>
                        <input
                          placeholder="Select date"
                          type="date"
                          onChange={field.onChange}
                          className="w-fit gap-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="serviceOrProductName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Name of the product or service delivered to the debtor
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter service or product name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="creditorName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Creditor Name (who the debt is owed to)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter creditor name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <>
                  <FormField
                    name="debtorAddress.addressLine1"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Line 1</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter address line 1"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="debtorAddress.city"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="debtorAddress.state"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select State..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.entries(States).map(([key, value]) => (
                              <SelectItem key={key} value={key}>
                                {value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="debtorAddress.zipCode"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter zip code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>

                <FormField
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description of the Debt Situation</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter notes" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="default" className="mt-4 w-full">
                  Save
                </Button>
              </form>
            </Form>
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>
        <Grid.Border isBottom />
      </div>

      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-col items-start justify-between">
              <CardTitle>Debtor Contact Information</CardTitle>
              <CardDescription className="pt-1 text-base leading-5">
                Add all of the contact information for any individual or company
                who owes this debt
              </CardDescription>
            </CardHeader>
          </Card>

          <Grid.Line showHorizontal={false} showVertical={false} />
          <CardContent className="">
            <Form {...debtorContactForm}>
              <form
                onSubmit={debtorContactForm.handleSubmit(onSubmitContact)}
                className="space-y-4"
              >
                <FormField
                  name="name"
                  control={debtorContactForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phoneNumber"
                  control={debtorContactForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={debtorContactForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="default" className="mt-4 w-full">
                  Save
                </Button>
              </form>
            </Form>
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>
        <Grid.Border isBottom />
      </div>

      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-col items-start justify-between">
              <CardTitle>Supporting Documentation</CardTitle>
              <CardDescription className="pt-1 text-base leading-5">
                Upload as many documents as you can to show proof of the debt
              </CardDescription>
            </CardHeader>
          </Card>

          <Grid.Line showHorizontal={false} showVertical={false} />
          <CardContent className="flex items-center justify-center p-2 py-0">
            <UploadDropZone />
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>
        <Grid.Border isBottom />
      </div>

      <div className="flex w-full items-center justify-center">
        <Button variant="default" className="px-5" onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export const UploadDropZone = ({ className }: { className?: string }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const router = useRouter();

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress: number) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);
    return interval;
  };

  return (
    <Dropzone
      multiple={false}
      disabled={isUploading}
      onDrop={async (acceptedFiles) => {
        console.log(`dropped`, acceptedFiles);
        setIsUploading(true);

        const progressInterval = startSimulatedProgress();
      }}
    >
      {({ getInputProps, getRootProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className={cn(
            "my-2 h-64 w-full rounded-lg border border-dashed border-accent-foreground/20",
            className,
          )}
        >
          <div className="flex h-full w-full items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-background hover:bg-accent/25 dark:hover:bg-accent/25"
            >
              <div className="flex select-none flex-col items-center justify-center pb-6 pt-5">
                <Cloud className="mb-2 h-10 w-10 text-zinc-400" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span>Click to upload</span>or drag and drop
                </p>
                <p className="text-xs text-zinc-500">PDF (Up to 4MB)</p>
              </div>
              <input
                {...getInputProps()}
                type="file"
                id="dropzone-file"
                className="hidden"
              />

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="flex max-w-xs items-center divide-x divide-zinc-200 overflow-hidden rounded-md bg-white outline outline-[1px] outline-zinc-200">
                  <div className="grid h-full place-items-center px-3 py-2">
                    <File className="h-4 w-4 text-primary" />
                  </div>
                  <div className="truncate px-3 py-2 text-sm">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading ? (
                <>
                  <div className="mx-auto mt-4 w-full max-w-xs">
                    <Progress
                      indicatorColor={
                        uploadProgress === 100 ? "bg-green-500" : ""
                      }
                      value={uploadProgress}
                      className="h-1 w-full bg-zinc-200"
                    />
                  </div>
                  {uploadProgress === 100 || uploadProgress >= 90 ? (
                    <div className="flex items-center justify-center gap-1 pt-2 text-center text-sm text-zinc-700">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Redirecting...
                    </div>
                  ) : null}
                </>
              ) : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

// const UploadButton = ({ className }: { className?: string }) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <Dialog
//       open={isOpen}
//       onOpenChange={(v) => {
//         if (!v) {
//           setIsOpen(v);
//         }
//       }}
//     >
//       <DialogTrigger onClick={() => setIsOpen(true)} asChild>
//         <Button
//           variant="ghost"
//           className={cn(
//             "mb-4 flex w-full cursor-default items-center justify-center space-x-2 overflow-hidden rounded-md border border-zinc-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-zinc-300 hover:bg-zinc-100",
//             className,
//           )}
//         >
//           Upload File
//         </Button>
//       </DialogTrigger>
//       <DialogContent>
//         <UploadDropZone />
//       </DialogContent>
//     </Dialog>
//   );
// };
export default DebtorDetails;
