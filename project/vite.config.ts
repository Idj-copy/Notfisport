import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

export default defineConfig({
 plugins: [
   react(),
   VitePWA({
     registerType: 'autoUpdate',
     includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', '_redirects'],
     manifest: {
       name: 'Sportify Now',
       short_name: 'Sportify',
       description: 'Your Sports App',
       theme_color: '#ffffff',
       start_url: '/',
       display: 'standalone',
       icons: [
         {
           src: 'pwa-192x192.png',
           sizes: '192x192',
           type: 'image/png'
         },
         {
           src: 'pwa-512x512.png',
           sizes: '512x512',
           type: 'image/png'
         }
       ]
     }
   })
 ],
 base: '/',
 resolve: {
   alias: {
     '@': resolve(__dirname, './src')
   }
 },
 build: {
   outDir: 'dist',
   sourcemap: true,
   rollupOptions: {
     input: {
       main: resolve(__dirname, './src/main.tsx')
     }
   },
   minify: 'terser',
   terserOptions: {
     compress: {
       drop_console: true,
       drop_debugger: true
     }
   }
 }
})
