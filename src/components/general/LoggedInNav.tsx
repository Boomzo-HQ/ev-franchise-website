import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/EV Logo.png";

const LoggedInNav = () => {
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
      </div>
    </nav>
  );
};

export default LoggedInNav;
