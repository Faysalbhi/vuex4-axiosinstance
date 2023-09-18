import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosInstance from './axios'
import vueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vueAxios, axiosInstance)

app.mount('#app')
