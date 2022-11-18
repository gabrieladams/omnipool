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
        "highlight-color": "#6f4cff",
        "primary-theme-color": "#0c0a1d",
        "sec-theme-color": "#161943",
      },
    },
  },
  plugins: [],
};

// 161943
