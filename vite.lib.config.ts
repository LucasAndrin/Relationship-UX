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
            entry: {
                index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
                'core/component-stack/index': fileURLToPath(
                    new URL('./src/core/component-stack/index.ts', import.meta.url),
                ),
                'core/relationships/index': fileURLToPath(
                    new URL('./src/core/relationships/index.ts', import.meta.url),
                ),
                'core/window-manager/index': fileURLToPath(
                    new URL('./src/core/window-manager/index.ts', import.meta.url),
                ),
                'components/index': fileURLToPath(
                    new URL('./src/components/index.ts', import.meta.url),
                ),
                'utils/index': fileURLToPath(
                    new URL('./src/utils/index.ts', import.meta.url),
                ),
            },
            formats: ['es'],
            fileName: (_format, entryName) => `${entryName}.js`,
            cssFileName: 'main',
        },
        rollupOptions: {
            external: ['vue', 'pinia', 'lodash'],
        },
        emptyOutDir: true,
    },
})