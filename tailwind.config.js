/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.js",
    "./layouts/**/*.js",
    "./screens/**/*.js",
    "./reusables/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        "highlight-color-one": "#2f4588",
        "highlight-color-two": "#3e57a5",
        "highlight-color-three": "#6F4CFF",

        "highlight-color-sec": "#3e57a5",
        "highlight-color": "#2f4588",
        "primary-theme-color": "#0c0a1d",
        "sec-theme-color": "#161943",

        "bg-primary-color": "#1F1D2F",
        "auth-card-bg-color": "#0C0A1D",
        "auth-card-bg-gradient-color": "",
      },
    },
  },
  plugins: [],
};

// 161943
