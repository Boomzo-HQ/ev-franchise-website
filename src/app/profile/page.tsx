"use client";

import ContactUs from "@/components/general/ContactUs";
import Copyright from "@/components/general/Copyright";
import LoggedInNav from "@/components/general/LoggedInNav";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/cn";
import { useAuth } from "@/utils/AuthContext";
import { BOOKINGTYPE } from "@/utils/bookingType";
import React from "react";

const KeyPair = ({ point, value }: { point: string; value?: string }) => {
  return (
    <div className="flex gap-2">
      <h4 className="font-semibold">{point} :-</h4>
      <h4 className="text-[#70717b]">{value}</h4>
    </div>
  );
};

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <LoggedInNav />
      <div className="relative px-[8vw] py-20 md:py-24 flex flex-col gap-y-12">
        <div className="absolute -z-10 inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#0077b512_1px,transparent_1px),linear-gradient(to_bottom,#0077b512_1px,transparent_1px)] bg-[size:42px_42px]"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(0,168,107,0.5)] to-transparent"></div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
          <h3 className="text-lg md:text-3xl">Your Booking Details:-</h3>
          <h3
            className={cn("text-lg md:text-3xl font-semibold", {
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
        <div className="flex flex-col gap-2 md:hidden">
          <KeyPair point="Name" value={user?.name} />
          <KeyPair point="Email" value={user?.email} />
          <KeyPair point="Phone Number" value={user?.phone} />
          <KeyPair point="Location" value={`${user?.city}, ${user?.state}`} />
          <KeyPair point="Franchise Requested" value={user?.franchiseName} />
          <KeyPair point="Investment Range" value={user?.investmentRange} />
          <KeyPair point="Onboarding As" value={user?.onBoardingAs} />
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
      <Copyright />
    </div>
  );
};

export default Profile;
