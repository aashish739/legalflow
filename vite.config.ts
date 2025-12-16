import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Function to resolve paths relative to the current working directory
const resolvePath = (...segments: string[]) => path.resolve(process.cwd(), ...segments);

export default defineConfig({
  plugins: [
    react(),
    // Replit plugins removed to prevent "Top-level await" and runtime errors
  ],
  resolve: {
    alias: {
      // Ensure these point to the correct folders
      "@": resolvePath("client", "src"),
      "@shared": resolvePath("shared"),
      "@assets": resolvePath("attached_assets"),
    },
  },
  // 'root' is removed so it defaults to the project root (where package.json and your moved index.html are)
  build: {
    outDir: "dist", 
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
    },
  },
});