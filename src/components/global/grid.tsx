import { cn } from "@/lib/utils";
import React from "react";

interface BorderProps {
  isBottom?: boolean;
}

const Border: React.FC<BorderProps> = ({ isBottom = false }) => (
  <div className="pointer-events-none w-full">
    <div className="flex h-5">
      <div className="w-5 border-b border-[#E4E7EB]"></div>
      <div className="flex-1 border-b border-l border-r border-[#E4E7EB]"></div>
      <div className="w-5 border-b border-[#E4E7EB]"></div>
    </div>
    <div
      className={`mx-5 h-5 border-l border-r border-[#E4E7EB] ${isBottom ? "scale-y-[-1]" : ""}`}
    ></div>
  </div>
);

export const Line = ({
  showVertical = true,
  showHorizontal = true,
  verticalClassName = "",
  horizontalClassName = "",
}: {
  showVertical?: boolean;
  showHorizontal?: boolean;
  verticalClassName?: string;
  horizontalClassName?: string;
}) => (
  <div className="pointer-events-none absolute inset-0 h-full w-full">
    <div className="relative h-full w-full">
      <div className="mx-5 h-full border-l border-r border-[#E4E7EB]"></div>
      {showVertical && (
        <div
          className={cn(
            "absolute left-5 right-5 top-1/2 block -translate-y-1/2 border-t border-[#E4E7EB] md:hidden",
            verticalClassName,
          )}
        ></div>
      )}

      {showHorizontal && (
        <div
          className={cn(
            "absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-[#E4E7EB]",
            horizontalClassName,
            showHorizontal ? "hidden md:block" : "hidden",
          )}
        ></div>
      )}
    </div>
  </div>
);

const Grid = {
  Border,
  Line,
};

export default Grid;
