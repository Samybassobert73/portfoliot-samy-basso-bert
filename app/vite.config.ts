import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfoliot-samy-basso-bert/',
  plugins: [react()],
})
