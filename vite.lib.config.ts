import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        dts({
            tsconfigPath: './tsconfig.lib.json',
            entryRoot: './src',
            outDir: './dist',
            insertTypesEntry: true,
        }),
    ],

    resolve: {
        alias: {
            '@lib': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            formats: ['es'],
            fileName: 'index',
            cssFileName: 'main',
        },
        rollupOptions: {
            external: ['vue', 'pinia', 'lodash'],
        },
        emptyOutDir: true,
    },
})