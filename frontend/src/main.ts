// this reference path clears linting-errors in vscode
// / <reference path="../@types/shims-vue.d.ts" />

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import piniaPersist from 'pinia-plugin-persist'

import "./styles/main.scss";

const piniaStore = createPinia()
  .use(piniaPersist)

const app = createApp(App)
.use(piniaStore)
.use(router)

app.mount("#app")
