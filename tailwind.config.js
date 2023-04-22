/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-pr": "#170F23",
        "bg-sc": "#281A3C",
      },
      height: {
        "content-height": "calc(100vh - 5rem - 5rem)",
      },
    },
  },
  plugins: [],
};
