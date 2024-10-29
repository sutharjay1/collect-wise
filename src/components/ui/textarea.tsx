import * as React from "react";

import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "peer h-10 w-full rounded-xl border border-[#048060] border-opacity-0 bg-black/10 px-4 py-4 text-sm transition-all duration-300 ease-out placeholder:text-gray-400 hover:border-opacity-100 hover:ring-2 hover:ring-[#048060] hover:ring-opacity-30 focus:border-opacity-100 focus:ring-2 focus:ring-[#048060] focus:ring-opacity-30 active:border-opacity-100 active:ring-2 active:ring-[#048060] active:ring-opacity-30 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
