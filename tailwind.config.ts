import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          900: "#0A0A0B",
          800: "#101012",
          700: "#161618",
          600: "#1C1C1F",
          500: "#26262A",
        },
        bone: {
          DEFAULT: "#F5F3EC",
          muted: "#A8A8A1",
          dim: "#6E6E69",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF4DA",
          100: "#F4E3A8",
          200: "#EAD07A",
          300: "#E0BE54",
          400: "#D4AF37",
          500: "#C49A2A",
          600: "#A87F20",
          700: "#7E5E18",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
