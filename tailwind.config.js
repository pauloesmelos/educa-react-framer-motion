/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#2F6C6D"
      },
    },
    keyframes: {
      kick: {
        "0%": { transform: "translateY(0)", opacity: .7 },
        "50%": { transform: "translateY(-5px)", opacity: 1 },
        "100%": { transform: "translateY(0)", opacity: .7 },
      }
    },
    animation: {
      kick: "kick 1.5s linear infinite"
    }
  },
  plugins: [],
}