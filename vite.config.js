import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works on GitHub Pages project subpaths,
  // custom domains, and any static host without reconfiguration.
  base: './',
  plugins: [react()],
})
