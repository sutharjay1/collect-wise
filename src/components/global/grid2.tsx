import { cn } from "@/lib/utils";
import React from "react";

interface GridBorderContainerProps {
  children: React.ReactNode;
  gridContentClassName?: string;
  className?: string;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  gap?: {
    x?: number;
    y?: number;
  };
  padding?: {
    x?: number;
    y?: number;
  };
  borderColor?: string;
  width?: "full" | "fit";
}

interface BorderProps {
  isBottom?: boolean;
  borderColor?: string;
  className?: string;
}

const Border: React.FC<BorderProps> = ({
  isBottom = false,
  borderColor = "border-[#E4E7EB]",
  className,
}) => (
  <div className={cn("pointer-events-none w-full", className)}>
    <div className="flex h-5">
      <div className={cn("w-5 border-b", borderColor)}></div>
      <div
        className={cn("flex-1 border-b border-l border-r", borderColor)}
      ></div>
      <div className={cn("w-5 border-b", borderColor)}></div>
    </div>
    <div
      className={cn(
        "mx-5 h-5 border-l border-r",
        borderColor,
        isBottom ? "scale-y-[-1]" : "",
      )}
    ></div>
  </div>
);

interface LineProps {
  showVertical?: boolean;
  showHorizontal?: boolean;
  verticalClassName?: string;
  horizontalClassName?: string;
  borderColor?: string;
  breakpoint?: "sm" | "md" | "lg";
}

const Line: React.FC<LineProps> = ({
  showVertical = true,
  showHorizontal = true,
  verticalClassName = "",
  horizontalClassName = "",
  borderColor = "border-[#E4E7EB]",
  breakpoint = "md",
}) => (
  <div className="pointer-events-none absolute inset-0 h-full w-full">
    <div className="relative h-full w-full">
      <div className={cn("mx-5 h-full border-l border-r", borderColor)}></div>
      {showVertical && (
        <div
          className={cn(
            "absolute left-5 right-5 top-1/2 block -translate-y-1/2 border-t",
            borderColor,
            `${breakpoint}:hidden`,
            verticalClassName,
          )}
        ></div>
      )}
      {showHorizontal && (
        <div
          className={cn(
            "absolute inset-y-0 left-1/2 -translate-x-1/2 border-l",
            borderColor,
            horizontalClassName,
            showHorizontal ? `hidden ${breakpoint}:block` : "hidden",
          )}
        ></div>
      )}
    </div>
  </div>
);

const GridContent: React.FC<{
  children: React.ReactNode;
  columns?: GridBorderContainerProps["columns"];
  gap?: GridBorderContainerProps["gap"];
  className?: string;
}> = ({
  children,
  columns = { sm: 1, md: 2 },
  gap = { x: 6, y: 6 },
  className,
}) => {
  const gridCols = [
    `grid-cols-${columns.sm || 1}`,
    `sm:grid-cols-${columns.sm || 1}`,
    `md:grid-cols-${columns.md || columns.sm || 1}`,
    `lg:grid-cols-${columns.lg || columns.md || columns.sm || 1}`,
  ].join(" ");

  return (
    <div
      className={cn(
        "relative grid w-full",
        gridCols,
        `gap-x-${gap.x} gap-y-${gap.y}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

const GridBorderContainer: React.FC<GridBorderContainerProps> = ({
  children,
  gridContentClassName,
  className,
  columns = { sm: 1, md: 2 },
  gap = { x: 6, y: 6 },
  padding = { x: 8, y: 12 },
  borderColor = "border-[#E4E7EB]",
  width = "full",
}) => {
  return (
    <section
      className={cn(
        "relative mx-auto",
        width === "full" ? "w-full" : "w-full md:w-fit gap-x-9",
        `px-0 py-${padding.y}`,
        `md:px-${padding.x}`,
        className,
      )}
    >
      <Border borderColor={borderColor} />
      <GridContent columns={columns} gap={gap} className={`px-${padding.x} ${gridContentClassName}`}>
        {children}
      </GridContent>
      <Border isBottom borderColor={borderColor} />
    </section>
  );
};

// Export as a composite component
const Grid = {
  Container: GridBorderContainer,
  Border,
  Line,
  Content: GridContent,
};

export default Grid;
