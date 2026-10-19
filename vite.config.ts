import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// The Base44 plugin that used to sit here did four things we no longer want:
// a hot-reload notifier, a navigation notifier, an analytics tracker and a
// visual-edit agent, all of which phoned home to Base44 on every page view.
// A plain Vite + React build has no such dependency.
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Replaces the alias the Base44 plugin used to inject. Without it every
    // `@/components/...` import in the project fails to resolve.
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
