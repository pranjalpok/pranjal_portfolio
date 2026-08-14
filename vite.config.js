import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// IMPORTANT for GitHub Pages: set `base` to "/<your-repo-name>/"
// (e.g. "/portfolio/") if you deploy to https://<user>.github.io/<repo-name>/.
// Leave it as "/" if you deploy to a custom domain or a <user>.github.io
// user/organization root repo.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
