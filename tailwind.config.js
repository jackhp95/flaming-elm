module.exports = {
  content: ["./**/*.elm"],
  theme: {
    extend: {
      keyframes: {
        "move-bg": {
          to: {
            backgroundPosition: "400% 0",
          },
        },
      },
      animation: {
        "move-bg": "move-bg 32s infinite linear",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
