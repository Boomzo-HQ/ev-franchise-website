"use client";

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
import { toast } from "@/components/ui/use-toast";
import { API_VERSION, BASE_URL } from "@/utils/APIRoutes";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const ForgetPasswordForm = () => {
  const formSchema = z.object({
    email: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);

    await axios
      .patch(`${BASE_URL}${API_VERSION}/auth/forgotPassword`, {
        email: values.email,
      })
      .then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        toast({
          title: "Token sent to email. Check your email!!",
        });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Some error occured! Please try again!!",
        });
      });
  }

  return (
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
          <div className="flex flex-col">
            <Button
              type="submit"
              className="mt-4 bg-black text-white"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Send Mail
            </Button>
            <Button type="button" className="mt-4 bg-black text-white">
              <Link href={"/login"}>Back</Link>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

const ForgotPasswrd = () => {
  return (
    <div className="lg:p-8 w-screen h-screen flex items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <p className="text-sm text-muted-foreground">
            Enter your email associated with your account and we would send you
            a mail with a link to reset your password
          </p>
        </div>
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswrd;
