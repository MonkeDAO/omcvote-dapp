const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',

	theme: {
		extend: {}
	},

	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		styled: true,
		themes: [
			{
				solana: {
					/* your theme name */
					fontFamily: {
						display: ['PT Mono, monospace'],
						body: ['Inter, sans-serif']
					},
					primary: '#184623' /* Primary color */,
					'primary-focus': '#4A8F5D' /* Primary color - focused */,
					'primary-content': '#ffffff' /* Foreground content color to use on primary color */,

					secondary: '#FFC919' /* Secondary color */,
					'secondary-focus': '#f3cc30' /* Secondary color - focused */,
					'secondary-content': '#ffffff' /* Foreground content color to use on secondary color */,

					accent: '#33a382' /* Accent color */,
					'accent-focus': '#2aa79b' /* Accent color - focused */,
					'accent-content': '#ffffff' /* Foreground content color to use on accent color */,

					neutral: '#2b2b2b' /* Neutral color */,
					'neutral-focus': '#2a2e37' /* Neutral color - focused */,
					'neutral-content': '#ffffff' /* Foreground content color to use on neutral color */,

					'base-100': '#181818' /* Base color of page, used for blank backgrounds */,
					'base-200': '#35363a' /* Base color, a little darker */,
					'base-300': '#222222' /* Base color, even more darker */,
					'base-content': '#f9fafb' /* Foreground content color to use on base color */,

					info: '#2094f3' /* Info */,
					success: '#009485' /* Success */,
					warning: '#ff9900' /* Warning */,
					error: '#ff5724' /* Error */
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false
	}
};

module.exports = config;
