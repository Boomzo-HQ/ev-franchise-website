"use client";

import ContactUs from "@/components/general/ContactUs";
import Navbar from "@/components/general/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { useAuth } from "@/utils/AuthContext";
import { cn } from "@/lib/cn";
import { useAuth } from "@/utils/AuthContext";
import React from "react";

const KeyPair = ({ point, value }: { point: string; value?: string }) => {
  return (
    <div className="flex gap-2">
      <h4 className="font-semibold">{point} :-</h4>
      <h4 className="text-[#70717b]">{value}</h4>
    </div>
  );
};
export enum BOOKINGTYPE {
  processing = "UNDER_PROCESSING",
  started = "PROCESS_STARTED",
  completed = "COMPLETED",
}

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <div className="px-[8vw] py-20 md:py-24 flex flex-col gap-y-12">
        <div className="flex gap-4 items-center">
          <h3 className="text-3xl">Your Booking Details:-</h3>
          <h3
            className={cn("text-3xl font-semibold", {
              "text-red-600": user?.status == BOOKINGTYPE.processing,
              "text-yellow-600": user?.status == BOOKINGTYPE.started,
              "text-green-600": user?.status == BOOKINGTYPE.completed,
            })}
          >
            {user?.status}
          </h3>
        </div>
        <div className="hidden md:grid md:grid-cols-2 md:gap-4">
          <KeyPair point="Name" value={user?.name} />
          <KeyPair point="Franchise Requested" value={user?.franchiseName} />
          <KeyPair point="Email" value={user?.email} />
          <KeyPair point="Investment Range" value={user?.investmentRange} />
          <KeyPair point="Phone Number" value={user?.phone} />
          <KeyPair point="Onboarding As" value={user?.onBoardingAs} />
          <KeyPair point="Location" value={`${user?.city}, ${user?.state}`} />
          <KeyPair point="Temp password" value={user?.tempPassword} />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Location Image :-</h3>
            {user?.locationImage ? (
              <Avatar className="w-36 h-36">
                <AvatarImage src={user?.locationImage} alt="@shadcn" />
              </Avatar>
            ) : (
              "Image hasnt been uploaded yet"
            )}
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Profile;
