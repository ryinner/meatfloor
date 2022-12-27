import BookingRoutes from "@//Containers/Booking/UI/Routes/booking.routes";
import IndexRoutes from "@/Containers/Index/UI/Routes/index.routes";
import IndexViewVue from "@/Containers/Index/UI/View/Index/IndexView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [].concat(
    IndexRoutes,
    BookingRoutes,
    [{ path: '/:pathMatch(.*)*', name: 'NotFound', component: IndexViewVue }],
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