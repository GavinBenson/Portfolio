import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Get the absolute path of the project root
const projectRoot = process.cwd();

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(projectRoot, 'index.html'),
                codex: resolve(projectRoot, 'codex.html')
            }
        }
    }
});