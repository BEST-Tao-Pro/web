import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
       
    port: 8080,
    // 是否开启 https
    host: '0.0.0.0'
  },
  devServer: {
  
    proxy: {
        "/api": {
            // http://www.sirfang.com/build/ajax_get_list这是完整路径,将com/后的路径重写路径为api
            // 1 目标路径 这里相当于公共的地址
            target: "http://localhost:8081",
            port: 8081, // 1.1端口号 默认的可以不配
            open: true, // 1.2运行项目自启
            //2 允许跨域
            changOrigin: true,
            // 是否代理websocket
             ws: true, 
            //3 重写路径
            pathRewrite: {
                '^/api': ''
            }
        }
    }}
})
