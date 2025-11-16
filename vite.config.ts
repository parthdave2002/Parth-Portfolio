import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion'],
          'vendor-icons': ['react-icons'],
        },
      },
    },
    // Optimize chunk sizes
    chunkSizeWarningLimit: 500,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    // Better source maps for production debugging
    sourcemap: false,
  },
  // Performance optimization
  server: {
    middlewareMode: false,
    preTransformRequests: true,
  },
})
