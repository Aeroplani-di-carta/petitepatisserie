/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "slices/**/*.vue",
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    // "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        white: "#F5F5F5",
        yellow: {
          DEFAULT: "#FEDD8C",
          50: "#FFFCF5",
          100: "#FFF8E6",
          200: "#FFF2D1",
          300: "#FEEBB8",
          400: "#FEE5A4",
          500: "#FEDD8C",
          600: "#FDC73F",
          700: "#E9A702",
          800: "#9D7101",
          900: "#4C3701",
          950: "#281D00",
        },

        primary: {
          DEFAULT: "#FEDD8C",
          50: "#FFFCF5",
          100: "#FFF8E6",
          200: "#FFF2D1",
          300: "#FEEBB8",
          400: "#FEE5A4",
          500: "#FEDD8C",
          600: "#FDC73F",
          700: "#E9A702",
          800: "#9D7101",
          900: "#4C3701",
          950: "#281D00",
        },
        black: "#231f20",
      },
      fontFamily: {
        body: "Montserrat",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
      dropShadow: {
        text: "0 4px 4px  hsla(0, 0%, 0%, 0.5)",
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("@tailwindcss/typography"),
    // ...
  ],
};
