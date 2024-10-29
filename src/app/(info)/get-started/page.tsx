"use client";

import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { H3, P } from "@/components/ui/typography";
import { geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { BarChart2, DollarSign, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  companyName: z.string().min(2, "Company Name is required"),
  estimatedDebtVolume: z.string().min(2, "Estimated Debt Volume is required"),
  description: z.string().min(2, "Description is required"),
});

type TFormSchema = z.infer<typeof formSchema>;

const GetStarted = () => {
  const mutation = useMutation({
    mutationFn: async (data: TFormSchema) => {
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
      toast.error("Failed to update bank details", {
        duration: 2000,
        richColors: true,
        style: {
          backgroundColor: "rgba(255, 0, 0, 0.15)",
          border: "0.1px solid rgba(255, 0, 0, 0.2)",
          color: "#fff",
        },
      });
      console.error(error);
      // Optionally handle error state here
    },
  });
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      estimatedDebtVolume: "",
      description: "",
    },
  });
  const onSubmit = (data: TFormSchema) => mutation.mutate(data);

  return (
    <div
      className={cn(
        "relative z-20 mx-auto w-full py-8 md:px-3",
        geistSans.variable,
      )}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle>Reqest a Demo</CardTitle>
              <div className="flex flex-row items-center justify-between">
                {/* <Button variant="default"  >
              
                </Button> */}
              </div>
            </CardHeader>
          </Card>
          <CardContent>
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
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          className="w-full lg:w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter email"
                          className="w-full lg:w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phoneNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter phone number"
                          className="w-full lg:w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="companyName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter company name"
                          className="w-full lg:w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="estimatedDebtVolume"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Debt Volume</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter estimated debt volume"
                          className="w-full lg:w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>
        <Grid.Border isBottom />
      </div>

      <div className="mx-auto w-full max-w-5xl px-8">
        <Grid.Border />

        <div className="grid gap-6 px-8 sm:grid-cols-2 lg:grid-cols-3">
          <HighestSuccessRates />
          <LowestCosts />
          <BrandFriendlyMessaging />
        </div>
        <Grid.Border isBottom />
      </div>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <Card className="h-full w-full flex-1">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <H3 className="mb-2">{title}</H3>
        <P className={cn("text-sm text-muted-foreground")}>{description}</P>
      </CardContent>
    </Card>
  );
};

const HighestSuccessRates = () => (
  <InfoCard
    title="Highest Success Rates"
    description="Proven strategies, intelligent AI, and data-driven interactions"
    icon={BarChart2}
  />
);

const LowestCosts = () => (
  <InfoCard
    title="Lowest Costs"
    description="Efficient collection systems leveraging automation and AI"
    icon={DollarSign}
  />
);

const BrandFriendlyMessaging = () => (
  <InfoCard
    title="Brand-Friendly Messaging"
    description="Maintain kind and professional communication with your debtors"
    icon={MessageCircle}
  />
);

export default GetStarted;
