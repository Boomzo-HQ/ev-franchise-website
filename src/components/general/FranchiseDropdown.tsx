"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FRANCHISE_DATA, FranchiseType } from "@/types/frnachiseData";
import BookingForm from "./BookingForm";

const KeyPair = ({ point, value }: { point?: string; value?: any }) => {
  return (
    <div className="flex gap-2">
      <h4 className="font-semibold">{point} :-</h4>
      <h4 className="text-[#70717b]">{value}</h4>
    </div>
  );
};

const FranchiseDropdown = () => {
  const [position, setPosition] = React.useState(
    FRANCHISE_DATA[0].franchiseName
  );

  const [selectedFranchise, setselectedFranchise] =
    React.useState<FranchiseType>(FRANCHISE_DATA[0]);

  const dropdownHandler = (value: any) => {
    // console.log(value);
    setPosition(value);
    const franchise: FranchiseType | undefined = FRANCHISE_DATA.find(
      (franchise) => franchise.franchiseName == value
    );
    if (franchise) {
      // console.log("check");
      setselectedFranchise(franchise);
    }
  };

  return (
    <section
      id="Franchises"
      className="bg-[white] flex flex-col gap-y-8 py-16 md:py-20 px-[8vw]"
    >
      <h1
        className="text-xl lg:text-3xl font-semibold text-median text-center lg:text-left"
        style={{ lineHeight: "1.25" }}
      >
        Top 10 EV Charging Station Franchise Cost and Price in India 2024
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{position}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[80vw] bg-white h-[40vh] overflow-y-auto">
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={(value) => dropdownHandler(value)}
          >
            {FRANCHISE_DATA.map((franchise, idx) => {
              return (
                <DropdownMenuRadioItem
                  key={idx}
                  value={franchise.franchiseName}
                >
                  {franchise.franchiseName}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex flex-col gap-2 md:hidden">
        <KeyPair
          point="Franchise Name"
          value={selectedFranchise.franchiseName}
        />
        <KeyPair
          point="Franchise Since"
          value={selectedFranchise.franchiseSince}
        />
        <KeyPair point="Investment" value={selectedFranchise.investment} />
        <KeyPair point="Franchise Fee" value={selectedFranchise.franchiseFee} />
        <KeyPair
          point="Space Requirement"
          value={selectedFranchise.spaceRequirement}
        />
      </div>
      <div className="w-full flex justify-center">
        <BookingForm franchise={selectedFranchise.franchiseName} />
      </div>
    </section>
  );
};

export default FranchiseDropdown;
