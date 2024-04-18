/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px", // Portrait phones
      sm: "768px", // Landscape phones and tablets
      md: "960px", // Tablets and small desktops
      lg: "1440px", // Larger desktops
      xl: "2560px", // Extra large screens
    },
    extend: {
      fontFamily: {
        sans: ["Orbitron", "sans-serif"], // Sets Orbitron as the default sans-serif font
      },
      fontSize: {
        // Base font sizes
        h1: ["36px", { lineHeight: "1.2" }],
        h2: ["32px", { lineHeight: "1.25" }],
        h3: ["28px", { lineHeight: "1.3" }],
        h4: ["24px", { lineHeight: "1.35" }],
        h5: ["20px", { lineHeight: "1.4" }],
        h6: ["18px", { lineHeight: "1.45" }],
        p: ["18px", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      fontSize: ["responsive"], // Enable responsive font sizes
    },
  },
};
