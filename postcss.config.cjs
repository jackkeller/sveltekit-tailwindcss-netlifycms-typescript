const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nesting = require('postcss-nested');
const postcssimport = require('postcss-import');
const pxtorem = require('postcss-pixels-to-rem');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		postcssimport(),
		pxtorem(),
		nesting(),
		tailwindcss(),
		// But others, like autoprefixer, need to run after,
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
