import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" produces relative asset paths so the build works whether you
// upload it to the domain root (public_html) or a subfolder on Hostinger.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
