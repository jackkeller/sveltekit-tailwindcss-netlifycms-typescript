const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: { min: '768px' },
			md: { min: '992px' },
			lg: { min: '1240px' },
			xl: { min: '1920px' }
		},
		extend: {
			colors: {
				transparent: 'transparent',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				black: 'var(--black)'
			}
		}
	},
	plugins: []
};

module.exports = config;
