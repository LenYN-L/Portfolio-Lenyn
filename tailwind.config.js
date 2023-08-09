export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			'presStart2': ['"Press Start 2P"', 'cursive'],
			'AbrilFatface':['"Abril Fatface"', 'Arial'],
			'SpecialElite': ['"Special Elite"', 'Arial']
		},
		extend: {
			colors:{
				'custom-color-mostasa': '#e4e4d8;'
			},
			animation: {
				wiggle: 'wiggle 10s linear infinite',
			  },
			keyframes: {
				wiggle: {
				  '0%': { transform: 'translateX(-30vh)',opacity: '0%' }, 
				  '50%': { transform: 'translateX(0vh)',opacity: '100%'},
				  '100%': { transform: 'translateX(30vh)',opacity: '0%' },
				}
			  }
		},
	},
	plugins: [],
}
