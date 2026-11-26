import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        nord: 'ile-nord.html',
        sud: 'ile-sud.html',
      },
    },
  },
})
