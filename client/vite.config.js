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
        // target: "https://coffeechatnow-api.onrender.com/",
        // target: "http://localhost:2121/",
        target: "http://localhost:2121/",
        changeOrigin: true,
        secure: false,
      },
      "/event": {
        target: "http://localhost:2121/",
        changeOrigin: true,
        secure: false,
      },
      // "/login": " http://localhost:2121/login",
      "/login": {
        target: "http://localhost:2121/",
        changeOrigin: true,
        secure: false,
      },
      "/signup": {
        target: "http://localhost:2121/",
        changeOrigin: true,
        secure: false,
      },
      "/profile": {
        target: "http://localhost:5173/",
        changeOrigin: true,
        secure: false,
      },
      "/sendEmail": {
        target: "http://localhost:2121/",
        changeOrigin: true,
        secure: false,
      },
      "/bookEvent": {
        target: "http://localhost:2121/",
        changeOrigin: true,
        secure: false,
      },
      "/loginForm": {
        target: "http://localhost:5173/",
        changeOrigin: true,
        secure: false,
      },
      "/signupForm": {
        target: "http://localhost:5173/",
        changeOrigin: true,
        secure: false,
      },
      "/profileForm": {
        target: "http://localhost:5173/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
