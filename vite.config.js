import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  commonjsOptions: {
    esmExternals: true
  },
})

build: {

  /** If you set esmExternals to true, this plugins assumes that 
    all external dependencies are ES modules */


}