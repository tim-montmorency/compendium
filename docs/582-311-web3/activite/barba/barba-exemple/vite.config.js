import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: 'index.html',
        univers: 'univers.html',
      },
    },
  },
})
