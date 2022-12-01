import { createApp, h } from "vue";
import App from "./App";
import router from "./Plugins/Router";

const app = createApp({
    render: () => h(App)
});
app.use(router);
app.mount("#app");