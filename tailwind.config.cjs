/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			'presStart2': ['"Press Start 2P"', 'cursive'],
			'AbrilFatface':['"Abril Fatface"', 'Arial'],
			'SpecialElite': ['"Special Elite"', 'Arial']
		},
		colors: {
			// naranjaTron: '250, 250, 140, degToRad(270)'
			// naranjaTron: 'rgba(250, 250, 150, 1)'
			naranjaTron: 'rgba(250, 165, 0, 1)'
		},
		extend: {},
	},
	plugins: [],
}
