import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Añade la ruta completa de tu proyecto aquí
        "C:/Users/Raquel/Desktop/Web Dev/UDEMY/REACT/rrhh-cv-filter",
      ],
    },
  },
});
