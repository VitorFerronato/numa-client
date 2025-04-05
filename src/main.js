// main.js
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./configs/vuetify";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";
import "./main.scss";
const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount("#app");
