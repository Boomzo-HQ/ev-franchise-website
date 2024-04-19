"use client"
import { API_VERSION, BASE_URL } from "@/utils/APIRoutes";
import { useAuth } from "@/utils/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "../login/page";

const page = () => {
  const { user, signIn } = useAuth();

  const formSchema = z
    .object({
      tempPassword: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"], // This will associate the error with the confirmPassword field
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tempPassword: user?.tempPassword,
      password: "",
      confirmPassword: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}${API_VERSION}/auth/reset-password`, {
        tempPassword: values.tempPassword,
        password: values.password,
      })
      .then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        const user = data.user;
        user.token = data.token;
        signIn(user);
        router.push("/profile");
      })
      .catch((data) => {
        console.log(data.response);
        setIsLoading(false);
        // toast.error(errMsg, toastOptions);
      });
  }

  return (
    <div className="grid gap-6 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="string" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-4 bg-black text-white" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;
