import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import { Toaster } from "@/components/ui/toaster";
// import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EV Charging Station",
  description:
    "EV Charging Business Opportunities | Own a Profitable Station | Explore EV Charging Franchise Options",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthProvider>
        <html lang="en">
          <body>
            <main>{children}</main>
            <Toaster />
          </body>
        </html>
      </AuthProvider>
    </>
  );
}
