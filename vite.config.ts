import { defineConfig } from 'vite';
import path from 'path';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import angular from '@analogjs/vite-plugin-angular';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';


export default defineConfig({
    root: path.resolve(__dirname, './src'),
    build: {
    //     outDir: path.resolve(__dirname, './dist'),
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('monaco-editor')) {
                        return 'monaco-editor';
                    }
                },
            },
            external: ['pyodide']
        }
    },
    plugins: [
        angular({
            tsconfig: path.resolve(__dirname, 'tsconfig.app.json'),
        }),
        viteTsConfigPaths(),
        monacoEditorPlugin({}),
    ],
    optimizeDeps: {
        exclude: ['pyodide']
    },
    server: {
        port: 4200,
    }
});