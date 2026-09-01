import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Dev-only: Vite doesn't execute PHP, so forward /api/* requests to
    // a local `php -S localhost:8000 -t backend/api` server started
    // separately (see backend/README.md). This `server.proxy` option
    // only applies to `vite dev` — a production build/deploy always
    // hits the same-origin /api/contact.php served directly by the
    // real web server, unchanged frontend source either way.
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
