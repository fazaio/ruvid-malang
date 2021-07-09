import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/index'


axios.defaults.baseURL = 'https://ruvid-api.fronthings.com:30000/';

// createApp(App).use(axios).use(router).mount('#app')
const app = createApp(App).use(router)

app.config.globalProperties.axios=axios

app.mount('#app')

