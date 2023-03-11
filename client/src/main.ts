import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

import './assets/main.css'
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button';

const app = createApp(App)

app.use(PrimeVue)
app.component('Button', Button)

app.use(createPinia())
app.use(router)

app.mount('#app')
