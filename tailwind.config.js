/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#003f62",
        mainYellow: "#eda415",
        lightGray: "#f4f4f4",
        textWhite: "#fff",
        textDark: "#292d32",
        lightBlue: "#b3d4e5",
      },
    },
  },
  plugins: [],
};
