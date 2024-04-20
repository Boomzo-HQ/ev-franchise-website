import ContactUs from "@/components/general/ContactUs";
import Copyright from "@/components/general/Copyright";
import Navbar from "@/components/general/Navbar";
import React from "react";

const franchises = [
  {
    name: "Tata Power Franchise",
    description:
      "Operates an extensive network of EV charging stations across India with over 1,000 charging points in 180 cities across 15+ states.",
    investment: "₹5-20 Lakhs",
    space: "250-500 Sq. Ft.",
    pros: [
      "Established Reputation",
      "Extensive Network",
      "Smart Charging capabilities",
    ],
    cons: [
      "Initial Investment can be substantial depending on location and scale",
    ],
  },
  {
    name: "Charzer Franchise",
    description:
      "Focuses on providing affordable 3.3 kV portable Kirana chargers for small businesses and public areas.",
    investment: "₹5-6 Lakhs",
    pros: ["Affordable Solution", "Earning Potential"],
    cons: ["Market Penetration may take time"],
  },
  {
    name: "Delta Electronics India Franchise",
    description:
      "Provides a versatile range of EV charging solutions including DC Quick Chargers and AC EV Chargers.",
    investment: "₹5-10 Lakhs",
    space: "800-1000 Sq. Ft.",
    pros: ["Sales Leadership", "Versatile Offerings"],
    cons: ["Space Requirement may increase initial setup cost"],
  },
  {
    name: "Fortum India Franchise",
    description:
      "A global player in the clean energy sector from Finland, expanding its EV infrastructure in India since 2012.",
    investment: "₹8-10 Lakhs",
    space: "300-600 Sq. Ft.",
    pros: ["Global Presence", "Public Charging Points"],
    cons: ["Higher Investment compared to local providers"],
  },
  {
    name: "Charz UP Franchise",
    description:
      "A 2022 startup focusing on a sustainable EV charging network powered by 100% green energy.",
    investment: "₹10-15 Lakhs",
    space: "250-500 Sq. Ft.",
    pros: ["Green Energy Focus", "Innovative Technology"],
    cons: ["New Market Entrant challenges"],
  },
  {
    name: "Mass Tech Franchise",
    description:
      "Venturing into EV charging stations since 2014, collaborates with major OEMs like TATA Motors.",
    investment: "₹8-15 Lakhs",
    space: "300-600 Sq. Ft.",
    pros: ["Diversified Products", "OEM Collaboration"],
    cons: ["Focused Product Range may not appeal to all potential EV users"],
  },
  {
    name: "Exicom Franchise",
    description:
      "Specializes in EV charging solutions for both public and home use, supporting multiple standards.",
    investment: "₹10-15 Lakhs",
    space: "300-500 Sq. Ft.",
    pros: ["Comprehensive Charging Solutions", "Advanced Technology"],
    cons: ["Complex Technology requires more technical expertise"],
  },
  {
    name: "Okaya Franchise",
    description:
      "Offers a complete range of EV solutions including chargers, swapping, and charging stations.",
    investment: "₹15-20 Lakhs",
    space: "300-600 Sq. Ft.",
    pros: ["Complete EV Solutions", "International Standards"],
    cons: ["High Investment requirement"],
  },
  {
    name: "ABB India Franchise",
    description:
      "Global leader in electric mobility, collaborates with EV Motors India.",
    investment: "₹8-15 Lakhs",
    space: "300-600 Sq. Ft.",
    pros: ["Global Leadership", "Connected Services"],
    cons: ["Premium Pricing due to brand reputation"],
  },
  {
    name: "1C EV Charging",
    description:
      "A new-age startup focusing on innovative EV charging solutions, partnering with giants like IOCL.",
    pros: ["Affordability and Quality", "User-Friendly Business Model"],
    cons: ["Efforts needed in gaining recognition and trust"],
  },
  {
    name: "Alpha EV Franchise",
    description:
      "Established in 2020 in Pune, focuses on producing widespread AC chargers across India.",
    investment: "₹10-15 Lakhs",
    space: "400-500 Sq. Ft.",
    pros: ["Experienced Management", "Specializes in AC Chargers"],
    cons: ["Newer Brand faces initial market penetration challenges"],
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative px-[8vw] py-20 md:py-24-24">
        <div className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[rgba(0,168,107,0.5)] to-transparent"></div>

        <h1 className="text-3xl font-bold text-center mb-10">
          Leading EV Charging Station Providers in India
        </h1>
        <div className="space-y-8">
          {franchises.map((franchise, index) => (
            <div
              key={index}
              className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">{franchise.name}</h2>
              <p className="mb-4">{franchise.description}</p>
              <div className="mb-3">
                <strong>Investment:</strong> {franchise.investment}
              </div>
              <div className="mb-3">
                <strong>Space Required:</strong> {franchise.space}
              </div>
              <div>
                <h3 className="font-semibold">Pros:</h3>
                <ul className="list-disc ml-8 mb-4">
                  {franchise.pros.map((pro, proIndex) => (
                    <li key={proIndex}>{pro}</li>
                  ))}
                </ul>
                <h3 className="font-semibold">Cons:</h3>
                <ul className="list-disc ml-8">
                  {franchise.cons.map((con, conIndex) => (
                    <li key={conIndex}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default page;
