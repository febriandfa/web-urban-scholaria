/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
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
        brand: {
          50: "#F8FAFC",
          100: "#D0D2F9",
          200: "#A3A6F3",
          300: "#6F74DA",
          400: "#474BB7",
          500: "#191D88",
          600: "#121574",
          700: "#0C0E61",
          800: "#06094E",
          900: "#040641",
        },
        brand_2: {
          50: "#FFFCEE",
          100: "#FEF8D6",
          200: "#FFEEAE",
          300: "#FFE286",
          400: "#FFD768",
          500: "#FEC435",
          600: "#DBA126",
          700: "#B7801B",
          800: "#7B4B0B",
          900: "#7B4B0B",
        },
        danger: {
          100: "#FCDFD1",
          300: "#EE8776",
          500: "#C92025",
        },
        warn: {
          100: "#FEF3C7",
          300: "#F59E0B",
          500: "#D97706",
        },
        done: {
          100: "#DCF8D2",
          300: "#7EDA75",
          500: "#1F8428",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
