import './assets/style/general.scss'

import { createApp } from 'vue'
import {router} from './route';
import App from './App.vue'

createApp(App).use(router).mount('#app')
