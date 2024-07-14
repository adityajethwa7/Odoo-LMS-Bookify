import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

export default defineConfig({
  plugins: [react(), postcss({ plugins: [autoprefixer] })],
  // ... other Vite configurations
});
