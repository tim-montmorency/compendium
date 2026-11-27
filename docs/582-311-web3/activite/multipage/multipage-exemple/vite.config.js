import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: './',
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        pagea: 'page-a.html',
        pageb: 'page-b.html',
      },
    },
  },
})
