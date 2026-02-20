import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { 100: "#E1F9FD", 200: "#D0F4F9", 500: "#44B6D8" },
        secondary: { 500: "#6B8CCA" },
        base: { 50: "#FFFFFF", 900: "#03080C" },
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        "orb-pulse": { "0%, 100%": { transform: "scale(1)", opacity: "0.9" }, "50%": { transform: "scale(1.03)", opacity: "1" } },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "fade-up-delay-1": "fade-up 0.8s ease 0.15s forwards",
        "fade-up-delay-2": "fade-up 0.8s ease 0.3s forwards",
        "fade-up-delay-3": "fade-up 0.8s ease 0.45s forwards",
        "fade-up-delay-4": "fade-up 0.8s ease 0.6s forwards",
        "fade-in-delay": "fade-in 1.2s ease 0.8s forwards",
        marquee: "marquee 28s linear infinite",
        "orb-pulse": "orb-pulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;