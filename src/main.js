import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios';
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC2RhOYwjZQcDwvTfQ4KtOWkrSPHJ6k_Mg',
    },
    autobindAllEvents: true,
});
app.use(router).mount('#app');

