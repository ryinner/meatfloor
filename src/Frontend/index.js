import { createApp, h } from "vue";
import App from "./App.vue";
import pinia from "./Plugins/Pinia";
import router from "./Plugins/Router";
import { VScroll } from "./Shared/Directives/VScroll.directive";

const app = createApp({
    // eslint-disable-next-line vue/component-api-style
    render: () => h(App)
});
//plugins
app.use(router);
app.use(pinia);
//directives
app.directive("scroll", VScroll);

app.mount("body");