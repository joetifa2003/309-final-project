const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#EEC39E",
        "light-gray": "#D9DADB",
        gray: "#A9AAAB",
        "dark-gray": "#2A2B2C",
      },
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.5rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "2rem"],
      xl: ["1.25rem", "2rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.5rem"],
      "4xl": ["2.5rem", "3rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "4rem"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"],
    },
    container: {
      center: true,
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["'Poppins'", "sans-serif"],
      brand: ["'Playfair Display'", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
