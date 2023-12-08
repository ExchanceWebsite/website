import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  commonjsOptions: {
    esmExternals: true
  },
  server: {
    port: 3000,
    host: true  // definir a porta para 8080
  }
})

build: {

  /** If you set esmExternals to true, this plugins assumes that 
    all external dependencies are ES modules */


}