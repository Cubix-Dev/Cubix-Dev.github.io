import { createApp } from "vue";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import persistentState from 'vue-persistent-state'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import $bus from './utils/events'
import router from './routes'


let initialState = {
    theme: 'light',
  }

const app = createApp(App)

app.config.globalProperties.$bus = $bus

app.use(router,VueSweetalert2,persistentState, initialState)

app.mount("#app")