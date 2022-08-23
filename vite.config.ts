import { defineConfig } from 'vite'
import path from 'path';
import typescript from '@rollup/plugin-typescript'

// const resolvePath = (str: string) => path.resolve(__dirname, str)

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'EmailMimeParser',
            // the proper extensions will be added
            fileName: 'email-mime-parser'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            },
            plugins: [
                typescript()
            ]

        }
    }
})
