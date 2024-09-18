/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        default: "1 rem",
        md: "2rem",
      },
    },
    extend: {
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpg')",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
