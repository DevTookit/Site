import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: [
        { find: '@/src', replacement: resolve(__dirname, 'src') },
        { find: '@/assets', replacement: resolve(__dirname, 'src/assets') },
      ],
    },
    define: {
      'process.env': env,
    },
    plugins: [react(), tsconfigPaths(), svgr({ svgrOptions: { icon: true } })],
  };
});
