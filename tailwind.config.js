/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./Components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            blue: {
                light: "#00ff00",
                DEFAULT: "#1fb6ff",
                dark: "#009eeb",
            },
            dark: "#3E3E3D",
            light: "#F9F7F8",
            white: "#F9F7F8",
            primary: "#FF5351",
        },
    },
    plugins: [],
    darkMode: "class",
};
