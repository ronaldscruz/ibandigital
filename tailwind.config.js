/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        content: '1280px'
      },
      height: {
        menu: '80px'
      },
      padding: {
        menu: '80px'
      },
      margin: {
        menu: '80px'
      }
    },
  },
  plugins: [],
};
