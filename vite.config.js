import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  base: '/',            // important: no repo subpath on Vercel
  plugins: [react()],
})