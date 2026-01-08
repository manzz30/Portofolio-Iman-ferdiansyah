import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

export default defineConfig({
  plugins: [react()],
  base: '/', // ⚠️ PENTING! Jangan pakai './'
})
=======
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/portofolio/",
  plugins: [react(), tailwindcss()],
})
>>>>>>> d137f9b0ba6b098a591e0b4eee3448ac264f84ca
