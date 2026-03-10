import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['gsap', 'framer-motion', 'lenis'],
          'utils': ['clsx', 'class-variance-authority', 'tailwind-merge'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Assets inline threshold
    assetsInlineLimit: 4096,
    // Source maps for production (optional, remove for smaller bundle)
    sourcemap: false,
    reportCompressedSize: false,
  },
  // Optimization for development
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
