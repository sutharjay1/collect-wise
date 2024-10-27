import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const Oval = ({ children, backgroundColor }: Props) => {
  return (
    <section
      className={cn(
        "relative w-full px-4 py-16 sm:px-6 lg:px-8",
        backgroundColor ? backgroundColor : "bg-[#056B5F]",
      )}
    >
      <svg
        viewBox="0 0 1440 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 w-full"
      >
        <path
          d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V0H-100V58Z"
          fill="#fff"
        />
      </svg>

      <section className="relative z-10 px-4 py-16 text-white sm:px-6 lg:px-8">
        {children}
      </section>

      <svg
        viewBox="0 0 1440 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full"
      >
        <path
          transform="scale(-1, -1) translate(-1440, -58)"
          d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V0H-100V58Z"
          fill="#fff"
        />
      </svg>
    </section>
  );
};

export default Oval;
