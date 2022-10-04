import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    proxy: {
      // with options
      "/api": {
        target: "https://coffeechatnow-api.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
      "/event": {
        target: "https://coffeechatnow-api.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
      "/login": {
        target: "https://coffeechatnow-api.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
      "/signup": {
        target: "https://coffeechatnow-api.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
      "/profile": {
        target: "https://coffeechatnow-api.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
      "/sendEmail": {
        target: "https://coffeechatnow-api.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
      "/bookEvent": {
        target: "https://coffeechatnow-api.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
