import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      maxWidth: {
        "8xl": "1308px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        polySansMedian: ['"PolySans Median"', "sans-serif"],
        gilroy: ["var(--font-gilroy-sans)", ...fontFamily.sans],
        geistSans: ["var(--font-geist-sans)", ...fontFamily.sans],
        geistMono: ["var(--font-geist-mono)", ...fontFamily.mono],
        inter: ["var(--font-inter-sans)", ...fontFamily.sans],
      },
      fontSize: {
        "4xl": ["2.65rem", { lineHeight: "1.1" }],
        "4.5xl": ["2.9rem", { lineHeight: "1.1" }],
        "5xl": ["2.75rem", { lineHeight: "1.1" }],
        "6xl": ["3rem", { lineHeight: "1.1" }],
        "7xl": ["4rem", { lineHeight: "1" }],
        "8xl": ["5rem", { lineHeight: "1" }],
        "9xl": ["6rem", { lineHeight: "1" }],
      },

      colors: {
        base: "hsl(var(--base))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
        "10xl": "5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shine: {
          "0%": { backgroundPosition: "-150% 150%" },
          "100%": { backgroundPosition: "150% -150%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine: "shine 0.8s linear 1",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
