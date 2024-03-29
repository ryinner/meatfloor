import ProfileRoutes from '@//Containers/Profile/UI/Routes/profile.routes';
import BookingRoutes from "@/Containers/Booking/UI/Routes/booking.routes";
import ErrorsRoutes from '@/Containers/Errors/UI/Routes/errors.routes';
import IndexRoutes from "@/Containers/Index/UI/Routes/index.routes";
import MenuRoutes from '@/Containers/Menu/UI/Routes/menu.routes';
import PagesRoutes from '@/Containers/Pages/UI/Routes/pages.routes';

const routes = [].concat(
    IndexRoutes,
    BookingRoutes,
    PagesRoutes,
    MenuRoutes,
    ProfileRoutes,
    ErrorsRoutes,
);

export default routes;