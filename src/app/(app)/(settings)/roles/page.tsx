"use client";

import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const roles = {
  "View Debtors": "View Debtors",
  "Add Debtors": "Add Debtors",
  "Edit Debtors": "Edit Debtors",
} as const;

const roleSchema = z.object({
  name: z.string().min(1, "Role name is required"),
  rolePermission: z.enum(["View Debtors", "Add Debtors", "Edit Debtors"], {
    required_error: "Role permission is required",
  }),
});

type RoleSchemaFormData = z.infer<typeof roleSchema>;

const Roles = () => {
  const form = useForm<z.infer<typeof roleSchema>>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: "",
      rolePermission: "Add Debtors",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: RoleSchemaFormData) => {
      console.table(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Role added successfully", {
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
  const onSubmit = (data: RoleSchemaFormData) => mutation.mutate(data);

  return (
    <div className={cn("relative z-20 mx-auto w-full md:px-3")}>
      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Role List</CardTitle>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="px-5">
                    Add Role
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
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Enter Role Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter here..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="rolePermission"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Select permission for this role
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
                                  {Object.entries(roles).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>
                                      {value}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
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

            <CardContent>
              {/* <H4 className="font-medium">Bank Account:</H4> */}
            </CardContent>
            <Grid.Line showHorizontal={false} showVertical={false} />
          </Card>
        </div>

        <Grid.Border isBottom />
      </div>
    </div>
  );
};

export default Roles;
