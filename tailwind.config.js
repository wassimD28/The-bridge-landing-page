/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        myBg: "#0A010D",
        myYellow: "#FD9D4F",
        myLightPurple: "#FF85E5",
        myTopCardGradient: "#6C2640",
        myBottomCardGradient: "#1F0813",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
