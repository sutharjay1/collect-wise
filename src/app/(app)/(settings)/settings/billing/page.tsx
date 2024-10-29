"use client";

import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { H4 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { StateKeys, States } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const bankDetailsSchema = z.object({
  accountNumber: z
    .string()
    .min(10, "Account Number must be at least 10 digits"),
  routingNumber: z.string().min(9, "Routing Number must be at least 9 digits"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.enum(Object.values(States) as [StateKeys], {
    // errorMap: () => ({ message: "State is required" }),
    // message: "State is required",
  }),
  zipCode: z.string().min(5, "Zip Code must be at least 5 digits"),
});

type BankDetailsFormData = z.infer<typeof bankDetailsSchema>;

const inviteUserSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["Admin", "User"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
});

type InviteUserFormData = z.infer<typeof inviteUserSchema>;

const Settings = () => {
  const mutation = useMutation({
    mutationFn: async (data: BankDetailsFormData) => {
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

  const inviteUserMutation = useMutation({
    mutationFn: async (data: InviteUserFormData) => {
      console.table(data);
      return data;
    },
    onSuccess: () => {
      toast.success("User invited successfully", {
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

  const form = useForm<BankDetailsFormData>({
    resolver: zodResolver(bankDetailsSchema),
    defaultValues: {
      accountNumber: "",
      routingNumber: "",
      address: "",
      city: "",
      state: "Alabama",
      zipCode: "",
    },
  });

  const inviteUserForm = useForm<InviteUserFormData>({
    resolver: zodResolver(inviteUserSchema),
    defaultValues: {
      email: "",
      role: "User",
    },
  });

  const onSubmit = (data: BankDetailsFormData) => mutation.mutate(data);

  const onInviteUserSubmit = (data: InviteUserFormData) => {
    inviteUserMutation.mutate(data);
  };

  return (
    <div className={cn("relative z-20 mx-auto w-full md:px-3")}>
      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Banking Details</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="px-5">
                    Link Bank
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader className="py-1">
                    <DialogTitle>Bank Information</DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        name="accountNumber"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter account number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="routingNumber"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Routing Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter routing number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="address"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="city"
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
                        name="state"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Select
                                value={field.value}
                                onValueChange={(value) => {
                                  field.onChange(value);
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select State..." />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.entries(States).map(
                                    ([key, value]) => (
                                      <SelectItem key={key} value={key}>
                                        {value}
                                      </SelectItem>
                                    ),
                                  )}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="zipCode"
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
                      <Button
                        type="submit"
                        variant="default"
                        className="mt-4 w-full"
                      >
                        Save
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
          </Card>
          <CardContent>
            <H4 className="font-medium">Bank Account:</H4>
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>

        <Grid.Border isBottom />
      </div>

      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Invite Users</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="px-5">
                    Invite User
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader className="py-1">
                    <DialogTitle>Invite User</DialogTitle>
                  </DialogHeader>
                  <Form {...inviteUserForm}>
                    <form
                      onSubmit={inviteUserForm.handleSubmit(onInviteUserSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        name="email"
                        control={inviteUserForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="role"
                        control={inviteUserForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Select Role (or add new role and select your
                              permissions)
                            </FormLabel>
                            <FormControl>
                              <Select
                                value={field.value}
                                onValueChange={(value) => {
                                  field.onChange(value);
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select State..." />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.entries(States).map(
                                    ([key, value]) => (
                                      <SelectItem key={key} value={key}>
                                        {value}
                                      </SelectItem>
                                    ),
                                  )}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                  <DialogFooter className="mt-4 flex w-full flex-1 flex-row items-center gap-2 space-x-0 sm:justify-between sm:space-x-2">
                    <Button
                      variant="default"
                      className="w-full px-6 md:w-fit"
                      asChild
                    >
                      <Link href="/roles">Add role</Link>
                    </Button>
                    <Button
                      type="submit"
                      variant="default"
                      className="w-full px-6 md:mt-0 md:w-fit"
                      onClick={form.handleSubmit(onSubmit)}
                    >
                      Invite
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
          </Card>
          <CardContent>
            <H4 className="font-medium">User List:</H4>
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>

        <Grid.Border isBottom />
      </div>
    </div>
  );
};

export default Settings;
