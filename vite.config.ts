import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig({
  server: {
    proxy: {
      '/v1': {
        target: 'http://43.203.218.198:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: [
      { find: '@/src', replacement: resolve(__dirname, 'src') },
      { find: '@svg', replacement: resolve(__dirname, 'public/assets/svg') },
      { find: '@img', replacement: resolve(__dirname, 'public/assets/img') },
    ],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        icon: false, // SVG를 React 컴포넌트로 변환 시 아이콘 스타일로 설정
      },
    }),
  ],
});
