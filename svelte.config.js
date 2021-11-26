import path from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		ssr: false,
		vite: {
			resolve: {
				alias: {
					'@lib': path.resolve('./src/lib'),
					'@components': path.resolve('./src/lib/components')
				}
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
			sass: true
		})
	]
};

export default config;
