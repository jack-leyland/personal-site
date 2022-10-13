import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import VueGtag from "vue-gtag";

const app = createApp(App);
app.use(router);
app.use(VueGtag, {
  config: {
    id: "G-DXNWEHK7W0",
    params: {
      anonymize_ip: true,
    },
  },
}, router);
app.mount("#app");
