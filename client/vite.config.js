import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // Include any Sass options you want here
      },
    },
  },
  // server: {
  //   proxy: {
  //     "/": {
  //       target: "http://localhost:8080",
  //     },
  //   },
  // },
  define: {
    global: {},
  },
});
