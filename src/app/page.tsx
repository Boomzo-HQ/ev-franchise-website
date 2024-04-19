"use client";

import ContactUs from "@/components/general/ContactUs";
import FranchiseTable from "@/components/general/FranchiseTable";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";
import { AuthProvider } from "@/utils/AuthContext";
import Image from "next/image";

export default function Home() {
  return (
    // <AuthProvider>
    <>
      <Navbar />
      <Hero />
      <FranchiseTable />
      <ContactUs />
    </>
  );
}
