import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@service' : path.resolve(__dirname, 'src/service')
    },
  },
})
