"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname();

  const isDashboard =
    pathname.startsWith("/dashboard/admin") ||
    pathname.startsWith("/founder") ||
    pathname.startsWith("/donor");

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default ConditionalLayout;