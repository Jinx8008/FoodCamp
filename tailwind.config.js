/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C0392B",     
        secondary: "#F1C40F",   
        accent: "#27AE60",      
        muted: "#F8F8F8",      
        dark: "#2C3E50",       
        light: "#FFFDF9",      
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"], // For classy headings
        body: ["'Poppins'", "sans-serif"],        // For clean body text
      },
   
    },
  },
  plugins: [
  ],
};
