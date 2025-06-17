import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  server: {
    port: 3000,
    open: true,
    hmr: true,
  },
  preview: {
    port: 5000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      }
    }
  }
})