// // import { cn } from "@/lib/utils";
// // import React from "react";

// // interface BorderProps {
// //   isBottom?: boolean;
// //   mx?: number;
// // }

// // const Border: React.FC<BorderProps> = ({ isBottom = false, mx = 5 }) => (
// //   <div className="pointer-events-none w-full">
// //     <div className="flex h-5">
// //       <div className="w-5 border-b border-[#E4E7EB]"></div>
// //       <div className="flex-1 border-b border-l border-r border-[#E4E7EB]"></div>
// //       <div className="w-5 border-b border-[#E4E7EB]"></div>
// //     </div>
// //     <div
// //       className={`h-5 border-l border-r border-[#E4E7EB] ${isBottom ? "scale-y-[-1]" : ""} ${
// //         mx ? `mx-${mx}` : "mx-5"
// //       }`}
// //     ></div>
// //   </div>
// // );

// // export const Line = ({
// //   showVertical = true,
// //   showHorizontal = true,
// //   verticalClassName = "",
// //   horizontalClassName = "",
// //   className,
// //   mx = 5,
// // }: {
// //   showVertical?: boolean;
// //   showHorizontal?: boolean;
// //   verticalClassName?: string;
// //   horizontalClassName?: string;
// //   className?: string;
// //   mx?: number;
// // }) => (
// //   <div
// //     className={cn(
// //       "pointer-events-none absolute inset-0 h-full w-full",
// //       className,
// //     )}
// //   >
// //     <div className="relative h-full w-full">
// //       <div
// //         className={cn(
// //           "h-full border-l border-r border-[#E4E7EB]",
// //           mx ? `mx-${mx}` : "mx-5",
// //         )}
// //       ></div>
// //       {showVertical && (
// //         <div
// //           className={cn(
// //             "absolute left-5 right-5 top-1/2 block -translate-y-1/2 border-t border-[#E4E7EB] md:hidden",
// //             verticalClassName,
// //           )}
// //         ></div>
// //       )}

// //       {showHorizontal && (
// //         <div
// //           className={cn(
// //             "absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-[#E4E7EB]",
// //             horizontalClassName,
// //             showHorizontal ? "hidden md:block" : "hidden",
// //           )}
// //         ></div>
// //       )}
// //     </div>
// //   </div>
// // );

// // const Grid = {
// //   Border,
// //   Line,
// // };

// // export default Grid;

// import { cn } from "@/lib/utils";
// import React from "react";

// interface BorderProps {
//   isBottom?: boolean;
//   mx?: number;
// }

// const Border: React.FC<BorderProps> = ({ isBottom = false, mx = 5 }) => (
//   <div className="pointer-events-none w-full">
//     <div className="flex h-5">
//       <div className="w-5 border-b border-[#E4E7EB]"></div>
//       <div className="flex-1 border-b border-l border-r border-[#E4E7EB]"></div>
//       <div className="w-5 border-b border-[#E4E7EB]"></div>
//     </div>
//     <div
//       className={`h-5 border-l border-r border-[#E4E7EB] ${isBottom ? "scale-y-[-1]" : ""} ${
//         mx ? `mx-${mx}` : "mx-5"
//       }`}
//     ></div>
//   </div>
// );

// export const Line = ({
//   showVertical = true,
//   showHorizontal = true,
//   verticalClassName = "",
//   horizontalClassName = "",
//   className,
//   mx = 5,
// }: {
//   showVertical?: boolean;
//   showHorizontal?: boolean;
//   verticalClassName?: string;
//   horizontalClassName?: string;
//   className?: string;
//   mx?: number;
// }) => (
//   <div
//     className={cn(
//       "pointer-events-none absolute inset-0 h-full w-full",
//       className,
//     )}
//   >
//     <div className="relative h-full w-full">
//       <div
//         className={cn(
//           "h-full border-l border-r border-[#E4E7EB]",
//           mx ? `mx-${mx}` : "mx-5",
//         )}
//       ></div>
//       {showVertical && (
//         <div
//           className={cn(
//             "absolute left-5 right-5 top-1/2 block -translate-y-1/2 border-t border-[#E4E7EB] md:hidden",
//             verticalClassName,
//           )}
//         ></div>
//       )}

//       {showHorizontal && (
//         <div
//           className={cn(
//             "absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-[#E4E7EB]",
//             horizontalClassName,
//             showHorizontal ? "hidden md:block" : "hidden",
//           )}
//         ></div>
//       )}

//       {/* Adding middle vertical grid line */}
//       <div
//         className={cn(
//           "absolute inset-y-0 left-1/2 hidden -translate-x-1/2 border-l border-[#E4E7EB] md:block",
//           horizontalClassName,
//         )}
//       ></div>
//     </div>
//   </div>
// );

// interface MiddleLineProps {
//   mx?: number;
// }

// const MiddleLine: React.FC<MiddleLineProps> = ({ mx = 5 }) => (
//   <div className={`flex w-full -mx-${mx} pointer-events-none`}>
//     <div className="w-5 border-b border-[#E4E7EB]"></div>
//     <div className="flex-1 border-b border-l border-r border-[#E4E7EB]"></div>
//     <div className="w-5 border-b border-[#E4E7EB]"></div>{" "}
//   </div>
// );

// const Grid = {
//   Border,
//   Line,
//   MiddleLine,
// };

// export default Grid;

import { cn } from "@/lib/utils";
import React from "react";

interface BorderProps {
  isBottom?: boolean;
  mx?: number;
}

interface MiddleLineProps {
  className?: string;
  mx?: number;
}

const Border: React.FC<BorderProps> = ({ isBottom = false, mx = 5 }) => (
  <div className="pointer-events-none w-full">
    <div className="flex h-5">
      <div className="w-5 border-b border-[#E4E7EB] dark:border-[#333333]"></div>
      <div className="flex-1 border-b border-l border-r border-[#E4E7EB] dark:border-[#333333]"></div>
      <div className="w-5 border-b border-[#E4E7EB] dark:border-[#333333]"></div>
    </div>
    <div
      className={`h-5 border-l border-r border-[#E4E7EB] dark:border-[#333333] ${isBottom ? "scale-y-[-1]" : ""} ${
        mx ? `mx-${mx}` : "mx-5"
      }`}
    ></div>
  </div>
);

const MiddleLine: React.FC<MiddleLineProps> = ({ className, mx = 5 }) => (
  <div className={cn("pointer-events-none w-full", className)}>
    <div className="flex h-5">
      <div className="w-5 border-b border-[#E4E7EB] dark:border-[#333333]"></div>
      <div className="flex-1 border-b border-l border-r border-[#E4E7EB] dark:border-[#333333]"></div>
      <div className="w-5 border-b border-[#E4E7EB] dark:border-[#333333]"></div>
    </div>
  </div>
);

export const Line = ({
  showVertical = true,
  showHorizontal = true,
  verticalClassName = "",
  horizontalClassName = "",
  className,
  mx = 5,
}: {
  showVertical?: boolean;
  showHorizontal?: boolean;
  verticalClassName?: string;
  horizontalClassName?: string;
  className?: string;
  mx?: number;
}) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 h-full w-full",
      className,
    )}
  >
    <div className="relative h-full w-full">
      <div
        className={cn(
          "h-full border-l border-r border-[#E4E7EB] dark:border-[#333333]",
          mx ? `mx-${mx}` : "mx-5",
        )}
      ></div>
      {showVertical && (
        <div
          className={cn(
            "absolute left-5 right-5 top-1/2 block -translate-y-1/2 border-t border-[#E4E7EB] dark:border-[#333333] md:hidden",
            verticalClassName,
          )}
        ></div>
      )}
      {showHorizontal && (
        <div
          className={cn(
            "absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-[#E4E7EB] dark:border-[#333333]",
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
  MiddleLine,
};

export default Grid;
