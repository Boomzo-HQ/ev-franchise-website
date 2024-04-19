"use client";

import ContactUs from "@/components/general/ContactUs";
import Copyright from "@/components/general/Copyright";
import FranchiseTable from "@/components/general/FranchiseTable";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";

export default function Home() {
  return (
    // <AuthProvider>
    <>
      <Navbar />
      <Hero />
      <FranchiseTable />
      <ContactUs />
      <Copyright />
    </>
  );
}
