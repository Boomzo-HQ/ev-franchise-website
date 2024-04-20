"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <section
      id="Contact"
      className="flex flex-col md:flex-row items-center md:items-start bg-white relative"
    >
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#0077b512_1px,transparent_1px),linear-gradient(to_bottom,#0077b512_1px,transparent_1px)] bg-[size:42px_42px] z-10"></div>
      <div className="z-50 w-full px-[8vw] py-20 text-center md:text-left md:w-1/2 md:p-24 flex flex-col gap-y-7">
        <h3 className="text-base font-semibold text-minor uppercase">
          Contact
        </h3>
        <h2 className="text-2xl md:text-4xl text-median font-bold">
          Get In Touch
        </h2>
        <div className="flex flex-col gap-y-2 text-lg font-normal text-median tracking-wide leading-8">
          <span>1670, Rai Industrial Estate, Sector 38, Sonipat, Haryana</span>
          <span>info@evchargingstationindia.com</span>
          <span>support@evchargingstationindia.com</span>
          <span>Tel: 123-456-7890</span>
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
          <textarea
            name="message"
            placeholder="Leave us a message..."
            onChange={handleChange}
            value={formData.message}
            className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
            rows={3}
          ></textarea>
          <div className="flex justify-center md:justify-start">
            <CustomButton text="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
