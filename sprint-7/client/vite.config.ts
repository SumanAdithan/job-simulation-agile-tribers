import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@assets': resolve(__dirname, '/src/assets'),
            '@components': resolve(__dirname, '/src/components'),
            '@constants': resolve(__dirname, '/src/constants'),
            '@layouts': resolve(__dirname, '/src/layouts'),
            '@pages': resolve(__dirname, '/src/pages'),
            '@routes': resolve(__dirname, '/src/routes'),
            '@utils': resolve(__dirname, '/src/utils'),
            '@store': resolve(__dirname, '/src/store'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    plugins: [react(), tailwindcss(), tsconfigPaths()],
});
