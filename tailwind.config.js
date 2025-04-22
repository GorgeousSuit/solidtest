/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	    './pages/**/*.{js,ts,jsx,tsx,mdx}',
	    './components/**/*.{js,ts,jsx,tsx,mdx}',
	    './app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
	    extend: {
		   fontFamily: {
			  satoshi: ['Satoshi', 'sans-serif'],
			  inter: ['Inter', 'sans-serif']
		   },
		   backgroundSize: {
			  '200%': '200% 200%'
		   },
		   animation: {
			  'spin-slow': 'spin 8s linear infinite',
			  'gradient-slow': 'gradient-move 10s ease infinite',
			  'spin': 'spin 1s linear infinite',
		   },
		   keyframes: {
			  'gradient-move': {
				 '0%': { backgroundPosition: '0% 50%' },
				 '50%': { backgroundPosition: '100% 50%' },
				 '100%': { backgroundPosition: '0% 50%' }
			  },
			  spin: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' },
			   },
		   },
		   colors: {
			  primary: '#4A4A4A',
			  primary2: '#2B3136',
			  secondary1: '#D4A373',
			  secondary2: '#F5E6CA',
			  accent1: '#E63946 ',
			  accent2: '#457B9D',
			  foregraound: '#FFFFFF',
			  background: '#1E1E1E'
		   }
	    }
	},
	plugins: []
 };