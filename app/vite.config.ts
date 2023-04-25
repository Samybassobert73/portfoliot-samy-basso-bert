import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/portfoliot-samy-basso-bert/',
  plugins: [react()],
  assetsInclude: ['**/*.gltf'],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
  //   host: true, // needed for the Docker Container port mapping to work
  //   strictPort: true,
  // //  port: 3007, // you can replace this port with any port
  // }
})
