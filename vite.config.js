import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import updatePhotos from "./updatePhotos.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [updatePhotos(), vue()],
});
