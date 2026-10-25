import { defineConfig } from 'vite';
// base is relative so the build works under https://<user>.github.io/<repo>/
export default defineConfig({
  base: './',
  build: { target: 'es2022', chunkSizeWarningLimit: 2000 },
  // NO_HMR=1 keeps long scripted browser tests from being reloaded when sources change
  server: { host: true, hmr: process.env.NO_HMR ? false : undefined },
});
