import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Router
import router from "./router/router";
// Pinia
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
