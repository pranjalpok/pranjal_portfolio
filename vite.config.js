import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// GitHub Pages base path — matches the actual repo name
// (https://github.com/pranjalpok/pranjal_portfolio), so the deployed site
// at https://pranjalpok.github.io/pranjal_portfolio/ loads assets correctly.
export default defineConfig({
  plugins: [react()],
  base: '/pranjal_portfolio/',
})
