import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginGhPages from 'vite-plugin-gh-pages'

const ghPagesOptions = {
  branch: 'gh-pages',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginGhPages(ghPagesOptions),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
  build: {

      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      minify: true,
  },
})
