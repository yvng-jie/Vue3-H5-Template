import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.less'
import 'amfe-flexible'

import i18n from './i18n'
import router from './router'

const app = createApp(App)
app.use(i18n)
app.use(router)

app.mount('#app')
