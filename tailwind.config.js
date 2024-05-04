import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/vinyl-component-blocks/**/*.{html,js,cjs,ts,tsx,css,scss}",
    "./node_modules/vinyl-component-blocks/esm2020/**/*.mjs",
    "./bulldorizer-test/my-react-app/**/*.{html,ts,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
