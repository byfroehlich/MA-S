import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#F2F2F2",
        bgDark: "#0F1114",
        ink: "#111417",
        bone: "#ECE8DF",
        silver: "#9AA3AD",
        bronze: "#9C6B3D",
        gold: "#A8843A"
      }
    }
  },
  plugins: []
} satisfies Config;
