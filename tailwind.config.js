/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				orbitron: ['Orbitron', 'Inter', ...defaultTheme.fontFamily.sans],
				cyberway: ['Cyberway', 'Inter', ...defaultTheme.fontFamily.sans],
				merriweather: [
					'Merriweather',
					'Inter',
					...defaultTheme.fontFamily.sans,
				],
				cinzel: ['Cinzel', 'Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
