import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const ignoreBuildErrors = process.env.VITE_IGNORE_BUILD_ERRORS === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Other build configurations...

    // Conditionally ignore build errors
    rollupOptions: {
      onwarn: (warning, rollupWarn) => {
        if (ignoreBuildErrors) {
          return;
        }
        rollupWarn(warning);
      },
    },
  },
});