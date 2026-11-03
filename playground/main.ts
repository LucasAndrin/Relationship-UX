
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRelationshipVux } from '@lib/plugin';

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())


app.use(createRelationshipVux());

app.mount('#app');
