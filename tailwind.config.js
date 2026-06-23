/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#ede4d1",
          light: "#f6efe3",
          cream: "#faf5ec",
        },
        ink: {
          DEFAULT: "#15110d",
          soft: "#5f4d43",
        },
        terra: {
          DEFAULT: "#9a521a",
          light: "#c48040",
          dim: "rgba(154, 82, 26, 0.15)",
        },
        line: {
          DEFAULT: "#ccb594",
          dark: "#907c65",
          faint: "rgba(204, 181, 148, 0.4)",
        },
        sand: "#e4d8c4",
        dark: {
          DEFAULT: "#1a1409",
          warm: "#221b11",
        }
      },
      fontFamily: {
        disp: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', '"Helvetica Neue"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
