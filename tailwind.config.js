/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-header": "rgba(244, 246, 251, 1)",
        "brand-header-border": "rgba(229, 229, 229, 1)",
        "brand-blue": "rgba(9, 9, 11, 1)",
        "brand-btn": "rgba(9, 9, 11, 1)",

        "brand-scd-btn": "rgba(37, 99, 235, 1)",
        "brand-border": "rgba(229, 229, 229, 1)",
      },
      lineHeight: {
        brand: "28px",
        "brand-para": "24px",
      },
      letterSpacing: {
        brand: "0px",
      },
      dropShadow: {
        "brand-card":
          "inset 0px 9.33px 140px 0px rgba(0, 0, 0, 0.05), -1.17px 2.33px 18.67px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
