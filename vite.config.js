import { sveltekit } from '@sveltejs/kit/vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		'process.env.BROWSER': true,
		'process.env.NODE_DEBUG': JSON.stringify(''),
		'process.env.VERSION': JSON.stringify(process.env.npm_package_version)
	},

	optimizeDeps: {
		include: ['@solana/web3.js', 'buffer'],
		esbuildOptions: {
			target: 'es2020',
			plugins: [NodeGlobalsPolyfillPlugin({ buffer: true })]
		}
	},
	build: {
		target: 'es2020',
		commonjsOptions: {
			transformMixedEsModules: true
		},
		rollupOptions: {
			plugins: [inject({ Buffer: ['buffer', 'Buffer'] }), nodePolyfills({ crypto: true })]
		}
	},
	resolve: {
		alias: {
			$stores: path.resolve('./src/stores'),
			stream: 'rollup-plugin-node-polyfills/polyfills/stream'
		}
	},
	server: {
		host: true
	}
};

export default config;
