import BookingRoutes from "@/Containers/Booking/UI/Routes/booking.routes";
import ErrorsRoutes from '@/Containers/Errors/UI/Routes/errors.routes';
import IndexRoutes from "@/Containers/Index/UI/Routes/index.routes";
import PagesRoutes from '@/Containers/Pages/UI/Routes/pages.routes';

const routes = [].concat(
    IndexRoutes,
    BookingRoutes,
    PagesRoutes,
    ErrorsRoutes,
);

export default routes;