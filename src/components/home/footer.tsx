import Link from "next/link";
import { P } from "../ui/typography";

const Footer = () => {
  return (
    <footer className="relative flex w-full items-center justify-center overflow-hidden bg-background px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="relative z-40 h-16 w-full md:h-60" aria-hidden="true">
        <div className="absolute left-1/2 -z-10 -translate-x-1/2 translate-y-[80%] text-center text-[60px] font-bold leading-none md:translate-y-[54%] md:text-[208px]">
          <span className="select-none bg-gradient-to-b from-transparent to-base/30 bg-clip-text text-transparent">
            CollectWise
          </span>
        </div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-base blur-[80px]"></div>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-10 z-50 mx-auto w-full max-w-5xl text-center">
        <P className="mb-4">
          © {new Date().getFullYear()} Collect Wise. All rights reserved.
        </P>
      </div>
    </footer>
  );
};

export default Footer;
