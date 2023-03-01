import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

library.add(faAngleLeft)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
