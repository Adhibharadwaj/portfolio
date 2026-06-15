import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path must match the GitHub repo name for project Pages sites.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
