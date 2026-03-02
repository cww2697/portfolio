import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-theme=\"dark\"]"],
  content: [
    "./src/contact/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        glass: "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-dark": "rgba(0, 0, 0, 0.2)",
        "glass-border-dark": "rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'liquid-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '12px',
      }
    },
  },
  plugins: [],
} satisfies Config;
