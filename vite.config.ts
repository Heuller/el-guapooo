import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/el-guapooo/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'images/**'],
      manifest: {
        name: 'El Guapo - Caderno de Receitas',
        short_name: 'El Guapo',
        description: 'Caderno de Receitas Artesanais El Guapo',
        theme_color: '#F4F1ED',
        background_color: '#F4F1ED',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
