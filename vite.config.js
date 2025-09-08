import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // set NGROK_HOST env var to your current domain (e.g., 2246072fa7e.ngrok-free.app)
    // allow all hosts to bypass the check for rotating ngrok subdomains
    allowedHosts: true,
    host: true,
    strictPort: true,
    port: 5173,
    origin: process.env.NGROK_HOST ? `https://${process.env.NGROK_HOST}` : undefined,
    hmr: process.env.NGROK_HOST
      ? { host: process.env.NGROK_HOST, protocol: 'wss', clientPort: 443 }
      : undefined,
  }
})
