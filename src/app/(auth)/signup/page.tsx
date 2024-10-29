"use client";

import Alert from "@/components/global/alert";
import Grid from "@/components/global/grid";
import { Logo } from "@/components/global/nav-bar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { P } from "@/components/ui/typography";
import { geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient, useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
  checkbox: z.boolean().refine((val) => val, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof schema>;

const SignUp = () => {
  const queryClient = new QueryClient();
  const [step, setStep] = useState<"input" | "confirmation">("input");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      checkbox: false,
    },
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (data: FormValues) => {
      // throw new Error("Something went wrong. Please try again.");

      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;
    },
    onSuccess: () => {
      setStep("confirmation");
    },
    onError: () => {
      form.setError("email", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-background">
      <div
        className={cn(
          "w-full space-y-6 pt-48",
          step === "input" ? "max-w-lg" : "max-w-xl",
        )}
      >
        <div className="flex justify-center">
          <Logo
            // height={10}
            // width={100}
            className="h-10 w-auto object-contain"
            // src="/logo.jpg"
          />
        </div>

        {step === "input" && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 px-6"
            >
              <h1
                className={cn(
                  "text-center text-xl font-medium text-zinc-900 dark:text-zinc-200",
                  geistSans.className,
                )}
              >
                What&apos;s your email address?
              </h1>

              <div className="mx-auto flex w-full max-w-md flex-col">
                <Grid.Border />
                <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your email address..."
                          />
                        </FormControl>
                        {/* <FormDescription>
                      We&apos;ll send a temporary login link.
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Grid.Line showHorizontal={false} showVertical />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Enter your password..."
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Grid.Line showHorizontal={false} showVertical />
                  <FormField
                    control={form.control}
                    name="checkbox"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                            />
                            <P className="ml-2 gap-x-2 text-zinc-900 dark:text-zinc-200">
                              By checking this box, you agree to our{" "}
                              <Link
                                href="/terms-of-service"
                                className="font-medium"
                              >
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link
                                href="/privacy-policy"
                                className="font-medium"
                              >
                                Privacy Policy
                              </Link>
                              .
                            </P>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Grid.Line showHorizontal={false} showVertical />
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="h-10 w-full bg-base px-5 text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-20"
                  >
                    {form.formState.isSubmitting
                      ? "Sending..."
                      : "Continue with Email"}
                  </Button>
                  <Grid.Line showHorizontal={false} showVertical />
                  <Button
                    variant="link"
                    className="text-sm text-zinc-700 dark:text-zinc-400"
                    asChild
                  >
                    <Link href="/login">Back to login</Link>
                  </Button>
                </div>
                {isError && (
                  <Alert
                    title="Error"
                    description={error?.message}
                    type="error"
                  />
                )}
                <Grid.Border isBottom />
              </div>
            </form>
          </Form>
        )}

        {step === "confirmation" && (
          <div className="space-y-4 px-6 text-center">
            <h1
              className={cn(
                "text-xl font-medium text-zinc-900 dark:text-zinc-200",
                geistSans.className,
              )}
            >
              Check your email
            </h1>

            <div className="space-y-1">
              <P className="text-base font-medium text-zinc-900 dark:text-zinc-200">
                We&apos;ve sent a temporary login link.
              </P>
              <P className="w-full text-base font-medium text-zinc-900 dark:text-zinc-200">
                Please check your inbox at{" "}
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                  {form.getValues("email")}
                </span>
              </P>
            </div>

            <div className="text-center">
              <Button
                variant="link"
                className="text-sm text-zinc-700 dark:text-zinc-400"
                asChild
              >
                <Link href="/login">Back to login</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
