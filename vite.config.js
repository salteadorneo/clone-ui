import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: 'https://salteadorneo.github.io/',
  plugins: [react()]
})
