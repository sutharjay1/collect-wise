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
import { geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

const ForgotPassword = () => {
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data.email === "test@example.com") {
            resolve(data);
          } else {
            reject(new Error("No account found with that email address."));
          }
        }, 1000);
      });
    },
    onSuccess: () => {
      setSuccessMessage("A password reset link has been sent to your email.");
      setErrorMessage("");
      toast.success("A password reset link has been sent to your email.", {
        duration: 2000,
        richColors: true,
        style: {
          backgroundColor: "rgba(0, 255, 0, 0.15)",
          border: "0.1px solid rgba(0, 255, 0, 0.2)",
          color: "#fff",
        },
      });
    },
    onError: (error: Error) => {
      setIsError(true);
      setErrorMessage(error.message);
      setSuccessMessage("");

      toast.error("Failed to reset password", {
        duration: 2000,
        richColors: true,
        style: {
          backgroundColor: "rgba(255, 0, 0, 0.15)",
          border: "0.1px solid rgba(255, 0, 0, 0.2)",
          color: "#fff",
        },
      });
      console.error(error);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsError(false);
    setSuccessMessage("");
    setErrorMessage("");
    mutate(data);
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-background">
      <div className="w-full max-w-xl space-y-6 pt-48">
        <div className="flex justify-center">
          <Logo className="h-10 w-auto object-contain" />
        </div>

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
              Forgot Password
            </h1>
            <h1
              className={cn(
                "text-center text-sm font-medium text-zinc-900 dark:text-zinc-200 md:text-xl",
                geistSans.className,
              )}
            >
              Enter the email associated with your CollectWise account and
              we&apos;ll send you a link to reset your password
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Grid.Line showHorizontal={false} showVertical />

                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-10 w-full bg-base px-5 text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-20"
                >
                  {isPending ? "Sending..." : "Send Password Reset Link"}
                </Button>
                <Grid.Line showHorizontal={false} showVertical />

                <Button
                  variant="link"
                  className="text-center text-sm text-zinc-700 dark:text-zinc-400"
                  asChild
                >
                  <Link href="/login">Back to login</Link>
                </Button>
              </div>
              <Grid.Border isBottom />

              {isError && (
                <Alert title="Error" description={errorMessage} type="error" />
              )}
              {successMessage && (
                <Alert
                  title="Success"
                  description={successMessage}
                  type="success"
                />
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
