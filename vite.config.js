import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from its repository subpath. Other hosts
  // (including local previews and root-domain deploys) serve it from /.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/GOKUL--PORTFOLIO/' : '/',
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:5000' },
  },
})
