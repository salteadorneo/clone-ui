import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  site: 'https://salteadorneo.github.io',
  base: '/clone-ui',
  plugins: [react()]
})
