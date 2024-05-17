"use client";

import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Logo from "../../../public/images/EV Logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BarChart2, Home, Info, LogOut, Menu, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { firstCheck, isLoggedIn, user, signOut } = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if sidebarRef is current and if the click was outside the sidebar
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white w-full px-4 md:px-8 max-w-[1440px] pt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center py-4 px-2">
            <Link href="/">
              <Image
                className="m-0 p-0 w-[120px] md:w-[200px]"
                src={Logo}
                alt="EV Charging Station"
                width={200}
                height={60}
                unoptimized // Add this if you face issues with local images in Next.js Image component
              />
            </Link>
          </div>
        </div>
        <button onClick={toggleSidebar} className="md:hidden mr-4">
          {/* <span className="material-icons">Menu</span> */}
          <Menu />
        </button>
        <div
          ref={sidebarRef}
          className={`flex flex-col justify-between fixed inset-y-0 right-0 bg-black bg-opacity-50 z-50 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden w-4/5`}
        >
          <div className="bg-gray-50 h-full p-4">
            {(isLoggedIn
              ? [
                  { title: "Home", icon: <Home />, path: "/" },
                  { title: "Income", icon: <BarChart2 />, path: "/income" },
                  { title: "About Us", icon: <Info />, path: "/about" },
                  { title: "Profile", icon: <User />, path: "/profile" },
                ]
              : [
                  { title: "Home", icon: <Home />, path: "/" },
                  { title: "Income", icon: <BarChart2 />, path: "/income" },
                  { title: "About Us", icon: <Info />, path: "/about" },
                ]
            ).map((option, idx) => (
              <a
                key={idx}
                className="flex gap-2 p-4 text-gray-700 hover:bg-gray-200"
                onClick={() => {
                  router.push(option.path);
                  toggleSidebar();
                }}
              >
                {option.icon}
                <span>{option.title}</span>
              </a>
            ))}
          </div>
          {isLoggedIn && (
            <div
              className="bg-gray-50 z-50 h-fit flex gap-2 p-8 text-gray-700 hover:bg-gray-200"
              onClick={() => {
                signOut();
                toggleSidebar();
              }}
            >
              <LogOut />
              <span>Logout</span>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { title: "Home", path: "/" },
            { title: "Income", path: "/income" },
            { title: "About Us", path: "/about" },
          ].map((option, idx) => (
            <div
              key={idx}
              className="text-medium font-normal text-lg cursor-pointer hover:underline"
              onClick={() => router.push(option.path)}
            >
              {option.title}
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          {firstCheck &&
            (isLoggedIn ? (
              <Link href="/profile">
                <div className="flex items-center gap-x-2 border rounded-lg border-gray-300 px-4 py-2 hover:bg-gray-100">
                  <Avatar className="bg-gray-300">
                    <AvatarImage
                      src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                      alt="User Profile"
                    />
                  </Avatar>
                  <h2 className="text-gray-800">{user?.name}</h2>
                </div>
              </Link>
            ) : (
              <Link href="/login">
                <CustomButton text="Login" />
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
