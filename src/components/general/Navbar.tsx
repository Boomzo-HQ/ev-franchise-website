"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Logo from "../../../public/images/EV Logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   section?.scrollIntoView({ behavior: "smooth" });
  // };

  const router = useRouter();

  return (
    <nav className="bg-[white] w-full px-4 md:px-8 max-w-[1440px] pt-4">
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="flex items-center py-4 px-2">
            <Image
              className="m-0 p-0 w-[120px] md:w-[200px]"
              src={Logo}
              alt="ev-charging-station"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            {
              title: "Home",
              path: "/",
            },
            {
              title: "Income",
              path: "/income",
            },
            {
              title: "About Us",
              path: "/about",
            },
          ].map((option, idx) => {
            return (
              <a
                onClick={() => router.push(option.path)}
                // href="#"
                key={idx}
                className="text-median font-normal text-lg hover:cursor-pointer"
              >
                {option.title}
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
