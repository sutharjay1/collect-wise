"use client";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number; filter: string };
    visible: { y: number; opacity: number; filter: string };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  blur?: string;
}

const Motion = ({
  children,
  className,
  variant,
  duration = 0.3,
  delay = 0,
  yOffset = 6,
  inView = true,
  inViewMargin = {
    top: 0,
    right: 0,
    bottom: -280,
    left: 0,
  },
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewResult = useInView(ref, {
    // once: true,
    margin: `${inViewMargin.top!}px ${inViewMargin.right!}px ${inViewMargin.bottom!}px ${inViewMargin.left!}px`,
  });

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string>("down");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const isInViewActual = !inView || isInViewResult;
  const reverseAnimation = scrollDirection === "up" && !isInViewActual;

  useEffect(() => {
    if (scrollDirection === "up") {
      console.log("up");
    }
  }, [scrollDirection]);

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };

  const reverseVariants: Variants = {
    hidden: { y: -yOffset - 10, opacity: 0, filter: `blur(0px)` },
    visible: { y: yOffset - 8, opacity: 1, filter: `blur(${blur})` },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={
          reverseAnimation ? "hidden" : isInViewActual ? "visible" : "hidden"
        }
        exit={!isInViewActual ? "visible" : "hidden"}
        variants={reverseAnimation ? reverseVariants : combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { Motion };
