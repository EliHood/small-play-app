/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
      },
      width: {
        caption: "31rem",
      },
      fontWeight: {
        regular: "500",
        bold: "800",
        bolder: "900",
      },
      fontFamily: {
        text: ["Raleway"],
      },
      fontSize: {
        sm: ["14px", "20px"],
        md: ["16px", "24px"],
        lg: ["31px", "28px"],
        xl: ["35px", "32px"],
        "2xl": ["49px", "32px"],
      },
    },
  },
  plugins: [],
};
