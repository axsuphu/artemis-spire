/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bakbak: ['"Bakbak One"', "sans-serif"],
        murecho: ['"Murecho"', "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        "space-black": "#0A0B14",
        "dark-fill": "#0F1018",
        "neon-yellow": "#EBE55F",
        "light-neon-yellow": "#EBE78B",
        "green-primary": "#34A853",
        "magenta-primary": "#870151",
        "purple-primary": "#8649DA",
        "red-primary": "#950B0B",
        "grey-text": "#CFD6E6",
      },
      backgroundImage: {
        "hero-image": "url('/public/images/home_page/spire.jpg')",
      },
      maxWidth: {
        1920: "1920px",
      },
      maxHeight: {
        650: "650px",
        950: "950px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
