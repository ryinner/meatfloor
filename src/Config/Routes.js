import BookingRoutes from "@/Containers/Booking/UI/Routes/booking.routes";
import IndexRoutes from "@/Containers/Index/UI/Routes/index.routes";
import IndexViewVue from "@/Containers/Index/UI/View/Index/IndexView.vue";
import PagesRoutes from '@/Containers/Pages/UI/Routes/pages.routes';

const routes = [].concat(
    IndexRoutes,
    BookingRoutes,
    PagesRoutes,
    [{ path: '/:pathMatch(.*)*', name: 'NotFound', component: IndexViewVue }],
);

export default routes;