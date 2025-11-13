import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages deployment
  // In production (GitHub Pages): use '/repository-name/'
  // In development: use '/'
  base: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL || '/' : '/',
})
