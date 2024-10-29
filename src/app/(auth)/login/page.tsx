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
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormValues = z.infer<typeof schema>;

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            data.email === "test@example.com" &&
            data.password === "password123"
          ) {
            resolve(data);
          } else {
            reject(new Error("Invalid credentials. Please try again."));
          }
        }, 1000);
      });
    },
    onSuccess: () => {
      alert("Login successful!");
    },
    onError: (error: any) => {
      setIsError(true);
      setErrorMessage(error.message);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsError(false);
    setErrorMessage("");
    mutate(data);
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-background">
      <div className="w-full max-w-lg space-y-6 pt-48">
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
                "my-4 text-center text-xl font-medium text-zinc-900 dark:text-zinc-200",
                geistSans.className,
              )}
            >
              Welcome Back
            </h1>
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
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="/forgot-password"
                          className="text-base text-sm dark:text-zinc-400"
                        >
                          Forgot Password?
                        </Link>
                      </div>
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
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-10 w-full bg-base px-5 text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-20"
                >
                  {isPending ? "Logging in..." : "Log In"}
                </Button>

                {isError && (
                  <Alert
                    title="Error"
                    description={errorMessage}
                    type="error"
                  />
                )}

                <div className="text-center">
                  <Button
                    variant="link"
                    className="text-sm text-zinc-700 dark:text-zinc-400"
                    asChild
                  >
                    <Link href="/signup">Don't have an account? Sign Up</Link>
                  </Button>
                </div>
              </div>

              <Grid.Border isBottom />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
