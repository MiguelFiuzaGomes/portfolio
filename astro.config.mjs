// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({

    site: 'https://miguelfiuzagomes.github.io',
    base: '/portfolio',

    markdown: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});
