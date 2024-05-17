"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import axios from "axios";
import { API_VERSION, BASE_URL } from "@/utils/APIRoutes";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";

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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}${API_VERSION}/contact`, {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })
      .then(({ data }) => {
        setIsLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        toast({
          title: "We'll reach out to you soon",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        toast({
          title: "Uh oh! Something went wrong.",
        });
      });
  };

  return (
    <section
      id="Contact"
      className="z-30 flex flex-col md:flex-row items-center md:items-start bg-white relative"
    >
      {/* grid */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#0077b512_1px,transparent_1px),linear-gradient(to_bottom,#0077b512_1px,transparent_1px)] bg-[size:42px_42px] z-10"></div>
      {/* fade */}
      <div className="absolute top-0 left-0 z-20 right-0  h-24 md:h-32 bg-gradient-to-b from-white to-transparent"></div>
      {/* <div className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-[rgba(0,168,107,0.5)] to-transparent z-50"></div> */}
      <div className="z-50 w-full px-[8vw] py-20 text-center md:text-left md:w-1/2 md:p-24 flex flex-col gap-y-7">
        <h3 className="text-base font-semibold text-minor uppercase">
          Contact
        </h3>
        <h2 className="text-2xl md:text-4xl text-median font-bold">
          Get In Touch
        </h2>
        <div className="flex flex-col gap-y-3 text-base md:text-lg font-normal text-median tracking-wide leading-6">
          <span>1670, Rai Industrial Estate, Sector 38, Sonipat, Haryana</span>
          <span>info@evchargingstationindia.com</span>
          <span>support@evchargingstationindia.com</span>
        </div>
      </div>
      <div className="z-50 w-full px-10 pb-20 md:w-1/2 mt-6 md:mt-0 md:p-24 flex-grow">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-y-10 md:gap-y-16"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
              className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
              className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            onChange={handleChange}
            value={formData.email}
            className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
          />
          <input
            type="string"
            name="phone"
            placeholder="Phone Number *"
            required
            onChange={handleChange}
            value={formData.phone}
            className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Leave us a message..."
            onChange={handleChange}
            value={formData.message}
            className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
            rows={3}
          ></textarea>
          <div className="flex justify-center md:justify-start">
            <Button
              disabled={isLoading}
              className="bg-minor bg-minor:hover border-[1px] border-[#00a86b] text-white w-fit h-fit px-6 py-4 md:px-8 md:py-4 rounded-3xl text-xs md:text-base"
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
