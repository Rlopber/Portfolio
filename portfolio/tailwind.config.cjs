const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        sunYellow: "#FFD700",
        moonGrey: "#C0C0C0",
      },
      fontFamily: {
        geistmono: ['"Geist Mono"', "monospace"],
      },
      screens: {
        laptop: "1025px",
      },
    },
  },
  plugins: [],
};
