import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    resolve: {
      alias: {
        '/assets': path.resolve(__dirname, './public/assets'),
      },
    },
    coverage: {
      provider: 'v8',
      exclude: [
        'node_modules/**',
        'src/**/*.scss',
        'src/**/*.svg',
        '**/*.d.ts',
        'test/**',
        'public/**'
      ],
    }
  },
});