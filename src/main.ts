import theme from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { ROUTES } from './router'
import 'primeicons/primeicons.css'
import './style.css'
import './assets/font'

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
})

const app = createApp(App)
app
  .use(router)
  .use(PrimeVue, {
    // unstyle: true,
    theme: {
      preset: theme,
      options: {
        darkModeSelector: false,
      },
    },
  })
  .mount('#app')
