import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base has to match the repo name for github pages
export default defineConfig({
  plugins: [react()],
  base: '/Hussain-Portfolio/',
})
