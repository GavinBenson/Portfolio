import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                codex: resolve(__dirname, 'codex.html')
            }
        },
        // Ensure assets are properly handled
        assetsDir: 'assets',
        // Prevent CSS and JS from being inlined
        cssCodeSplit: true,
        // Keep JS and CSS separate
        minify: 'terser'
    }
});