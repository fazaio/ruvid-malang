import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/index'


// createApp(App).use(axios).use(router).mount('#app')
const app = createApp(App).use(router)

app.config.globalProperties.axios=axios

app.mount('#app')

