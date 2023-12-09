import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"


// Ignore build errors
process.env.VITE_IGNORE_BUILD_ERRORS = 'true';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})