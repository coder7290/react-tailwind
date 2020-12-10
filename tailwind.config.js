module.exports = {
  purge: ["./src/**/.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { custom: ["Encode Sans Expanded", "sans-serif"] },
      spacing: {
        800: "50rem",
        860: "54rem",
        1100: "69rem",
      },
      gridAutoColumns: {
        "1fr": "minmax(auto, 1fr)",
      },
    },
    screens: {
      lg: { max: "960px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    gridTemplateAreas: {
      xlimgstart: ["col2 col1"],
      xlimgend: ["col1 col2"],
      mdimgstart: ["col1", "col2"],
      mdimgend: ["col1 col1", "col2 col2"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
