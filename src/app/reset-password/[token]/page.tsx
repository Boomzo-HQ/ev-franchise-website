"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";
import { API_VERSION, BASE_URL } from "@/utils/APIRoutes";

type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
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

const ResetPasswordForm = () => {
  const formSchema = z.object({
    password: z.string(),
    passwordConfirm: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [token, settoken] = useState<string>("");

  useEffect(() => {
    let path = window.location.pathname;
    const token = path.replace("/reset-password/", "");
    console.log(path);
    console.log(token);
    settoken(token);
  }, []);

  const { signIn } = useAuth();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);

    await axios
      .patch(`${BASE_URL}${API_VERSION}/auth/reset-password/${token}`, {
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      })
      .then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        const user = data.user;
        user.token = data.token;
        signIn(user);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col">
            <Button
              type="submit"
              className="mt-4 text-white bg-black"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Reset Password
            </Button>
            {/* <Button type="button" className="mt-4">
              <Link to={ROUTES.login}>Back</Link>
            </Button> */}
          </div>
        </div>
      </form>
    </Form>
  );
};

const ResetPassword = () => {
  return (
    <div className="lg:p-8 w-screen h-screen flex items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <p className="text-sm text-muted-foreground">
            Enter your email associated with your account and we would send you
            a mail with a link to reset your password
          </p>
        </div>
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
