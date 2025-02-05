import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://yourportfolio.com", // 🔹 Replace with your real domain
      routes: [
        { url: "/", priority: 1.0 },
        { url: "/more-projects", priority: 0.8 },
      ],
    }),
  ],
  build: {
    minify: "terser", // 🔹 Ensures JavaScript is minified properly
    terserOptions: {
      compress: {
        drop_console: true, // 🔹 Removes console logs for cleaner code
      },
      output: {
        comments: false, // 🔹 Removes unnecessary comments
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined, // 🔹 Fixes possible issues with code splitting
      },
    },
  },
});
