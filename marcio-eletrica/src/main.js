import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initScheduler } from './services/scheduler'

import './assets/base.css'
import './assets/main.css'

// Inicializa o agendador de chamadas ao Supabase
initScheduler()

createApp(App).use(router).mount('#app')
