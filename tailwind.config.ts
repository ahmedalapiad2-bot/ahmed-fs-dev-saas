import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0F172A",
        primary: "#4F46E5",
        accent: "#38BDF8",
        text: "#FFFFFF",
        muted: "#94A3B8",
      },
      boxShadow: {
        glow: "0 30px 80px rgba(56,189,248,0.16)",
        soft: "0 20px 60px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 35%), radial-gradient(circle at 20% 20%, rgba(79,70,229,0.18), transparent 18%)",
        "grid-lines": "radial-gradient(circle at 50% 0, rgba(255,255,255,0.06), transparent 15%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
