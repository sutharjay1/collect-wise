// import { cn } from "@/lib/utils";
// import React from "react";

// type LayoutProps = {
//   children: React.ReactNode;
//   label?: string;
//   button?: React.ReactNode;
//   className?: string;
//   parentClassName?: string;
// };

// const Layout = ({
//   children,
//   label,
//   button,
//   className,
//   parentClassName,
// }: LayoutProps) => {
//   return (
//     <div className="scrollContainer relative pb-10 pt-4">
//       {/* <div className="pointer-events-none fixed left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-rose-600 to-transparent opacity-80" /> */}

//       <div
//         className={cn(
//           "relative z-20 mx-auto flex max-w-5xl items-center justify-between px-3 pb-2 md:px-6",
//           parentClassName,
//         )}
//       >
//         <h1 className="text-text relative text-2xl font-bold leading-tight tracking-tight md:text-4xl">
//           {label}
//           <span
//             className="absolute -right-3 bottom-1 h-2 w-2 rounded-full bg-green-600"
//             aria-hidden="true"
//           />
//         </h1>
//         {button}
//       </div>

//       <div
//         className={cn(
//           "relative z-20 mx-auto max-w-5xl px-3 md:px-6",
//           className,
//         )}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;

import { cn } from "@/lib/utils";
import React from "react";

type InnerLayoutProps = {
  children: React.ReactNode;
  label?: string;
  button?: React.ReactNode;
  className?: string;
  parentClassName?: string;
};

const InnerLayout = ({
  children,
  label,
  button,
  className,
  parentClassName,
}: InnerLayoutProps) => {
  return (
    <div className="scrollContainer relative pb-10 pt-4">
      {/* Title and Action Button */}
      <div
        className={cn(
          "relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 pb-4 md:px-6",
          parentClassName,
        )}
      >
        {label && (
          <h1 className="text-text text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {label}
            <span
              className="absolute -right-3 bottom-1 h-2 w-2 rounded-full bg-green-600"
              aria-hidden="true"
            />
          </h1>
        )}
        {button && <div>{button}</div>}
      </div>

      {/* Children Content */}
      <div
        className={cn(
          "relative z-20 mx-auto max-w-5xl px-4 md:px-6",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default InnerLayout;
