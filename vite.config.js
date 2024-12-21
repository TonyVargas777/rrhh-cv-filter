import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from the root project folder
        'C:/Users/TONAC/Desktop/Web Dev/Udemy/REACT/rrhh-cv-filter',
        'C:/Users/TONAC/Desktop/Web Dev/Udemy/REACT/rrhh-cv-filter/node_modules/vite/dist/client'
      ]
    }
  }
});
