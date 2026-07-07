import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory "paper" surfaces
        paper: {
          DEFAULT: "#F5F1E8",
          band: "#EFE9DB",
          deep: "#E8E1D0",
          card: "#FFFFFF",
        },
        // Warm near-black ink for text
        ink: {
          DEFAULT: "#1C1A16",
          soft: "#5B554A",
          mute: "#948D7D",
        },
        line: {
          DEFAULT: "#E4DDCD",
          strong: "#D3CAB5",
        },
        gold: {
          DEFAULT: "#C6A23C",
          50: "#FBF4DA",
          100: "#F4E3A8",
          200: "#EAD07A",
          300: "#D9B450",
          400: "#C6A23C",
          500: "#A9861F",
          600: "#8A6B16",
          700: "#6E5511",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
