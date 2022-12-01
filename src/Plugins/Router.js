import { createRouter, createWebHistory } from "vue-router";
import IndexRoutes from "@/Containers/Index/UI/Routes/IndexRoutes";

const routes = [].concat(
    IndexRoutes
);

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
    }
});

export default router;