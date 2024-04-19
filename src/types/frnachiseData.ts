export interface FranchiseType {
  franchiseName: string;
  foundedIn: number;
  franchiseSince: number | "N/A";
  investment: string;
  franchiseFee: string;
  spaceRequirement: string | "N/A";
}

export const FRANCHISE_DATA: FranchiseType[] = [
  {
    franchiseName: "Tata Power",
    foundedIn: 1911,
    franchiseSince: "N/A",
    investment: "₹30-40 Lakhs",
    franchiseFee: "₹2.5 Lakhs",
    spaceRequirement: "N/A",
  },
  {
    franchiseName: "Charzer",
    foundedIn: 2020,
    franchiseSince: 2020,
    investment: "₹5-6 Lakhs",
    franchiseFee: "No Fee",
    spaceRequirement: "N/A",
  },
  {
    franchiseName: "Delta Electronics India",
    foundedIn: 2016,
    franchiseSince: 2018,
    investment: "₹5-10 Lakhs",
    franchiseFee: "₹50,000-1 Lakhs",
    spaceRequirement: "800-1000 Sq. Ft.",
  },
  {
    franchiseName: "Fortum India",
    foundedIn: 2012,
    franchiseSince: 2015,
    investment: "₹8-10 Lakhs",
    franchiseFee: "₹2-3 Lakhs",
    spaceRequirement: "300-600 Sq. Ft.",
  },
  {
    franchiseName: "Charz Up",
    foundedIn: 2022,
    franchiseSince: 2022,
    investment: "₹10-15 Lakhs",
    franchiseFee: "₹2-5 Lakhs",
    spaceRequirement: "250-500 Sq. Ft.",
  },
  {
    franchiseName: "Mass Tech",
    foundedIn: 1993,
    franchiseSince: 2014,
    investment: "₹8-15 Lakhs",
    franchiseFee: "₹2-5 Lakhs",
    spaceRequirement: "300-600 Sq. Ft.",
  },
  {
    franchiseName: "Exicom",
    foundedIn: 1994,
    franchiseSince: "N/A",
    investment: "₹10-15 Lakhs",
    franchiseFee: "₹2-3 Lakhs",
    spaceRequirement: "300-500 Sq. Ft.",
  },
  {
    franchiseName: "Okaya",
    foundedIn: 1998,
    franchiseSince: "N/A",
    investment: "₹15-20 Lakhs",
    franchiseFee: "₹2-4 Lakhs",
    spaceRequirement: "300-600 Sq. Ft.",
  },
  {
    franchiseName: "ABB India",
    foundedIn: 1998,
    franchiseSince: "N/A",
    investment: "₹8-15 Lakhs",
    franchiseFee: "₹2-4 Lakhs",
    spaceRequirement: "300-600 Sq. Ft.",
  },
  {
    franchiseName: "Alpha EV",
    foundedIn: 2020,
    franchiseSince: 2020,
    investment: "₹10-15 Lakhs",
    franchiseFee: "₹1-2 Lakhs",
    spaceRequirement: "400-500 Sq. Ft.",
  },
];
