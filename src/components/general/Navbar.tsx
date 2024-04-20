"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Logo from "../../../public/images/EV Logo.png";
import Link from "next/link";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-[white] w-full px-4 md:px-8 max-w-[1440px] pt-4">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div>
          {/* Website Logo */}
          <a href="#" className="flex items-center py-4 px-2">
            {/* <span className="font-semibold text-median text-lg md:text-3xl">
              EV Charging Station
            </span> */}
            <Image
              className="m-0 p-0 w-[120px] md:w-[200px]"
              src={Logo}
              alt="ev-charging-station"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Franchises", "Contact"].map((option, idx) => {
            return (
              <a
                onClick={() => scrollToSection(option)}
                href="#"
                key={idx}
                className="text-median font-normal text-lg"
              >
                {option}
              </a>
            );
          })}
        </div>
        <Link href={"/login"}>
          <CustomButton text="Login" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
