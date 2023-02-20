/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "aocOrange": "#f5b861",
        "aocViolet": "#5f38e0",
        "aocPurple": "#c06be3",
        "aocSky": "#7ed5f3",
        "aocLight": "#F4F4F1",
        "aocDark": "#171717",
        "aocGray": "#8A8A8A"
      },
      fontSize: {
        "5xl": "4.375rem"
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        serif: ['var(--font-raleway)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
