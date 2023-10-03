import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
// import axios from 'axios'
import service from './service'

const app = createApp(App)
app
  .use(ElementPlus)
  .use(router)
  .config.globalProperties.$service= service

app.mount('#app')



  // 挂载全局对象axios

// app.config.globalProperties.$http = axios
// axios.defaults.baseURL = '/api'
