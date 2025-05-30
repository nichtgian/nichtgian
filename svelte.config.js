import adapter from '@sveltejs/adapter-static';
import process from 'node:process';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            fallback: '404.html',
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
            relative: false,
        },
    },
};

export default config;
