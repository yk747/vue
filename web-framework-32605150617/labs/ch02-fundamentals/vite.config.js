import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server:{
    open:true  // 新增这一行，启动自动打开浏览器
  }
})
