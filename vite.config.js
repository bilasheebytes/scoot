import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        careers: resolve(__dirname, "careers.html"),
        location: resolve(__dirname, "location.html"),
      },
    },
  },
});
