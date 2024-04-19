"use client";

import Navbar from "@/components/general/Navbar";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/AuthContext";

const Booked = () => {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push("/profile"); // Update the path to your actual profile page's route
  };

  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20 md:py-24 space-y-12 bg-white rounded-lg">
        <p className="text-lg text-gray-700">
          We have received your booking request. We'll reach out to you soon.
        </p>
        <p>Here's your password :- {user?.tempPassword}</p>
        <button
          onClick={navigateToProfile}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Reset Password
        </button>
        <button
          onClick={navigateToProfile}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Booked;
