import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

const BaseLayout = ({
  className,
  children,
  active,
}: {
  className?: string;
  children: ReactNode;
  active: string;
}) => {
  return (
    <div
      className={cn(
        "h-screen w-screen flex flex-col justify-between items-center",
        className
      )}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
