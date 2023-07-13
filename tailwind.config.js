module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      animation: {
        flash: "flash 0.8s linear infinite",
      },
      keyframes: {
        flash: {
          "0%, 19%, 71%, 100%": { opacity: "0" },
          "20% ,70%": { opacity: "1" },
        },
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
