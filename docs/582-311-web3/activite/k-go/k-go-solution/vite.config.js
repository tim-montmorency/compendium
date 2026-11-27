import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: './',
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        jeu: 'jeu.html',
        contact: 'contact.html',
      },
    },
  },
})
