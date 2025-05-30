import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './style.css'
import { VMoney } from 'v-money3'


createApp(App).use(router).directive('money', VMoney).mount('#app');


