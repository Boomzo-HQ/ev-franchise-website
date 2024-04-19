"use client";

import axios from "axios";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuth } from "@/utils/AuthContext";
import { API_VERSION, BASE_URL } from "@/utils/APIRoutes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};

const UserAuthForm = () => {
  const formSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { signIn } = useAuth();

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}${API_VERSION}/auth/login`, {
        email: values.email,
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
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
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="lg:p-8 w-screen h-screen flex items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign In to your Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below to signin to your account
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
};

export default Login;
