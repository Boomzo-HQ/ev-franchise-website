"use client";

import ContactUs from "@/components/general/ContactUs";
import Copyright from "@/components/general/Copyright";
import FranchiseTable from "@/components/general/FranchiseTable";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";
import { useAuth } from "@/utils/AuthContext";

export default function Home() {
  const { firstCheck } = useAuth();
  return (
    firstCheck && (
      <>
        <Navbar />
        <Hero />
        <FranchiseTable />
        <ContactUs />
        <Copyright />
      </>
    )
  );
}
