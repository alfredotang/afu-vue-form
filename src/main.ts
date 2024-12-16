import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import { ROUTES } from './constants/router'
import './style.css'

const router = createRouter({
  history: createMemoryHistory(),
  routes: ROUTES,
})

const app = createApp(App)
app
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount('#app')
