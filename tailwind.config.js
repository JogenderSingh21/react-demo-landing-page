/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "qna-bg": "url('/src/assets/union.svg')",
      },
    },
  },
  plugins: [],
};
