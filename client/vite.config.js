import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This exposes the server to the network
    port: 5173,       // Optional: you can specify a different port if you prefer
  },
})

