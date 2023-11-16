/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./Components/**/*.{js,ts,jsx,tsx}',
		'./index.html'
	],
	theme: {
		// fontSize: {
		// 	xs: '0.8rem',
		// 	sm: '1rem',
		// 	base: '1.2rem',
		// 	lg: '1.4rem',
		// 	xl: '1.5rem',
		// 	'2xl': '2rem',
		// 	'3xl': '3rem',
		// 	'4xl': '6rem',
		// 	'5xl': '5rem',
		// 	'6xl': '8rem'
		// },
		colors: {
			dark: '#3E3E3D',
			light: '#F9F7F8',
			white: '#F9F7F8',
			primary: '#FF5351'
		}
	},
	plugins: [],
	darkMode: 'class'
};
