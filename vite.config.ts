import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/mindbox/',
    //  test: {
    //    globals: true,
    //    environment: 'jsdom',
    //  },
   });
