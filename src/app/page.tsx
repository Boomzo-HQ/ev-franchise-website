"use client";

import ContactUs from "@/components/general/ContactUs";
import Copyright from "@/components/general/Copyright";
import FranchiseDropdown from "@/components/general/FranchiseDropdown";
import FranchiseTable from "@/components/general/FranchiseTable";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="hidden md:block">
        <FranchiseTable />
      </div>
      <div className="block md:hidden">
        <FranchiseDropdown />
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
}
