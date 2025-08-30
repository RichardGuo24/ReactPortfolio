import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const BASE_PROD = '/REPO_NAME/'
// https://vite.dev/config/
export default defineConfig(({ mode }) =>
({
  base: mode === 'production' ? BASE_PROD : '/',
  plugins: [react()],
}))
