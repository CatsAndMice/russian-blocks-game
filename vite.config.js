import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  mode:"development",
  plugins: [VueJsx(), vue()]
})
