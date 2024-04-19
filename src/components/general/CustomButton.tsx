import { Button } from "@/components/ui/button";
import React from "react";

type ButtonProps = {
  // children: React.ReactNode;
  // className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
};

const CustomButton = ({ onClick, text }: ButtonProps) => {
  return (
    <Button
      className="bg-minor bg-minor:hover text-white w-fit h-fit px-6 py-4 md:px-8 md:py-4 rounded-3xl text-xs md:text-base"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
