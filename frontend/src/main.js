import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/index'

// FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHospital,faAmbulance,faHeart,faAirFreshener, faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faHospital,faAmbulance,faHeart,faAirFreshener, faTimesCircle, faCheckCircle);

axios.defaults.baseURL = 'https://ruvid-api.fronthings.com:30000/';

const app = createApp(App).use(router)

app.component("font-awesome-icon", FontAwesomeIcon)

app.config.globalProperties.axios=axios

app.mount('#app')