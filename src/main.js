import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { router } from "./router.js";
import { store } from "./store/store.js";
import { clickOutsideDirective } from "./directives.js";

import "./assets/styles/main.scss";
import App from "./App.vue";

const app = createApp(App);
app.directive("clickOutsideDirective", clickOutsideDirective);
app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount("#app");
