/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: 'inter-variable, Arial, sans-serif',
			},
			colors: {
				"cream": "#FBF8F2",
				"orange": "#FD5A1F",
				"mint-light": "#EEF6F0",
				"mint-dark": "#C7E5DF",
			}, 
			fontSize: {
				"base": "16px", 
				"medium":"20px",
				"large": "40px",
				"very-large": "60px",
				"extra-large": "85px",
			}, 
			keyframes: {
				underlineGrow: {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(1deg)' },
				}
			},
			animation: {
				grow: 'underlineGrow 0.25s ease-out forwards',
				wiggle: 'wiggle 0.5s ease-in-out infinite',
			},
			screens: {
				'md': '812px'
			}
		},
	},
	plugins: [],
};

