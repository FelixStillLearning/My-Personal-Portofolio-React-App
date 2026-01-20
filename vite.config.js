import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Exclude packages that shouldn't be pre-bundled
    exclude: [],
    // Entries point for dependency pre-bundling
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    // Hold the first optimizeDeps run until all dependencies are discovered
    holdUntilCrawlEnd: true
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    hmr: false,
    watch: false,
    cors: {
      origin: '*',
      credentials: true
    },
    allowedHosts: [
      '.modal.host',
      'localhost',
      '127.0.0.1'
    ]
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 3000, // Suppress warning for Spline chunks
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Chunk untuk Spline (library terbesar ~4MB)
          'spline': ['@splinetool/react-spline'],

          // Chunk untuk UI libraries Radix
          'radix-ui': [
            '@radix-ui/react-slot',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/themes'
          ],

          // Chunk untuk animation library
          'animations': ['framer-motion'],

          // Chunk untuk React core libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // Chunk untuk utility libraries
          'utils': ['lucide-react', 'clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    }
  }
})