/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1f1f27",
        blue: "#000dff",
        orange: "#f97432",
        blueGradient: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
        orangeGradient: "linear-gradient(135deg, #fec163 0%, #de4313 100%)",
        darkBackground: "linear-gradient(104deg, #0051d6 0.01%, #030118 100%)",
        grey: "#bababc",
        lightBlue: "#e6e7ff",
        white: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
