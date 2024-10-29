"use client";
import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import React, { useMemo, useRef } from "react";

type FadeTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  text?: string;
  useInViewProp?: boolean;
  inViewMargin?: string;
  children?: React.ReactNode;
};

export function FadeText({
  direction = "up",
  className,
  framerProps,
  text,
  useInViewProp = true,
  // inViewMargin = "-100px",
  children,
}: FadeTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const defaultFramerProps = useMemo(
    (): Variants => ({
      hidden: { opacity: 0, [axis]: directionOffset },
      //@ts-expect-error skip the type error
      visible: {
        opacity: 1,
        [axis]: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      },
    }),
    [axis, directionOffset],
  );

  const FADE_ANIMATION_VARIANTS = useMemo(
    () => ({
      ...defaultFramerProps,
      ...framerProps,
    }),
    [framerProps, defaultFramerProps],
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={useInViewProp && isInView ? "visible" : "hidden"}
      variants={FADE_ANIMATION_VARIANTS}
    >
      {children ? children : <span className={cn(className)}>{text}</span>}
    </motion.div>
  );
}
