import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/your-repo-name/' to your actual GitHub repo name when deploying
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
