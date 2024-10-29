// import { cn } from "@/lib/utils";
// import React from "react";

// interface GridContainerProps {
//   children: React.ReactNode;
//   className?: string;
// }

// interface GridItemProps {
//   children: React.ReactNode;
//   className?: string;
// }

// interface GridBorderProps {
//   orientation?: "horizontal" | "vertical";
//   className?: string;
// }

// const GridContainer: React.FC<GridContainerProps> = ({ children, className }) => {
//   return (
//     <div className={cn("relative grid w-full gap-0 rounded-lg border border-[#E4E7EB]", className)}>
//       {children}
//     </div>
//   );
// };

// const GridItem: React.FC<GridItemProps> = ({ children, className }) => {
//   return (
//     <div className={cn("relative p-6", className)}>
//       {children}
//     </div>
//   );
// };

// const GridBorder: React.FC<GridBorderProps> = ({
//   orientation = "horizontal",
//   className
// }) => {
//   if (orientation === "horizontal") {
//     return (
//       <div className={cn("relative w-full", className)}>
//         <div className="absolute inset-x-0 h-[1px] bg-[#E4E7EB]" />
//       </div>
//     );
//   }

//   return (
//     <div className={cn("relative h-full", className)}>
//       <div className="absolute inset-y-0 w-[1px] bg-[#E4E7EB]" />
//     </div>
//   );
// };

// // Example 2x2 grid layout component
// const TwoByTwoGrid: React.FC<{
//   children?: React.ReactNode;
//   className?: string;
// }> = ({ children, className }) => {
//   return (
//     <GridContainer className={cn("grid-cols-1 md:grid-cols-2", className)}>
//       {children}
//       <div className="absolute left-1/2 top-0 hidden h-full w-[1px] bg-[#E4E7EB] md:block" />
//       <div className="absolute left-0 top-1/2 h-[1px] w-full bg-[#E4E7EB]" />
//     </GridContainer>
//   );
// };

// const Grid = {
//   Container: GridContainer,
//   Item: GridItem,
//   Border: GridBorder,
//   TwoByTwoGrid
// };

// export default Grid;

import { cn } from "@/lib/utils";
import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  rows?: 1 | 2 | 3 | 4;
  gap?: number;
  showOuterBorder?: boolean;
  showInnerBorders?: boolean;
  showEdges?: boolean;
  padding?: number;
}

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

interface EdgeBorderProps {
  position: "top" | "bottom";
  className?: string;
}

const EdgeBorder: React.FC<EdgeBorderProps> = ({ position, className }) => (
  <div className={cn("pointer-events-none w-full", className)}>
    <div className="flex h-5">
      <div className="w-5 border-b border-[#E4E7EB]"></div>
      <div className="flex-1 border-b border-l border-r border-[#E4E7EB]"></div>
      <div className="w-5 border-b border-[#E4E7EB]"></div>
    </div>
    {position === "top" && (
      <div className="mx-5 h-5 border-l border-r border-[#E4E7EB]"></div>
    )}
    {position === "bottom" && (
      <div className="mx-5 h-5 scale-y-[-1] border-l border-r border-[#E4E7EB]"></div>
    )}
  </div>
);

const GridItem: React.FC<GridItemProps> = ({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}) => {
  return (
    <div
      className={cn(
        "relative h-fit",
        `col-span-${colSpan}`,
        `row-span-${rowSpan}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 2,
  rows = 2,
  gap = 0,
  showOuterBorder = true,
  showInnerBorders = true,
  showEdges = true,
  padding = 6,
}) => {
  const gridClassName = cn(
    "relative w-full",
    `grid grid-cols-1 md:grid-cols-${cols}`,
    `gap-${gap}`,
    showOuterBorder && "border border-[#E4E7EB] rounded-lg",
    `p-${padding}`,
    className,
  );

  const renderInnerBorders = () => {
    if (!showInnerBorders) return null;

    const verticalBorders = [...Array(cols - 1)].map((_, i) => (
      <div
        key={`vertical-${i}`}
        className={cn(
          "absolute top-0 hidden h-full w-[1px] bg-[#E4E7EB] md:block",
          `left-[${((i + 1) * 100) / cols}%]`,
        )}
      />
    ));

    const horizontalBorders = [...Array(rows - 1)].map((_, i) => (
      <div
        key={`horizontal-${i}`}
        className={cn(
          "absolute left-0 h-[1px] w-full bg-[#E4E7EB]",
          `top-[${((i + 1) * 100) / rows}%]`,
        )}
      />
    ));

    return (
      <>
        {verticalBorders}
        {horizontalBorders}
      </>
    );
  };

  return (
    <div className="w-full">
      {showEdges && <EdgeBorder position="top" />}
      <div className={gridClassName}>
        {renderInnerBorders()}
        {children}
      </div>
      {showEdges && <EdgeBorder position="bottom" />}
    </div>
  );
};

// Pre-built configurations
const TwoByTwo: React.FC<Omit<GridProps, "cols" | "rows">> = (props) => (
  <Grid {...props} cols={2} rows={2} />
);

const ThreeByTwo: React.FC<Omit<GridProps, "cols" | "rows">> = (props) => (
  <Grid {...props} cols={3} rows={2} />
);

// Export all components
export default {
  Grid,
  Item: GridItem,
  TwoByTwo,
  ThreeByTwo,
};
