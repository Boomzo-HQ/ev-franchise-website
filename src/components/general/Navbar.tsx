"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { useAuth } from "@/utils/AuthContext";

const Navbar = () => {
  const { isLoggedIn, firstCheck } = useAuth();

  return (
    <nav className="bg-[white] w-full px-4 md:px-8 max-w-[1440px] pt-4">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div>
          {/* Website Logo */}
          <a href="#" className="flex items-center py-4 px-2">
            <span className="font-semibold text-median text-lg md:text-3xl">
              EV Charging Station
            </span>
          </a>
        </div>
        {/* Primary Navbar items */}
        {!isLoggedIn && firstCheck && (
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Franchises", "Contact"].map((option, idx) => {
              return (
                <a
                  href="#"
                  key={idx}
                  className="text-median font-normal text-lg"
                >
                  {option}
                </a>
              );
            })}
          </div>
        )}
        {!isLoggedIn && firstCheck && <CustomButton text="Login" />}
      </div>
    </nav>
  );
};

export default Navbar;
