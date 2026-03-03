import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Legacy (kept for legal pages)
        bgLight: "#F2F2F2",
        bgDark: "#0F1114",
        ink: "#111417",
        bronze: "#9C6B3D",
        gold: "#A8843A",
        // Design system
        obsidian: "#0F1114",
        steel: "#2A2F36",
        bone: "#ECE8DF",
        sapphire: "#5B7FFF",
        pine: "#3E6F5A",
        oxide: "#8E3F3F",
        silver: "#A9C0D8",
      }
    }
  },
  plugins: []
} satisfies Config;
