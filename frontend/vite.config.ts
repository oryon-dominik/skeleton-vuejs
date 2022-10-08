import vue from '@vitejs/plugin-vue'
import path from "path"

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "tailwind.config.js": path.resolve(__dirname, "tailwind.config.js")
    }
  },
  optimizeDeps: {
    include: ["tailwind.config.js"]
  }
})
