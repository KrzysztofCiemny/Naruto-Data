module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      screens: {
        mobileMax: { max: "768px" },
      },
    },
  },
  plugins: [],
};
