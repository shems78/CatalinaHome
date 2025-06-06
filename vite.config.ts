import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Get directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Async plugin loading
async function getPlugins() {
  const plugins = [
    react(),
    runtimeErrorOverlay()
  ];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const cartographer = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer.default());
  }

  return plugins;
}

export default defineConfig({
  plugins: await getPlugins(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html")
    }
  },
  server: {
    port: 3000,
    open: true
  }
});