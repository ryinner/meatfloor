import { createApp, h } from "vue";
import App from "./App";
import router from "./Plugins/Router";
import { VScroll } from "./Shared/Directives/VScroll.directive";

const app = createApp({
    render: () => h(App)
});
app.use(router);
app.directive("scroll", VScroll);
app.mount("body");