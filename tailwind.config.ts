import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D2137",
          light: "#132B48",
          dark: "#081828",
        },
        petrol: {
          DEFAULT: "#1A4A6E",
          light: "#225A87",
        },
        teal: {
          DEFAULT: "#0891B2",
          light: "#22D3EE",
          dark: "#0E7490",
        },
        gold: {
          DEFAULT: "#D97706",
          light: "#F59E0B",
          dark: "#B45309",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0D2137 0%, #1A4A6E 50%, #0891B2 100%)",
        "gradient-card": "linear-gradient(135deg, #1A4A6E 0%, #0891B2 100%)",
        "gradient-gold": "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
