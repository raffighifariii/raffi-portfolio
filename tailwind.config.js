/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0B1116",
          secondary: "#101820",
        },
        surface: {
          elevated: "#151F27",
        },
        text: {
          primary: "#EBE6DC",
          secondary: "#A9B4B8",
          muted: "#75848B",
        },
        accent: {
          blue: "#7897A8",
          soft: "#9EAFB6",
          sand: "#C8B38E",
        },
        ocean: {
          deep: "#233946",
          blue: "#496777",
        },
        mist: "#91A5AD",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
