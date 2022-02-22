// this reference path clears linting-errors in vscode
// / <reference path="../@types/shims-vue.d.ts" />

import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import "./styles/main.scss";

const piniaStore = createPinia()
  .use(piniaPersist)

const app = createApp(App)
  .use(router)
  .use(piniaStore)

app.mount("#app")
